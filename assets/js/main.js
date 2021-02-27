let suspectInfo = document.getElementById('suspectInfo')
let weapon = document.getElementById('weapon')
let rooms = document.getElementById('rooms')
let play = document.getElementById('play')
let description = document.getElementById('description')
let foto = document.getElementById('foto')
let section = document.getElementById('sec')
let suspectsArray = [
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepeneur",
        age: "45",
        description: "He has a lot of connections",
        image: "assets/img/green.jpeg",
        color: "green",
    },
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: "26",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "assets/img/orchid.jpg",
        color: "white",
    },
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: "22",
        description: "Billionaire video game designer",
        image: "assets/img/p.jpg",
        color: "purple",
    },
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: "31",
        description: "She is an A-list movie star with a dark past",
        image: "assets/img/s.jpg",
        color: "red",
    },
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialite",
        age: "36",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "assets/img/pi.jpg",
        color: "blue",
    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Football player",
        age: "62",
        description: "He is a former football player who tries to get by on his former glory",
        image: "assets/img/m.jpg",
        color: "yellow",
    }
]
function init(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let weaponsArray = ['rope', 'knife', 'candelstick', 'dumbbell', 'poison', 'axe', 'bat', 'trophy', 'pistol']
let roomsArray = ['Dining Room ', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];
let selectRandom = () => {
    let person = suspectsArray[init(6)]
    let gun = weaponsArray[init(9)]
    let räume = roomsArray[init(15)]
    section.style.display = "block"
    play.innerHTML = ` ${person.firstName} ${person.lastName}, killed Mr.Boddy using the ${gun} in the ${räume}!`
    suspectInfo.innerHTML = `<br>${person.firstName} ${person.lastName} (${person.age})`
    foto.innerHTML = `<img src="${person.image}" height="300" width="300"/>`
    description.innerHTML = `${person.description}`
    weapon.innerHTML = `<br>${gun}`
    rooms.innerHTML = `<br>${räume}`
}