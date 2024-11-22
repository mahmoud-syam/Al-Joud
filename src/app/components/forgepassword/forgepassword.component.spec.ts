import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgepasswordComponent } from './forgepassword.component';

describe('ForgepasswordComponent', () => {
  let component: ForgepasswordComponent;
  let fixture: ComponentFixture<ForgepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgepasswordComponent]
    });
    fixture = TestBed.createComponent(ForgepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
