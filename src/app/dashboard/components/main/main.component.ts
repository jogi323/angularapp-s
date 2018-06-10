import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private data: LabelFormData;
  private labels: any[] = [];
  constructor() {
    this.data = {
      label: '',
      value:''
    }
   }

  ngOnInit() {
  }
  addLabel(data){
    let obj = {
      label: this.data.label,
      value: this.data.value,
    }
    this.labels.push(obj);
    console.log(this.labels);
  }
}

export interface LabelFormData {
  label: String;
  value: String;
}
