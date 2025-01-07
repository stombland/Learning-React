import React, { useState } from 'react';

const App = () => {
  const [favLanguage, setFavLanguage] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!favLanguage || !ageGroup) {
      alert('Please select both your favorite language and age group.');
      return;
    }
    alert(`Favorite Language: ${favLanguage}, Age Group: ${ageGroup}`);
  };

  return (
    <div>
      <h1>Display Radio Buttons</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Please select your favorite Web language:</legend>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            onChange={(e) => setFavLanguage(e.target.value)}
          />
          <label htmlFor="html">HTML</label>
          <br />
          <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
            onChange={(e) => setFavLanguage(e.target.value)}
          />
          <label htmlFor="css">CSS</label>
          <br />
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
            onChange={(e) => setFavLanguage(e.target.value)}
          />
          <label htmlFor="javascript">JavaScript</label>
        </fieldset>

        <fieldset>
          <legend>Please select your age group:</legend>
          <input
            type="radio"
            id="age1"
            name="age"
            value="0-30"
            onChange={(e) => setAgeGroup(e.target.value)}
          />
          <label htmlFor="age1">0 - 30</label>
          <br />
          <input
            type="radio"
            id="age2"
            name="age"
            value="31-60"
            onChange={(e) => setAgeGroup(e.target.value)}
          />
          <label htmlFor="age2">31 - 60</label>
          <br />
          <input
            type="radio"
            id="age3"
            name="age"
            value="61-100"
            onChange={(e) => setAgeGroup(e.target.value)}
          />
          <label htmlFor="age3">61 - 100</label>
        </fieldset>

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
