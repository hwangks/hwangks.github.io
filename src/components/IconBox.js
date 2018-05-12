import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { icons } from '../icons';

const IconBox = ({ currState }) => {
  const sorted = [...icons].sort((a, b) => a.desc.localeCompare(b.desc));
  return (
    <div className="icon-box">
      {sorted.map((icon, index) => (
        <Icon
          icon={icon}
          tags={icon.tags}
          key={index}
          selected={currState[icon.group]}
          hovered={currState.hovered === icon.group}
        />
      ))}
    </div>
  );
};

IconBox.propTypes = {
  currState: PropTypes.object.isRequired
};

export default IconBox;
