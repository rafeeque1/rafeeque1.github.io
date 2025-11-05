import React from 'react'

const skills = [
  'C', 'C++ (11/14/17)', 'Drogon C++','ORM, SOCI', 'ANTLR4', 'Visual Parser++', 'Parser and Lexer Development','Grammar Development', 'Python', 'JavaScript', 'AWS (S3, Lambda, SQS, EC2, RDS)',
  'gRPC', 'gTest', 'GDB','Valgrind', 'CMake', 'Conan Package Manager', 'Boost, STL', 'MySQL, PostgreSQL, MariaDB, SQL Server, MongoDB, Oracle, Azure Synapse, Snowflake',
  'OOPs, SOLID, Microservices, REST API','CI/CD, Github Workflows','Git, Github','Linux, Unix , RedHat, CentOS, Windows', 'Generative AI & Prompt Engineering, Cursor, VSCode with AI Coding.'
]

export default function Skills(){
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="px-3 py-1 text-sm rounded-md bg-surface/40 border border-slate-700">{s}</span>
        ))}
      </div>
    </section>
  )
}