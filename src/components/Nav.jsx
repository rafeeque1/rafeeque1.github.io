import React from 'react'

export default function Nav(){
  return (
    <header className="w-full sticky top-0 z-40 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg text-white">Rafeeque A.</a>
        <nav className="space-x-4">
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <a href="#experience" className="text-slate-300 hover:text-white">Experience</a>
          <a href="#education" className="text-slate-300 hover:text-white">Education</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  )
}