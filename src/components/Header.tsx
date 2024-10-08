// components/Header.tsx

'use client';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "../../public/logo.png"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg text-gray-800' 
          : 'bg-gray-800 bg-opacity-90 text-white'
      }`}>
        <div className="container mx-auto flex items-center justify-between p-2 sm:p-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
              <AvatarImage src={Logo.src} width={32} height={32} alt="Azhar Nada" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <h1 className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>Azhar Nada</h1>
          </div>
          <nav>
            <ul className="flex space-x-2 sm:space-x-4">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`text-sm sm:text-base transition-colors duration-300 ${
                      isScrolled
                        ? 'text-gray-600 hover:text-blue-600'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    )
  }