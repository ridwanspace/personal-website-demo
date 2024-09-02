 // components/Section.tsx
 import { ReactNode } from 'react'

 interface SectionProps {
   title: string
   children: ReactNode
   id: string
 }

 export default function Section({ title, children, id }: SectionProps) {
   return (
     <section id={id} className="py-10">
       <h2 className="text-3xl font-bold mb-6">{title}</h2>
       {children}
     </section>
   )
 }