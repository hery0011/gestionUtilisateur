import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheComponent } from './affiche/affiche.component';
import { InsertComponent } from './insert/insert.component';
import { EditComponent } from './edit/edit.component';

import { RouterModule, Routes } from '@angular/router';

/*service no mila anito*/
import { HttpClientModule } from '@angular/common/http';


export const routes:Routes = [
  { path:'', component:AfficheComponent, pathMatch:'full'},
  { path:'affiche', component:AfficheComponent},
  { path:'insert', component:InsertComponent},
  { path:'edit/:id', component:EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AfficheComponent,
    InsertComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
