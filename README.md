# Tutor Course Store

A modern e-commerce application for selling online tutoring courses. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎓 **Course Catalog**: Browse and preview available courses
- 🛒 **Shopping Cart**: Add courses to cart and manage selections
- 💳 **Checkout Process**: Secure payment integration ready
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Modern UI**: Beautiful, professional interface
- ⚡ **Fast Performance**: Built with Next.js for optimal speed

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Next.js built-in bundler

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tutor-course-store
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
tutor-course-store/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # Reusable React components
│   ├── types/         # TypeScript definitions
│   └── lib/           # Utility functions
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
└── README.md          # Setup instructions

src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── CourseCard.tsx  # Course display card
│   └── Cart.tsx        # Shopping cart
├── types/              # TypeScript type definitions
│   └── course.ts       # Course interface
└── lib/                # Utility functions
    └── utils.ts        # Common utilities
```

## Customization

### Adding New Courses

Edit the `sampleCourses` array in `src/app/page.tsx` to add your own courses:

```typescript
const sampleCourses: Course[] = [
  {
    id: 1,
    title: 'Your Course Title',
    description: 'Course description...',
    price: 99.99,
    duration: '8 weeks',
    level: 'Beginner',
    instructor: 'Your Name',
    image: '/course-image.jpg',
    rating: 4.8,
    students: 100,
    category: 'Your Category'
  }
]
```

### Styling

The app uses Tailwind CSS for styling. You can customize colors, spacing, and other design tokens in `tailwind.config.js`.

## Deployment

This app can be easily deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the GitHub repository.
