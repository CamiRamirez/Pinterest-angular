import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerphotoComponent } from './containerphoto.component';

describe('ContainerphotoComponent', () => {
  let component: ContainerphotoComponent;
  let fixture: ComponentFixture<ContainerphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
