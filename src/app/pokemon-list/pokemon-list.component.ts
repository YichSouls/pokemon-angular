import { PokemonService } from './../service/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonList();
  }

  async getPokemonList() {
    console.log('PokemonListComponent initialized');
    this.pokemonService.getPokemonList().then(pokemons => {
      if (pokemons){
        console.log(pokemons);
        this.pokemons = pokemons;
      }
    });
  }
}
