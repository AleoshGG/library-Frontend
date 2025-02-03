import { Injectable } from '@angular/core';
import { ReaderRepository } from '../../repositories/reader.repository';
import { Observable } from 'rxjs';
import { Reader } from '../../domain/reader.model';

@Injectable({
  providedIn: 'root',
})
export class GetAReaderByNameUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  execute(name: string): Observable<Reader[]> {
    return this.readerRepository.getReaderByName(name);
  }
}
