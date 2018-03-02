import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnNavBarComponent } from './admn-nav-bar.component';

describe('AdmnNavBarComponent', () => {
  let component: AdmnNavBarComponent;
  let fixture: ComponentFixture<AdmnNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
