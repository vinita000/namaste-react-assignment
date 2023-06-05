import React from 'react';

const Header = (props) => {
  return(
    <div class='title'>
      <h1>This is first functional component element {props.name}</h1>
      <h1>This is second functional component element</h1>
      <h1>This is third functional component element</h1>
    </div>
  )
}

export default Header;