import { Component } from '@angular/core';


@Component({
  selector: 'app-armhero-list',
  templateUrl: './armhero-list.component.html',
  styleUrls: ['./armhero-list.component.scss']
})
export class ArmheroListComponent  {

  heroes = [
    {
      id : 1,
      name: 'Վազգեն Առաջին',
      gettingDate: 1994,
      birthDay:  1908,
      placeofbirth: 'Romania/Bucharesti',
      deathDay: 1994,
      forWhat: 'Ազգային և հոգևոր արժեքների պահպանման և բազմապատկման գործում բացառիկ ծառայությունների համար',
    },

    {
      id : 2,
      name: 'Վիկտոր Համբարձումյան',
      gettingDate: 1994,
      birthDay:  1908,
      placeofbirth: 'Russian Federation/ Tbilisi',
      deathDay: 1996,
      forWhat: 'Համաշխարհային նշանակության գիտական արժեքների ստեղծման, գիտության կազմակերպման բնագավառում մատուցած' +
                   ' բացառիկ ծառայությունների և ազգանպաստ հասարակական գործունեության համար'
    },
    {
      id: 3,
      name: 'Ալեք Մանուկյան',
      gettingDate: 1994,
      birthDay:  1901,
      placeofbirth: 'Osman Empire/ Zmurni',
      deathDay: 1996,
      forWhat: 'Համազգային նշանակություն ունեցող բացառիկ ծառայությունների, բազմամյա ազգանվեր ու' +
                'հայրենանվեր գործունեության համար'
    },
    {
      id: 4,
      name: 'Մոնթե Չառլզի Մելքոնյան',
      gettingDate: 1996 + ' հետմահու',
      birthDay:  1957,
      placeofbirth: 'USA, Kalifornia/Vayselia',
      deathDay: 1993,
      forWhat: 'Հայրենիքի պաշտպանության գործում համազգային նշանակություն ունեցող բացառիկ ծառայությունների համար'
    },
    {
      id: 5,
      name: 'Մոնթե Չառլզի Մելքոնյան',
      gettingDate: 1996,
      birthDay:  1957,
      placeofbirth: 'USA, Kalifornia/Vayselia',
      deathDay: 1993,
      forWhat: 'Հայրենիքի պաշտպանության գործում համազգային նշանակություն ունեցող բացառիկ ծառայությունների համար'
    },

]




  constructor() { }

  deleteFromList(id) {
     this.heroes = this.heroes.filter(hero =>hero.id !== id);
  }

}
