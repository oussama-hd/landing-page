import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.scss'
})
export class AboutUsSectionComponent {

  sections = [
    {
      id: 'overview',
      title: 'Approche',
      content: 'Développement agile adapté aux besoins spécifiques de chaque client. Intégration transparente garantie par notre processus éprouvé. Support continu et mises à jour régulières.'
    },
    {
      id: 'how-does-it-work',
      title: 'Mission',
      content: 'Créer un écosystème d\'assurance digital, fluide et intelligent, offrant une expérience optimale à tous les acteurs du marché.'
    },
    {
      id: 'inspiration',
      title: 'Mission',
      content: 'Optimiser l\'efficacité opérationnelle des assureurs. Transformer l\'expérience client dans l\'ère digitale. Exploiter le potentiel des données pour une prise de décision éclairée.'
    }
  ];
}
