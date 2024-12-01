import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project2.component.html',
  styleUrl: './project2.component.css'
})
export class Project2Component {
  img = [
    './assets/Project2/1-Home.png',
    './assets/Project2/2-Actions.png',
    './assets/Project2/3- Details.png', 
   ];
   activeSlide = 0;

   prevSlide(): void {
     this.activeSlide =
       this.activeSlide === 0 ? this.img.length - 1 : this.activeSlide - 1;
   }
 
   nextSlide(): void {
     this.activeSlide =
       this.activeSlide === this.img.length - 1 ? 0 : this.activeSlide + 1;
   }
}
