// const festivalsList = [
//     {
//         name: "Diwali",
//         date: "2023-10-25",
//         details: "Festival of lights",
//         wishes: "Wishing you a bright and joyful Diwali!",
//     },
//     {
//         name: "Holi",
//         date: "2023-03-10",
//         details: "Festival of colors",
//         wishes: "May your life be as colorful as Holi!",
//     },
//     // Add more festivals as needed
// ];

// const religionsWithFestivals = [
//     {
//         religion: "Hinduism",
//         festivals: festivalsList,
//     },
//     {
//         religion: "Christianity",
//         festivals: [
//             {
//                 name: "Christmas",
//                 date: "2023-12-25",
//                 details: "Celebration of the birth of Jesus Christ",
//                 wishes: "Merry Christmas and a Happy New Year!",
//             },
//             // Add more festivals as needed
//         ],
//     },
//     // Add more religions with festivals as needed
// ];

export const ethnicityFestivals = {
    Sinhalese: {
        festivals: [
            {
                festivalName: "Sinhala New Year",
                festivalMonth: "April",
                festivalDay: 14,
                festivalDescription: "Celebration of the Sinhala and Tamil New Year.",
                importance: "Marks the astrological transition of the sun from Pisces to Aries.",
                howToGreet: "Wish 'Subha Aluth Avuruddak Wewa' (සුභ අලුත් අවුරුද්දක් වේවා) or 'Happy New Year.'"
            },
            {
                festivalName: "Vesak",
                festivalMonth: "May",
                festivalDay: 7,
                festivalDescription: "Commemorates the birth, enlightenment, and death of Buddha.",
                importance: "A time for reflection, meditation, and acts of kindness.",
                howToGreet: "Wish 'Samma Arahang, Sambuddho Bhagavā' or 'May you attain the path of Enlightenment.'"
            },
            {
                festivalName: "Poson Poya",
                festivalMonth: "June",
                festivalDay: 5,
                festivalDescription: "Celebration of the introduction of Buddhism to Sri Lanka.",
                importance: "Marks the arrival of Arahat Mahinda and the establishment of Buddhism.",
                howToGreet: "Wish 'Subha Posonak Wewa' (සුභ පොසොන්ගෝ වේවා) or 'Happy Poson.'"
            },
            {
                festivalName: "Esala Perahera",
                festivalMonth: "August",
                festivalDay: "Varies",
                festivalDescription: "Grand procession with traditional dances and decorated elephants.",
                importance: "Honors the Sacred Tooth Relic of the Buddha.",
                howToGreet: "Wish 'Subha Esala Peraherak Wewa' (සුභ එසළ පෙරහෙරක් වේවා) or 'Happy Esala Perahera.'"
            }
            // Add more festivals as needed
        ]
    },
    Tamil: {
        festivals: [
            {
                festivalName: "Pongal",
                festivalMonth: "January",
                festivalDay: 15,
                festivalDescription: "Harvest festival celebrated by Tamils.",
                importance: "Expresses gratitude to the sun god for a bountiful harvest.",
                howToGreet: "Wish 'Pongal Vazhthakal' (பொங்கல் வாழ்த்தக்கள்) or 'Happy Pongal.'"
            },
            {
                festivalName: "Deepavali",
                festivalMonth: "October",
                festivalDay: 15,
                festivalDescription: "Festival of lights symbolizing the victory of light over darkness.",
                importance: "Celebrated with the lighting of lamps and fireworks.",
                howToGreet: "Wish 'Deepavali Nalvazhthukkal' (தீபாவளி நல்வாழ்த்துக்கள்) or 'Happy Deepavali.'"
            },
            {
                festivalName: "Thaipusam",
                festivalMonth: "January/February",
                festivalDay: "Full moon day",
                festivalDescription: "Hindu festival celebrated by Tamil communities, particularly dedicated to Lord Murugan.",
                importance: "Involves elaborate processions, fasting, and piercing rituals.",
                howToGreet: "Wish 'Thaipusam Vazhthukkal' (தைப்பூசம் வாழ்த்துக்கள்) or 'Happy Thaipusam.'"
            },
            {
                festivalName: "Karva Chauth",
                festivalMonth: "October/November",
                festivalDay: "Fourth day after full moon",
                festivalDescription: "Fasting observed by married Hindu women for the well-being of their husbands.",
                importance: "A day-long fast broken after sighting the moon.",
                howToGreet: "Wish 'Karva Chauth ki Hardik Shubhkamnayein' or 'Heartfelt greetings on Karva Chauth.'"
            }
            // Add more festivals as needed
        ]
    },
    Muslim: {
        festivals: [
            {
                festivalName: "Eid al-Fitr",
                festivalMonth: "Shawwal",
                festivalDay: 1,
                festivalDescription: "Festival marking the end of Ramadan, the holy month of fasting.",
                importance: "Celebrates the breaking of the fast and expressing gratitude.",
                howToGreet: "Wish 'Eid Mubarak' (عيد مبارك) or 'Blessed Eid.'"
            },
            {
                festivalName: "Eid al-Adha",
                festivalMonth: "Dhu al-Hijjah",
                festivalDay: 10,
                festivalDescription: "Festival of Sacrifice commemorating Ibrahim's willingness to sacrifice his son.",
                importance: "Involves the sacrifice of an animal and sharing the meat with others.",
                howToGreet: "Wish 'Eid Mubarak' (عيد مبارك) or 'Blessed Eid.'"
            },
            {
                festivalName: "Mawlid al-Nabi",
                festivalMonth: "Rabi' al-Awwal",
                festivalDay: 12,
                festivalDescription: "Celebrates the birth of the Prophet Muhammad.",
                importance: "Marked with prayers, processions, and charitable activities.",
                howToGreet: "Wish 'Mawlid Saeed' (مَولِد سَعِيد) or 'Happy Mawlid.'"
            },
            {
                festivalName: "Ramadan",
                festivalMonth: "Ramadan",
                festivalDay: "Varies",
                festivalDescription: "Islamic holy month of fasting, prayer, reflection, and community.",
                importance: "Commemorates the revelation of the Quran to Prophet Muhammad.",
                howToGreet: "Wish 'Ramadan Mubarak' (رمضان مبارك) or 'Blessed Ramadan.'"
            }
            // Add more festivals as needed
        ]
    }
    // Add more ethnicities with their festivals as needed
};


