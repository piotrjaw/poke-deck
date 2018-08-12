import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pageCount: number;
  @Input() pageNumber: number;
  @Output() change = new EventEmitter();

  constructor() { }

  changePage(newPageNumber: number): void {
    this.change.emit(newPageNumber);
  }

  ngOnInit() {
  }
}
