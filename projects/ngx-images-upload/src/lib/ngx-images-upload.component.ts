import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngxImagesUpload',
  template: `
  <div class="img-ul">
    <div *ngIf="max > count" class="img-upload">
      <label class="img-ul-upload img-ul-button">
        <input type="file" #file accept="extensions" (change)="uploadImage($event)"/>{{ buttonMessage }}
      </label>
      <span *ngIf="count > 0" class="img-ul-clear img-ul-button" (click)="removeAll()">
        Clear
      </span>
      <span class="img-ul-drag-box-msg">
          {{ dropBoxMessage }}
      </span>
    </div>
    <div class="img-ul-container">
      <div *ngFor="let url of urls" class="img-ul-image"  [ngStyle]="{'display': !preview ? 'none' : 'inherit'}">
        <img [src]="url">
        <i class="fa fa-times img-ul-x-mark" (click)="removeOne(url)"></i>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./ngx-images-upload.component.css']
})
export class NgxImagesUploadComponent implements OnInit {

  @Input() max = 100;
  @Input() buttonMessage = 'UPLOAD IMAGE';
  @Input() dropBoxMessage = 'Drop your images here!';
  @Input() maxFileSize = '';
  @Input() maxFileSizeMessage = 'Image size is more than the max file size';
  @Input() extensions = ['image/png', 'image/jpeg'];
  @Input() wrongExtensionTypeMessage = 'Please enter image of correct extension type';
  @Input() preview = true;
  @Input() displayAlert = true;
  @Output() alertMessage = new EventEmitter<any>();
  @Output() getImage = new EventEmitter<any>();
  public image = '';
  count = 0;
  urls: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  uploadImage(event) {
    console.log('data', event);

    if (event.target.files && event.target.files[0]) {
      if ( this.validFileType(event.target.files[0].type)) {
        if (this.maxFileSize !== '') {
          if (event.target.files[0].size <= this.maxFileSize) {
            if (this.max > 0) {
              this.setURL(event);
            }
          } else {
            if (this.displayAlert) {
              alert(this.maxFileSizeMessage);
            } else {
              this.alertMessage.emit({ isError: true, errorMessage: this.maxFileSizeMessage });
            }
          }
        } else {
          if (this.max > 0) {
            this.setURL(event);
          }
        }
      } else {
        if (this.displayAlert) {
          alert(this.wrongExtensionTypeMessage);
        } else {
          this.alertMessage.emit({ isError: true, errorMessage: this.wrongExtensionTypeMessage });
        }
      }
    }
  }

  setURL(event) {
    let reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.urls.push((<FileReader>event.target).result);
      this.image = (<FileReader>event.target).result;
      this.getImage.emit(this.image);
      this.count = this.count + 1;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  validFileType(fileType): boolean {
    let output = false;
    this.extensions.map((item) => {
      if (item === fileType) {
        output = true;
      }
    });
    return output;
  }

  removeAll() {
    this.urls = [];
    this.count = 0;
  }

  removeOne(url) {
    const setUrls = this.urls.filter((uri) => {
      if (uri !== url) {
        return uri;
      }
    });
    this.urls = setUrls;
    this.count = this.urls.length;
  }

}
