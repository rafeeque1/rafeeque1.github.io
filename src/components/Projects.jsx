import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'DataModeler as a Service ',
    desc: 'DataModeler as a Service using C++, Drogon & ANTLR4. very fast backend which can parse 2k+ tables informations from sql script and generate final Json response to populate on UI.',
    tech: 'C++, Drogon, ANTLR4, AWS, Conan Package Manager, CMake, Boost, STL',
    link: ''
  },
  {
    title: 'AWS Service Integrator (C++ library)',
    desc: 'C++ library/Wrapper to handle S3, SQS, SES and other AWS patterns for backend services.',
    tech: 'C++, AWS SDK, CMake, Conan Package Manager ,Boost, STL',
    link:''
  },
  {
    title: 'DataShield (PII Detection & Masking Platform) Backend',
    desc: 'Designed a very fast middleware filter using Drogon C++ web framework to intercept the api call to Detects and masks personal data (email, phone, credit card) in SQL/CSV',
    tech: 'C++, Drogon C++ Web Framework, CMake, Conan Package Manager ,Boost, STL',
    link: ''
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}