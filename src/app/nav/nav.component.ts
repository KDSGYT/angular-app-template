import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material/icon'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  links:any
  constructor( ) { 
    this.links = [
      "home",
      "about"
    ]
  }

     
  capitalize( str){
    return str[0].toUpperCase()+str.slice(1,str.length);
  }

  ngOnInit(): void {
  }

}
