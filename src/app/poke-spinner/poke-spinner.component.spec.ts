import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSpinnerComponent } from './poke-spinner.component';

describe('PokeSpinnerComponent', () => {
  let component: PokeSpinnerComponent;
  let fixture: ComponentFixture<PokeSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
