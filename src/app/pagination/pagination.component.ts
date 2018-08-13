import {
  Component,
  EventEmitter,
  HostListener,
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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case 37:
        if (this.pageNumber > 0) {
          this.change.emit(this.pageNumber - 1);
        }
        break;
      case 39:
        if (this.pageNumber < this.pageCount - 1) {
          this.change.emit(this.pageNumber + 1);
        }
        break;
      default:
        break;
    }
  }

  changePage(newPageNumber: number): void {
    this.change.emit(newPageNumber);
  }

  ngOnInit() {
  }
}
