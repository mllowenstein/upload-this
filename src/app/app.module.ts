import { NgModule } from '@angular/core';
import { UploaderModule } from './uploader/uploader.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UploaderModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
