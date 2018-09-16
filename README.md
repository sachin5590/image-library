

# Getting Started

## Installation
npm install ngx-upload-image --save

## Usage
In your app.module.ts import it using @NgModule decorator.
```
import { NgxImagesUploadModule } from 'ngxImagesUpload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImagesUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Dependencies
Also import font-awesome into your application
npm install font-awesome --save


## Then in HTML
```
<ngx-ImageUpload
    (getImage)="saveImage($event)">
</ngx-ImageUpload>
```
You will get all the images saved by the user, one at a time with getImage event.


## Customization 
```
    <ngx-ImageUpload    
        [extensions]="['image/jpeg']"
        [wrongExtensionTypeMessage]="'Please enter image of correct extension type'"
        [maxFileSize]="1048576"
        [maxFileSizeMessage]="'Image size is more than the max file size'"
        [buttonMessage]="'UPLOAD IMAGE'"
        [dropBoxMessage]="'Drop your images here!'"
        [preview]="true"
        [max]="5"
        [displayAlert]="false"
        (alertMessage)="getErrorMessage($event)"
        (getImage)="saveImage($event)">
    </ngx-ImageUpload>
```
 ### [extensions]
 Default is 'image/png' and 'image/jpeg'. Upload images with specific extensions. You  can use any extension at your whim, just add extension to the list.

### [wrongExtensionTypeMessage]
If extension of image not there in extensions array, what message user should see. Default is 'Please enter image of correct extension type'.

### [maxFileSize]
Maximum size of image allowed to upload. By default you can upload any image size.

### [maxFileSizeMessage]
If size of image is more than maxFileSize, this msg will be shown. Default is 'Image size is more than the max file size'.

### [buttonMessage]
What should be displayed inside button of uploading image. Default: 'UPLOAD IMAGE'

### [dropBoxMessage]
Message after the button. Default: 'Drop your images here!'

### [preview]
Whether user should be able to see the uploaded image. Default is true.

### [max]
How many images user should be able to upload. Default is 100.

### [displayAlert]
If an error occurs related to maxFileSize or extensions, whether user should be able  to see the alert or not. Default is true. If you want to customize the error, set this property to false and get the errorMessage from alertMessage event.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details