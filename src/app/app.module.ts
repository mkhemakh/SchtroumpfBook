import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SchtroumpfsComponent } from './components/schtroumpfs/schtroumpfs.component';
import { SchtroumpfItemComponent } from './components/schtroumpf-item/schtroumpf-item.component';
import { AddSchtroumpfComponent } from './components/add-schtroumpf/add-schtroumpf.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
//import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: SchtroumpfsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SchtroumpfsComponent,
    SchtroumpfItemComponent,
    AddSchtroumpfComponent,
    AboutComponent,
    FooterComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

