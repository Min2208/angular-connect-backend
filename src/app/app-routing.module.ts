import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member/member.component';
import {CreateMemberComponent} from './create-member/create-member.component';
import {DetailMemberComponent} from './detail-member/detail-member.component';
import {EditMemberComponent} from './edit-member/edit-member.component';
import {DeleteMemberComponent} from './delete-member/delete-member.component';


const routes: Routes = [{
  path: 'home',
  component: MemberComponent
},
  {
    path: 'add',
    component: CreateMemberComponent
  },
  {
    path: 'home/:id',
    component: DetailMemberComponent
  },
  {
    path: 'home/edit/:id',
    component: EditMemberComponent
  },
  {
    path: 'home/delete/:id',
    component: DeleteMemberComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
