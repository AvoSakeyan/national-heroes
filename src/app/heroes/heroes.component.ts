import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {DataInjectService} from '../data-inject.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [DataInjectService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  dataFromService;

  constructor( public heroService: HeroService,
               private dataInject: DataInjectService) { }



  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getTheData() {
    this.dataInject.getData();
  }

  updateData() {
    console.log(this.dataInject)
    this.dataInject.updateData(this.dataFromService);
  }
}
