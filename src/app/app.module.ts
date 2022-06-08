import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatTableModule,MatInputModule],
  declarations: [ AppComponent, HelloComponent,SearchFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
