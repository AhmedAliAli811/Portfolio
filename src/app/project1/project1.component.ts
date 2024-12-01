import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlowbiteService } from '../flowbite.service';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css',
})
export class Project1Component {
  imgs = [
    './assets/Project1/1-Inventory_Dashboard.png',
    './assets/Project1/2-Sales_Dashboard.png',
    './assets/Project1/3-SSRS_Report.png',
    './assets/Project1/4-Data_Model.png',
  ];
  activeSlide = 0;

  // Navigate to the previous slide
  prevSlide(): void {
    this.activeSlide =
      this.activeSlide === 0 ? this.imgs.length - 1 : this.activeSlide - 1;
  }

  // Navigate to the next slide
  nextSlide(): void {
    this.activeSlide =
      this.activeSlide === this.imgs.length - 1 ? 0 : this.activeSlide + 1;
  }
}
