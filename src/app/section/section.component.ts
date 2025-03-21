import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  imports: [
    MatIcon,
    NgIf
  ],
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title="";
  @Input() subtitle="";
  @Input() icon: string=""

  constructor(
  ) { }


}
