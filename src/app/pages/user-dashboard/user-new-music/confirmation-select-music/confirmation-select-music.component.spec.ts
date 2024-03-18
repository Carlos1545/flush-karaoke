import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSelectMusicComponent } from './confirmation-select-music.component';

describe('ConfirmationSelectMusicComponent', () => {
  let component: ConfirmationSelectMusicComponent;
  let fixture: ComponentFixture<ConfirmationSelectMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationSelectMusicComponent]
    });
    fixture = TestBed.createComponent(ConfirmationSelectMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
