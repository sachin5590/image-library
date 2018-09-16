import { TestBed, inject } from '@angular/core/testing';

import { NgxImagesUploadService } from './ngx-images-upload.service';

describe('NgxImagesUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxImagesUploadService]
    });
  });

  it('should be created', inject([NgxImagesUploadService], (service: NgxImagesUploadService) => {
    expect(service).toBeTruthy();
  }));
});
