import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  };

  services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'IT Consulting',
    'Other'
  ];

  contactInfo = [
    {
      title: 'Email',
      value: 'jaypas@invsoftwaresolutions.com',
      icon: '📧'
    },
    {
      title: 'Website',
      value: 'www.invsoftwaresolutions.com',
      icon: '🌐'
    },
    {
      title: 'Phone',
      value: '(607) 331-8233',
      icon: '📞'
    },
    {
      title: 'Address',
      value: '2926 Fallscreek Ct, Pearland, TX 77584',
      icon: '📍'
    },
    {
      title: 'CEO',
      value: 'Jay Pasala',
      icon: '👤'
    },
    {
      title: 'Company',
      value: 'INV Software Solutions, LLC.',
      icon: '🏢'
    }
  ];

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    };
  }
}
