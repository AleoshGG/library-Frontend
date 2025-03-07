import { Component, Input } from '@angular/core';

@Component({
  selector: 'target-status-b',
  templateUrl: './target-status-b.component.html',
  styleUrl: './target-status-b.component.css',
})
export class TargetStatusBComponent {
  @Input() id_reader!: number;
  @Input() id_book!: number;
  @Input() userName: string = 'Usuario';
  @Input() accountStatus: string = 'active'; // 'active' o 'suspended'

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  
}
