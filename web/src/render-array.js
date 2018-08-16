//  //recreate in react wednesday
//  setTimeout(() => document.getElementById('test').innerHTML = 'yooooo', 2000)

//  let postTitles = ['Test', 'yay', 'help']

//  window.onload = () => {

//    postTitles.forEach(title => {
//      let element = document.createElement('div')
//      element.innerHTML = title

//      document.querySelector('#test').onclick = () =>
//    })

//  }

import React from 'react';

let postTitles = ['test', 'first post', 'second post'];

export default () => (
  <div>
    {postTitles.map((title, index) => {
      console.log(index);
      return <h1 key={index}>{title}</h1>;
    })}
  </div>
);
