// import "./CSS/style.css";

// const users = [
//   {
//     id: 1,
//     name: "John",
//     age: 28,
//     hobbies: ["reading", "traveling", "cooking"],
//   },
//   { id: 2, name: "Jane", age: 22, hobbies: ["sports", "reading", "swimming"] },
//   { id: 3, name: "Tom", age: 35, hobbies: ["cooking", "hiking", "fishing"] },
//   {
//     id: 4,
//     name: "Emily",
//     age: 40,
//     hobbies: ["traveling", "sports", "reading"],
//   },
// ];
// function sortByAge() {
//   const readers = users.filter((user) => user.hobbies.includes("reading"));
//   readers.forEach((user) => console.log(user.name, user.age.toString()));
// }

// sortByAge(users);

// const armors = [
//   {
//     uuid: "822bcab2-40a2-324e-c137-e09195ad7692",
//     displayName: "Heavy Armor",
//     description:
//       "Absorbs 66% of total damage taken. Breaks after it has absorbed 50 damage.",
//     descriptions: [
//       "Absorbs 66% of total damage taken. Breaks after it has absorbed 50 damage.",
//     ],
//     details: [
//       {
//         name: "DAMAGE REDUCTION",
//         value: "Partial",
//       },
//       {
//         name: "DAMAGE ABSORBED",
//         value: "66%",
//       },
//     ],
//     displayIcon:
//       "https://media.valorant-api.com/gear/822bcab2-40a2-324e-c137-e09195ad7692/displayicon.png",
//     assetPath: "ShooterGame/Content/Gear/HeavyArmor_PrimaryAsset",
//     shopData: {
//       cost: 1000,
//       category: "Armor",
//       shopOrderPriority: 0,
//       categoryText: "Shields",
//       gridPosition: null,
//       canBeTrashed: false,
//       image: null,
//       newImage:
//         "https://media.valorant-api.com/gear/822bcab2-40a2-324e-c137-e09195ad7692/shop/newimage.png",
//       newImage2: null,
//       assetPath: "ShooterGame/Content/Gear/HeavyArmorPurchasable",
//     },
//   },
//   {
//     uuid: "4dec83d5-4902-9ab3-bed6-a7a390761157",
//     displayName: "Light Armor",
//     description:
//       "Absorbs 66% of total damage taken. Breaks after it has absorbed 25 damage.",
//     descriptions: [
//       "Absorbs 66% of total damage taken. Breaks after it has absorbed 25 damage.",
//     ],
//     details: [
//       {
//         name: "DAMAGE REDUCTION",
//         value: "Partial",
//       },
//       {
//         name: "DAMAGE ABSORBED",
//         value: "66%",
//       },
//     ],
//     displayIcon:
//       "https://media.valorant-api.com/gear/4dec83d5-4902-9ab3-bed6-a7a390761157/displayicon.png",
//     assetPath: "ShooterGame/Content/Gear/LightArmor_PrimaryAsset",
//     shopData: {
//       cost: 400,
//       category: "Armor",
//       shopOrderPriority: 0,
//       categoryText: "Shields",
//       gridPosition: null,
//       canBeTrashed: false,
//       image: null,
//       newImage:
//         "https://media.valorant-api.com/gear/4dec83d5-4902-9ab3-bed6-a7a390761157/shop/newimage.png",
//       newImage2: null,
//       assetPath: "ShooterGame/Content/Gear/LightArmorPurchasable",
//     },
//   },
//   {
//     uuid: "b1b9086d-41bd-a516-5d29-e3b34a6f1644",
//     displayName: "Regen Shield",
//     description:
//       "Absorbs 100% of total damage taken. Regenerates after it has absorbed damage. Has a total regeneration pool of 50.",
//     descriptions: [
//       "Absorbs 100% of total damage taken. Regenerates after it has absorbed damage. Has a total regeneration pool of 50.",
//     ],
//     details: [
//       {
//         name: "DAMAGE REDUCTION",
//         value: "Full",
//       },
//       {
//         name: "DAMAGE ABSORBED",
//         value: "100%",
//       },
//       {
//         name: "REGENERATION POOL",
//         value: "50",
//       },
//     ],
//     displayIcon:
//       "https://media.valorant-api.com/gear/b1b9086d-41bd-a516-5d29-e3b34a6f1644/displayicon.png",
//     assetPath: "ShooterGame/Content/Gear/PlasmaArmor/PlasmaArmor_PrimaryAsset",
//     shopData: {
//       cost: 650,
//       category: "Armor",
//       shopOrderPriority: 0,
//       categoryText: "Shields",
//       gridPosition: null,
//       canBeTrashed: false,
//       image: null,
//       newImage:
//         "https://media.valorant-api.com/gear/b1b9086d-41bd-a516-5d29-e3b34a6f1644/shop/newimage.png",
//       newImage2: null,
//       assetPath: "ShooterGame/Content/Gear/PlasmaArmor/PlasmaArmorPurchasable",
//     },
//   },
// ];

