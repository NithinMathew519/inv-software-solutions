import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showSuccessMessage = false;
  isSubmitting = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check if the form was submitted successfully
    this.route.queryParams.subscribe(params => {
      if (params['submitted'] === 'true') {
        this.showSuccessMessage = true;
        // Hide the message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }
    });
  }

  async onFormSubmit(event: Event) {
    event.preventDefault();

    if (this.isSubmitting) return;

    this.isSubmitting = true;
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjkoyjkz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.showSuccessMessage = true;
        form.reset();

        // Hide the message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }
  contactInfo = [
    {
      title: 'Email',
      value: 'info@invsoftwaresolutions.com',
      icon: '📧'
    },
    {
      title: 'Website',
      value: 'www.invsoftwaresolutions.com',
      icon: '🌐'
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
}
