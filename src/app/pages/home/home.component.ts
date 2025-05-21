import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  
  categories = [
    {
      name: 'Graphics Cards',
      image: 'https://images.unsplash.com/photo-1623934199123-aec32118eca4?ixlib=rb-4.0.3',
      description: 'High-performance graphics cards for gaming and professional work'
    },
    {
      name: 'Processors',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3',
      description: 'Powerful CPUs from AMD and Intel for all your computing needs'
    },
    {
      name: 'Memory',
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3',
      description: 'High-speed RAM modules for seamless multitasking and performance'
    },
    {
      name: 'Storage',
      image: 'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?ixlib=rb-4.0.3',
      description: 'SSDs and HDDs for fast and reliable data storage solutions'
    }
  ];
  
  testimonials = [
    {
      name: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'ThunderPC has the best selection of graphics cards I\'ve found anywhere. Great prices and fast shipping!',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'I built my dream gaming PC with parts exclusively from ThunderPC. Their customer service is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Wong',
      image: 'https://randomuser.me/api/portraits/men/59.jpg',
      quote: 'As an IT professional, I rely on quality parts for client builds. ThunderPC delivers every time.',
      rating: 4
    }
  ];
  
  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
    });
  }
  
  handleProductClick(product: Product): void {
    console.log('Product clicked:', product);
    // Navigate to product detail page in the future
  }
}
