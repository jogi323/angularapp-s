import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;
  constructor(private http: HttpClient,private api: ApiService){
    this.api.shareDataBWComponents = [{name:"jogi"},{name:"pc"}];
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      console.log(res);
      this.data = []
      // this.data = res;
    });
  };
}
