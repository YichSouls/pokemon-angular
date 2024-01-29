import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
