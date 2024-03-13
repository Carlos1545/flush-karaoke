import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsScreenComponent } from './lyrics-screen.component';

describe('LyricsScreenComponent', () => {
  let component: LyricsScreenComponent;
  let fixture: ComponentFixture<LyricsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LyricsScreenComponent]
    });
    fixture = TestBed.createComponent(LyricsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
