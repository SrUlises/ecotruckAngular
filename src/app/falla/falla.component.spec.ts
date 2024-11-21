import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallaComponent } from './falla.component';

describe('FallaComponent', () => {
  let component: FallaComponent;
  let fixture: ComponentFixture<FallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
