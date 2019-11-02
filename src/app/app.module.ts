import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import {FormGroup} from '@angular/forms';
import { DetailMemberComponent } from './detail-member/detail-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';



@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    CreateMemberComponent,
    DetailMemberComponent,
    EditMemberComponent,
    DeleteMemberComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
