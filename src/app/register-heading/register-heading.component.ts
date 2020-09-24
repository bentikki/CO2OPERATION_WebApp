import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-heading',
  templateUrl: './register-heading.component.html',
  styleUrls: ['./register-heading.component.scss']
})
export class RegisterHeadingComponent implements OnInit {
  @Input() heading: String;
  @Input() icon: String;

  constructor() { }

  ngOnInit(): void {
  }

}
