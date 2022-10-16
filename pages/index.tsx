import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import content from '../content/Bio.md';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nik Korablin | Full-Stack JS Engineer</title>
        <meta name="description" content="I am a full-stack Javascript engineer working remotely from Lancaster, PA" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="container mx-auto md:w-6/12">
        <header className="flex p-5 items-center border-b-2 text-gray-700">
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
          <ReactMarkdown children={content} />
        </main>

        <footer className="border-t-2 text-sm py-5 text-center text-gray-400">
          Made with <span className="mr-1">🍕</span> in Lancaster, PA
        </footer>
      </div>
    </>
  );
};

export default Home;
