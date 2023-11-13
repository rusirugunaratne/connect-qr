const festivalsList = [
    {
        name: "Diwali",
        date: "2023-10-25",
        details: "Festival of lights",
        wishes: "Wishing you a bright and joyful Diwali!",
    },
    {
        name: "Holi",
        date: "2023-03-10",
        details: "Festival of colors",
        wishes: "May your life be as colorful as Holi!",
    },
    // Add more festivals as needed
];

const religionsWithFestivals = [
    {
        religion: "Hinduism",
        festivals: festivalsList,
    },
    {
        religion: "Christianity",
        festivals: [
            {
                name: "Christmas",
                date: "2023-12-25",
                details: "Celebration of the birth of Jesus Christ",
                wishes: "Merry Christmas and a Happy New Year!",
            },
            // Add more festivals as needed
        ],
    },
    // Add more religions with festivals as needed
];

console.log(religionsWithFestivals);
