import {Component, Input} from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2> {{hero.name}} detail!</h2>
    <div><label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" />
    </div>
  </div>
  `
})
export class HeroDetailComponent{
  @Input()
  hero:Hero;
}