import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateReaderUseCase } from '../../../core/useCases/readers/createReader.useCase';
import { Reader } from '../../../core/domain/reader.model';
import Bell from 'bell-alert';

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

  reader = new Reader(0, '', '', '', '');
  constructor(private createReader: CreateReaderUseCase) {}

  save() {
    const newReader = new Reader(
      0,
      this.reader.first_name,
      this.reader.last_name,
      this.reader.email,
      "active"
    );

    this.createReader.execute(newReader).subscribe({
      next: () => {
        const bell = new Bell(
          {
            title: 'Guardado',
            description: 'El lector se guardó correctamente',
          },
          'success'
        );
        bell.launch();
        this.closeModal();
      },
      error: (err) => {
        const bell = new Bell(
          {
            title: 'Ha ocurrido un error',
            description: 'Intentelo más tarde',
          },
          'error'
        );
        bell.launch();
        console.log(err);
        this.closeModal();
      },
    });
  }
}
