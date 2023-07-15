import React from 'react'
import PropTypes from 'prop-types';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return (
    <div>
        <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white'>
          {children}
        </button>
    </div>
  )
}

Button.propTypes = {
  checkVariation: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary)
    + Number(!!secondary)
    +Number(!!success)
    +Number(!!warning)
    +Number(!!danger)

    if(count>1){
      return new Error('Only one of primary, seconday, success, dnager, warning can be true');
    }
  }

}

export default Button