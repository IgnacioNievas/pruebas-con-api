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
    'Authorization':'Bearer BQDMC9LtL_7aaeM3ds6L1RProuVj9E8W6HLveTxWMUU_2ZcorCmsdJ8n32Xv_FGzoZkqnHg7j93QEDFYTfk'
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
