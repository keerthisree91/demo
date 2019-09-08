import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { BsDatepickerModule} from 'ngx-bootstrap';

import { MainModule } from '../main.module';

import { SharedModule } from './shared/shared.module';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    MainModule,
    SharedModule,

  ],
  providers: [AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
