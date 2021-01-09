import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawCreateUiComponent } from './draw-create-ui.component';

describe('DrawCreateUiComponent', () => {
  let component: DrawCreateUiComponent;
  let fixture: ComponentFixture<DrawCreateUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawCreateUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawCreateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
