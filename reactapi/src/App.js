
import React, { useState } from 'react';
import './App.css';
import CardList from './CardList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const cards = [
    { id: 1, title: 'Iron Man', description: 'Genius billionaire playboy philanthropist',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4qnWKWUh82XV7wQUprAxUYlxwYDZQOAaYm8bkfmuxwdNmP2cI3fEVLIbT9ZmR1iIyuc&usqp=CAU' },
    { id: 2, title: 'Captain America', description: 'Super soldier and leader of the Avengers',source:'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg' },
    { id: 3, title: 'Thor', description: 'God of Thunder and Prince of Asgard',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTzKMbJvja-z7szck0ATH-mUasMlhM_ZNqQ&usqp=CAU' },
    { id: 4, title: 'Hulk', description: 'Gamma-powered green monster', source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMce7d8vNv8l0gmgwJks_-8hGhtLvGWOXtYQ&usqp=CAU' },
    { id: 5, title: 'Black Widow', description: 'Skilled spy and assassin' , source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfme7LcLqytjzFb9MNpugKma4x4bYM8H7KdA&usqp=CAU'},
    {id:6, title: 'Hawkeye', description:'', source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN9B5LihoUnktqLwlBUeGg51WEvyeyyDuqAz9R6ax76DQFoNVWslN1b_8qZJXQD0O6a8&usqp=CAU'},
    { id: 7, title: 'Scarlet Witch', description: 'Reality-altering mutant with powerful magic',source:'https://e1.pxfuel.com/desktop-wallpaper/416/465/desktop-wallpaper-scarlet-witch-from-multiverse-of-madness-r-comicwalls-scarlett-witch-2022-thumbnail.jpg' },
    { id: 8, title: 'Vision', description: 'Synthetic android and member of the Avengers',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfch1T-EjdusWwkXvc-nupp_Tu7jUk987KLA&usqp=CAU' },
    { id: 9, title: 'Black Panther', description: 'King of Wakanda and protector of the nation',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukqynHCzlyl-kaBOZ072yHw5lQV9Z7EK3uQ&usqp=CAU' },
    { id: 10, title: 'Ant-Man', description: 'Size-shifting hero with control over ants',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccQjgbdgvxVnObxYSs9vNfo7S-FLtoE_3Cg&usqp=CAU' },
    { id: 11, title: 'Wasp', description: 'Partner of Ant-Man and skilled fighter',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGwIvd5mpTszSATL46ax2ly2LeO6MMecAGlazjU7lFbHKLaO-tHzPwwgDlDuw0kYLLWA&usqp=CAU' },
    { id: 12, title: 'Doctor Strange', description: 'Master of the mystic arts and protector of reality' ,source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48T03DDPExCwCow4vGyLsy_ey5ag6vaJoG4gVnGcJvfOhm_nMAnxid-613t05GaLAjjU&usqp=CAU'},
    { id: 13, title: 'Captain Marvel', description: 'Superhuman with cosmic powers',source:'https://media.vogue.fr/photos/5c7ed01e08858f0dc0e2d287/2:3/w_2560%2Cc_limit/capmarvel.jpg' },
    { id: 14, title: 'Falcon', description: 'Winged Avenger with advanced technology',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyI1SqqS2fcZy6WZzTtbuqK4EFpWP4olBKr76Pc6FipZEH6uCZwiZu3xxu4fNaE004OMg&usqp=CAU' },
    { id: 15, title: 'War Machine', description: 'Armored ally and close friend of Iron Man',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmH-3p_rw3tSuq47OCKq8VgVSW4YvmlH6EM8jvNw3P1tNYC3ppmo5cOpVvZWOWi_PFdIw&usqp=CAU'},
    { id: 19, title: 'Gamora', description: 'Skilled assassin and adopted daughter of Thanos',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAkF4lyabjMtUr5F2ffu2n5O5qYWf5PCYqw&usqp=CAU' },
    { id: 20, title: 'Drax', description: 'Powerful warrior seeking vengeance against Thanos' ,source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4irYZIQZjKP4YMbSOXHBzzVjrSend4ZXuh_Z9p65rFckr5RY5sveRbhyZQ_6_t7oTPI&usqp=CAU'},
    { id: 21, title: 'Rocket', description: 'Talking raccoon and expert marksman',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURetdqsFfUvH6MVyfEzTh7DjqYUu_aaMZog&usqp=CAU' },
    { id: 22, title: 'Groot', description: 'Tree-like creature with regenerative abilities' ,source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAB0JzH_v0rJHWg3vIjmBuFBY45mBR0HmiA&usqp=CAU'},
    { id: 23, title: 'Nebula', description: 'Cyborg assassin and estranged daughter of Thanos',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcmbAKYy5gqz3TRnFPlQ3dT-dmaDDjpCz1XGUX6t5mNe-brHN0QD_nXwT8yp_z9KrhlM&usqp=CAU' },
    { id: 24, title: 'Mantis', description: 'Empathic alien with empathic powers',source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcmbAKYy5gqz3TRnFPlQ3dT-dmaDDjpCz1XGUX6t5mNe-brHN0QD_nXwT8yp_z9KrhlM&usqp=CAU' },
  ];
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filteredCards);
    setSearchTerm(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const filteredCardsToShow = filteredCards.length > 0 ? filteredCards : cards;

  return (
    <div className="App">
      <div className="search-container">
        <label htmlFor="search-input"></label>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <CardList cards={filteredCardsToShow} />
    </div>
  );
}

export default App;