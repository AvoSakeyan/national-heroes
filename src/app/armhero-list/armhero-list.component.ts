import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-armhero-list',
  templateUrl: './armhero-list.component.html',
  styleUrls: ['./armhero-list.component.scss']
})
export class ArmheroListComponent implements OnInit {
  heroes: Hero[];
  openAddForm: boolean;
  newHero: Hero = {
    id: 0,
    name: '',
    gettingDate: 0,
    birthDay: 0,
    placeofbirth: '',
    deathDay: 0,
    forWhat: ''
  };

  constructor(private heroesService: HeroesService) {
  }

  onOpenForm() {
    this.openAddForm = !this.openAddForm;
  }

  onAddHero() {
    this.heroesService.addHero(this.newHero);
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroesList();
    this.heroesService.heroListChanged
      .subscribe((heroes) => {
        this.heroes = heroes;
      });
  }
}
