import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicjournalComponent } from './electronicjournal.component';

describe('ElectronicjournalComponent', () => {
  let component: ElectronicjournalComponent;
  let fixture: ComponentFixture<ElectronicjournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicjournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
