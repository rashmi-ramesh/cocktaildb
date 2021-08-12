import React from 'react';

// const Categories = ({filterItems}) => {
//   return (
//     <div className="btn-container">
//       <button className="filter-btn" onClick={()=>{filterItems('all')}}> 
//         all
//       </button>
//       <button className="filter-btn" onClick={()=>{filterItems('breakfast')}}>
//         breakfast
//       </button>
//       <button className="filter-btn" onClick={()=>{filterItems('lunch')}}>
//         lunch
//       </button>
//       <button className="filter-btn" onClick={()=>{filterItems('shakes')}}>
//         shakes
//       </button>
//     </div>
//   );
// };

const Categories = ({filterItems,categories}) => {
  return (
    <div className="btn-container">
    {categories.map((category,index)=>{
      return (
        <button className="filter-btn" key={index} onClick={()=>filterItems(category)}>
          {category}
        </button>
      );
    })}
    </div>
  );
};


export default Categories;
