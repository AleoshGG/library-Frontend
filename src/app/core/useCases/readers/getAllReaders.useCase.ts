import { Injectable } from '@angular/core';
import { ReaderRepository } from '../../repositories/reader.repository';
import { Observable } from 'rxjs';
import { Reader } from '../../domain/reader.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllReadersUseCase {
  constructor(private readerRepository: ReaderRepository) {}

  execute(): Observable<Reader[]> {
    return this.readerRepository.getAllReaders();
  }
}
