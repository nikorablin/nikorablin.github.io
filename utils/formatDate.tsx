const formatDate = (date?: string) =>
  date === undefined ? 'present' : new Date(date).toLocaleDateString('en-us', { month: 'long', year: 'numeric' });

export default formatDate;
