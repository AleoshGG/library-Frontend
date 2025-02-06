import { Injectable } from '@angular/core';
import { ReaderRepository } from '../../repositories/reader.repository';
import { Reader } from '../../domain/reader.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateReaderUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  execute(reader: Reader): Observable<Reader> {
    return this.readerRepository.createReader(reader);
  }
}
