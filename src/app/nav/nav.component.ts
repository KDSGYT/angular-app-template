import { Component, OnInit } from '@angular/core';

// import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  links:any;
  constructor( ) { 
    this.links = [
      "View 1",
      "View 2"
    ]
  }
  
  activeLink(){

  }
  
     
  capitalize( str){
    return str[0].toUpperCase()+str.slice(1,str.length);
  }

  ngOnInit(): void {
  // console.log(this.url);
  }

}
