import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration form';
  dispalyname = '';
  displayaddress = '';
  displaycontact = '';
  displayemail = '';
  getValue(name: string, address: string, conatct: string, email: string) {
    this.dispalyname = name;
    this.displayaddress = address;
    this.displaycontact = conatct;
    this.displayemail = email;
  }

}