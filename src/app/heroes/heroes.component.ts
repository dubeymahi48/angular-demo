import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  heroes = this.heroService.getList();
  title = "Heroes list";
  
  delete(hero){
   this.heroService.deleteHero(hero.id);
   this.heroes = this.heroService.getList();
  }

  edit(hero){
    this.router.navigate(["/hero/edit/"+hero.id]);
  }
}
