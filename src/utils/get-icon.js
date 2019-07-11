// @flow
const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ['fab', 'twitter'];
      break;
    case 'github':
      icon = ['fab', 'github'];
      break;
    case 'facebook':
      icon = ['fab', 'facebook-f'];
      break;
    case 'instagram':
      icon = ['fab', 'instagram'];
      break;
    case 'email':
      icon = ['fas', 'envelope'];
      break;
    case 'linkedin':
      icon = ['fab', 'linkedin-in'];
      break;
    case 'rss':
      icon = ['fas', 'rss'];
      break;
    default:
      icon = [];
      break;
  }

  return icon;
};

export default getIcon;
