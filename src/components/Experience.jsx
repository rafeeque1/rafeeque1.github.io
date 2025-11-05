import React from 'react'

const experiences = [
  {
    title: 'RiskSpan India Pvt Ltd — Software Engineer',
    when: 'June 2024 – Present',
    bullets: [
      'Working with Backend team, collaborating with Modeling, Client Success, Testing and UI teams to enhance the Edge platform.',
      'Supporting enhancement requests, implementing components of the Cashflow Engine and contributing to Credit and Prepay model engines.',
      'Troubleshooting and improving C++ backend performance for smoother cross-team delivery.',
      'Designing and building internal library support for AWS services like S3, SQS, SES access from backend efficiently',
      'Working on the Intex Subroutine C library to fetch financial informations.'
    ]
  },
  {
    title: 'FactSet Research Systems India Inc. — Software Engineer III',
    when: 'Apr 2023 – June 2024',
    bullets: [
      'Migrated services from RedHat-6 to RedHat-7 and set up platform dependencies.',
      'Migrated on-prem services to cloud and replaced HTTP with gRPC for faster response times.',
      'Designed new micro-services and hosted on Heroku.',
      'Redesign the storage system of the services from on-prem storage system to cloud based storage system for centralised and single point access of the data by all the services.Its decrease the cost of data saving by approx. 20 %.',
      'Enhanced the services with cloud native support like Lambda, S3, Event, Cloud Watch, EC2, SQS etc.',
      'Enhanced the services communications with proper Lima authentications for secure data flow.',
      'Contributed to many C++ internal library.'
    ]
  },
  {
    title: 'Quest Software — Software Dev Engineer',
    when: 'Apr 2021 – Apr 2023',
    bullets: [
      'mplementation of Data Intelligence Service (DIS) based model to open in Erwin Data Modeler (EDM) environment, this feature increased the modelling speed of the DB’s for clients.',
      'Designed Enterprise Glossary and Statistical Portal for product analytics.',
      'Designed Enterprise Glossary for Erwin Mart Server and Erwin Data Modeler to take the advantage of the Business Glossary catalogue, so client can apply on the any DB’s model and can related the business - oriented terms and their specification',
      'Designed Statistical Portal cum Logger to monitor the most used features of product by clients. This portal is used to know the statistics of product features so we can handle the features as per the statistics',
      'Bug fixes and customer support.'
    ]
  },
  {
    title: 'Erwin India Pvt. — Software Engineer',
    when: 'Aug 2019 – Apr 2021',
    bullets: [
      'Designed Incremental parsing framework when Visual Parser++ reached their limit to parsing the script, we just kept the existing Visual Parser++ grammar as it is and linked the ANTLR4 for parsing when Visual Parser++ fails.',
      'Intersectional Implementation of SQL-Server and SQL-Azure DB’s combinedly, we know the almost 70% syntax of SQL-Server and SQL - Azure is same, so just written single ANTLR4 grammar for 70 % grammar and used for both DB’s',
      'Optimised the code for Reverse Engineering Database and got approx. 10% faster execution.',
      'Supported new Databases into Erwin Data Modeler like MariaDB, MySQL, PostgreSQL and Azure Synapse.'
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-4">
        {experiences.map(e => (
          <div key={e.title} className="p-4 rounded-lg bg-surface/20 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-slate-400">{e.when}</div>
              </div>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}