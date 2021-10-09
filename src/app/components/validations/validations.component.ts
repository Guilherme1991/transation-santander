import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent implements OnInit {
  @Input() info = '';
  constructor() { }

  ngOnInit(): void {
  }

}
