import {Component, OnInit} from '@angular/core';

@Component ({
    selector:'app-home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})

export class HomeComponent implements OnInit {
    mapStatus: string = "hide";


    onClickGps(){
        console.log("pressed the button before");
        this.mapStatus="show";
        console.log("pressed the button after");

    }

    ngOnInit(){
        
    }
}