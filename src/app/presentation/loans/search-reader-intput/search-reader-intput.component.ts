import { Component, EventEmitter, Output } from '@angular/core';
import { GetAReaderByNameUseCase } from '../../../core/useCases/readers/getReaderByName.useCase';
import Bell from 'bell-alert';
import { Reader } from '../../../core/domain/reader.model';

@Component({
  selector: 'search-reader-intput',
  templateUrl: './search-reader-intput.component.html',
  styleUrl: './search-reader-intput.component.css',
})
export class SearchReaderIntputComponent {
  @Output() setReader = new EventEmitter<Reader>();
  name = '';

  constructor(private getAReaderByNameUseCase: GetAReaderByNameUseCase) {}

  search() {
    this.getAReaderByNameUseCase.execute(this.name).subscribe({
      next: (reader) => {
        this.setReader.emit(reader[0]);
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
      },
    });
  }
}
