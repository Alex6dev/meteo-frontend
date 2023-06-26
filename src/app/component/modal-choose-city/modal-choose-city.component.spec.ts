import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChooseCityComponent } from './modal-choose-city.component';

describe('ModalChooseCityComponent', () => {
  let component: ModalChooseCityComponent;
  let fixture: ComponentFixture<ModalChooseCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalChooseCityComponent]
    });
    fixture = TestBed.createComponent(ModalChooseCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
