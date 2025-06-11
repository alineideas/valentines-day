export interface Photo {
  src: string;        // Caminho da imagem (dentro de public/images/)
  caption: string;    // Legenda fofa
}

// Define a estrutura de uma Categoria
export interface Category {
  id: string;
  title: string;
  photos: Photo[];
}

// ✨ AQUI VOCÊ PERSONALIZA COM SUAS MEMÓRIAS ✨
export const memoriesData: Category[] = [
  {
    id: 'viagens',
    title: 'Nossas Viagens ✈️',
    photos: [
      {
        src: '/images/viagem1.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem2.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem3.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem4.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem5.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem6.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem7.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem8.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem9.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem10.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem11.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem12.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/viagem13.jpeg',
        caption: '❤️'
      },
    ]
  },
  {
    id: 'shows',
    title: 'Shows e Festivais 🎵',
    photos: [
      {
        src: '/images/show1.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show2.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show3.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show4.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show5.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show6.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show7.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show8.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show9.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/show10.jpeg',
        caption: '❤️'
      },
    ]
  },
  {
    id: 'em-casa',
    title: 'Momentos em Casa 🏡❤️',
    photos: [
      {
        src: '/images/casa1.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa2.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa3.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa4.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa5.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa6.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa8.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa9.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa10.jpeg',
        caption: '❤️'
      },
      {
        src: '/images/casa11.jpeg',
        caption: '❤️'
      },
    ]
  }
];
