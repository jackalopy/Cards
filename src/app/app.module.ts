import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routing , appRoutingProviders} from './app.routing';
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { TaskListComponent } from "./todo/components/task-list.component";
import { AboutComponent } from "./about/components/about.component";
import { TaskComponent } from "./todo/components/task.component";

import { BoardComponent } from "./board/components/board.component";
import { HandComponent } from "./board/components/hand.component";
import { CardComponent } from "./board/components/card.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        TaskComponent,
        TaskListComponent,
        AboutComponent,
        BoardComponent,
        HandComponent,
        CardComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}