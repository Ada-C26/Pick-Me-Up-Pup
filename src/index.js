const NUMBER_OF_DOGS = 15;

const state = {
  dogImageContainer: null,
  addDogButton: null,
};

const loadControls = () => {
  state.addDogButton = document.getElementById('addDogButton');
  state.dogImageContainer = document.getElementById('dog-img-container');
};

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const handleAddButtonClicked = (event) => {
  const imgNumber = pickRandomNumber();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = 'A random doggo';
  state.dogImageContainer.prepend(newDog);
};

const registerEvents = () => {
  // register handlers for the button click
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
};

// const setRandomDog = () => {
//   const imgNumber = pickRandomNumber();
//   const newImgName = `../imgs/${imgNumber}.jpeg`;
//   state.dogImage.src = newImgName;
// };

const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadControls();
  registerEvents();
};

onLoaded();
