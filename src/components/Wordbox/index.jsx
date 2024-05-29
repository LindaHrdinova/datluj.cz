import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  useEffect(() => {
    const handleKeyUp = (event) => {
      setLettersLeft((prevLettersLeft) => {
        console.log('klávesa ' + event.key);
        if (prevLettersLeft.length === 1) {
          onFinish();
          console.log('OnFinish aktivní');
          return prevLettersLeft;
        }

        const firstLetter = prevLettersLeft.charAt(0).toLowerCase();
        if (firstLetter === event.key) {
        }

        if (event.key.toLowerCase() === firstLetter) {
          setMistake(false);
          return prevLettersLeft.slice(1);
        } else {
          setMistake(true);
        }

        console.log(prevLettersLeft);
        return prevLettersLeft;
      });
    };

    document.addEventListener('keyup', handleKeyUp);

    // Funkce Cleanup pro odstranění posluchače událostí
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [lettersLeft]);

  return (
    <>
      <div className={mistake ? 'wordbox wordbox--mistake' : 'wordbox'}>
        {lettersLeft}
      </div>
    </>
  );
};
// {lettersLeft.length > 0 ? lettersLeft : 0}
/*
<>
    {console.log(lettersLeft.length)}
    {lettersLeft.length === 0 ? null : (
    <div className="wordbox">{lettersLeft}</div>
  )}
</>
*/

export default Wordbox;
