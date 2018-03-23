import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-save',
  templateUrl: './hero-save.component.html',
  styleUrls: ['./hero-save.component.css']
})
export class HeroSaveComponent implements OnInit {

  constructor(private heroService: HeroService,private route: ActivatedRoute, private router: Router) { }

  hero = {
    id: null,
    name: '',
    age: null,
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('heriID');
    if(id){
      this.hero = JSON.parse(JSON.stringify(this.heroService.getDetail(id)[0]));
    }
    
  }

  saveHero(isValid){
    if(!isValid){
      return;
    }
    
    if(this.hero.id != null){
      this.heroService.updateHero(this.hero);
    }else{
      this.heroService.addHero(this.hero);
    }
    
    this.router.navigate(["/heroes"]);
  }

  cancelHero(){
    this.router.navigate(["/heroes"]);
  }

  
}
