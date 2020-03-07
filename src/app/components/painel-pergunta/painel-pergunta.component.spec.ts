import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPerguntaComponent } from './painel-pergunta.component';

describe('PainelPerguntaComponent', () => {
  let component: PainelPerguntaComponent;
  let fixture: ComponentFixture<PainelPerguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelPerguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
