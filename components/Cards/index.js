// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleFetcher = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log('response is: ', response.data);
        cardCreator(response.data.articles)
        return response.data;
    }).catch(error => {
        console.log('The data was not returned', error);
    })
}
articleFetcher();

function Card (content) {
    // creating elements
    const
    card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorPhoto = document.createElement('img'),
    authorName = document.createElement('span')

// appending children
card.appendChild(headline);
card.appendChild(author);
card.appendChild(imgContainer);
imgContainer.appendChild(authorPhoto);
card.authorName;

// adding content to elements 
headline.textContent = content.headline;
author.textContent = content.author;
authorPhoto.href = content.html_url;
authorPhoto.textContent = content.html_url;
authorName.textContent = `By ${content.authorName}`;

// adding classNames to elements
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('image-container');

document.getElementsByClassName('cards-container')[0].appendChild(card);
return card;
}

// get request helper function 

// function to loop thorough and call dataFetcher
const cardCreator = (data) =>{

  Object.values(data).forEach( value => {
      return value.forEach(content => {
        return Card(content);
      })
  })

}