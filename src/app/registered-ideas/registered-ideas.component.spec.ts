import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredIdeasComponent } from './registered-ideas.component';

describe('RegisteredIdeasComponent', () => {
  let component: RegisteredIdeasComponent;
  let fixture: ComponentFixture<RegisteredIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
