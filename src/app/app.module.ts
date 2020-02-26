//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LodingComponent } from './components/shared/loding/loding.component';

//Rutas
import { App_Routes } from './app.routes';
//pipe
import { NoimagePipe } from './pipes/noimage.pipe';
import {  DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LodingComponent,
    DomseguroPipe
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(App_Routes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
