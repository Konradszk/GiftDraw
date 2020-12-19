import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawDashboardUiComponent } from './draw-dashboard-ui.component';

describe('DrawDashboardUiComponent', () => {
  let component: DrawDashboardUiComponent;
  let fixture: ComponentFixture<DrawDashboardUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawDashboardUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawDashboardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
