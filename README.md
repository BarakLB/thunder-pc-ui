# ThunderPC - Computer Parts Shop

A modern e-commerce application for a computer parts store built with Angular 17. This application provides a seamless shopping experience for customers looking to purchase high-quality computer components.

![ThunderPC Shop](https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&w=1080&q=80)

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Home Page**: Featuring promotional content, featured products, category browsing, testimonials, and newsletter signup
- **Store Page**: Browse the complete catalog of computer parts with filtering and sorting capabilities
- **Category Filtering**: Filter products by categories like Graphics Cards, Processors, Memory, etc.
- **Modern UI**: Clean, professional interface with intuitive navigation
- **Angular 17 Best Practices**: Utilizes the latest Angular features including:
  - Standalone components
  - Signal-based reactivity
  - New control flow syntax (@if, @for)
  - Input/Output decorators
  - SSR (Server-Side Rendering) ready

## Project Structure

```
src/
  app/
    models/          # Data models
    pages/           # Page components (Home, Store)
    services/        # Services for data management
    shared/          # Reusable components
```

## Components

- **Header**: Navigation and brand identity
- **Footer**: Site links and company information
- **Product Card**: Reusable product display component
- **Home Page**: Landing page with featured content
- **Store Page**: Product browsing with filters and sorting

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/thunder-pc-ui.git
   cd thunder-pc-ui
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash 
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Future Enhancements

- Product detail pages
- Shopping cart functionality
- User authentication
- Checkout process
- Admin dashboard for product management
- Integration with backend API for real data

## Technology Stack

- **Angular 17**: Frontend framework
- **SCSS**: For styling
- **TypeScript**: Programming language
- **RxJS**: Reactive programming

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Unsplash for product images
- Angular team for the amazing framework
