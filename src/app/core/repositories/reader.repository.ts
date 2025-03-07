import { Observable } from 'rxjs';
import { Reader } from '../domain/reader.model';

export abstract class ReaderRepository {
  abstract createReader(reader: Reader): Observable<Reader>;
  abstract getReaderByName(name: string): Observable<Reader[]>;
  abstract getAllReaders(): Observable<Reader[]>;
  abstract getReaderById(id_reader: number): Observable<Reader[]>;
  abstract deleteReader(id_reader: number): Observable<Reader>;
  abstract setStatusReader(id_reader: number, status: string): Observable<Reader>;
  abstract updateReader(id_reader: number, reader: Reader): Observable<Reader>;
}
