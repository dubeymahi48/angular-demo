import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }

  heroData = [
    {
      id:1,
      name:"saurav",
      age:26
    },
    {
      id:2,
      name:"ajay",
      age:22
    },
    {
      id:3,
      name:"mahi",
      age:25
    },
    {
      id:4,
      name:"deepak",
      age:24
    }
  ]

  getList(){
    return this.heroData;
  }

  deleteHero(heroID){
    this.heroData = this.heroData.filter(function(item){
      return item.id != heroID;
    });
  }

  getDetail(heroID){
    return this.heroData.filter(function(item){
      return item.id == heroID;
    });
  }

  updateHero(hero){
    this.heroData = this.heroData.map(item=>{
      return (item.id == hero.id)?hero:item;      
    });
  }

  addHero(hero){
    hero.id = this.heroData.length+1;
    this.heroData.push(hero);
  }
}