// function printArmorData() {
//   const goodArmor = armors.filter((armor) =>
//     armor.description.includes("Regenerates")
//   );
//   console.log("good");
//   goodArmor.forEach((armor) => console.log(armor.displayName));
// }
// printArmorData(armors);

const characters = [
  {
    _id: 112,
    films: ["Hercules (film)"],
    shortFilms: [],
    tvShows: ["Hercules (TV series)"],
    videoGames: ["Kingdom Hearts III"],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
    name: "Achilles",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
    createdAt: "2021-04-12T01:31:30.547Z",
    updatedAt: "2021-12-20T20:39:18.033Z",
    url: "https://api.disneyapi.dev/characters/112",
    __v: 0,
  },
  {
    _id: 18,
    films: ["The Fox and the Hound", "The Fox and the Hound 2"],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Abigail_the_Cow",
    name: "Abigail the Cow",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
    createdAt: "2021-04-12T01:26:03.413Z",
    updatedAt: "2021-12-20T20:39:18.032Z",
    url: "https://api.disneyapi.dev/characters/18",
    __v: 0,
  },
  {
    _id: 16,
    films: ["Cheetah"],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Abdullah",
    name: "Abdullah",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/c/cb/1087603-44532-clp-950.jpg",
    createdAt: "2021-04-12T01:26:02.377Z",
    updatedAt: "2021-12-20T20:39:18.032Z",
    url: "https://api.disneyapi.dev/characters/16",
    __v: 0,
  },
  {
    _id: 45,
    films: ["Mary Poppins (film)", "Mary Poppins Returns"],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Admiral_Boom_and_Mr._Binnacle",
    name: "Admiral Boom and Mr. Binnacle",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/b/be/Marypoppins-disneyscreencaps_com-1086.jpg",
    createdAt: "2021-04-12T01:26:21.560Z",
    updatedAt: "2021-12-20T20:39:18.033Z",
    url: "https://api.disneyapi.dev/characters/45",
    __v: 0,
  },
  {
    _id: 7,
    films: [],
    shortFilms: [],
    tvShows: ["Gravity Falls"],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/.GIFfany",
    name: ".GIFfany",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png",
    createdAt: "2021-04-12T01:25:10.354Z",
    updatedAt: "2021-12-20T20:39:18.032Z",
    url: "https://api.disneyapi.dev/characters/7",
    __v: 0,
  },
  {
    _id: 12,
    films: [],
    shortFilms: [],
    tvShows: ["Pickle and Peanut"],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl:
      "https://disney.fandom.com/wiki/90%27s_Adventure_Bear_(character)",
    name: "90's Adventure Bear",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png",
    createdAt: "2021-04-12T01:26:00.335Z",
    updatedAt: "2021-12-20T20:39:18.032Z",
    url: "https://api.disneyapi.dev/characters/12",
    __v: 0,
  },
  {
    _id: 36,
    films: [],
    shortFilms: [],
    tvShows: ["K.C. Undercover"],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Candace_Adams",
    name: "Candace Adams",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/8/8b/Enemy_of_the_State_promo_3.jpg",
    createdAt: "2021-04-12T01:26:16.062Z",
    updatedAt: "2021-12-20T20:39:18.033Z",
    url: "https://api.disneyapi.dev/characters/36",
    __v: 0,
  },
];

function filmTV() {
  const TVfilmChars = characters.filter((character) =>
    character.tvShows.includes("Gravity Falls")
  );
  TVfilmChars.forEach((character) => console.log(character.name));
}
filmTV();
