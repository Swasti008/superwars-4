const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(i, name, type) {
    // Progression 1: Create member variables and assign values
    this.id=i;
    this.name=name;
    this.strength=this.getRandomStrength();
    this.image="images/super-"+(i+1)+".png";
    this.type=type;
  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    let player=document.createElement('div');
    player.classList.add('player');
     player.setAttribute('data-id',this.id);
    let img =document.createElement('img');
     img.setAttribute('src',this.image);
    let name=document.createElement('div');
     name.classList.add('name');
     name.textContent=this.name;
    let strength=document.createElement('div');
    strength.classList.add('strength');
    strength.textContent=this.strength;
    player.append(img,name,strength);
    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    let type;
    this.players = players.map((eachPlayer,i)=>{
      if (i%2==0){
       type='hero'
      }
      else{
       type='villain'
    }
      return new Player(i,eachPlayer,type);
    })
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}
