import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  color: string = "";
  constructor(){

  }

  firstColor(couleur: string){
    this.color = couleur;
  }
}
