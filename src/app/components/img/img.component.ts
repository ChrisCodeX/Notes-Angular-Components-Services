import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() imgUrl: string = ''
  @Output() loaded = new EventEmitter();
  imageDefault:string = './assets/images/default.png'

  imgError() {
    this.imgUrl = this.imageDefault
  }

  imgLoaded() {
    console.log('img loaded from the child')
    this.loaded.emit()
  }
}
