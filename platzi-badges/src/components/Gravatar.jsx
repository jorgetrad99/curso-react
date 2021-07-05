import React from 'react';
import md5 from 'md5';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
    const email = props.email;
    const hash = md5(email);
    console.log(`https://www.gravatar.com/avatar/${hash}?d=identicon`);
  
    return (
      <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
    );
  }
  
  export default Gravatar;