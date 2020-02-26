import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  
canciones:any[]=[];
loding:boolean;
error:boolean;
err:string;


  constructor(private spo:SpotifyService) { 
    this.loding= true;
    this.error=false;


    this.spo.getNewReleases().subscribe((spo:any)=>{
      console.log(spo);
      this.canciones=spo
    ;this.loding=false;
  console.log(spo)},
    
    (errors) => {
      this.error=true;
      this.loding= false;
      this.err=errors.error.error.message;
    });


}}
