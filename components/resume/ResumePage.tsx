import React, { ReactNode } from 'react'
import cx from 'classnames'
import Header from './Header'
import ResumeItem, { ResumeItemType } from './ResumeItem'
import type { Resume } from '../../types/resume'

type ResumeSectionKey = Exclude<keyof Resume, '$schema' | 'meta'>

type ResumeBodyKey = Exclude<
  ResumeSectionKey,
  'basics' | 'languages' | 'volunteer' | 'awards' | 'certificates' | 'publications' | 'interests' | 'references' | 'projects'
>

const resumeKeys: { [k in ResumeBodyKey]: string } = {
  work: 'Work Experience',
  skills: 'Skills',
  education: 'Education',
}

const getResumeItemKey = (item: ResumeItemType, index: number): string => {
  if ('position' in item && item.position !== undefined) {
    return `work-${item.name || index}-${item.startDate || 'unknown'}`
  }
  if ('institution' in item && item.institution !== undefined) {
    return `education-${item.institution}-${item.startDate || 'unknown'}`
  }
  if ('keywords' in item && item.keywords !== undefined) {
    return `skill-${item.name || index}`
  }
  return `resume-item-${index}`
}

const renderSectionItem = (items: ResumeItemType[]): ReactNode =>
  items.map((item, index) => <ResumeItem item={item} key={getResumeItemKey(item, index)} />)

const renderSection = (resume: Resume, key: ResumeBodyKey): ReactNode => (
  <div className="grid grid-cols-[25%_1fr] gap-4 text-gray-700 mb-4" key={key}>
    <section>
      <h3 className="text-lg">{resumeKeys[key]}</h3>
    </section>
    <section className={cx('grid', 'gap-4', { ['grid-cols-2']: key === 'skills' })}>{renderSectionItem(resume[key] || [])}</section>
  </div>
)

export const ResumePage = ({ resume }: { resume: Resume }) => {
  const basics = resume.basics || {}

  return (
    <div className="container mx-auto md:w-8/12">
      <Header basics={basics} />

      <main className="py-5 mb-5">
        <div className="grid grid-cols-[25%_1fr] gap-4 text-gray-700 mb-4">
          <section>
            <h3 className="text-lg">Summary</h3>
          </section>
          <section className={cx('grid', 'gap-4')}>{basics.summary}</section>
        </div>
        {(Object.keys(resumeKeys) as Array<ResumeBodyKey>).map((key) => renderSection(resume, key))}
      </main>
    </div>
  )
}

export default ResumePage
