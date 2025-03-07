import { Reader } from '../../../domain/reader.model';
import { ReaderListDTO } from '../../dtos/readers/readerList.dto';

export class ReaderMapper {
  static fromDTO(dto: ReaderListDTO): Reader[] {
    return dto.data.map(
      (item) =>
        new Reader(
          item.Id_reader,
          item.First_name,
          item.Last_name,
          item.Email,
          item.Account_status
        )
    );
  }
}
