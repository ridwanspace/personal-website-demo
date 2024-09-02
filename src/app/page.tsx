// app/page.tsx
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import GoToTop from '@/components/GoToTop'
import Section from '@/components/Section'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import skills from '@/data/skills.json'
import projects from '@/data/projects.json'
import experiences from '@/data/experiences.json'
import certificates from '@/data/certificates.json'
import { Briefcase, Code, Award, GraduationCap } from 'lucide-react'

import SkillImage from "../../public/skill.png"
import Person from "../../public/person.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <main className="container mx-auto px-4">
        <section id="about" className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg my-12 shadow-xl">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col lg:flex-row items-start justify-between">
              <div className="lg:w-3/5 mb-10 lg:mb-0 pr-8">
                <p className="text-xl mb-8 leading-relaxed">
                  As a <span className="font-semibold">Data Engineer</span> with over 3 years of experience, I specialize in modernizing data management and fostering innovative solutions. My journey in the world of data has been driven by a passion for transforming complex information into actionable insights.
                </p>
                <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Advanced proficiency in <em>Python</em>, <em>SQL</em>, <em>AWS</em>, and <em>Google Cloud Platform</em></span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Design and implementation of scalable data pipelines and ETL processes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Experience with big data technologies like <em>Hadoop</em>, <em>Spark</em>, and <em>Kafka</em></span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Cloud infrastructure management using <em>Terraform</em> and <em>Kubernetes</em></span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Data governance and quality assurance implementation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Continuous integration and deployment (CI/CD) for data projects</span>
                  </li>
                </ul>
                <p className="text-xl mb-8 leading-relaxed italic">
                  I thrive on challenges and continuously seek to expand my knowledge in the rapidly evolving field of data engineering. My approach combines technical expertise with a strong focus on business objectives, ensuring that data solutions drive real-world value.
                </p>
              </div>
              <div className="lg:w-2/5 relative">
                <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={Person}
                    alt="Azhar Nada - Data Engineer"
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                  <div className="mt-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Azhar Nada</h3>
                    <p className="text-xl text-gray-600 mb-6">Data Engineer | Cloud Expert | Innovator</p>
                    <div className="flex space-x-6">
                      <a href="https://linkedin.com/in/azharizz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">My Professional Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Briefcase className="w-10 h-10 text-blue-500" />
                  <div>
                    <h3 className="text-xl font-bold">{exp.title} at {exp.company}</h3>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg my-10">
          <h2 className="text-3xl font-bold mb-10 text-center">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            {projects.projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md hover:shadow-lg transition duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Code className="w-10 h-10 text-pink-300" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Expertise</h2>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.skills.map((skill, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <Image
                src={SkillImage}
                alt="Technical Skills"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg my-10">
          <h2 className="text-3xl font-bold mb-10 text-center">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {certificates.certificates.map((cert, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md hover:shadow-lg transition duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Award className="w-10 h-10 text-yellow-300" />
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                </CardHeader>
                <CardContent>
                  <p>Issuer: {cert.issuer}</p>
                  <p>Date: {cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <GoToTop />
    </div>
  )
}