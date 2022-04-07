import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
// import {TooltipModule} from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hcard1Component } from './hcard1/hcard1.component';
import { Hcard2Component } from './hcard2/hcard2.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Hcard1Component,
    Hcard2Component,
    CourseCardComponent,
    FooterComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
