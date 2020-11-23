import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUIComponent } from './sidebar-u-i.component';

describe('SidebarComponent', () => {
  let component: SidebarUIComponent;
  let fixture: ComponentFixture<SidebarUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarUIComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
