import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMusicComponent } from './user-list-music.component';

describe('UserListMusicComponent', () => {
  let component: UserListMusicComponent;
  let fixture: ComponentFixture<UserListMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListMusicComponent]
    });
    fixture = TestBed.createComponent(UserListMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
