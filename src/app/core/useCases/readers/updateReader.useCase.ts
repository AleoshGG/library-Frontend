import { Injectable } from '@angular/core';
import { ReaderRepository } from '../../repositories/reader.repository';
import { Reader } from '../../domain/reader.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateReaderUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  execute(id_reader: number, reader: Reader): Observable<Reader> {
    return this.readerRepository.updateReader(id_reader, reader);
  }
}
