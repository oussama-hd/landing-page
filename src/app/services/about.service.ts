import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AboutService {
  sections = [
    { title: 'Approche', content: 'Description de l’approche...', open: false },
    { title: 'Vision', content: 'Description de la vision...', open: false },
    { title: 'Mission', content: 'Optimiser l’efficacité...', open: false },
  ];
}
