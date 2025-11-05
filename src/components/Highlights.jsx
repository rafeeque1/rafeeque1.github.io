import React from 'react'

export default function Highlights(){
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
      <ul className="list-disc list-inside text-slate-300">
        <li>Designed and implemented internal C++ libraries for AWS (S3, SQS, SES) integrations.</li>
        <li>Migrated services from on-prem RedHat to cloud hosts and moved HTTP to gRPC for faster responses.</li>
        <li>Built incremental parsing with ANTLR4 to extend Visual Parser++ and support multiple DB dialects.</li>
        <li>Optimized backend performance for cashflow and credit engines; improved reverse-engineering speed by ~10%.</li>
      </ul>
    </section>
  )
}