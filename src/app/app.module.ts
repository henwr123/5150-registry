import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AmpSettingsComponent } from './amp-settings/amp-settings.component';
import { AmpDetailComponent } from './amp-detail/amp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AmpSettingsComponent,
    AmpDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
