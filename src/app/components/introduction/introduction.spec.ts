import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction';

describe('Introduction', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
