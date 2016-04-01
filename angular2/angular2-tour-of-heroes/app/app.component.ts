import {Component} from "angular2/core";
@Component ({
	selector: "my-app",
	template:`
	<div *ngIf="selectedHero">
		<h2>select hero {{selectedHero.name}}</h2>
		<div><label>id: </label>{{selectedHero.id}}</div>
		<div>
		    <label>name: </label>
		    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
		</div>
	</div>
	<h2>My heroes</h2>
	<ul class="heroes">
		<li *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
			<span class="badge"> {{hero.id}} </span> {{hero.name}}
		</li>
	</ul>
	`,
	styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
export class AppComponent{
	title = "Tous of Heroes";
	selectedHero : Hero ;
	public heroes = HEROES;
	onSelect(hero: Hero){
		this.selectedHero = hero;
	}
}
export class Hero{
	id : number;
	name : string;
}
var HEROES: Hero [] = [
	{id: 1 , name: "Nam 1"},
	{id: 2 , name: "Nam 22"},
	{id: 3 , name: "Nam 18"},
	{id: 4 , name: "Nam 17"},
	{id: 5 , name: "Nam 17"},
	{id: 6 , name: "Nam 16"},
	{id: 7 , name: "Nam 15"},
	{id: 8 , name: "Nam 13"},
	{id: 9 , name: "Nam 12"}
];
