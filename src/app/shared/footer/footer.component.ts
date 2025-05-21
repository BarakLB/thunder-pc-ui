import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    {
      title: 'Product Categories',
      links: [
        { label: 'Graphics Cards', url: '/store?category=Graphics Cards' },
        { label: 'Processors', url: '/store?category=Processors' },
        { label: 'Memory', url: '/store?category=Memory' },
        { label: 'Storage', url: '/store?category=Storage' },
        { label: 'Motherboards', url: '/store?category=Motherboards' }
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { label: 'Contact Us', url: '/contact' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Shipping & Returns', url: '/shipping' },
        { label: 'Warranty', url: '/warranty' },
        { label: 'Track Order', url: '/track-order' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Careers', url: '/careers' },
        { label: 'Blog', url: '/blog' },
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms of Service', url: '/terms' }
      ]
    }
  ];
}
