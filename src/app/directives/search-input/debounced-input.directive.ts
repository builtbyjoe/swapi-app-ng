import { Directive, OnDestroy, Input, Output, EventEmitter, HostListener } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil, debounceTime, distinctUntilChanged, tap } from "rxjs/operators";

@Directive({
  selector: 'input[debouncedInput]'
})
export class DebouncedInputDirective implements OnDestroy {
  @Input()
  public debounceTime: number;

  @Output()
  public onInputEvent: EventEmitter<any>;

  protected emitEvent$: Subject<any>;
  protected subscription$: Subject<void>;

  constructor() {
    this.debounceTime = 500;
    this.onInputEvent = new EventEmitter<any>();
    this.emitEvent$ = new Subject<any>();
    this.subscription$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.emitEvent$
      .pipe(
        takeUntil(this.subscription$),
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        tap((value) => this.emitChange(value))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  public emitChange(value: string): void {
    this.onInputEvent.emit(value);
  }

  @HostListener('keyup', ['$event'])
  @HostListener('search', ['$event'])
  public onEvent(event: Event): void {
    event.preventDefault();
    this.emitEvent$.next((event.target as HTMLInputElement).value);
  }
}