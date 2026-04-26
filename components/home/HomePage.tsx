import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export const HomePage = ({ content }: { content: string }) => {
  return (
    <div className="container mx-auto md:w-6/12">
      <header className="flex p-5 items-center border-b-2 border-gray-200 text-gray-700">
        <h1 className="flex-grow text-4xl font-bold">Nik Korablin</h1>
        <nav className="grid grid-cols-3 gap-4">
          <a target="_blank" rel="noreferrer" href="https://github.com/nikorablin">
            Github
          </a>
          <Link href="/resume">Resume</Link>
          <a href="https://www.linkedin.com/in/nikorablin/">LinkedIn</a>
        </nav>
      </header>

      <main className="text-center leading-loose text-xl text-gray-500 p-5">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>

      <footer className="border-t-2 border-gray-200 text-sm py-5 text-center text-gray-400">
        Made with <span className="mr-1">🍕</span> in Lancaster, PA
      </footer>
    </div>
  )
}

export default HomePage
