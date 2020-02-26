import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
artist:any ={};
toptrack:any[]=[];
loding:boolean;


  constructor(private ro:ActivatedRoute , private art:SpotifyService) { 
this.loding= true;
    this.ro.params.subscribe(arg =>{
       this.getArtista(arg['id']);
       this.getTopTrack(arg['id']);
   }); }

  getArtista(id:string){
    this.loding=true;
    this.art.getArtist(id).subscribe(arts =>{this.artist =arts;
    this.loding=false});
  }
  getTopTrack(id:string){
    this.art.getTopTracks(id).subscribe(top =>{console.log(top);
      this.toptrack=top;
    });
  }
}
