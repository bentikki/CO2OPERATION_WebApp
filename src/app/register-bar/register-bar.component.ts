import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-bar',
  templateUrl: './register-bar.component.html',
  styleUrls: ['./register-bar.component.scss']
})
export class RegisterBarComponent implements OnInit {
  @Input() prev: String;
  @Input() next: String;
  @Input() allowNext: boolean;
  
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  nextWasClicked(): void {
    this.onNext.emit();
  }

}
