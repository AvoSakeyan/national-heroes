import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
// @ts-ignore
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-armenianheroes',
  templateUrl: './armenianheroes.component.html',
  styleUrls: ['./armenianheroes.component.scss']
})
export class ArmenianheroesComponent {
  @Input() singleHero;
  @Output() deleteHero: EventEmitter<number> = new EventEmitter<number>()


  constructor( private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    // config.keyboard = false;
  }


  //===== Delete Button ====>
  deleteWhenClicking() {
      this.deleteHero.emit(this.singleHero.id);
  }
  open(component ) {
    this.modalService.open(component);
  }

}
