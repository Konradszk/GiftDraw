import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarUIComponent } from './topbar-ui.component';

describe('TopbarComponent', () => {
  let component: TopbarUIComponent;
  let fixture: ComponentFixture<TopbarUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopbarUIComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
