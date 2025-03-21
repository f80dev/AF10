import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-reversebloc',
  standalone: true,
  templateUrl: './reversebloc.component.html',
  imports: [
    MatIcon,
    NgIf
  ],
  styleUrls: ['./reversebloc.component.scss']
})
export class ReverseblocComponent  {

  @Input() data:any={}
  @Input() width="300px"
  @Input() minwidth="350px"
  @Input() style:any={}
  @Input() maxwidth="450px"
  @Input() height="300px"
  @Input() margin="10px"
  @Input() reverse=false

  @Output() onreverse: EventEmitter<any>=new EventEmitter();
  @Output() onshowmore: EventEmitter<any>=new EventEmitter();

  @Input() title=""
  @Input() icon=""
  @Input() border_color="transparent"


  on_reverse(side=true){
    this.onreverse.emit({data:this.data,side:true});
  }


}
