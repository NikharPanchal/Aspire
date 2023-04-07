import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule, ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule
  ]
})
export class LoginModule { }
