import { Component, OnInit } from '@angular/core';
import {DataInjectService} from '../../../data-inject.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [DataInjectService]
})
export class ChildComponent implements OnInit {
  private dataFromService;

  constructor(private dataInject: DataInjectService) { }

  ngOnInit() {
  }
  getTheDataChild() {
    this.dataInject.getData();
  }

  updateDataChild() {
    console.log(this.dataInject)
    this.dataInject.updateData(this.dataFromService);
  }

}
