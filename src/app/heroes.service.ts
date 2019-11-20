import { Hero } from './hero.type';
import { EventEmitter } from '@angular/core';

export class HeroesService {
  constructor() {
  }
  heroListChanged = new EventEmitter();

  private heroes: Hero[] = [
    {
      id: 1,
      name: 'Վազգեն Առաջին',
      gettingDate: 1994,
      birthDay: 1908,
      placeofbirth: 'Romania/Bucharesti',
      deathDay: 1994,
      forWhat: 'Ազգային և հոգևոր արժեքների պահպանման և բազմապատկման գործում բացառիկ ծառայությունների համար',
    },
    {
      id: 2,
      name: 'Վիկտոր Համբարձումյան',
      gettingDate: 1994,
      birthDay: 1908,
      placeofbirth: 'Russian Federation/ Tbilisi',
      deathDay: 1996,
      forWhat: 'Համաշխարհային նշանակության գիտական արժեքների ստեղծման, գիտության կազմակերպման բնագավառում մատուցած' +
        ' բացառիկ ծառայությունների և ազգանպաստ հասարակական գործունեության համար'
    },
    {
      id: 3,
      name: 'Ալեք Մանուկյան',
      gettingDate: 1994,
      birthDay: 1901,
      placeofbirth: 'Osman Empire/ Zmurni',
      deathDay: 1996,
      forWhat: 'Համազգային նշանակություն ունեցող բացառիկ ծառայությունների, բազմամյա ազգանվեր ու' +
        'հայրենանվեր գործունեության համար'
    },
    {
      id: 4,
      name: 'Մոնթե Չառլզի Մելքոնյան',
      gettingDate: 1996,
      birthDay: 1957,
      placeofbirth: 'USA, Kalifornia/Vayselia',
      deathDay: 1993,
      forWhat: 'Հայրենիքի պաշտպանության գործում համազգային նշանակություն ունեցող բացառիկ ծառայությունների համար'
    },
    {
      id: 5,
      name: 'Հովհաննես Չեքիջյան',
      gettingDate: 1996,
      birthDay: 1928,
      placeofbirth: 'Ստամբուլ, Թուրքիա',
      deathDay: 1993,
      forWhat: 'Հայաստանն աշխարհին ներկայացնելու ազգանվեր գործում դրսևորած անմնացորդ նվիրումի համար'
    },
  ];

  getHeroesList() {
    return this.heroes;
  }

  deleteHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
    this.heroListChanged.emit(this.heroes);
  }
}
