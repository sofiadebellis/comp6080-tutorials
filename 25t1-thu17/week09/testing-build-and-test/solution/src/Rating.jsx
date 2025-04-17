import * as React from 'react';

export const Rating = ({ value }) => (
  <div className="rating">
    {value === 0 ?
    [1,2,3,4,5].map(c => (
  	  <span key={c} className="circle"></span>
    ))
    :
    [1,2,3,4,5].map(c => (
  	  <span key={c} className={c <= value ? "circle filled" : "circle"}></span>
    ))}
  </div>
);
