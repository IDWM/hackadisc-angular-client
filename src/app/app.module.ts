import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { AddMemberComponent } from './_pages/add-member/add-member.component';
import { TextInputComponent } from './_components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditMemberComponent } from './_pages/edit-member/edit-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberListComponent,
    AddMemberComponent,
    TextInputComponent,
    EditMemberComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
