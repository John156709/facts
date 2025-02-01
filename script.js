const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries are not!",
    "Octopuses have three hearts and their blood is blue.",
    "The Eiffel Tower can be 15 cm taller during the summer due to heat expansion.",
    "Wombat poop is cube-shaped.",
    "There is a species of jellyfish that is biologically immortal.",
    "The shortest war in history lasted only 38 to 45 minutes.",
    "A day on Venus is longer than a year on Venus.",
    "Water can boil and freeze at the same time under certain conditions.",
    "Sharks existed before trees.",
    "Butterflies can taste with their feet.",
    "Some cats are allergic to humans.",
    "The human body contains about 37.2 trillion cells.",
    "A bolt of lightning is five times hotter than the surface of the sun.",
    "Your heartbeat changes to match the music you're listening to.",
    "Cows have best friends and get stressed when separated.",
    "An octopus can squeeze through anything larger than its beak.",
    "There are more trees on Earth than stars in the Milky Way.",
    "Some turtles can breathe through their butts."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[randomIndex];
}
