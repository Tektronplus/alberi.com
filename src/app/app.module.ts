import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './feature/home/home.component';
import { HeroImageComponent } from './feature/home/hero-image/hero-image.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		NavbarComponent,
  HomeComponent,
  HeroImageComponent,
	],
	imports: [BrowserModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
