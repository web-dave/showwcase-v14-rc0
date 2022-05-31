import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-bernd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bernd.component.html',
  styleUrls: ['./bernd.component.css']
})
export class BerndComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
