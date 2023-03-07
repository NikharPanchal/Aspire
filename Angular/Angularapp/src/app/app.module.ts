import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './user/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from './user/register/register.module';
import { HttpClientModule } from '@angular/common/http'
import { LoginserviceService } from './user/service/loginservice.service';
import { ServiceModule } from './service/service.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ContactModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterModule,
    HttpClientModule,
    ServiceModule,
    AdminDashboardModule,
    UserDashboardModule,
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
