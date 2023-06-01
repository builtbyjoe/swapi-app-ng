import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { TableComponent } from './components/table/table.component';
import { DebouncedInputDirective } from './directives/search-input/debounced-input.directive';
import { SearchComponent } from './components/search/search.component';
import { PlanetNameComponent } from './components/planet-name/planet-name.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TableComponent,
    DebouncedInputDirective,
    SearchComponent,
    PlanetNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
