import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './component/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentService } from './services/apartment.service';
import { BoldPipe } from './pipe/bold.pipe';
import { UppercasePipe } from './pipe2/uppercase.pipe';
import { RainbowPipe } from './pipe3/rainbow.pipe';
import { NavColorDirective } from './directive/nav-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    BoldPipe,
    UppercasePipe,
    RainbowPipe,
    NavColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng5SliderModule,
    ReactiveFormsModule
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
