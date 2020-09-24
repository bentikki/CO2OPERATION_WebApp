import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-bar',
  templateUrl: './register-bar.component.html',
  styleUrls: ['./register-bar.component.scss']
})
export class RegisterBarComponent implements OnInit {
  @Input() prev: String;
  @Input() next: String;

  constructor() { }

  ngOnInit(): void {
  }

}
