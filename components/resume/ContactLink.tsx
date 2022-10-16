import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ContactItem } from './Header';

export const ContactLink = ({ item }: { item: ContactItem }) => (
  <span key={item.key} className="flex items-center content-center">
    <FontAwesomeIcon className="mr-2 text-gray-400" fixedWidth icon={item.icon} />
    <a className="flex-1" href={item.url}>
      {item.label}
    </a>
  </span>
);

export default ContactLink;
