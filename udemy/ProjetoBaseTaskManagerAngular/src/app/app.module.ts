import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';


const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks', component: TasksComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
