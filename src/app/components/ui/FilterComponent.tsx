import React, { useState } from 'react';

import { Category } from "../../types/others";

interface FilterComponentProps {
    onFilterChange: (category: Category) => void;
    categories: Category[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('World');

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="main-slider__filter-wrapper">
      <div className="main-slider__filter">
          {categories.map((category) => (
              <button 
                key={category}
                className={selectedCategory === category ? "main-slider__filter-btn add-active active": "main-slider__filter-btn"}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
          ))}
      </div>
    </div>
  )
};

export default FilterComponent;