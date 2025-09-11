// import React from "react";
// import { useLocation } from "react-router-dom";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// const SearchResults = () => {
//   const query = useQuery().get("q");

//   // Example: filtering dummy products
//   const products = ["engine", "tire", "oil filter", "brake pad"];
//   const results = products.filter(p => p.toLowerCase().includes(query?.toLowerCase()));

//   return (
//     <div className="container">
//       <h1>Search Results for "{query}"</h1>
//       {results.length > 0 ? (
//         <ul>
//           {results.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

import React from "react";
import { useLocation } from "react-router-dom";
import database from "../../Data/Database"; // import your product list
// import "./SearchResults.css"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("q");

  // filter products based on search
  const results = database.filter((p) =>
    p.name.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>

      {results.length > 0 ? (
        <div className="search-results-grid">
          {results.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>₦{item.price.toLocaleString()}</strong></p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
