import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OneComponent } from 'src/one/one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [BrowserModule, OneComponent],
  standalone: true,
})
export class AppComponent {
  title = 'v14';
}
