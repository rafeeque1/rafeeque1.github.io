import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-slate-800 py-6">
      <div className="container mx-auto px-6 text-center text-slate-400">
        © {new Date().getFullYear()} Rafeeque Aazam. Built with React & Tailwind.
      </div>
    </footer>
  )
}