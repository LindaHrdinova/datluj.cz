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
  const [words, setWords] = useState(['jahoda']);
  const [mystakes, setMystakes] = useState(0);

  useEffect(() => {
    console.log('aktivní slovo = ' + words);
  }, [words]);

  const handleFinish = (event) => {
    console.log('Napsané slovo je správně');
    const newWorld = generateWord(6);
    setWords([newWorld]);
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mystakes}</div>
      <div className="stage__words">
        {words.map((word) => (
          <Wordbox word={word} key={word} onFinish={handleFinish} />
        ))}
      </div>
    </div>
  );
};

export default Stage;
