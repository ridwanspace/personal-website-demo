export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Azhar Nada. All rights reserved.</p>
        </div>
      </footer>
    )
  }