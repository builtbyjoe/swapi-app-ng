import { Component } from '@angular/core';
import { Person } from '../../services/people/people.model';
import { PeopleService } from 'src/app/services/people/people.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent {
  isLoading = true;
  people: Person[] = [];
  errorMessage: string | null = null;
  nextUrl: string | null = null;
  previousUrl: string | null = null;
  searchTerm = '';
  
  constructor(private peopleService: PeopleService) {}
  
  ngOnInit() {
    this.getPeople(null, '');
  }

  private getPeople(url: string | null, searchTerm: string) {
    this.isLoading = true;
    this.errorMessage = null;
    this.peopleService
      .getPeople(url, searchTerm)
      .subscribe({
        next: (response) => {
          this.people = [...response.results];
          this.nextUrl = response.next;
          this.previousUrl = response.previous;
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        },
        complete: () => {
          this.errorMessage = null;
          this.isLoading = false;
        }
      });
  }

  handleNextPage() {
    this.getPeople(this.nextUrl, '');
  }

  handlePreviousPage() {
    this.getPeople(this.previousUrl, '');
  }

  onSearch(value: string) {
    this.getPeople(null, value);
  }
}
