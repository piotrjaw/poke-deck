import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeIndexComponent } from './poke-index.component';

describe('PokeIndexComponent', () => {
  let component: PokeIndexComponent;
  let fixture: ComponentFixture<PokeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
