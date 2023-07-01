import React from 'react';

function DropDownItem(props) {
    return(
        <li className = 'dropdownItem' onClick={props.handlerLogout}>
          <img src={props.img} alt='img'></img>
          <a href='/'> {props.text} </a>
        </li>
      );
}

export default DropDownItem;