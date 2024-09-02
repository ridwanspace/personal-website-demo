// components/Header.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Azhar Izzannada" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Azhar Nada</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        </ul>
      </nav>
    </header>
  )
}