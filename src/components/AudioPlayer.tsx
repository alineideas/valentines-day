import React from 'react';

const AudioPlayer = () => {
  const spotifyEmbedCode = `
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3m2FNr5FlOyf94Slpae7vy?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

  return (
    // Usamos dangerouslySetInnerHTML porque o Spotify nos fornece um trecho de HTML completo.
    // É seguro neste caso, pois o código vem de uma fonte confiável (Spotify).
    <div
      className="spotify-player-container"
      dangerouslySetInnerHTML={{ __html: spotifyEmbedCode }}
    />
  );
};

export default AudioPlayer;
