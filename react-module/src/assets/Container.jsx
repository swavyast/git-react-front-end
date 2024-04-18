import React from 'react';
import PropTypes from 'prop-types';

function Container ( { className, style, children } ) {
  const defaultStyle = {
    padding: '0',
    margin: '0',
    display: 'block',
    boxSizing : 'content--box'
  };
  const aggregateStyle = { ...defaultStyle, ...style };
  return (
    <div className={className} style={aggregateStyle}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Container;