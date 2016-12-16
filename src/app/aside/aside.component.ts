import { Component, Input } from '@angular/core';

@Component({
  selector: '.teddy-bear',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  @Input()
  public selectedCity;

  constructor() { }

}
