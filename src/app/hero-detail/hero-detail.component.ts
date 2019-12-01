import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {DataInjectService} from '../data-inject.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  providers: [DataInjectService]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  updateData;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private dataInject: DataInjectService
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  update() {
    console.log(this.dataInject)
    this.dataInject.updateData(this.updateData);
  }

  getData() {
    this.dataInject.getData();
  }
}