export const religionFestivals = {
    Christianity: {
        festivals: [
            {
                festivalName: "Christmas",
                festivalMonth: "December",
                festivalDay: 25,
                festivalDescription: "Celebrates the birth of Jesus Christ.",
                importance: "Central event in Christian theology, symbolizing hope and salvation.",
                howToGreet: "Wish 'Merry Christmas' or 'Happy Christmas.'"
            },
            {
                festivalName: "Easter",
                festivalMonth: "April",
                festivalDay: "Varies",
                festivalDescription: "Commemorates the resurrection of Jesus Christ from the dead.",
                importance: "Emphasizes the victory of life over death and salvation.",
                howToGreet: "Wish 'Happy Easter' or 'Easter Blessings.'"
            },
            {
                festivalName: "Epiphany",
                festivalMonth: "January",
                festivalDay: 6,
                festivalDescription: "Celebrates the revelation of God incarnate as Jesus Christ.",
                importance: "Focuses on the visit of the Magi to the baby Jesus.",
                howToGreet: "Wish 'Happy Epiphany' or 'Blessed Epiphany.'"
            },
            {
                festivalName: "Pentecost",
                festivalMonth: "May",
                festivalDay: 23,
                festivalDescription: "Marks the descent of the Holy Spirit upon the apostles.",
                importance: "Considered the birthday of the Christian Church.",
                howToGreet: "Wish 'Happy Pentecost' or 'Blessed Pentecost.'"
            }
            // Add more festivals as needed
        ]
    },
    Islam: {
        festivals: [
            {
                festivalName: "Eid al-Fitr",
                festivalMonth: "Shawwal",
                festivalDay: 1,
                festivalDescription: "Festival marking the end of Ramadan, the holy month of fasting.",
                importance: "Celebrates the breaking of the fast and expressing gratitude.",
                howToGreet: "Wish 'Eid Mubarak' (عيد مبارك) or 'Blessed Eid.'"
            },
            {
                festivalName: "Eid al-Adha",
                festivalMonth: "Dhu al-Hijjah",
                festivalDay: 10,
                festivalDescription: "Festival of Sacrifice commemorating Ibrahim's willingness to sacrifice his son.",
                importance: "Involves the sacrifice of an animal and sharing the meat with others.",
                howToGreet: "Wish 'Eid Mubarak' (عيد مبارك) or 'Blessed Eid.'"
            },
            {
                festivalName: "Mawlid al-Nabi",
                festivalMonth: "Rabi' al-Awwal",
                festivalDay: 12,
                festivalDescription: "Celebrates the birth of the Prophet Muhammad.",
                importance: "Marked with prayers, processions, and charitable activities.",
                howToGreet: "Wish 'Mawlid Saeed' (مَولِد سَعِيد) or 'Happy Mawlid.'"
            },
            {
                festivalName: "Laylat al-Qadr",
                festivalMonth: "Ramadan",
                festivalDay: "Varies",
                festivalDescription: "Night of Power, when the Quran was first sent down from Heaven to the world.",
                importance: "Considered the holiest night in Islam.",
                howToGreet: "Wish 'Laylat al-Qadr Mubarak' or 'Blessed Night of Power.'"
            }
            // Add more festivals as needed
        ]
    },
    Hinduism: {
        festivals: [
            {
                festivalName: "Diwali",
                festivalMonth: "October/November",
                festivalDay: "Varies",
                festivalDescription: "Festival of lights symbolizing the victory of light over darkness.",
                importance: "Celebrated with the lighting of lamps, fireworks, and festive meals.",
                howToGreet: "Wish 'Happy Diwali' or 'Diwali ki Shubhkamnayein.'"
            },
            {
                festivalName: "Holi",
                festivalMonth: "March",
                festivalDay: "Varies",
                festivalDescription: "Festival of colors celebrating the arrival of spring.",
                importance: "Symbolizes the triumph of good over evil and the joy of new beginnings.",
                howToGreet: "Wish 'Happy Holi' or 'Holi ki Shubhkamnayein.'"
            },
            {
                festivalName: "Navaratri",
                festivalMonth: "September/October",
                festivalDay: "Varies",
                festivalDescription: "Nine nights of worship of the goddess Durga.",
                importance: "Symbolizes the triumph of good over evil.",
                howToGreet: "Wish 'Shubh Navaratri' or 'Happy Navaratri.'"
            },
            {
                festivalName: "Raksha Bandhan",
                festivalMonth: "August",
                festivalDay: "Varies",
                festivalDescription: "Celebration of the bond between brothers and sisters.",
                importance: "Symbolizes love, care, and protection.",
                howToGreet: "Wish 'Happy Raksha Bandhan' or 'Blessed Bond of Protection.'"
            }
            // Add more festivals as needed
        ]
    },
    Buddhism: {
        festivals: [
            {
                festivalName: "Vesak",
                festivalMonth: "May",
                festivalDay: 7,
                festivalDescription: "Commemorates the birth, enlightenment, and death of Buddha.",
                importance: "A time for reflection, meditation, and acts of kindness.",
                howToGreet: "Wish 'Samma Arahang, Sambuddho Bhagavā' or 'May you attain the path of Enlightenment.'"
            },
            {
                festivalName: "Asalha Puja",
                festivalMonth: "July",
                festivalDay: "Varies",
                festivalDescription: "Celebration of the Buddha's first sermon.",
                importance: "Marks the beginning of the Buddha's teachings.",
                howToGreet: "Wish 'Happy Asalha Puja.'"
            },
            {
                festivalName: "Magha Puja",
                festivalMonth: "February/March",
                festivalDay: "Varies",
                festivalDescription: "Commemoration of a spontaneous gathering of 1,250 arahants to hear the Buddha preach.",
                importance: "Emphasizes the importance of moral discipline and meditation.",
                howToGreet: "Wish 'Happy Magha Puja.'"
            },
            {
                festivalName: "Songkran",
                festivalMonth: "April",
                festivalDay: 13 - 15,
                festivalDescription: "Thai New Year festival known for its water fights.",
                importance: "Symbolizes purification and the washing away of sins and bad luck.",
                howToGreet: "Wish 'Sawasdee Pee Mai' or 'Happy Songkran.'"
            }
            // Add more festivals as needed
        ]
    }
    // Add more religions with their festivals as needed
};


export const filterFestivalsByMonth = (festivals, currentMonth) => {
    const filteredFestivals = [];

    for (const ethnicity in festivals) {
        festivals[ethnicity].festivals.forEach((festival) => {
            const festivalMonths = festival.festivalMonth.split('/').map((month) => month.trim());

            if (festivalMonths.includes(currentMonth)) {
                filteredFestivals.push({
                    ethnicity,
                    festival: {
                        festivalName: festival.festivalName,
                        festivalMonth: festival.festivalMonth,
                        festivalDay: festival.festivalDay,
                        festivalDescription: festival.festivalDescription,
                        importance: festival.importance,
                        howToGreet: festival.howToGreet,
                    },
                });
            }
        });
    }

    return filteredFestivals;
};


// [{
//     festival:{
//         festivalName:
//         ...and other festival details
//         friendsCelebrating: [array of friends names]
//     }
// }]