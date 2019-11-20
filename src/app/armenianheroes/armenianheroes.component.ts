import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-armenianheroes',
  templateUrl: './armenianheroes.component.html',
  styleUrls: ['./armenianheroes.component.scss']
})
export class ArmenianheroesComponent implements OnInit {
  @Input() singleHero;
  openEditInput = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  onDeleteHero(id: number) {
    this.heroesService.deleteHero(id);
  }

  onOpenForm() {
    this.openEditInput = !this.openEditInput;
  }
}
