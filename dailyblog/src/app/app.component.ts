import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slideMenuClassName:String;
  selected:String = "off";
  selected1:String = "off";
  selected2:String = "off";
  selected3:String = "off";
  selected4:String = "off";
  menuFlag:boolean = true;
  ngOnInit(){
      this.slideMenuClassName = "slideMenuClassNameUp";    
  }
   myFunction(){
     if(this.menuFlag){
        this.slideMenuClassName = "slideMenuClassNameDown";
        this.menuFlag = !this.menuFlag;
     }
     else{
        this.slideMenuClassName = "slideMenuClassNameUp";
        this.menuFlag = !this.menuFlag;
     } 
  } 
  selectedFunc(){
    this.selected = "on";
  }
  disselected(){
    this.selected ="off";
  }
  /////////////////
  selectedFunc1(){
    this.selected1 = "on";
  }
  disselected1(){
    this.selected1 ="off";
  }
  //////////////////////
  selectedFunc2(){
    this.selected2 = "on";
  }
  disselected2(){
    this.selected2 ="off";
  }
  ///////////////////////
  selectedFunc3(){
    this.selected3 = "on";
  }
  disselected3(){
    this.selected3 ="off";
  }
  ///////////////////////
  selectedFunc4(){
    this.selected4 = "on";
  }
  disselected4(){
    this.selected4 ="off";
  }
}
