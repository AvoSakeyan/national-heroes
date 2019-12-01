import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
    name = new FormControl('');
    // nameGroup = new FormGroup({
    //   firstname: new FormControl(),
    //   lastname: new FormControl(),
    // })


  constructor(private fg: FormBuilder) { }

  nameGroup = this.fg.group({
    firstname: ['', Validators.required],
    lastname: [''],
  })

  ngOnInit() {
    console.log(this.nameGroup);
  }

  updateValue() {
    this.name.setValue('Avo Agaronich');
  }

  submitData() {
    console.warn(this.nameGroup.value);
  }
}
