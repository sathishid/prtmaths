import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdmComponent } from './asdm.component';

describe('AsdmComponent', () => {
  let component: AsdmComponent;
  let fixture: ComponentFixture<AsdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
