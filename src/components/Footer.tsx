// components/Footer.tsx
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          &copy; {currentYear} Azhar Nada. Made with 
          <Heart className="w-5 h-5 mx-1 text-red-500 fill-current" /> 
          from Jakarta
        </p>
      </div>
    </footer>
  )
}