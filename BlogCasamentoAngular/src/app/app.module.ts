import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RouterOutlet } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
