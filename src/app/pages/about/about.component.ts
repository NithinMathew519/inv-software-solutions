import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Jay Pasala',
      position: 'CEO & Founder',
      image: '/assets/images/team/placeholder.svg',
      bio: 'With over 15 years of experience in software development and business strategy, Jay leads INV Software Solutions with a vision for innovative technology solutions.'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: '/assets/images/team/placeholder.svg',
      bio: 'Technical leader with expertise in cloud architecture and modern web technologies.'
    },
    {
      name: 'Mike Chen',
      position: 'Lead Developer',
      image: '/assets/images/team/placeholder.svg',
      bio: 'Full-stack developer passionate about creating scalable and efficient solutions.'
    },
    {
      name: 'Emily Davis',
      position: 'UX/UI Designer',
      image: '/assets/images/team/emily.jpg',
      bio: 'Creative designer focused on user-centered design and beautiful interfaces.'
    }
  ];

  values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and exceed expectations.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.',
      icon: '🛡️'
    }
  ];

  stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
