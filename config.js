'use strict';

module.exports = {
  url: 'https://mividaencodigo.com/',
  title: '<mividaencódigo />',
  description: 'Un blog sobre el código, la vida, y todo lo que va entre líneas.',
  logo: '/logo.png',
  copyright: `© ${new Date().getFullYear()} — Adel Rodríguez`,
  disqusShortname: 'mividaencodigo',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-108969009-1',
  menu: [
    {
      label: 'Inicio',
      path: '/',
    },
    {
      label: 'Entradas',
      path: '/entradas/',
    },
    {
      label: 'Acerca del blog',
      path: '/blog/',
    },
    {
      label: 'Acerca del autor',
      path: '/autor/',
    },
    {
      label: 'Contáctame',
      path: '/contacto/',
    },
  ],
  author: {
    name: 'Adel Rodríguez',
    photo: '/me.jpeg',
    bio: 'Ingeniero Mecatrónico. Desarrollador de software. Intentando pensar menos, y hacer más.',
    contacts: {
      email: 'adelrodriguezv@gmail.com',
      facebook: 'adelrv',
      twitter: 'adelrv',
      instagram: 'adelrodriguez',
      github: 'adelrodriguez',
      linkedin: 'adelrodriguez',
      rss: '#',
    },
  },
};
