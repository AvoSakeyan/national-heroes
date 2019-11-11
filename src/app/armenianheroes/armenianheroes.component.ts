import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-armenianheroes',
  templateUrl: './armenianheroes.component.html',
  styleUrls: ['./armenianheroes.component.scss']
})
export class ArmenianheroesComponent implements OnInit {
  @Input() singleHero;

  constructor() { }
  ngOnInit() {
  }

}
