import { Component, OnInit } from '@angular/core';
import {DataInjectService} from '../../data-inject.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
  providers: [DataInjectService],
})
export class Component2Component implements OnInit {
  updateData: any;

  constructor( private dataInject: DataInjectService) { }

  ngOnInit() {
  }

  update() {
    console.log(this.dataInject)
    this.dataInject.updateData(this.updateData);
  }

  getData() {
    this.dataInject.getData();
  }

}
