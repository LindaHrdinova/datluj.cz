import React, { useState, useEffect } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex =
    size === undefined ? Math.floor(Math.random() * wordList.length) : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState(['jahoda', 'ananas', 'meloun']);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    console.log('aktivní slovo = ' + words);
  }, [words]);

  const handleFinish = () => {
    console.log('Napsané slovo je správně');
    const newWord = generateWord(6);
    setWords((prevWords) => {
      prevWords.shift(); // Odstranění prvního slova ze seznamu
      return [...prevWords, newWord]; // Přidání nového slova na konec seznamu
    });
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Počet chyb: {mistakes}</div>
      <div className="stage__words">
        {words.map((word, index) => (
          <Wordbox
            word={word}
            key={index}
            onFinish={handleFinish}
            active={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
