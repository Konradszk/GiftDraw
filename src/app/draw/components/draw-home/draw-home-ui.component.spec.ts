import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawHomeUiComponent } from './draw-home-ui.component';

describe('DrawHomeUiComponent', () => {
  let component: DrawHomeUiComponent;
  let fixture: ComponentFixture<DrawHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawHomeUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
