import { Component, OnInit , ViewChild} from '@angular/core';
import { MainComponent } from "./components/main/main.component";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dummyData: any;
  jokes: any[] = [];
  @ViewChild(MainComponent) private main : MainComponent;
  constructor(private http: HttpClient) { 
    this.dummyData = {
      name: "jogi",
    }
  }

  ngOnInit() {
    this.main.testViewChild();
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{console.log(res);})
  }


  addJoke() {
    this.jokes.unshift({content:"What did the cheese say when it looked in the mirror", content2:"Hello-me (Halloumi)"});
  }

  deleteJoke() {
    this.jokes = []
  };
  newInfo(data){
    console.log(data)
  }

}
