import { Component } from '@angular/core';

@Component({
  standalone :false,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  items = [
    { 
      id: 1,
      image: 'assets/images/icons/slider/bg01-slider.svg', 
      title: "Blink Amini Plateforme d'assurance Développement entièrement numérique", 
      content: "Emmenez votre activité d'assurance dans le futur digital avec une plateforme digitale mature et intégrée.Augmentez les ventes et gagnez des clients fidèles avec des portails digitaux en libre-service pour la vente des produits d'assurance, les renouvellements, les réclamations et la gestion des polices d'assurance dans un espace unique. Captez la nouvelle valeur apporté par les écosystèmes digitaux.",
      background: "#F7F5FF"
    },
    { 
      id: 2,
      image: 'assets/images/icons/slider/MacBook-Air.svg', 
      title: "BLINK ERP d'Assurance orienté Vente et process en ligne", 
      content: "L'ERP d'assurance BLINK avec ses modules : Automobile, IARD, Vie & Santé, Finances, Réassurances, RH et Immobilisation vous permet de simplifiez tous vos workflow internes. Automatisez les tâches & soyez libre dans la création de produit. Un ERP d'assurance par des assureurs.",
      background: "linear-gradient(to bottom, #F3F9FF, #C4E0FD)"
    },
    { 
      id: 3,
      image: 'assets/images/icons/slider/iPad-Mini.svg', 
      title: "BLINK System de Gestion Ressources Humaines", 
      content: "La solution BLINK GRH & Paie répond a tous les besoins des gestionnaires de ressources humaines et paie. Notre solution est Full Web ne nécessite aucune installation sur les postes des utilisateurs, permettant ainsi de produire facilement et rapidement vos fiches de paie et vos déclarations. Notre solution vous permet d'établir une paie complète et adaptable par contrat de travail, convention collective ......etc, suivant la règlementation algérienne en vigueur.",
      background: "#F7F5FF"
    },
    { 
      id: 4,
      image: 'assets/images/icons/slider/phone (2).svg', 
      title: "L'APPLICATION MOBILE BLINK", 
      content: "Libérez le pouvoir de l'assurance avec l'application mobile Blink ! Gérez en toute transparence la souscription, les réclamations et une pléthore d'autres services, le tout dans la paume de votre main. Blink vous permet de prendre le contrôle de votre parcours d'assurance sans effort. Découvrez une nouvelle ère de l'assurance sur notre application mobile Blink !",
      background: "#FDF3EA"
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
