import { Injectable } from '@angular/core';
import { ReaderRepository } from '../../repositories/reader.repository';
import { Observable } from 'rxjs';
import { Reader } from '../../domain/reader.model';

@Injectable({
  providedIn: 'root',
})
export class GetReaderByIdUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  execute(id_reader: number): Observable<Reader[]> {
    return this.readerRepository.getReaderById(id_reader);
  }
}
