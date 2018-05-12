import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, tags, selected, hovered }) => {
  const classes =
    icon.group + ' ' + tags + (selected || hovered ? ' selected' : '');
  return (
    <div className="icon">
      {icon.url ? (
        <a href={icon.url} target="_blank">
          <i className={classes}>
            <div className="tooltip">{icon.desc}</div>
          </i>
        </a>
      ) : (
        <i className={classes}>
          <div className="tooltip">{icon.desc}</div>
        </i>
      )}
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  tags: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  hovered: PropTypes.bool.isRequired,
  key: PropTypes.number.isRequired
};

export default Icon;
