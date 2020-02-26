import { Component} from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
artista:any[]=[];
loding:boolean;

  constructor(private spoti:SpotifyService) { }

 buscar(termino:string){
   this.loding= true;
 
this.spoti.getArtists(termino).subscribe((spoti:any)=>{
console.log(spoti);
this.artista = spoti; 
this.loding=false});
 }
 }
