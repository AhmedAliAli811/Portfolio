import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project3.component.html',
  styleUrl: './project3.component.css'
})
export class Project3Component {
img = [
  "./assets/project3/1-Home_Dashboard.png",
  "./assets/project3/2-Movies_Dasboard.png",
  "./assets/project3/3-Crews_Dashboard.png",
  "./assets/project3/4-Database_Schema.png"
]
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
