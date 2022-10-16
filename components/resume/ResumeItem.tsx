import React, { ReactNode } from 'react';
import stringHash from 'string-hash';
import type { Work, Education, Skill, Resume } from '../../types/resume';
import formatDate from '../../utils/formatDate';

export type ResumeItemType = Work & Education & Skill;

const WorkItem = ({ item }: { item: Work }): JSX.Element => (
  <div>
    <h3>{item.name}</h3>
    <h4 className="text-gray-400">
      {item.position}, {formatDate(item.startDate)} - {formatDate(item.endDate)}
    </h4>
    <ul className="list-disc pl-5">
      {item.highlights?.map((highlight) => (
        <li key={stringHash(highlight)}>{highlight}</li>
      ))}
    </ul>
  </div>
);

const EducationItem = ({ item }: { item: Education }): JSX.Element => (
  <div>
    <h3>{item.institution}</h3>
    <h4 className="text-gray-400">
      {formatDate(item.startDate)} - {formatDate(item.endDate)}
    </h4>
  </div>
);

const SkillItem = ({ item }: { item: Skill }): JSX.Element => (
  <div>
    <h3>{item.name}</h3>
    <h4 className="text-gray-400">{item.keywords?.join(', ')}</h4>
  </div>
);

const ResumeItem = ({ item }: { item: ResumeItemType }): JSX.Element => {
  if ((item as Work).position !== undefined) {
    return <WorkItem key={item.name} item={item} />;
  }
  if ((item as Education).institution !== undefined) {
    return <EducationItem key={item.institution} item={item} />;
  }
  if ((item as Skill).keywords !== undefined) {
    return <SkillItem key={item.name} item={item} />;
  }
  return <div />;
};

export default ResumeItem;
