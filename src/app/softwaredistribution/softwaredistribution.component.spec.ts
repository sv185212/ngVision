import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredistributionComponent } from './softwaredistribution.component';

describe('SoftwaredistributionComponent', () => {
  let component: SoftwaredistributionComponent;
  let fixture: ComponentFixture<SoftwaredistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwaredistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaredistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
