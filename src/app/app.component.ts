import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HeddarComponent } from './heddar/heddar.component';
import {
  BerndComponent,
  DaComponent,
  HierComponent,
  WodennComponent,
} from 'wodenn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeddarComponent,
    BerndComponent,
    DaComponent,
    HierComponent,
    WodennComponent,
  ],
})
export class AppComponent {
  title = 'v14';
  constructor(public service: DataService) {}
}
