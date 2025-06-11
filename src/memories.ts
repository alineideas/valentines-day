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
        caption: 'Nossa primeira viagem juntos! Lembra desse dia na praia?'
      },
      {
        src: '/images/viagem2.jpeg',
        caption: 'Aquele café da manhã com vista para as montanhas. Inesquecível!'
      },
      {
        src: '/images/viagem3.jpeg',
        caption: 'Explorando a cidade grande, perdidos e felizes.'
      },
      {
        src: '/images/viagem4.jpeg',
        caption: 'Aquela vista deslumbrante do alto da montanha.'
      },
      {
        src: '/images/viagem5.jpeg',
        caption: 'Nosso momento relax na praia, com direito a cocada!'
      },
      {
        src: '/images/viagem6.jpeg',
        caption: 'Aquele pôr do sol que nos fez esquecer de tudo.'
      },
      {
        src: '/images/viagem7.jpeg',
        caption: 'Aquela noite estrelada que parecia um sonho.'
      },
      {
        src: '/images/viagem8.jpeg',
        caption: 'Nosso passeio de barco, com direito a música ao vivo.'
      },
      {
        src: '/images/viagem9.jpeg',
        caption: 'Aquela comida de rua que nos conquistou.'
      },
      {
        src: '/images/viagem10.jpeg',
        caption: 'Aquela lembrança que guardamos com carinho.'
      },
      {
        src: '/images/viagem11.jpeg',
        caption: 'Aquela lembrança que guardamos com carinho.'
      },
      {
        src: '/images/viagem12.jpeg',
        caption: 'Aquela lembrança que guardamos com carinho.'
      },
      {
        src: '/images/viagem13.jpeg',
        caption: 'Aquela lembrança que guardamos com carinho.'
      },
    ]
  },
  {
    id: 'shows',
    title: 'Shows e Festivais 🎵',
    photos: [
      {
        src: '/images/show1.jpeg',
        caption: 'Cantando nossa música favorita a plenos pulmões!'
      },
      {
        src: '/images/show2.jpeg',
        caption: 'Aquele festival que quase derretemos de calor, mas valeu cada segundo.'
      },
      {
        src: '/images/show3.jpeg',
        caption: 'Aquele momento mágico quando a banda tocou nossa música.'
      },
      {
        src: '/images/show4.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
      {
        src: '/images/show5.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
      {
        src: '/images/show6.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
      {
        src: '/images/show7.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
      {
        src: '/images/show8.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
      {
        src: '/images/show9.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
      {
        src: '/images/show10.jpeg',
        caption: 'Aquele show que nos fez dançar a noite toda!'
      },
    ]
  },
  {
    id: 'em-casa',
    title: 'Momentos em Casa 🏡❤️',
    photos: [
      {
        src: '/images/casa1.jpeg',
        caption: 'Sessão de cinema improvisada na sala. Melhor companhia!'
      },
      {
        src: '/images/casa2.jpeg',
        caption: 'Nossa obra de arte na cozinha. Pelo menos a gente se divertiu, né?'
      },
      {
        src: '/images/casa3.jpeg',
        caption: 'Um domingo preguiçoso, que são os melhores.'
      },
      {
        src: '/images/casa4.jpeg',
        caption: 'Sessão de cinema improvisada na sala. Melhor companhia!'
      },
      {
        src: '/images/casa5.jpeg',
        caption: 'Nossa obra de arte na cozinha. Pelo menos a gente se divertiu, né?'
      },
      {
        src: '/images/casa6.jpeg',
        caption: 'Um domingo preguiçoso, que são os melhores.'
      },
      {
        src: '/images/casa8.jpeg',
        caption: 'Nossa obra de arte na cozinha. Pelo menos a gente se divertiu, né?'
      },
      {
        src: '/images/casa9.jpeg',
        caption: 'Um domingo preguiçoso, que são os melhores.'
      },
      {
        src: '/images/casa10.jpeg',
        caption: 'Um domingo preguiçoso, que são os melhores.'
      },
      {
        src: '/images/casa11.jpeg',
        caption: 'Um domingo preguiçoso, que são os melhores.'
      },
    ]
  }
];
