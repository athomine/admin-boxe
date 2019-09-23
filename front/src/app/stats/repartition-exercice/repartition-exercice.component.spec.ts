import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionExerciceComponent } from './repartition-exercice.component';

describe('RepartitionExerciceComponent', () => {
  let component: RepartitionExerciceComponent;
  let fixture: ComponentFixture<RepartitionExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartitionExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartitionExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
