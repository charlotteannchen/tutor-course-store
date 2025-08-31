import { Star, Users, Clock, BookOpen } from 'lucide-react'
import { Course } from '@/types/course'

interface CourseCardProps {
  course: Course
  onAddToCart: () => void
}

export default function CourseCard({ course, onAddToCart }: CourseCardProps) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      {/* Course Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
        <BookOpen className="w-16 h-16 text-primary-600" />
      </div>

      {/* Course Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
            {course.category}
          </span>
          <span className="text-2xl font-bold text-gray-900">
            ${course.price}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Instructor */}
        <p className="text-sm text-gray-600">
          by <span className="font-medium">{course.instructor}</span>
        </p>

        {/* Level Badge */}
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 text-xs font-medium rounded ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {course.level}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="w-full btn-primary mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
