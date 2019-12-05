/* Step 1: using axios, send a GET request to the following URL 
          (replacing the palceholder with your Github name):
          https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/CAM603')
.then( response => {
  let cards = document.querySelector('.cards');
  cards.appendChild(cardMaker(response));
  return response;
})
.then( response => {
  axios.get(response.data.followers_url)
  .then(response => {
    response.data.forEach(el => {
      axios.get(el.url)
      .then(response => {
        let cards = document.querySelector('.cards');
        cards.appendChild(cardMaker(response));
      })
      .catch(err => {
        console.log(err);
      })
    })
    
  })
  .catch( err => {
    console.log(err);
  })
})
.catch( err => {
  console.log(err);
})
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

// const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell', 'vinnihoke'];

// followersArray.forEach(el => {
//   axios.get('https://api.github.com/users/' + el)
//   .then( response => {
//     let cards = document.querySelector('.cards');
//     cards.appendChild(cardMaker(response));
//   })
//   .catch( err => {
//     console.log(err);
//   })
// })

function cardMaker2(obj) {
  // Create elements
  let card = document.createElement('div');
  let image = document.createElement('img');
  let info = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let link = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  // Attach elements to main div
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(link);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  // Add classes as needed
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // Add text content and image source
  image.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = 'Location: ' + obj.location;
  profile.textContent = 'Profile: ';
  link.textContent = obj.html_url;
  link.href = obj.html_url;
  followers.textContent = 'Following: ' + obj.followers;
  following.textContent = 'Followers: ' + obj.following;
  bio.textContent = 'Bio: ' + obj.bio;

  return card;
}
function cardMaker(obj) {
  // Create elements
  let card = document.createElement('div');
  let image = document.createElement('img');
  let info = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let link = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  // Attach elements to main div
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(link);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  // Add classes as needed
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // Add text content and image source
  image.src = obj.data.avatar_url;
  name.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = 'Location: ' + obj.data.location;
  profile.textContent = 'Profile: ';
  link.textContent = obj.data.html_url;
  link.href = obj.data.html_url;
  followers.textContent = 'Following: ' + obj.data.followers;
  following.textContent = 'Followers: ' + obj.data.following;
  bio.textContent = 'Bio: ' + obj.data.bio;

  return card;
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

