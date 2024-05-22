let participants = new Map();

function addScore(player, score) {
    if (participants.has(player)) {
        participants.set(player, participants.get(player) + score);
    } else {
        participants.set(player, score);
    }
}

function subtractScore(player, score) {
    if (participants.has(player)) {
        let currentScore = participants.get(player);
        participants.set(player, currentScore - score);
    } else {
        console.log(`Player ${player} does not exist.`);
    }
}

function removeParticipant(player) {
    if (participants.has(player)) {
        participants.delete(player);
    } else {
        console.log(`Player ${player} does not exist.`);
    }
}

addScore("Alice", 10);
addScore("Bob", 5);
addScore("Alice", 5);
subtractScore("Bob", 2);
removeParticipant("Alice");

console.log(participants); // Map(1) { 'Bob' => 3 }

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "Anytown",
        country: "USA",
        postalCode: "12345",
        state: "California",
        coordinates: {
            latitude: 37.7749,
            longitude: -122.4194
        }
    },
    contacts: {
        email: "john.doe@example.com",
        phone: "123-456-7890",
        social: {
            facebook: "john.doe.123",
            twitter: "@johndoe",
            instagram: "@johndoe123"
        }
    },
    hobbies: ["reading", "traveling", "hiking"],
    education: {
        degree: "Bachelor's",
        field: "Computer Science",
        university: "University of California, Berkeley"
    },
    work: {
        company: "ABC Corp",
        position: "Software Engineer",
        experience: "5 years"
    },
    family: {
        spouse: {
            firstName: "Jane",
            lastName: "Doe",
            age: 28
        },
        children: [
            { name: "Emily", age: 5 },
            { name: "Michael", age: 3 }
        ]
    }
};

const {
    education: { university: school },
    address: { city: hometown, coordinates: { latitude: lat } },
    contacts: { email: userEmail },
    hobbies: [, secondHobby],
    family: { children: [{ name: firstChildName }] }
} = person;

console.log(`school: ${school}`);
console.log(`hometown: ${hometown}`);
console.log(`lat: ${lat}`);
console.log(`userEmail: ${userEmail}`);
console.log(`secondHobby: ${secondHobby}`);
console.log(`firstChildName: ${firstChildName}`);
