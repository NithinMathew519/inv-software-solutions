import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions for digital products',
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      icon: '📈'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: '☁️'
    },
    {
      title: 'Consulting',
      description: 'Expert technology consulting and strategy',
      icon: '💡'
    }
  ];

  features = [
    {
      title: 'Expert Team',
      description: 'Our skilled developers and designers bring years of experience'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures reliable and bug-free solutions'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your technical needs'
    }
  ];
}
