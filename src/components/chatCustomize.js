import React from 'react'

const CustomizeRow = (props) => {
  return (
    <div className='customize-row'>
      <div className='customize-row__set'>
        <button className='customize-row__button text-blue'>A</button>
        <button className='customize-row__button background-blue'>A</button>
      </div>

      <div className='customize-row__set'>
        <button className='customize-row__button small-a'>A</button>
        <button className='customize-row__button medium-a'>A</button>
        <button className='customize-row__button large-a'>A</button>
      </div>

      <div className='customize-row__set'>
        <button className='customize-row__button bold-text'>B</button>
        <button className='customize-row__button italic-text'>I</button>
        <button className='customize-row__button underline-text'>u</button>
      </div>
      <div className='customize-row__set'>
        <button className='customize-row__button link-text'>link</button>
        <button className="customize-row__button">
          <img src="http://www.jesush.com/wp-content/uploads/2008/07/happy10.gif" />
        </button>
      </div>
    </div>
  );
}

export default CustomizeRow
