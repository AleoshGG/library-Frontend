import { Component, Input } from '@angular/core';

@Component({
  selector: 'target-statuss',
  templateUrl: './target-statuss.component.html',
  styleUrl: './target-statuss.component.css'
})
export class TargetStatussComponent {
  @Input() userName: string = 'Usuario';
  @Input() accountStatus: string = 'active'; // 'active' o 'suspended'
}
