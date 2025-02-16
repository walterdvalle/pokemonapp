import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = '';
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(nome: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.baseUrl}/${nome}`);
  }
}
