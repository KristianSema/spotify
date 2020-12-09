import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB9gC0YxVyZ0R7AF8oM_Gc8ekab8aI_MHJWdZMSyfi0up_glqK5QTaAsTL4hb2tu9e2Amct4WE38ymQjJQmy1DFE7kc-OZsq2ZWqmq6_VdQfXhdimthVgYWXPs3W7J09myHo0dlLT5Jcm6G5V80SCFxJ6hHznc'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
