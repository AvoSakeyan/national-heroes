import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(component ) {
    this.modalService.open(component);
  }
}
