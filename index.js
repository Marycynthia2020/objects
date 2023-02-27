// // Question 0ne

function InstagramPost(
  author,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.author = author;
  this.content = content;
  this.imageLink = imageLink;
  this.views = numberOfViews;
  this.likes = numberOfLikes;
};

// // Question 2
const chinemeremPost = new InstagramPost(
  "Chinemerem",
  "this is Nigeria",
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  1050,
  4000
);
console.log(chinemeremPost);

const chinonsoPost = new InstagramPost(
  "Chinonso",
  "We pray for better Nigeria",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofDgNJyp8uewzIGOutKnoTV4W1ogV1yZlYTszInTRjw&s",
  9000,
  4800
);
console.log(chinonsoPost);

// // Question 3

function CreatePerson(name, age, location) {
    return {
      Name: name,
      Age: age,
      Location: location  
    }
};

const Musa = CreatePerson('Musa', 19, 'Nigeria');
console.log(Musa);

function createJambScores(eng, govt, lit, crk) {
    return {
        English: eng,
        Govt: govt,
        Lit: lit,
        CRK: crk
    }
};

const musaJambScores = createJambScores(70, 85, 82, 94);
Musa.jambSores = musaJambScores;
console.log(Musa);


// // Question 4 

// Option 1: use of Object.assigh();
const firstObj = {value: 6};
const secondObj = Object.assign({}, firstObj);

// Option 2: use of spread syntax
const objOne = {height: 45};
const objTwo = {...objOne};

// // Question 5
const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
};

// //  use of  for…in 

for (let key in presidentialCandidates) {
  console.log(`${presidentialCandidates[key]} is the presidential candidate of ${[key]}`)
}


// // use of for..of),
for (let key of Object.keys(presidentialCandidates)) {
console.log(`${presidentialCandidates[key]} is the presidential candidate of ${[key]}`)
}