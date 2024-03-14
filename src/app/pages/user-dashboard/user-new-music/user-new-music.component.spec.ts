import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewMusicComponent } from './user-new-music.component';

describe('UserNewMusicComponent', () => {
  let component: UserNewMusicComponent;
  let fixture: ComponentFixture<UserNewMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNewMusicComponent]
    });
    fixture = TestBed.createComponent(UserNewMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
