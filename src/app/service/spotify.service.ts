import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{ map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  constructor(private http:HttpClient) { }
 getQuery(query:string){
const url =` https://api.spotify.com/v1/${query}`
  const headers = new HttpHeaders({
    // el token expiran cada hora para probar la app tendrian que generar uno nuevo 
    
    'Authorization':'Bearer BQC2m2j0APPml3wAeEKyi4Sji0gBileG9jNsIjGuOSgnCy0aos_GpCvIDUd2OmwUm_kOPxHJ5ps8HcJ613I'
  });

  return this.http.get(url , {headers});

 }  
  getNewReleases() {
    
   return  this.getQuery('browse/new-releases?limit=20').pipe(map(data=> data['albums'].items));
  }
  getArtists(termino:string) {
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQDFJ-XLVjgdQZWk0DKmv8So7sCM3iEQHqBwGeq3pcWMK9BWoTonmyznfaRsu0_W5CmBArOYihN6RTmuqYk'
    // });
  //  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15&offset=2`, {headers}).pipe(map(data=> data['artists'].items));
  return this.getQuery(`search?q=${termino}&type=artist&limit=50&offset=2`).pipe(map(data=> data['artists'].items));
  } 
  getArtist(id:string) {
    
    return  this.getQuery(`artists/${id}`);
   }

   getTopTracks(id:string) {
    
    return  this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(((data:any)=> data.tracks)));
   }
  
}
