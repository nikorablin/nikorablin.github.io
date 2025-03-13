import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ContactItem } from './Header';

export const ContactLink = ({ item }: { item: ContactItem }) => {
  const Tag = item.url ? 'a' : React.Fragment;
  return (
  <span key={item.key} className="flex items-center content-center">
    <FontAwesomeIcon className="mr-2 text-gray-400" fixedWidth icon={item.icon} />
    <Tag className="flex-1" href={item.url}>
      {item.label}
    </Tag>
  </span>
  )};

export default ContactLink;
