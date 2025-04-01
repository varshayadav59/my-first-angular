import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user1',
  imports: [],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component {
  @Input() counter=0
  name="anil"
//constructor(){
  //console.log("constructor");
  //this.name="sid"
//}
//ngOnInit(){
  //console.log("ngOnInit");
  //this.name="sam"
//}

//ngOnDestroy(){
  //console.log("ngOnDestroy");
 
//}

ngOnChanges(){
console.log("ngOnChanges");
}
}