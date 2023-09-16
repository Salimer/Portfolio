import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownMenu = ({
  title, items, isOpen, toggleDropdown,
}) => {
  const arrowRef = useRef(null);
  const handleItemClick = (item) => {
    // Do something with the selected item
    // eslint-disable-next-line
    console.log(item);
    // Close the dropdown
  };

  const handleDropdownClick = () => {
    const arrowElement = arrowRef.current;
    if (arrowElement && arrowElement.classList) {
      if (isOpen) {
        arrowElement.classList.remove('clicked');
      } else {
        arrowElement.classList.add('clicked');
      }
    }
    toggleDropdown();
  };

  if (arrowRef.current && isOpen) {
    arrowRef.current.classList.add('clicked');
  } else if (arrowRef.current) {
    arrowRef.current.classList.remove('clicked');
  }

  return (
    <Dropdown className="w-full">
      <button
        type="button"
        className="flex justify-between items-center w-full my-5 tracking-wide"
        onClick={handleDropdownClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleDropdownClick();
          }
        }}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span ref={arrowRef} id="arrow" className="pr-5">
          <ion-icon name="chevron-back-outline" />
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {items.map((item) => (
              <li
                id="dropdown-item"
                className="p-5 my-2 text-logoColor2 bg-bodyBackground rounded-lg w-full"
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
#dropdown-item {
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


  #arrow {
    transition: transform 0.3s ease-in-out;
  }
  .clicked {
    transform: rotate(-90deg);
  }
`;

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};
