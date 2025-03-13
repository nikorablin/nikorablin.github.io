import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { Basic, Profile } from '../../types/resume';
import ContactLink from './ContactLink';

export type ContactItem = {
  key?: string;
  label?: string;
  url?: string;
  icon: IconProp;
};

type ContactKey = Exclude<keyof Basic, 'name' | 'label' | 'profiles' | 'image' | 'summary'>;
const basicsKeys: ContactKey[] = ['email', 'phone', 'url', 'location'];

const contactItemMeta = {
  email: {
    prefix: 'mailto:',
    icon: 'envelope-open',
  },
  phone: {
    prefix: 'tel:',
    icon: 'mobile',
  },
  url: {
    icon: 'link',
    prefix: '',
  },
  location: {
    prefix: '',
    icon: 'globe'
  }
};

const formatContactItem =
  (basics: Basic) =>
  (key: ContactKey): ContactItem => {
    if (key === 'location') {
      return {
        key,
        label: basics[key]?.region,
        icon: contactItemMeta[key]?.icon as IconProp
      }
    }
    return {
      key,
      label: key === 'url' ? new URL(basics?.[key] || '').hostname : basics?.[key],
      url: `${contactItemMeta[key]?.prefix}${basics[key]}`,
      icon: contactItemMeta[key]?.icon as IconProp,
    };
  };

const formatProfiles = (profile: Profile): ContactItem => {
  const url = new URL(profile.url || '');
  return {
    key: profile.network,
    url: profile.url,
    label: `${url.host}${url.pathname}`,
    icon: ['fab', (profile.network || '').toLowerCase()] as IconProp,
  };
};

export const Header = ({ basics }: { basics: Basic }) => {
  return (
    <header className="flex py-5 items-center border-b-2 text-gray-700">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold">{basics?.name}</h1>
        <h2 className="text-xl text-gray-400">{basics?.label}</h2>
      </div>
      <nav>
        {[...basicsKeys.map(formatContactItem(basics)), ...(basics?.profiles || []).map(formatProfiles)].map((item) => (
          <ContactLink key={item.key} item={item} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
