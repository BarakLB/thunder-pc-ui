import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'NVIDIA GeForce RTX 4080',
      description: 'High-performance graphics card with ray tracing capabilities.',
      price: 1199.99,
      imageUrl: 'https://images.unsplash.com/photo-1623934199123-aec32118eca4?ixlib=rb-4.0.3',
      category: 'Graphics Cards',
      inStock: true,
      rating: 4.8,
      features: ['16GB GDDR6X', 'DLSS 3.0', '4K Gaming']
    },
    {
      id: 2,
      name: 'AMD Ryzen 9 5950X',
      description: 'High-end desktop processor with 16 cores and 32 threads.',
      price: 549.99,
      imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3',
      category: 'Processors',
      inStock: true,
      rating: 4.9,
      features: ['16 Cores', '32 Threads', '4.9 GHz Max Boost']
    },
    {
      id: 3,
      name: 'Samsung 980 PRO 1TB SSD',
      description: 'PCIe 4.0 NVMe SSD with exceptional performance for gaming and professional use.',
      price: 149.99,
      imageUrl: 'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?ixlib=rb-4.0.3',
      category: 'Storage',
      inStock: true,
      rating: 4.7,
      features: ['PCIe 4.0', '7000 MB/s Read Speed', '5000 MB/s Write Speed']
    },
    {
      id: 4,
      name: 'Corsair Vengeance RGB Pro 32GB',
      description: 'High-performance DDR4 memory with RGB lighting.',
      price: 129.99,
      imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3',
      category: 'Memory',
      inStock: true,
      rating: 4.6,
      features: ['32GB (2x16GB)', '3600MHz', 'RGB Lighting']
    },
    {
      id: 5,
      name: 'ASUS ROG Strix Z690-E Gaming',
      description: 'High-end motherboard for Intel 12th Gen processors with advanced features.',
      price: 449.99,
      imageUrl: 'https://images.unsplash.com/photo-1563770557593-978a5a0b007d?ixlib=rb-4.0.3',
      category: 'Motherboards',
      inStock: false,
      rating: 4.5,
      features: ['LGA 1700', 'DDR5 Support', 'PCIe 5.0']
    },
    {
      id: 6,
      name: 'NZXT Kraken X73 RGB AIO Cooler',
      description: 'Premium liquid CPU cooler with RGB lighting and exceptional cooling performance.',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3',
      category: 'Cooling',
      inStock: true,
      rating: 4.7,
      features: ['360mm Radiator', 'RGB Lighting', 'CAM Software Integration']
    },
    {
      id: 7,
      name: 'Seasonic FOCUS GX-850 Power Supply',
      description: 'Fully modular 80 Plus Gold certified power supply.',
      price: 139.99,
      imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3',
      category: 'Power Supplies',
      inStock: true,
      rating: 4.8,
      features: ['850W', '80+ Gold', 'Fully Modular']
    },
    {
      id: 8,
      name: 'Lian Li O11 Dynamic EVO',
      description: 'Premium mid-tower case with excellent airflow and build quality.',
      price: 169.99,
      imageUrl: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3',
      category: 'Cases',
      inStock: true,
      rating: 4.9,
      features: ['Dual-Chamber Design', 'Tempered Glass', 'Tool-less Installation']
    }
  ];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(product => product.category === category));
  }

  getFeaturedProducts(count: number = 4): Observable<Product[]> {
    return of(this.products
      .filter(p => p.inStock)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count));
  }
}
