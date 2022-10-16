import type { NextPage } from 'next';
import type { Resume } from '../types/resume';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import cx from 'classnames';
import resume from '../resume.json';
import Header from '../components/resume/Header';
import ResumeItem, { ResumeItemType } from '../components/resume/ResumeItem';

type ResumeSectionKey = Exclude<keyof Resume, '$schema' | 'meta'>;

type ResumeBodyKey = Exclude<
  ResumeSectionKey,
  | 'basics'
  | 'languages'
  | 'volunteer'
  | 'awards'
  | 'certificates'
  | 'publications'
  | 'interests'
  | 'references'
  | 'projects'
>;
const resumeKeys: { [k in ResumeBodyKey]: string } = {
  work: 'Work Experience',
  skills: 'Skills',
  education: 'Education',
};

const renderSectionItem = (items: ResumeItemType[]): ReactNode => items.map((item) => <ResumeItem item={item} />);

const renderSection = (key: ResumeBodyKey): ReactNode => (
  <div className="grid grid-cols-resume gap-4 text-gray-700 mb-4" key={key}>
    <section>
      <h3 className="text-lg">{resumeKeys[key]}</h3>
    </section>
    <section className={cx('grid', 'gap-4', { ['grid-cols-2']: key === 'skills' })}>
      {renderSectionItem(resume[key])}
    </section>
  </div>
);

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nik Korablin | Resume</title>
        <meta name="description" content="I am a full-stack Javascript engineer working remotely from Lancaster, PA" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="container mx-auto md:w-8/12">
        <Header basics={resume.basics} />

        <main className="py-5 mb-5">{(Object.keys(resumeKeys) as Array<ResumeBodyKey>).map(renderSection)}</main>
      </div>
    </>
  );
};

export default Resume;
