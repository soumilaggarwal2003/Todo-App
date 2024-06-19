import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosComponent } from './MyComponents/todos/todos.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AboutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
