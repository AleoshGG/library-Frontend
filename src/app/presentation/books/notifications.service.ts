import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookNotificationService {
  private apiUrl = 'http://localhost:8080/books/notifications'; // URL de la API

  constructor(private http: HttpClient) {}

  // Método para obtener la notificación de nuevos libros
  checkForNewBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }
}
