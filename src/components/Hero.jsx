import React from 'react'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
      <div className="md:col-span-2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-primary">Rafeeque Aazam Ansar</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl">
          C++ Software Engineer having 7+ years of exeperienced focused on high-performance and low latency backends, parser engines and cloud-native microservices.
          Experienced with Drogon C++, ANTLR4, AWS Services, and focusing on fast C++ backends like API's , Middleware, Even Driven Applications, Grammar Development using ANTLR4 etc.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/assets/Rafeeque_resume.pdf" download className="px-4 py-2 rounded-md glow border border-slate-700 text-sm">Download Resume</a>
          <a href="mailto:aazamrafeeque0@gmail.com" className="px-4 py-2 rounded-md border border-slate-700 text-sm">Contact</a>
          <a href="https://github.com/rafeeque1" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-slate-700 text-sm">GitHub</a>
        </div>
        <div className="mt-4 text-sm text-slate-400">Hyderabad, IN • Open to freelance & remote opportunities</div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="w-48 h-48 rounded-full overflow-hidden ring-1 ring-slate-700 glow">
          <img src="/assets/profile.jpg" alt="Rafeeque" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}