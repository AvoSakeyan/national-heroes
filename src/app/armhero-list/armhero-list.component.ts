import {Component, OnInit} from '@angular/core';
import {MainDataService} from '../Service/main-data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-armhero-list',
  templateUrl: './armhero-list.component.html',
  styleUrls: ['./armhero-list.component.scss']
})
export class ArmheroListComponent implements OnInit {

  heroes;
  userUrl;


  constructor( private mainDataService: MainDataService) { }
ngOnInit() {
  this.getListFromService();
  this.getUrlData();

}

//============== HeroList Array ======>
private getListFromService(){
   this.mainDataService.getData().subscribe(list=> this.heroes = list);
  // console.log("This is because of Optional ");
}

private getUrlData(){
  // console.log(this.userUrl);
    this.mainDataService.getUrl().subscribe(data => {
      this.userUrl = data;
    });
  // console.log(this.userUrl);
}

//========Test TEst





  //======== Delete (filter) the list =========>
  deleteFromTheList(id) {
    this.heroes = this.heroes.filter(hero => hero.id !== id)
  }

}

