import { Component } from "@angular/core";
import { HandComponent } from "./hand.component";
import { CardComponent } from "./card.component";

@Component({
	selector: 'board',
	templateUrl: './app/board/components/board.component.html',
	styleUrls: ['./app/board/components/board.component.css']
})
export class BoardComponent {
	cardList: Array<any>;

	constructor() {

		console.log('board loaded');
	}
}