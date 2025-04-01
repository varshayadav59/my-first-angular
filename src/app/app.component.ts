import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchDefault } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormControl, ReactiveFormsModule,FormGroup, FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent, ProfileComponent, NgIf, NgFor,NgSwitch,CommonModule,NgSwitchDefault,HeaderComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  title = 'my-first-angular';
  name = "varsha yadav";
  x = 10;
14  y = 20;

  handleClickEvent() {
    console.log("Function called");
    this.otherFunction()
  }
  otherFunction() {
    console.log("other function");
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
  //counter App
  count = 0
  handleIncrement() {0
    this.count = this.count + 1
  }

  handleDecrement() {
    this.count = this.count - 1
  }
  handleReset() {4
    this.count = 0
  }



//event in angular

//click event
handleEvent(event:Event){
  console.log("function called",event.type);
  //to get value from input
  console.log("value",(event.target as HTMLInputElement).value);
}
  */
  /* 
  //get and set
  name=""
  displayName="";
  email="";
  getName(event:Event){
  this.name=(event.target as HTMLInputElement).value
  }
  showName(){
    this.displayName=this.name;
  }
  
  setName(){
    this.name="Sam"
  }
  //2nd way
  getEmail(val:string){
    console.log(val);
    this.email=val
  }
  
  setEmail(){
  this.email="default@test.com"
  }
  */
  /*
  //If-Else
  display=true
  x=10
  toggleDiv=true;
  
  hide(){
    this.display=false
  }
  show(){
    this.display=true
  }
  
  toggle(){
    this.display=! this.display;
  }
  toggleTwo(){
    this.toggleDiv=! this.toggleDiv;
  }
    */

  /*
  color=2
  handleColor(val:number){
    this.color=val
  }
  
  handleInput(event:Event){
    console.log(parseInt((event.target as HTMLInputElement).value));
    this.color=parseInt((event.target as HTMLInputElement).value)
  }
    */
  /*
  //Switchcase in angular
  colors='blue'
  handleColor(val:string){
    this.colors=val
  }
  changeColor(event:Event){
    this.colors=(event.target as HTMLInputElement).value
  
  }
    */
  /*
  users=["Anil","Sam","Peter","Bruce","Tony"];
  students=[
    {name:'Anil',age:29,email:'anil@test.com'},
    {name:'Sam',age:23,email:'sam@test.com'},
    4{name:'Peter',age:45,email:'peter@test.com'},
    {name:'Bruce',age:10,email:'Bruce@test.com'},
  ]
  getName(name:string){
  console.log(name);
  }
  */
  /*
  count=signal(10);
  x=20;
  
  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }
  updateValue(val:string){
    //this.count.set(this.count()+1)
    if(val=='inc'){
      this.count.set(this.count()+1)
    }else{
      this.count.set(this.count()-1)
    }
  
  }
    */
  /*
 data : WritableSignal<number | string>=signal(10);
 count:Signal<number>=computed(()=>200);
 
 updateSignal(){
   this.data.set("Hello");
 }
   */
  /*
  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y())
 
  showValue(){
   console.log(this.z());
   
   console.log(this.z());
  }
 updateX(){
 this.x.set(200)
 }
 */
  /*
  userName=signal('Anil')
  
  constructor(){
    effect(()=>{
      console.log(this.userName());
    })
  }
  */
  /*
  users=['A','B','C','D','E','G','H']
  //users=[]
  */
  /*
  bgColor="green";
  fontSize="30";
  headingSizeBig="30px"
  headingSizeSmall="30px"
  zoom=true
  
  updateHeadingSize(){
   this.zoom=!this.zoom 
  }
   */
  /* *ngFor directives
  students = ["Anil", "sam", "Peter", "Bruce"];
  studentData = [
    {
      name: 'A',
      age: '31',
      email: 'a@tast.com'
    },

    {
      name: 'BB',
      age: '40',
      email: 'bb@tast.com'
    },

    {
      name: 'CCC',
      age: '38',
      email: 'cc@tast.com'
    },

    {
      name: 'DDDD',
      age: '25',
      email: 'dddd@tast.com'
    },
  ]
    */
/*
login=true;
block=0
updateBlock(){
  this.block++;
}
  */
 /*
 color="red";
 changeColor(color:string){
  this.color=color
 }
  */
/*
 name=new FormControl('');
 password=new FormControl('');

 displayValue(){
  console.log(this.name.value,this.password.value);
 }
 setValues(){
  this.name.setValue('peter');
  this.password.setValue('123')
 }
  */
 /*
 profileForm=new FormGroup({
  name:new FormControl('anil'),
  password:new FormControl('123'),
  email:new FormControl('anil@test.com'),
 })

 onSubmit(){
  console.log(this.profileForm.value);
 }
 setValue(){
  this.profileForm.setValue({
    name:'peter',
    password:'321',
    email:"anil@test.com"
  })
 }
  */
 //template driven form
 userDetails:any;
addDetails(val:NgForm){
  console.log(val);
  this.userDetails=val;
}
}


