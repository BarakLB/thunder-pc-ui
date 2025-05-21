import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {
  products = signal<Product[]>([]);
  filteredProducts = signal<Product[]>([]);
  selectedCategory = signal<string | null>(null);
  
  categories = [
    'All Products',
    'Graphics Cards',
    'Processors',
    'Memory',
    'Storage',
    'Motherboards',
    'Cooling',
    'Power Supplies',
    'Cases'
  ];
  
  sortOptions = [
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' }
  ];
  
  selectedSort = signal<string>('rating-desc');
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    // Get products
    this.productService.getAllProducts().subscribe(products => {
      this.products.set(products);
      
      // Check for category filter in URL
      this.route.queryParams.subscribe(params => {
        const category = params['category'] || null;
        this.selectedCategory.set(category);
        this.filterProducts();
      });
    });
  }
  
  filterProducts(): void {
    let filtered = [...this.products()];
    
    // Apply category filter
    if (this.selectedCategory() && this.selectedCategory() !== 'All Products') {
      filtered = filtered.filter(p => p.category === this.selectedCategory());
    }
    
    // Apply sorting
    const sort = this.selectedSort();
    switch (sort) {
      case 'rating-desc':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    
    this.filteredProducts.set(filtered);
  }
  
  selectCategory(category: string | null): void {
    if (category === 'All Products') {
      category = null;
    }
    
    // Update URL with category parameter
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: category ? { category } : {},
      queryParamsHandling: 'merge'
    });
    
    this.selectedCategory.set(category);
    this.filterProducts();
  }
  
  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedSort.set(value);
    this.filterProducts();
  }
  
  handleProductClick(product: Product): void {
    console.log('Product clicked:', product);
    // Navigate to product detail page in the future
  }
}
