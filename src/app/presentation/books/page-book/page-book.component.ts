import { Component, OnInit } from '@angular/core';
import { GetAllBooksUseCase } from '../../../core/useCases/books/getAllBooks.useCase';
import { Book } from '../../../core/domain/books.model';
import Bell from 'bell-alert';
import 'bell-alert/dist/bell.min.css';
import { BookNotificationService } from '../notifications.service';

@Component({
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrl: './page-book.component.css',
})
export class PageBookComponent implements OnInit {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  books: Book[] = [];
  notifications: string = '';
  alertShown: boolean = false;

  constructor(
    private getAllBooks: GetAllBooksUseCase,
    private bookNotificationService: BookNotificationService
  ) {}

  ngOnInit() {
    //Short Polling
    this.getBooks();
    setInterval(() => this.getBooks(), 60000);
    
    this.checkForNewBooks();
  }

  getBooks() {
    this.getAllBooks.execute().subscribe({
      next: (res) => {
        this.books = res;
      },
      error: (err) => {
        const bell = new Bell(
          {
            title: 'Ha ocurrido un error al actualizar los datos',
            description: 'Intentelo más tarde',
          },
          'error'
        );
        bell.launch();
        console.log(err);
      },
    });
  }

  searchBook(books: Book[]) {
    this.books = books;
  }

  checkForNewBooks(): void {
    this.bookNotificationService.checkForNewBooks().subscribe(
      (response) => {
        if (response.body && response.body.notification) {
          this.notifications = response.body.notification;

          // Si no se ha mostrado la alerta antes, mostrarla ahora
          if (!this.alertShown) {
            alert('Cambios importantes en el stock');
            this.alertShown = true; // Cambiar el flag a true
          }
        } else {
          this.notifications = 'No hay nuevos libros.';
          console.log(this.notifications);
        }

        // Volver a suscribirse para obtener más notificaciones
        this.checkForNewBooks();
      },
      (error) => {
        console.error('Error al verificar los libros:', error);
        this.notifications = 'No se pudo obtener la información.';
        // Volver a intentar después de un error
        setTimeout(() => this.checkForNewBooks(), 5000);
      }
    );
  }
}
