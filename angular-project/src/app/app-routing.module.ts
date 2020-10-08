import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { ManagePostComponent } from './views/manage-post/manage-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'create-post',
    component: ManagePostComponent,
    data: {
      isInCreateMode: true,
    },
  },
  {
    path: 'edit-post/:id',
    component: ManagePostComponent,
    data: {
      isInCreateMode: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
