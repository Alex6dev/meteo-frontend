import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainGraphComponent } from './rain-graph.component';

describe('RainGraphComponent', () => {
  let component: RainGraphComponent;
  let fixture: ComponentFixture<RainGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainGraphComponent]
    });
    fixture = TestBed.createComponent(RainGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
