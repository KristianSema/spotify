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
        'Bearer BQB-7REVv1u5gJ5F-pJxD35henMXKjdieKGecwH7h0PDuCSlXH13v6H9TpzEwborCnN9xx9qnjMt0-rUw8CXeldnHPnnBfbQWaJvtozZfnmbj5HtP204WHqtr_FKmza9ZQxwSWPUtTvc39cHeoMc3vKSjlpHAmk'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
