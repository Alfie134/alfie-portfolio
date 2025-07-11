import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativityComponent } from './creativity';

describe('Creativity', () => {
  let component: CreativityComponent;
  let fixture: ComponentFixture<CreativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
