import React from 'react';
const Icon = ({ icon, tags, selected, hovered }) => {
  const classes = icon.group + ' ' + tags + ((selected || hovered) ? ' selected' : '');
  return (
    <div className='icon'>
      {icon.url
        ? <a href={icon.url} target="_blank"><i className={classes}><div className="tooltip">{icon.desc}</div></i></a>
        : <i className={classes}><div className="tooltip">{icon.desc}</div></i>
      }
    </div>
  )
}

export default Icon;