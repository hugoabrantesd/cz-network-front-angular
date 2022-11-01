import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesPostagemComponent } from './botoes-postagem.component';

describe('BotoesPostagemComponent', () => {
  let component: BotoesPostagemComponent;
  let fixture: ComponentFixture<BotoesPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesPostagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
