import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalState } from 'src/app/core/global/global-state';
import { readFile } from '../../utils/file-utils';


@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent extends GlobalState {
  @Input('name') name: string;
  @Input('label') label: string;
  @Output() fileUpload: EventEmitter<any> = new EventEmitter();
  error = '';
  fileDataUrl;
  file;
  fileName = '';
  constructor() {
    super();
  }
  ngOnChanges(){
    }
  async fileChanged({ target }) {
    this.file = null;
    if (target.files && target.files.length) {
      this.file = target.files[0];
      const bigFile = this.file.size > 2097152;
      if (bigFile) {
        this.error = "fileTooBig";
        return;
      }
      this.error = "";
      this.fileDataUrl = await readFile(this.file);
      this.fileName = this.file.name;
      this.emitImage();
      this.fileDataUrl = "";
    }
  }
  emitImage() {
    this.fileUpload.emit({
      url: this.fileDataUrl,
      file: this.file,
      fileName: this.fileName
    });
  }
}
