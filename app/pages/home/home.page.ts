import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

/*
  initial Landing Page with slider
*/

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage{

    constructor(private navController: NavController) {
    }


}
