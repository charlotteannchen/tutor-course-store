'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CourseCard from '@/components/CourseCard'
import Cart from '@/components/Cart'
import { Course } from '@/types/course'

const sampleCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced Mathematics',
    description: 'Master calculus, algebra, and trigonometry with expert guidance',
    price: 99.99,
    duration: '12 weeks',
    level: 'Advanced',
    instructor: 'Dr. Sarah Chen',
    image: '/math-course.jpg',
    rating: 4.8,
    students: 1247,
    category: 'Mathematics'
  },
  {
    id: 2,
    title: 'English Literature',
    description: 'Explore classic and modern literature with critical analysis',
    price: 79.99,
    duration: '10 weeks',
    level: 'Intermediate',
    instructor: 'Prof. Michael Johnson',
    image: '/english-course.jpg',
    rating: 4.6,
    students: 892,
    category: 'Literature'
  },
  {
    id: 3,
    title: 'Physics Fundamentals',
    description: 'Learn mechanics, thermodynamics, and wave physics',
    price: 119.99,
    duration: '14 weeks',
    level: 'Beginner',
    instructor: 'Dr. Emily Rodriguez',
    image: '/physics-course.jpg',
    rating: 4.9,
    students: 1563,
    category: 'Science'
  },
  {
    id: 4,
    title: 'Computer Programming',
    description: 'Master Python, JavaScript, and web development',
    price: 149.99,
    duration: '16 weeks',
    level: 'Beginner',
    instructor: 'Alex Thompson',
    image: '/programming-course.jpg',
    rating: 4.7,
    students: 2103,
    category: 'Technology'
  }
]

export default function Home() {
  const [cart, setCart] = useState<Course[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (course: Course) => {
    setCart(prev => [...prev, course])
  }

  const removeFromCart = (courseId: number) => {
    setCart(prev => prev.filter(item => item.id !== courseId))
  }

  const totalPrice = cart.reduce((sum, course) => sum + course.price, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover premium online courses taught by expert tutors. 
            Master new skills at your own pace with personalized guidance.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">
              Browse Courses
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </section>

        {/* Course Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onAddToCart={() => addToCart(course)}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from qualified professionals with years of teaching experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with 24/7 access to course materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Earn certificates upon completion to showcase your new skills</p>
            </div>
          </div>
        </section>
      </main>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={removeFromCart}
        totalPrice={totalPrice}
      />
    </div>
  )
}
