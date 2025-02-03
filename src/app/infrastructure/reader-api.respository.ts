import { Injectable } from '@angular/core';
import { ReaderRepository } from '../core/repositories/reader.repository';
import { Observable } from 'rxjs';
import { Reader } from '../core/domain/reader.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReaderApiRepository implements ReaderRepository {
  private URL_BASE = 'http://localhost:8080/readers/';

  constructor(private http: HttpClient) {}

  createReader(reader: Reader): Observable<Reader> {
    return this.http.post<Reader>(this.URL_BASE, reader);
  }
  getReaderByName(name: string): Observable<Reader[]> {
    return this.http.get<Reader[]>(`${this.URL_BASE}q=${name}`);
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
