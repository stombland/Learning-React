// import React, { useState } from 'react';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const list = [
//     'apple', 'mango', 'pineapple', 'ginger', 
//     'digger', 'finger', 'dinner', 'chinaar', 
//     'driver', 'fever'
//   ];

//   // Filter the list based on the input value
//   const filteredList = list.filter((item) =>
//     item.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (
//     <div>
//       <h3>Search Feature</h3>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Type to search..."
//       />
//       <ul>
//         {filteredList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// const App = () => {
//   const list = [
//     'apple',
//     'mango',
//     'pineapple',
//     'ginger',
//     'digger',
//     'finger',
//     'dinner',
//     'chinaar',
//     'driver',
//     'fever'
//   ];

//   const [inputValue, setInputValue] = useState('');
//   const [filteredList, setFilteredList] = useState(list); // Initialize with full list

//   // Function to handle search button click
//   const handleSearch = () => {
//     if (inputValue.trim() === '') {
//       // If input is empty, show all items
//       setFilteredList(list);
//     } else {
//       // Filter the list based on the input value
//       const result = list.filter((item) =>
//         item.toLowerCase().includes(inputValue.toLowerCase())
//       );
//       setFilteredList(result);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h3>Search Feature</h3>
//       <div style={{ marginBottom: '10px' }}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Type to search..."
//           style={{ padding: '5px', width: '200px', marginRight: '10px' }}
//         />
//         <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
//           Search
//         </button>
//       </div>
//       <ul>
//         {filteredList.length > 0 ? (
//           filteredList.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;
