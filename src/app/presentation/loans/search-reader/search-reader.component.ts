import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Reader } from '../../../core/domain/reader.model';

@Component({
  selector: 'search-reader',
  templateUrl: './search-reader.component.html',
  styleUrl: './search-reader.component.css',
})
export class SearchReaderComponent {
  @Input() reader!: Reader;
  @Input() bookS!: boolean;
  @Output() setReaderPage = new EventEmitter<Reader>();
  @Output() setBookSPage = new EventEmitter<boolean>();

  setReader(reader: Reader) {
    this.reader.account_status = reader.account_status;
    this.reader.email = reader.email;
    this.reader.first_name = reader.first_name;
    this.reader.last_name = reader.last_name;
    this.reader.id_reader = reader.id_reader;
    this.setReaderPage.emit(this.reader)
  }

  setBookS(confirm: boolean) {
    this.bookS = confirm;
    this.setBookSPage.emit(this.bookS);
  }
}
