import React, { useState } from 'react';
import { memoriesData } from './memories.ts';
import PhotoGallery from './components/PhotoGallery.tsx';
import AudioPlayer from './components/AudioPlayer.tsx';
import './App.css';

function App() {
  // Define o estado para a categoria selecionada, começando com a primeira da lista
  const [selectedCategoryId, setSelectedCategoryId] = useState(memoriesData[0].id);

  // Encontra os dados da categoria atualmente selecionada
  const selectedCategory = memoriesData.find(cat => cat.id === selectedCategoryId)!;

  return (
    <div className="App">


      <header className="app-header">
        {/* ✨ PERSONALIZE O TÍTULO AQUI ✨ */}
        <h1>Nossa Linha do Tempo de Amor</h1>
        <p>Um lugar para guardar nossas melhores memórias.</p>
      </header>

      <nav className="category-tabs">
        {memoriesData.map(category => (
          <button
            key={category.id}
            className={selectedCategoryId === category.id ? 'active' : ''}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.title}
          </button>
        ))}
      </nav>

      <main>
        <PhotoGallery photos={selectedCategory.photos} />
      </main>

      <footer className="app-footer">
        {/* ✨ PERSONALIZE A MENSAGEM FINAL ✨ */}
        <p>Feito com ❤️ por Aline. Feliz Nosso Dia!</p>
      </footer>
      <AudioPlayer />
    </div>
  );
}

export default App;
