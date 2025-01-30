import { Component } from '@angular/core';

@Component({
  standalone :false,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  items = [
    { image: 'assets/images/icons/slider/bg01-slider.svg', 
      title: "Blink Amini Plateforme d'assurance Développement entièrement numérique", 
      content: "Emmenez votre activité d'assurance dans le futur digital avec une plateforme digitale mature et intégrée.Augmentez les ventes et gagnez des clients fidèles avec des portails digitaux en libre-service pour la vente des produits d'assurance, les renouvellements, les réclamations et la gestion des polices d'assurance dans un espace unique. Captez la nouvelle valeur apporté par les écosystèmes digitaux."
    },
    { image: 'assets/images/icons/slider/bg-hr.png', 
      title: "Blink Amini Plateforme d'assurance Développement entièrement numérique", 
      content: "Emmenez votre activité d'assurance dans le futur digital avec une plateforme digitale mature et intégrée.Augmentez les ventes et gagnez des clients fidèles avec des portails digitaux en libre-service pour la vente des produits d'assurance, les renouvellements, les réclamations et la gestion des polices d'assurance dans un espace unique. Captez la nouvelle valeur apporté par les écosystèmes digitaux."
    },
    { image: 'assets/images/icons/slider/bg01-slider.svg', 
      title: "Blink Amini Plateforme d'assurance Développement entièrement numérique", 
      content: "Emmenez votre activité d'assurance dans le futur digital avec une plateforme digitale mature et intégrée.Augmentez les ventes et gagnez des clients fidèles avec des portails digitaux en libre-service pour la vente des produits d'assurance, les renouvellements, les réclamations et la gestion des polices d'assurance dans un espace unique. Captez la nouvelle valeur apporté par les écosystèmes digitaux."
    },
    { image: 'assets/images/icons/slider/bg01-slider.svg', 
      title: "Blink Amini Plateforme d'assurance Développement entièrement numérique", 
      content: "Emmenez votre activité d'assurance dans le futur digital avec une plateforme digitale mature et intégrée.Augmentez les ventes et gagnez des clients fidèles avec des portails digitaux en libre-service pour la vente des produits d'assurance, les renouvellements, les réclamations et la gestion des polices d'assurance dans un espace unique. Captez la nouvelle valeur apporté par les écosystèmes digitaux."
    },
  ];

  itemActive = 0;
  autoSlide: any;

  constructor() {
    this.startAutoSlide();
  }

  next() {
    this.itemActive = (this.itemActive + 1) % this.items.length;
    this.resetAutoSlide();
  }

  prev() {
    this.itemActive = (this.itemActive - 1 + this.items.length) % this.items.length;
    this.resetAutoSlide();
  }

  onThumbnailSelect(index: number) {
    this.itemActive = index;
    this.resetAutoSlide();
  }

  startAutoSlide() {
    this.autoSlide = setInterval(() => this.next(), 5000);
  }

  resetAutoSlide() {
    clearInterval(this.autoSlide);
    this.startAutoSlide();
  }
}
