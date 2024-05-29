import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState(word);

  useEffect(() => {
    const handleKeyUp = (event) => {
      setLettersLeft((prevLettersLeft) => {
        if (prevLettersLeft.length === 0) {
          return prevLettersLeft;
        }

        const firstLetter = prevLettersLeft.charAt(0).toLowerCase();
        if (event.key.toLowerCase() === firstLetter) {
          return prevLettersLeft.slice(1);
        }
        return prevLettersLeft;
      });
    };

    document.addEventListener('keyup', handleKeyUp);

    // Funkce Cleanup pro odstranění posluchače událostí
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <div className="wordbox">{lettersLeft}</div>;
};

/*
<>
    {console.log(lettersLeft.length)}
    {lettersLeft.length === 0 ? null : (
    <div className="wordbox">{lettersLeft}</div>
  )}
</>
*/

export default Wordbox;
