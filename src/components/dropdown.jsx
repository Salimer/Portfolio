import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Do something with the selected item
    
    // Close the dropdown
    setIsOpen(false);
  };

  return (
    <Dropdown className="w-full">
      <button
        type="button"
        className="flex justify-between items-center w-full my-5 tracking-wide"
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleDropdown();
          }
        }}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="pr-5">
          <ion-icon name="chevron-down-outline" />
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {items.map((item) => (
              <li
                className="p-5 my-2 hover:bg-logoColor2 text-logoColor2 bg-bodyBackground rounded-lg"
                key={item}
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleItemClick(item);
                  }
                }}
                role="menuitem"
                tabIndex={0}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Dropdown>
  );
};

export default DropdownMenu;

const Dropdown = styled.section`
    
    `;

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
