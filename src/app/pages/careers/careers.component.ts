import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  openPositions: any[] = []; // Empty array - currently not hiring

  benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, and vision coverage',
      icon: '🏥'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible working hours',
      icon: '🏠'
    },
    {
      title: 'Professional Development',
      description: 'Learning budget and conference attendance opportunities',
      icon: '📚'
    },
    {
      title: 'Competitive Salary',
      description: 'Market-competitive salaries with performance bonuses',
      icon: '💰'
    },
    {
      title: 'Time Off',
      description: 'Generous PTO policy and paid holidays',
      icon: '🏖️'
    },
    {
      title: 'Team Activities',
      description: 'Regular team building events and company retreats',
      icon: '🎉'
    }
  ];

  culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and new ideas from all team members.'
    },
    {
      title: 'Collaborative Environment',
      description: 'Work closely with talented individuals across different disciplines.'
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and professional development opportunities.'
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy balance between work and personal life.'
    }
  ];
}
