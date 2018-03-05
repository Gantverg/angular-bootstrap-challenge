import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { AppBootstrapModule } from './modules/bootstrap/bootstrap.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DataTableModule } from 'angular5-data-table';
import { TableDataService } from './table-view/table-data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule
  ],
  providers: [
    TableDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
