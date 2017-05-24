import { Component, Input } from "@angular/core";

@Component({
	selector: 'card',
	templateUrl: './app/board/components/card.component.html',
	styleUrls: ['./app/board/components/card.component.css']
})
export class CardComponent {

	@Input()
	title: string = 'random title';
	@Input()
	imgsrc: string = 'random image';
	@Input()
	desc: string = 'random image';
	@Input()
	open: Boolean = true;
	@Input()
	options: Array<Object> = [];

	constructor() {
		console.log('card loaded');
	}
}