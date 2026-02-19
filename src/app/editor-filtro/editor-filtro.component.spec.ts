import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFiltroComponent } from './editor-filtro.component';

describe('EditorFiltroComponent', () => {
  let component: EditorFiltroComponent;
  let fixture: ComponentFixture<EditorFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorFiltroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
