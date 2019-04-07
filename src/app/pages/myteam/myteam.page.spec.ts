import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamPage } from './myteam.page';

describe('MyteamPage', () => {
  let component: MyteamPage;
  let fixture: ComponentFixture<MyteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyteamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
