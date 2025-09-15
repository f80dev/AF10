import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxkeyboardComponent } from './fxkeyboard.component';

describe('FxkeyboardComponent', () => {
  let component: FxkeyboardComponent;
  let fixture: ComponentFixture<FxkeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxkeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxkeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
