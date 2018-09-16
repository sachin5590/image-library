import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImagesUploadModule } from 'ngxImagesUpload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImagesUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
