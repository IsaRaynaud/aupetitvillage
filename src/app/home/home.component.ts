import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      title: 'Figurine de guerrier gaulois',
      image: '../../assets/images/figurine-guerrier-gaulois.webp',
      price: '26,90',
      description: 'Texte de présentation complète du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ante vel sem malesuada, eget varius erat efficitur. Vestibulum nec tempus arcu. Nullam rhoncus feugiat risus eu interdum. Integer dictum vehicula dolor, nec consectetur lorem lobortis at. Aliquam cursus volutpat ipsum sit amet ultrices. Donec metus ex, lacinia quis sem in, elementum eleifend turpis. '
    },
    {
      title: 'Figurine de soldat romain',
      image: '../../assets/images/figurine-soldat-romain.webp',
      price: '28,90',
      description: 'Texte de présentation complète du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ante vel sem malesuada, eget varius erat efficitur. Vestibulum nec tempus arcu. Nullam rhoncus feugiat risus eu interdum. Integer dictum vehicula dolor, nec consectetur lorem lobortis at. Aliquam cursus volutpat ipsum sit amet ultrices. Donec metus ex, lacinia quis sem in, elementum eleifend turpis. '
    },
    {
      title: 'Figurine de guerrier gaulois à peindre',
      image: '../../assets/images/figurine-gaulois-peindre.webp',
      price: '16,90',
      description: 'Texte de présentation complète du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ante vel sem malesuada, eget varius erat efficitur. Vestibulum nec tempus arcu. Nullam rhoncus feugiat risus eu interdum. Integer dictum vehicula dolor, nec consectetur lorem lobortis at. Aliquam cursus volutpat ipsum sit amet ultrices. Donec metus ex, lacinia quis sem in, elementum eleifend turpis. '
    },
    {
      title: 'Figurine de soldat romain à peindre',
      image: '../../assets/images/figurine-romain-peindre.webp',
      price: '17,90',
      description: 'Texte de présentation complète du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ante vel sem malesuada, eget varius erat efficitur. Vestibulum nec tempus arcu. Nullam rhoncus feugiat risus eu interdum. Integer dictum vehicula dolor, nec consectetur lorem lobortis at. Aliquam cursus volutpat ipsum sit amet ultrices. Donec metus ex, lacinia quis sem in, elementum eleifend turpis. '
    },
  ];
}
