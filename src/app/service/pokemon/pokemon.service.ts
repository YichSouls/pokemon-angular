import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonListApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(

  ) { }

  getPokemonList(): Promise<void | Pokemon[]> {
    var pokemonList: Pokemon[] = [];

    return(fetch(this.pokemonListApiUrl).then(response => {
      return response.json();
    }).then(data => {
      data.results.forEach((result: any) => {
        pokemonList.push({
          id: result.url.split('/')[6],
          name: result.name,
          url: result.url
        });
      });
      return pokemonList;
    }));
  }
}
