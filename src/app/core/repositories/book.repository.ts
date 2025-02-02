import { Observable } from 'rxjs';
import { IBook } from '../domain/books.model';

export abstract class BookRepository {
    // Ingerfaz de los casos de uso haciendo referencia a go
    abstract createBook(book: IBook): Observable<number>;
    abstract getAllBooks(): Observable<IBook[]>;
    
}