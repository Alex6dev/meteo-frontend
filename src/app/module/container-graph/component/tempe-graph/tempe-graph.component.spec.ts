import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempeGraphComponent } from './tempe-graph.component';

describe('TempeGraphComponent', () => {
  let component: TempeGraphComponent;
  let fixture: ComponentFixture<TempeGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempeGraphComponent]
    });
    fixture = TestBed.createComponent(TempeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
