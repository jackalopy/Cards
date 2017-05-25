import { Component, Input } from "@angular/core";
import { CardComponent } from "./card.component";
// import { mtgsdk } from '../../../lib/mtgsdk/src/index.js';

@Component({
	selector: 'hand',
	templateUrl: './app/board/components/hand.component.html',
	styleUrls: ['./app/board/components/hand.component.css']
})
export class HandComponent {
	cardList: Array<any>;

	@Input()
	open: Boolean = true;

	constructor() {

		console.log('hand loaded');
		this.cardList = [{
			title: 'Título 1',
			imgsrc: 'http://magiccards.info/scans/en/ktk/190.jpg',
			desc: 'descrição 1',
			options: [{
				icon: 'info',
				name: 'View Info',
				action: function() {
					console.log('View Info action triggered');
				}
			}, {
				icon: 'level-down',
				name: 'Summon',
				action: function() {
					console.log('Summon action triggered');
				}
			}, {
				icon:'ban',
				name: 'Discard',
				action: function() {
					console.log('Discard action triggered');
				}
			}]
		}, {
			title: 'Título 2',
			imgsrc: 'https://s-media-cache-ak0.pinimg.com/originals/1c/95/e6/1c95e68404e6acd8fe2570909a57b4e0.jpg',
			desc: 'descrição 2',
			options: [{
				icon: 'info',
				name: 'View Info',
				action: function() {
					console.log('View Info action triggered');
				}
			}, {
				icon:'ban',
				name: 'Discard',
				action: function() {
					console.log('Discard action triggered');
				}
			}]
		}, {
			title: 'Título 3',
			imgsrc: 'https://i.kinja-img.com/gawker-media/image/upload/s--P2Qz5nAT--/c_scale,f_auto,fl_progressive,q_80,w_800/18bltictofxg7jpg.jpg',
			desc: 'descrição 3',
			options: [{
				icon: 'info',
				name: 'View Info',
				action: function() {
					console.log('View Info action triggered');
				}
			}, {
				icon: 'level-down',
				name: 'Summon',
				action: function() {
					console.log('Summon action triggered');
				}
			}]
		}];

		// mtgsdk.card.find(3).then(result => {
		// 	console.log(result.card.name); // "Black Lotus"
		// });
	}

	addCard = function (card: Object): void {
		if (this.open) {
			this.cardList.push(card);
		}
	};
}