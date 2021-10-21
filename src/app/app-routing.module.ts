import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent },
  {path: 'libone', loadChildren: () => import('@anandmohankp/my-lib').then(module =>module.MyLibModule)},
  {path: 'libtwo', loadChildren: () => import('@anandmohankp/my-libtwo').then(module =>module.MyLibtwoModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
