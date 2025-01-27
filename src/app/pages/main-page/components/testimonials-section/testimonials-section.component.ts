import { Component } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css'
})
export class TestimonialsSectionComponent {
  testimonials = [
    {
      text: 'Wevion transformed how we scale our design needs. The streamlined process and professional output exceeded our expectations every time!',
      name: 'Alex T.',
      role: 'SaaS Founder',
      image: 'assets/images/avatars/user1.svg'
    },
    {
      text: 'Wevion’s subscription model saved us from the hassle of hiring in-house. Their attention to detail and customer service are unmatched.',
      name: 'Navin A.',
      role: 'Marketing Director',
      image: 'assets/images/avatars/user2.svg'
    },
    {
      text: 'Wevion completely revamped our website’s visuals, and the results speak for themselves. Traffic and engagement have improved a lot.',
      name: 'Chris B.',
      role: 'Brand Strategist',
      image: 'assets/images/avatars/user3.svg'
    },
    {
      text: 'I’ve used other design services, but Wevion stands out with its consistency and speed. Our team can now focus on growth.',
      name: 'Michael L.',
      role: 'E-commerce Manager',
      image: 'assets/images/avatars/user4.svg'
    },
    {
      text: 'We needed designs at scale, and Wevion delivered—on time, every time. The quality is exceptional, and the process is so simple.',
      name: 'Navin A.',
      role: 'Agency Owner',
      image: 'assets/images/avatars/user5.svg'
    },
    {
      text: 'The templates are a game-changer. With Wevion, we no longer worry about design bottlenecks—everything just flows.',
      name: 'Liam H.',
      role: 'Product Manager',
      image: 'assets/images/avatars/user6.svg'
    }
  ];
}
