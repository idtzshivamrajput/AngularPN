import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {
  name="sattu bhoi"
  city="gwalior"
  num1=2
  num2=3

  constructor() { }

  ngOnInit(): void {
  }

}
