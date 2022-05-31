import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-heddar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heddar.component.html',
  styleUrls: ['./heddar.component.scss'],
})
export class HeddarComponent implements OnInit {
  @Input() bar: string | null = '';
  foo = true;
  constructor(public data: DataService) {}

  ngOnInit(): void {}
}
