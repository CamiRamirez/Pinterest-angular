import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerphotoComponent } from './containerphoto/containerphoto.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerphotoComponent,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
