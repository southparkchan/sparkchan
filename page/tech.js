"use client";

import { motion } from "framer-motion";

export default function TechPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-[#ffcc33] mb-8 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ⚙️ Sparkchan v2 — Technical Overview
      </motion.h1>

      <motion.section
        className="max-w-4xl text-gray-300 leading-relaxed space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p>
          <strong>Sparkchan</strong> v2 is a high-performance, privacy-preserving
          zk-meme runtime built with Next.js 15, TailwindCSS, and a modular
          zero-knowledge proof layer. It combines <em>culture</em>, <em>computation</em>,
          and <em>freedom</em> into one stack.
        </p>

        <h2 className="text-2xl text-[#ffcc33] font-semibold mt-8">
          🧠 Core Architecture
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Frontend</strong>: Next.js 15 (App Router, Server Actions, ISR)</li>
          <li><strong>Styling</strong>: TailwindCSS + Framer Motion</li>
          <li><strong>Runtime</strong>: ZK-meme Engine (TypeScript + WebAssembly bridge)</li>
          <li><strong>Deployment</strong>: Vercel Edge Functions</li>
          <li><strong>Data</strong>: Decentralized IPFS & Bundlr Storage</li>
        </ul>

        <h2 className="text-2xl text-[#ffcc33] font-semibold mt-8">
          🔐 Privacy Stack
        </h2>
        <p>
          Sparkchan’s runtime uses zk-SNARK circuits to power meme-based logic without
          revealing underlying data. Proof generation is handled off-chain, verified
          on-chain via smart proof verifiers.
        </p>

        <h2 className="text-2xl text-[#ffcc33] font-semibold mt-8">
          🚧 Roadmap
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>v2.1</strong> — Integrate on-chain verifier + zk-SDK for creators</li>
          <li><strong>v2.5</strong> — AI-meme runtime API (connect AI + ZK pipelines)</li>
          <li><strong>v3.0</strong> — Decentralized zk-app launch platform</li>
        </ul>

        <h2 className="text-2xl text-[#ffcc33] font-semibold mt-8">
          🧩 Tech Diagram
        </h2>
        <div className="border border-[#ffcc33]/40 rounded-xl p-6 mt-4 bg-[#111]/60">
          <pre className="text-sm text-gray-400 overflow-x-auto whitespace-pre-wrap">
{`[Frontend Layer]
  Next.js 15 + Tailwind + Framer Motion
           ↓
[Runtime Layer]
  zkMeme Engine (TypeScript + WebAssembly)
           ↓
[Proof Layer]
  zk-SNARK circuits → Verifier Contracts
           ↓
[Storage Layer]
  IPFS / Bundlr / Arweave`}
          </pre>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://x.com/SouthPark_Chan"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#ffcc33] text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform"
          >
            🧬 Follow the zk-Meme Evolution
          </a>
        </div>
      </motion.section>
    </main>
  );
}
