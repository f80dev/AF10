import { Component } from '@angular/core';
import {FxkeyboardComponent} from '../fxkeyboard/fxkeyboard.component';

@Component({
  selector: 'app-test',
  imports: [
    FxkeyboardComponent
  ],
  templateUrl: './test.component.html',
  standalone: true,
  styleUrl: './test.component.css'
})
export class TestComponent {

}
