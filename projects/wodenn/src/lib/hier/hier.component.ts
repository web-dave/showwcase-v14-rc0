import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hier.component.html',
  styleUrls: ['./hier.component.css']
})
export class HierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
