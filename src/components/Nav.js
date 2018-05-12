import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { navIcons } from '../icons';

const Nav = ({ currState, onSelect, onHoverStart, onHoverEnd }) => {
  return (
    <div className="nav">
      {navIcons.map((icon, index) => (
        <div
          className="nav-icon"
          onClick={() => onSelect(icon.group)}
          onMouseOver={() => onHoverStart(icon.group)}
          onMouseOut={onHoverEnd}
          key={index}
        >
          <Icon
            icon={icon}
            tags={currState[icon.group] ? icon.alt : icon.def}
            key={index}
            selected={currState[icon.group]}
            hovered={currState.hovered === icon.group}
          />
        </div>
      ))}
    </div>
  );
};

Nav.propTypes = {
  currState: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onHoverStart: PropTypes.func.isRequired,
  onHoverEnd: PropTypes.func.isRequired
};

export default Nav;
