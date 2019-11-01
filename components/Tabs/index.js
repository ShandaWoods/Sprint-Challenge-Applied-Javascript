// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const dataFetcher = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log('response is: ', response);
        newTabCreator(response.data.topics)
        return response.data;
    }).catch(error => {
        console.log('The data was not returned', error);
    })
}
dataFetcher();

function newTab(data){
    const 
    tab = document.createElement('div')

// headerInfo.appendChild(tab);
tab.textContent = data;

tab.classList.add('tabs');
document.getElementsByClassName('tabs')[0].appendChild(tab);
return tab;
}
const newTabCreator = (topics) => {
    return topics.forEach(topic => {
        return newTab(topic);
    })
}
