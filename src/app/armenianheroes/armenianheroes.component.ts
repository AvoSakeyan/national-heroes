import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-armenianheroes',
  templateUrl: './armenianheroes.component.html',
  styleUrls: ['./armenianheroes.component.scss']
})
export class ArmenianheroesComponent implements OnInit {
  @Input() singleHero;
  @Output() onDeleteHero: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
  }

  delHero(id){
      this.onDeleteHero.emit(id);
  }

}
