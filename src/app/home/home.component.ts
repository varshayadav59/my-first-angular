import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users = [
    {
      id: '1',
      name: 'anil',
      age: 28,
      email: 'anil@test.com'
    },
    {
      id: '2',
      name: 'peter',
      age: '30',
      email: 'peter@test.com'
    },

    {
      id: '3',
      name: 'kuki',
      age: '18',
      email: 'kuki@test.com'
    }

  ]
}
