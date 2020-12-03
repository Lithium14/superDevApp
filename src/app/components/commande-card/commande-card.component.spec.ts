import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCardComponent } from './commande-card.component';

describe('CommandeCardComponent', () => {
  let component: CommandeCardComponent;
  let fixture: ComponentFixture<CommandeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
