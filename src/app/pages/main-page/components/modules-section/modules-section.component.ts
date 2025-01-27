import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-modules-section',
  // imports: [ModuleCardComponent],
  templateUrl: './modules-section.component.html',
  styleUrl: './modules-section.component.css'
})
export class ModulesSectionComponent {
  modules = [
    {
      title: 'Reassurance',
      description: 'Gérez les traités de réassurance (quota Share, Surplus, Excess of Loss) ainsi que la réassurance facultative, avec des Plans totalement personnalisables.',
      iconPath: 'assets/images/icons/reassurance.svg'
    },
    {
      title: 'Offre & Pack',
      description: 'Créez vos offres et vos packs en leurs associant des garanties et une tarification spécifiques adaptés aux budgets de vos clients .',
      iconPath: 'assets/images/icons/offre-pack.svg'
    },
    {
      title: 'Sinistre',
      description: 'Facilitez la déclaration des sinistres par les assurés, les opérations internes d\'évaluation par branche, la gestion des tiers, les opérations de paiement, de clôture, de recours et d\'expertise.',
      iconPath: 'assets/images/icons/sinistre.svg'
    },
    {
      title: 'Souscription',
      description: 'Gérez le cycle de vie de vos polices d\'assurance (gestion des devis, des contrats, des avenants, des avis d\'échéance, des encaissements et des règles spécifiques de recouvrement).',
      iconPath: 'assets/images/icons/souscription.svg'
    },
    {
      title: 'Comptabilité & Tresorerie',
      description: 'Paramétrez et personnalisez le schéma comptable de chaque transaction technique. Le rapprochement et le lettrage des écritures comptables sont générés automatiquement,',
      iconPath: 'assets/images/icons/comptabilite-tresorie.svg'
    },
    {
      title: 'Workflow',
      description: 'Simplifiez et accélérez votre processus de Souscription et Automatisez le processus de déclaration des sinistres pour gagner en efficacité et mieux informer les clients',
      iconPath: 'assets/images/icons/workflow.svg'
    },
    {
      title: 'Portails Web',
      description: 'Partagez l\'information avec vos assurés, vos partenaires et les organismes tiers via des espaces web dédiés sécurisés des API adaptables aux objets assurés',
      iconPath: 'assets/images/icons/portails-web.svg'
    },
    {
      title: 'Espace Client',
      description: 'Consultez vos assurances en détails, téléchargez vos documents et effectuez vos démarches en toute liberté depuis votre Espace client',
      iconPath: 'assets/images/icons/espace-client.svg'
    },
    {
      title: 'Statistiques & Kpi',
      description: 'Créez vos tableaux de bord de manière autonome, éditez des rapports statistiques et des états pour tous vos besoins internes ou externes.',
      iconPath: 'assets/images/icons/comptabilite-tresorie.svg'
    }
  ];

}
