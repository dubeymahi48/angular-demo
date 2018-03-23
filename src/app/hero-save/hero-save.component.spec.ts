import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSaveComponent } from './hero-save.component';

describe('HeroSaveComponent', () => {
  let component: HeroSaveComponent;
  let fixture: ComponentFixture<HeroSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
