import React from 'react'

export default function ProjectCard({title, desc, tech, link}){
  return (
    <article className="p-4 rounded-lg bg-surface/30 border border-slate-700">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      <div className="mt-3 text-xs text-slate-400">{tech}</div>
      <div className="mt-4 flex gap-2">
        <a href={link} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded text-slate-200">View Repo</a>
      </div>
    </article>
  )
}