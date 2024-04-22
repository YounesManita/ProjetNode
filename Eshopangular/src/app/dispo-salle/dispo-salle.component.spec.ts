import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispoSalleComponent } from './dispo-salle.component';

describe('DispoSalleComponent', () => {
  let component: DispoSalleComponent;
  let fixture: ComponentFixture<DispoSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispoSalleComponent]
    });
    fixture = TestBed.createComponent(DispoSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
