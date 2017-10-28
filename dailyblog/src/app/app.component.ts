import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slideMenuClassName:String;
  menuFlag:boolean = true;
  ngOnInit(){
      this.slideMenuClassName = "slideMenuClassNameUp";    
  }
   myFunction(event){
     if(this.menuFlag){
        this.slideMenuClassName = "slideMenuClassNameDown";
        this.menuFlag = !this.menuFlag;
     }
     else{
        this.slideMenuClassName = "slideMenuClassNameUp";
        this.menuFlag = !this.menuFlag;
     } 
  } 
}
