import { Injectable } from '@angular/core';
import { ReaderRepository } from '../../repositories/reader.repository';
import { Observable } from 'rxjs';
import { Reader } from '../../domain/reader.model';

@Injectable({
  providedIn: 'root',
})
export class SetStatusReaderUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  execute(id_reader: number, status: string): Observable<Reader> {
    return this.readerRepository.setStatusReader(id_reader, status);
  }
}
