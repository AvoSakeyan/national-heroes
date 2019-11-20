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

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroesList();
    this.heroesService.heroListChanged
      .subscribe((ingredients) => {
        this.heroes = ingredients;
      });
  }
}
