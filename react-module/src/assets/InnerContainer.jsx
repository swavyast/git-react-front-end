import React from 'react'
import PropTypes from 'prop-types'

function InnerContainer( { className, style, children } ) {
  const defaultStyle = {
    padding: '2px',
    margin: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const aggregateStyle = { ...defaultStyle, ...style };
  return <div className={className} style={aggregateStyle}>{children}</div>
}

InnerContainer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
export default InnerContainer