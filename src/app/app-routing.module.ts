import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropsComponent } from './props/props.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: PropsComponent,  pathMatch: 'full'},
    { path: 'about', component: AboutComponent,  pathMatch: 'full'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }