import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BindingComponent} from './binding/binding.component'
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BindingComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';
  name="varsha yadav";
  x=10;
  y=20;
  
  handleClickEvent(){
    alert("Function called")
  }

}
