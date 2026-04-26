import type { Metadata } from 'next'
import ResumePage from '../../components/resume/ResumePage'
import resume from '../../resume.json'

export const metadata: Metadata = {
  title: 'Nik Korablin | Resume',
}

export default function Page() {
  return <ResumePage resume={resume} />
}
