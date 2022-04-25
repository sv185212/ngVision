import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelistviewComponent } from './sidelistview.component';

describe('SidelistviewComponent', () => {
  let component: SidelistviewComponent;
  let fixture: ComponentFixture<SidelistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidelistviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
