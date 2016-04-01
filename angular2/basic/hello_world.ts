import {Component} from "angular2/core";
@Component({
	//Declare the tag name in index.html
	selector: 'hello-world',

	// Location of the template
	templateUrl: 'hello_world.html'
})
export class HelloWorld {
	// Declaring the variable
	yourName: string = '';
}