import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logueo } from './logueo';

describe('Logueo', () => {
  let component: Logueo;
  let fixture: ComponentFixture<Logueo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logueo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logueo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
