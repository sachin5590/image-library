import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImagesUploadComponent } from './ngx-images-upload.component';

describe('NgxImagesUploadComponent', () => {
  let component: NgxImagesUploadComponent;
  let fixture: ComponentFixture<NgxImagesUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImagesUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImagesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
