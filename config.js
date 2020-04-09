'use strict';

module.exports = {
  url: 'https://mividaencodigo.com/',
  title: '<mividaencódigo />',
  subtitle: 'Un blog sobre la vida, el código, y todo lo que va entre líneas',
  description:
    'Un blog por Adel Rodríguez, un ingeniero viviendo en la República Dominicana, sobre crecimiento profesional y personal en el mundo de la programación y el software.',
  image: 'image.png',
  logo: 'logo.png',
  copyright: `© ${new Date().getFullYear()} — Adel Rodríguez`,
  disqusShortname: 'mividaencodigo',
  postsPerPage: 6,
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
      label: 'Categorías',
      path: '/categorias/',
    },
    {
      label: 'Etiquetas',
      path: '/etiquetas/',
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
      label: 'Contacto',
      path: '/contacto/',
    },
  ],
  author: {
    name: 'Adel Rodríguez',
    photo: '/me.jpeg',
    bio: 'Quería ser escritor, pero terminé siendo ingeniero que a veces escribe.',
    contacts: {
      email: 'adelrodriguezv@gmail.com',
      twitter: '_adelrodriguez',
      instagram: 'adelrodriguez',
      github: 'adelrodriguez',
      linkedin: 'adelrodriguez',
    },
  },
};
