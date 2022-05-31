import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-da',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>da works!</p> `,
  styles: [],
})
export class DaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
