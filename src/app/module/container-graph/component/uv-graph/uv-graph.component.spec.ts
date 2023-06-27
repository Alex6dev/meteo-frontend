import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvGraphComponent } from './uv-graph.component';

describe('UvGraphComponent', () => {
  let component: UvGraphComponent;
  let fixture: ComponentFixture<UvGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UvGraphComponent]
    });
    fixture = TestBed.createComponent(UvGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
