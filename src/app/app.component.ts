import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'my-store';
  inputParent:string = '';

  onLoaded() {
    console.log('image loaded for the parent')
  }
}
