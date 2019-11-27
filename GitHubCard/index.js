/* Step 1: using axios, send a GET request to the following URL 
          (replacing the palceholder with your Github name):
          https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/CAM603')
.then(function(response) {
  console.log(response);
  cardCreator(response);
})
.catch(function (error) {
  console.log(error);
})
.finally(function () {

});
/* Step 2: Inspect and study the data coming back, this is YOUR 
  github info! You will need to understand the structure of this 
  data in order to use it to build your component function 

  Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
          create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd',
  'bigknell', 'vinnihoke'];

  followersArray.forEach(el => {

    axios.get('https://api.github.com/users/' + el)
    .then(function(response) {
    console.log(response);
    cardCreator(response);
  })
    .catch(function (error) {
    console.log(error);
  })
    .finally(function () {

  });
  })

function cardCreator(obj) {

  // Create main div
  let cardDiv = document.createElement('div');
  
  // Add class to cardDiv
  cardDiv.classList.add('card');

  // Create image
  let image = document.createElement('img');

  // Add source to image
  image.setAttribute('src', obj.data.avatar_url);

  // Add image to div
  cardDiv.appendChild(image);

  // Create inner div
  let innerDiv = document.createElement('div');

  // Add class
  innerDiv.classList.add('card-info');

  // Add inner div to outer div
  cardDiv.appendChild(innerDiv);

  // Create h3
  let header = document.createElement('h3');

  // Give h3 class
  header.classList.add('name');

  // Add text content to div via axios
  header.textContent = obj.data.name;

  // Add header to inner div
  innerDiv.appendChild(header);

  // Create paragraph for username
  let username = document.createElement('p');

  // Add class to username paragraph
  username.classList.add('username');

  // Add text content to paragraph via axios
  username.textContent = obj.data.login;

  // Add username to inner div
  innerDiv.appendChild(username);

  // Create location paragraph
  let location = document.createElement('p');

  // Add location text from axios
  location.textContent = obj.data.location;

  // Add location to inner div
  innerDiv.appendChild(location);

  // Create profile paragraph
  let profile = document.createElement('p');

  // Add text content to profile
  profile.textContent = 'Profile: '

  // Add profile to inner div
  innerDiv.appendChild(profile);

  // Create link to profile
  let link = document.createElement('a');

  // Add link source
  link.setAttribute('href', obj.data.html_url)

  // Add link text content
  link.textContent = obj.data.html_url;

  // Add link to profile paragraph
  profile.appendChild(link);

  // Add followers paragraph
  let followers = document.createElement('p');

  // Add text content to followers 
  followers.textContent = 'Followers: ' + obj.data.followers;

  // Add followers paragraph to inner div
  innerDiv.appendChild(followers);

  // Add following paragraph
  let following = document.createElement('p');

  // Add text to following
  following.textContent = 'Following: ' + obj.data.following;

  // Add following to inner div
  innerDiv.appendChild(following);

  // Add bio paragraph
  let bio = document.createElement('p');

  // Add bio text content
  bio.textContent = 'Bio: ' + obj.data.bio;

  // Add bio to inner div
  innerDiv.appendChild(bio);

  // Add card to document
  let cards = document.querySelector('.cards');
  
  return cards.appendChild(cardDiv);;
}


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

