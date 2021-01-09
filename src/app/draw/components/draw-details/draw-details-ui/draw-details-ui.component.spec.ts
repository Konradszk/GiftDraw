import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawDetailsUiComponent } from './draw-details-ui.component';

describe('DrawDetailsUiComponent', () => {
  let component: DrawDetailsUiComponent;
  let fixture: ComponentFixture<DrawDetailsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawDetailsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawDetailsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
