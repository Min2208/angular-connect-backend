import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member/member.component';
import {CreateMemberComponent} from './create-member/create-member.component';


const routes: Routes = [{
  path: 'home',
  component: MemberComponent
},
  {
    path: 'add',
    component: CreateMemberComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
