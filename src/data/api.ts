import p11 from "../assets/Project1/1-Inventory_Dashboard.png"
import p12 from "../assets/Project1/2-Sales_Dashboard.png"
import p13 from "../assets/Project1/3-SSRS_Report.png"


import p21 from "../assets/Project3/1-Home_Dashboard.png"
import p22 from "../assets/Project3/2-Movies_Dasboard.png"
import p23 from "../assets/Project3/3-Crews_Dashboard.png"
import p24 from "../assets/Project3/4-Database_Schema.png"

import p31 from "../assets/Project2/1-Home.png"
import p32 from "../assets/Project2/2-Actions.png"
import p33 from "../assets/Project2/3- Details.png"


import linkedin from "../assets/icons/icons8-linkedin-logo-48.png"
import github from "../assets/icons/icons8-github-logo-94.png"
import mail from "../assets/icons/icons8-mail-50.png"

import dataanalytics from "../assets/icons/icons8-data-analytics-53.png"
import powerbi from "../assets/icons/icons8-power-bi-2021-48.png"
import sql from "../assets/icons/icons8-sql-server-48.png"
import mysql from "../assets/icons/icons8-mysql-48.png"
import postgresql from "../assets/icons/icons8-postgresql-100.png"
import ssrs from "../assets/icons/ssrs.png"
import python from "../assets/icons/icons8-python-48.png"
import excel from "../assets/icons/icons8-excel-48.png"
import pandas from "../assets/icons/icons8-pandas-48.png"
import numpy from "../assets/icons/icons8-numpy-48.png"
import tensorflow from "../assets/icons/icons8-tensorflow-48.png"
import pytorch from "../assets/icons/icons8-pytorch-48.png"
import matplot from "../assets/icons/Matplotlib.png"
import seaborn from "../assets/icons/seaborn-icon_.png"
import plotly from "../assets/icons/plotly_.png"
import looker from "../assets/icons/icons8-google-looker-48.png"
import whatsapp from "../assets/icons/icons8-whatsapp-logo-94.png"


const api = {
  hero: {
    title: "Hi, I'm Ahmed Ali Ali",
    description: "A Fresh BI Engineer and Data Analyst with a knack for building insights.",
    social: [{
      link: "https://github.com/AhmedAliAli811",
      img: github
    },
      {
        link: "https://www.linkedin.com/in/ahmedalialy/",
        img: linkedin
      },
      {
        link: "mailto:aly869556@gmail.com",
        img: mail
      },
      {
        link: "https://wa.me/+201142092491", // Replace with your number in the format: countrycode+number
        img: whatsapp
      }
    ],
    cv: {
      title: "CV",
      link: "https://drive.google.com/file/d/1GYh16cKKJHiHcvC6rXbrFEC6gqGUG1n0/view?usp=sharing"
    }
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "E-commerce Sales and Inventory Management Dashboard",
        description: "The Sales and Inventory Management Dashboard is designed to provide business owners and decision-makers with insightful analytics related to sales performance and inventory levels. By leveraging Power BI's robust data visualization capabilities, the dashboard enables users to make informed decisions that enhance operational efficiency and profitability.",
        imgs: [p11, p12, p13],
        features: {
          title: "Key Features",
          items: ["Inventory Analysis: ABC, VED, and HML categorizations for strategic inventory planning.",
            "Inventory Analysis: ABC, VED, and HML categorizations for strategic inventory planning.",
            "SSRS Reporting: Additional inventory insights through comprehensive reports."
          ]
        },
        tools: {
          title: "Tools used",
          items: [
            {tool: "Power Bi", img: powerbi},
            {tool: "SQL Server", img: sql},
            {tool: "SSRS", img: ssrs}
          ]
        },
        gitUrl: "https://github.com/AhmedAliAli811/E-Commerce-Analysis"
      },
      {
        title: "Movie Industry Analysis",
        description: "The TMDB Data Analysis project leverages the TMDB movie database to analyze various aspects of film performance, focusing on profitability, crew and cast roles, and viewer ratings. The primary goal is to gain deeper insights into movie success factors by integrating, cleaning, and enriching the data, and then analyzing it through a Power BI dashboard.",
        imgs: [p21, p22, p23, p24],
        features: {
          title: "Key Features",
          items: [
            "Box Office Analysis: Visualizations of revenue trends across years, genres, and regions.",
            "Genre Popularity: Insights into trending genres over time.",
            "Revenue Breakdown: Comparison of production budgets versus box office returns."]
        },
        tools: {
          title: "Tools used",
          items: [
            {tool: "Power Bi", img: powerbi},
            {tool: "SQL Server", img: sql},
            {tool: "Python", img: python},
          ]
        },
        gitUrl: "https://github.com/AhmedAliAli811/Movie-Analysis-Depi-GP"
      },
      {
        title: "HR Dashboard",
        description: "This project showcases an HR Analytics Dashboard created using Power BI to visualize important HR metrics such as employee demographics, promotion and layoff statuses, job levels, job satisfaction, and more. The goal was to help HR teams make data-driven decisions with ease by leveraging interactive and visually appealing data insights.",
        imgs: [p31, p32, p33],
        features: {
          title: "Key Features",
          items: [
            "Track promotion readiness and layoff trends.",
            "Analyze employee job satisfaction and service years.",
            "Improve HR decision-making and policy adjustments."]
        },
        tools: {
          title: "Tools used",
          items: [
            {tool: "Power Bi", img: powerbi},
          ]
        },
        gitUrl: "https://github.com/AhmedAliAli811/HR_PowerBI_Dashboard"
      }
    ]
  },
  experiance: {
    title: "Experience",
    items: [
      {
        role: "Bachelor of Computer Science",
        date: "9/2020 - 5/2024",
        company: "Faculty of Computers and Artificial Intelligence - Cairo University",
        city: "Cairo-Egypt"
      },
      {
        role: "BI Internship",
        date: "4/2024 - 10/2024",
        company: "Digital Egypt Pioneers Initiative (DEPI)",
        city: "Cairo-Egypt"
      }
    ]
  },
  skills: {
    title: "Skills",
    items: [
      {skill: "Python", img: python},
      {skill: "SQL Server", img: sql},
      {skill: "Power Bi", img: powerbi},
      {skill: "Excel", img: excel},
      {skill: "Data Analytics", img: dataanalytics},
      {skill: "SSRS", img: ssrs},
      {skill: "Github", img: github},
      {skill: "MySQL", img: mysql},
      {skill: "PostgreSQL", img: postgresql},
      {skill: "Pandas", img: pandas},
      {skill: "NumPy", img: numpy},
      {skill: "Matplotlib", img: matplot},
      {skill: "Plotly", img: plotly},
      {skill: "Seaborn", img: seaborn},
      {skill: "Tensorflow", img: tensorflow},
      {skill: "Pytorch", img: pytorch},
      {skill: "Looker", img: looker},

    ]
  },
  about: {
    title: "About Me",
    description: "Recent graduate from the Faculty of Computer and Artificial Intelligence with a strong background in data analysis, report generation, and problem-solving. Proficient in SQL, data visualization tools, and key computer science concepts such as algorithms, data structures, and database management. Focused on delivering insights that drive informed decision-making and support business success.",

  },
  copyrights: "© 2024 Ahmed Ali. All Rights Reserved."
}
export default api
