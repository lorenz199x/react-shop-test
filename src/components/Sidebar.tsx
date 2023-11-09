import React from 'react';

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? 'selected' : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
