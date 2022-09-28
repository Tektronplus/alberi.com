import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { HeroImageComponent } from './layout/header/hero-image/hero-image.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent, NavbarComponent, HeroImageComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
