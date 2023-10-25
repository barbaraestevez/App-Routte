import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteAComponent } from './mi-componente-a.component';

describe('MiComponenteAComponent', () => {
  let component: MiComponenteAComponent;
  let fixture: ComponentFixture<MiComponenteAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponenteAComponent]
    });
    fixture = TestBed.createComponent(MiComponenteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
