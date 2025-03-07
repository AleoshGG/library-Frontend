import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'reader-form',
  templateUrl: './reader-form.component.html',
  styleUrl: './reader-form.component.css',
})
export class ReaderFormComponent {
  @Input() isOpen = false;
  @Input() title = 'Modal';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  constructor() {}

 
}
