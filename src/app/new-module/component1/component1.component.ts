import { Component, OnInit } from '@angular/core';
import {DataInjectService} from '../../data-inject.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  providers: [DataInjectService],
})
export class Component1Component implements OnInit {
  // private updateData;
  dataFromService: any;

  constructor(private dataInject: DataInjectService) { }

  ngOnInit() {
  }
  getTheData() {
    this.dataInject.getData();
  }

  updateData() {
    console.log(this.dataInject)
    this.dataInject.updateData(this.dataFromService);
  }

}
