import type { Metadata } from 'next'
import HomePage from '../components/home/HomePage'
import { loadBioContent } from '../lib/content'

export const metadata: Metadata = {
  title: 'Nik Korablin | Full-Stack JS Engineer',
}

export default async function Page() {
  const content = await loadBioContent()

  return <HomePage content={content} />
}
