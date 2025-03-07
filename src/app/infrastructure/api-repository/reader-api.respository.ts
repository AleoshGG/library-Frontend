import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReaderRepository } from '../../core/repositories/reader.repository';
import { Reader } from '../../core/domain/reader.model';
import { ReaderListDTO } from '../../core/adapters/dtos/readers/readerList.dto';
import { ReaderMapper } from '../../core/adapters/mappers/readers/readerList.mappers';

@Injectable({
  providedIn: 'root',
})
export class ReaderApiRepository implements ReaderRepository {
  private URL_BASE = 'http://localhost:8000/readers/';

  constructor(private http: HttpClient) {}
  getReaderById(id_reader: number): Observable<Reader[]> {
    return this.http
      .get<ReaderListDTO>(`${this.URL_BASE}${id_reader}`)
      .pipe(map(ReaderMapper.fromDTO));
  }

  createReader(reader: Reader): Observable<Reader> {
    return this.http.post<Reader>(this.URL_BASE, reader);
  }
  getReaderByName(name: string): Observable<Reader[]> {
    return this.http
      .get<ReaderListDTO>(`${this.URL_BASE}q=${name}`)
      .pipe(map(ReaderMapper.fromDTO));
  }
  getAllReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.URL_BASE);
  }
  deleteReader(id_reader: number): Observable<Reader> {
    return this.http.delete<Reader>(`${this.URL_BASE}${id_reader}`);
  }
  setStatusReader(id_reader: number, status: string): Observable<Reader> {
    return this.http.put<Reader>(`${this.URL_BASE}status/${id_reader}`, status);
  }
  updateReader(id_reader: number, reader: Reader): Observable<Reader> {
    return this.http.put<Reader>(`${this.URL_BASE}${id_reader}`, reader);
  }
}
