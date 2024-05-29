import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  useEffect(() => {
    if (active) {
      const handleKeyUp = (event) => {
        setLettersLeft((prevLettersLeft) => {
          console.log('klávesa ' + event.key);

          const firstLetter = prevLettersLeft.charAt(0).toLowerCase();
          if (prevLettersLeft.length === 1 && firstLetter === event.key) {
            setMistake(false);
            onFinish();

            return prevLettersLeft;
          }

          if (firstLetter === event.key) {
            setMistake(false);
            return prevLettersLeft.slice(1);
          } else {
            onMistake();
            setMistake(true);
          }

          return prevLettersLeft;
        });
      };

      document.addEventListener('keyup', handleKeyUp);

      // Funkce Cleanup pro odstranění posluchače událostí
      return () => {
        document.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [lettersLeft, active, onFinish]);

  useEffect(() => {
    setLettersLeft(word);
  }, [word]);

  return (
    <>
      <div className={mistake ? 'wordbox wordbox--mistake' : 'wordbox'}>
        {lettersLeft}
      </div>
    </>
  );
};

export default Wordbox;
