import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutUiComponent } from './logout-ui.component';

describe('LogoutUiComponent', () => {
  let component: LogoutUiComponent;
  let fixture: ComponentFixture<LogoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutUiComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
