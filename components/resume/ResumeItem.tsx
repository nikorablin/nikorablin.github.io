import React from 'react'
import stringHash from 'string-hash'
import cx from 'classnames'
import type { Work, Education, Skill, WorkHighlight } from '../../types/resume'
import formatDate from '../../utils/formatDate'

export type ResumeItemType = Work & Education & Skill

const getHighlightText = (highlight: WorkHighlight): string =>
  typeof highlight === 'string' ? highlight : highlight.text

const getHighlightClassName = (highlight: WorkHighlight): string | undefined =>
  typeof highlight === 'string' ? undefined : cx({ 'no-print': highlight.noPrint })

const WorkItem = ({ item }: { item: Work }): JSX.Element => (
  <div>
    <h3>{item.name}</h3>
    <h4 className="text-gray-400">
      {item.position}, {formatDate(item.startDate)} - {formatDate(item.endDate)}
    </h4>
    <ul className="list-disc pl-5">
      {item.highlights?.map((highlight, index) => (
        <li className={getHighlightClassName(highlight)} key={`${stringHash(getHighlightText(highlight))}-${index}`}>
          {getHighlightText(highlight)}
        </li>
      ))}
    </ul>
  </div>
)

const EducationItem = ({ item }: { item: Education }): JSX.Element => (
  <div>
    <h3>{item.institution}</h3>
    <h4 className="text-gray-400">
      {formatDate(item.startDate)} - {formatDate(item.endDate)}
    </h4>
  </div>
)

const SkillItem = ({ item }: { item: Skill }): JSX.Element => (
  <div>
    <h3>{item.name}</h3>
    <h4 className="text-gray-400">{item.keywords?.join(', ')}</h4>
  </div>
)

const ResumeItem = ({ item }: { item: ResumeItemType }): JSX.Element => {
  if ((item as Work).position !== undefined) {
    return <WorkItem item={item} />
  }
  if ((item as Education).institution !== undefined) {
    return <EducationItem item={item} />
  }
  if ((item as Skill).keywords !== undefined) {
    return <SkillItem item={item} />
  }
  return <div />
}

export default ResumeItem
