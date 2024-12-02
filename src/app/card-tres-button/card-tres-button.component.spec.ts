import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTresButtonComponent } from './card-tres-button.component';

describe('CardTresButtonComponent', () => {
  let component: CardTresButtonComponent;
  let fixture: ComponentFixture<CardTresButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTresButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTresButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
