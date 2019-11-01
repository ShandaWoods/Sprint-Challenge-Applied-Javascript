// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
// creating elements
const    
headerInfo = document.createElement('div'),
date = document.createElement('span'),
title = document.createElement('h1'),
temp = document.createElement('span')

// appending children 
headerInfo.appendChild(date);
headerInfo.appendChild(title);
headerInfo.appendChild(temp);

// adding content to elements
date.textContent = 'SMARCH 28, 2019';
title.textContent = 'Lambda Times';
temp.textContent = '98°';

// adding classNames to elements
headerInfo.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');

document.getElementsByClassName('header-container')[0].appendChild(headerInfo);
console.log('headerinfo: ', headerInfo)
return headerInfo;
}
Header();