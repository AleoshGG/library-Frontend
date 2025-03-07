import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'target-statuss',
  templateUrl: './target-statuss.component.html',
  styleUrl: './target-statuss.component.css',
})
export class TargetStatussComponent {
  @Input() msg!: string
  @Input() userName: string = 'Usuario';
  @Input() accountStatus: string = 'active';
  @Output() activeSearchBook = new EventEmitter<boolean>();

  active() {
    this.activeSearchBook.emit(true);
  }
}
