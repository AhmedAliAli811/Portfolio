import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  ngOnInit() {
    document.querySelector('.fa-bars')?.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      menu?.classList.toggle('hidden');
    });
  }

  onSubmit() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    emailjs
      .send('service_id', 'template_id', formData, 'Public_key')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  items: any[] = [
    {
      title: 'E-commerce Sales and Inventory Management',
      description:
        'This project provides e-commerce businesses with actionable insights into sales and inventory management using Power BI and SSRS.',
        Route:"/project1"
    },
    {
      title: 'Movie industry Dashboard',
      description:
        'This project provides an analytical dashboard to explore trends, performance metrics, and insights within the movie industry. Designed to help stakeholders make data-driven decisions, this dashboard covers box office performance, genre popularity, and revenue breakdowns.',
         Route:"/project3"
    },
    {
      title: 'HR Analytics Dashboard',
      description:
        'This project showcases an HR Analytics Dashboard created using Power BI to visualize important HR metrics such as employee demographics, promotion and layoff statuses, job levels, job satisfaction, and more. The goal was to help HR teams make data-driven decisions with ease by leveraging interactive and visually appealing data insights.',
         Route:"/project2"
    },
    // { title: 'Customer-Segmentation', description: 'Short description about the project.' ,Route:"/project4" }, 
  ];
}
