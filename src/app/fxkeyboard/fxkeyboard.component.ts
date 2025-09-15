import {ChangeDetectorRef, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-fxkeyboard',
  imports: [NgIf],
  templateUrl: './fxkeyboard.component.html',
  standalone: true,
  styleUrl: './fxkeyboard.component.css'
})


export class FxkeyboardComponent implements OnInit, OnDestroy {
  @Input() text: string = '';
  @Input() typingSpeed: number = 40

  displayedText: string = '';
  private typingSubscription: Subscription | null = null;
  showCursor: boolean = true;

  cdRef=inject(ChangeDetectorRef)
  @Input() w="200px"
  @Input() h="200px"


  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnChanges(): void {
    this.resetAnimation();
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private startTypingAnimation(): void {
    let currentIndex = 0;

    this.typingSubscription = interval(this.typingSpeed).subscribe(() => {
      if (currentIndex <= this.text.length) {
        this.displayedText = this.text.substring(0,currentIndex);
        currentIndex++;
        this.cdRef.detectChanges();
      } else {
        this.stopAnimation();
      }
    });
  }

  private resetAnimation(): void {
    this.displayedText = '';
    this.showCursor = true;
    this.cdRef.detectChanges();
  }

  private stopAnimation(): void {
    if (this.typingSubscription) {
      this.typingSubscription.unsubscribe();
    }
    this.showCursor = false;
    this.cdRef.detectChanges();
  }
}
