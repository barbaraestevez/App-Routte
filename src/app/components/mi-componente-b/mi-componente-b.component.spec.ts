import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteBComponent } from './mi-componente-b.component';

describe('MiComponenteBComponent', () => {
  let component: MiComponenteBComponent;
  let fixture: ComponentFixture<MiComponenteBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponenteBComponent]
    });
    fixture = TestBed.createComponent(MiComponenteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
