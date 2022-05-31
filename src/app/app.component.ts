import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HeddarComponent } from './heddar/heddar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HeddarComponent],
})
export class AppComponent {
  title = 'v14';
  constructor(public service: DataService) {}
}
