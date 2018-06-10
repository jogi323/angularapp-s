import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() Data: object;
  private data: LabelFormData;
  private dummyData: object;
  @Output() shareInfo = new EventEmitter<any>()
  private labels: any[] = [];
  constructor() {
    this.data = {
      label: '',
      value:''
    };
    console.log(this.Data);
    this.dummyData = {
      name:"PC333"
    }
   }

  ngOnInit() {
    console.log(this.data);
    this.shareInfo.emit(this.dummyData);
  }
  addLabel(data){
    let obj = {
      label: this.data.label,
      value: this.data.value,
    }
    this.labels.push(obj);
    console.log(this.labels);
  }

  testViewChild() {
    console.log("this method was triggered.");
  };
  shareData() {

  }
}

export interface LabelFormData {
  label: String;
  value: String;
}
