import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and frameworks',
      features: [
        'Responsive Design',
        'Modern Frameworks (Angular, React, Vue)',
        'RESTful APIs',
        'Database Integration',
        'Performance Optimization'
      ],
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions for digital products and services',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business',
      features: [
        'SEO & SEM',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      icon: '📈'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      features: [
        'Cloud Migration',
        'DevOps & CI/CD',
        'Containerization',
        'Microservices Architecture',
        'Security & Monitoring'
      ],
      icon: '☁️'
    },
    {
      title: 'IT Consulting',
      description: 'Expert technology consulting and strategic planning services',
      features: [
        'Technology Strategy',
        'System Architecture',
        'Code Review & Audit',
        'Performance Optimization',
        'Training & Support'
      ],
      icon: '💡'
    }
  ];

  process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan'
    },
    {
      step: '2',
      title: 'Design & Prototyping',
      description: 'Our team creates wireframes and prototypes for your approval'
    },
    {
      step: '3',
      title: 'Development',
      description: 'We build your solution using best practices and modern technologies'
    },
    {
      step: '4',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures a bug-free launch and smooth deployment'
    }
  ];
}
