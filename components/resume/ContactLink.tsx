import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ContactItem } from './Header';

export const ContactLink = ({ item }: { item: ContactItem }) => {
  return (
  <span key={item.key} className="flex items-center content-center">
    <FontAwesomeIcon className="mr-2 text-gray-400" fixedWidth icon={item.icon} />
    {item.url ? (
      <a className="flex-1" href={item.url}>
        {item.label}
      </a>
    ) : (
      <span className="flex-1">{item.label}</span>
    )}
  </span>
  )};

export default ContactLink;
