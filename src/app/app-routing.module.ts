import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpageComponent } from './components/addpage/addpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DeletepageComponent } from './components/deletepage/deletepage.component';

const routes: Routes = [
  { path: 'add', component: AddpageComponent },
  { path: 'delete', component: DeletepageComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
