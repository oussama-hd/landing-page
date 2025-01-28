import { Component } from '@angular/core';

@Component({
  standalone :false,
  selector: 'app-ultime-assurance-section',
  templateUrl: './ultime-assurance-section.component.html',
  styleUrl: './ultime-assurance-section.component.scss'
})
export class UltimeAssuranceSectionComponent {
cards = [
  { 
    icon:"assets/images/ultimeErp/piloter-activite.svg",
    title: 'Pilotez Votre Activité',
    description: 'Toutes vos structures collaborent dans un seul ERP d’assurance...', 
    extraClass: 'b ', 
    isLarge: false ,
    imageUrl: "./assets/images/ultimeErp/bg-pilotez-activite.svg",
  },
  { 
    icon:"assets/images/ultimeErp/innovez-produits.svg",
    title: 'Innovez sur les produits', 
    description: 'Fini les contraintes des logiciels d’assurance archaïques...', 
    extraClass: '', 
    isLarge: false ,
  },
  { 
    icon:"assets/images/ultimeErp/puissance.svg",
    title: 'Puissance', 
    description: 'Les solutions d’assurance sont conçues pour...', 
    extraClass: 'tall', 
    isLarge: false ,
    imageUrl: "./assets/images/ultimeErp/bg-puissance.svg",
  },
  { 
    icon:"assets/images/ultimeErp/modularite.svg",
    title: 'Modularité', 
    description: 'Nos développements modulaires...', 
    extraClass: '', 
    isLarge: false ,
    imageUrl: "./assets/images/ultimeErp/bg-modularite.svg",
  },
  { 
    icon:"assets/images/ultimeErp/disponibilite.svg",
    title: 'Disponibilité', 
    description: 'Nous vous accompagnons dans vos projets...', 
    extraClass: 'b', 
    isLarge: false ,
    imageUrl: "./assets/images/ultimeErp/bg-disponibilite.svg",
  },
  // { 
  //   title: 'Expérience Unique', 
  //   description: 'Toutes les actions et tâches de vos collaborateurs...', 
  //   extraClass: 'large ', 
  //   isLarge: true, 
  //   imageUrl: "./assets/images/ultimeErp/bg-experience2.svg",
  //   }
];

}
