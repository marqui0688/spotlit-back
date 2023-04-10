/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("auditions").del();
  await knex("auditions").insert([
    {
      id: 1,
      project: "UNT. MIAMI PROJECT aka HOTEL COCAINE",
      role: "Rick James",
      deadline: "3/27 at 4:00pm PT",
      status: "SUBMITTED",
      casting: "Kim Coleman",
      network: "MGM+",
    },
    {
      id: 2,
      project: "OAKVILLE",
      role: "Owen aka Captain Tollard",
      deadline: "3/28 at 10AM EDT",
      status: "SUBMITTED",
      casting: "Rob Decina",
      network: "Paramount +",
    },
    {
      id: 3,
      project: "THE IRRATIONAL",
      role: "Rory",
      deadline: "3/24 at 3PM PT",
      status: "SUBMITTED",
      casting: "Kim Coleman",
      network: "NBC",
    },
    {
      id: 4,
      project: "1266",
      role: "JOHN aka BODEGA BOY",
      deadline: "3/2 at 11AM PT",
      status: "SUBMITTED",
      casting: "Kim Coleman",
      network: "20th Television / Onyx",
    },
    {
      id: 5,
      project: "PRODUCERS SESSION / Blue Bloods",
      role: "Freddie James",
      deadline: "3/1 at 4:10PM EST",
      status: "BOOKED",
      casting: "Bowling/Miscia Casting",
      network: "NBC",
    },
    {
      id: 6,
      project: "NON-EVIL TWIN",
      role: "Samson",
      deadline: "2/24 at 12PM EST",
      status: "SUBMITTED",
      casting: "Collin Daniel & Brett Greenstein",
      network: "Universal Television/NBC",
    },
    {
      id: 7,
      project: "AND JUST LIKE THAT",
      role: "Jay Mendez",
      deadline: "2/24 at 10:00AM EST",
      status: "PASS",
      casting: "Bernie Telsey, The Telsey Office and Tiffany Little Canfield",
      network: "HBO Max",
    },
    {
      id: 8,
      project: "FOUND",
      role: "Kareem",
      deadline: "2/17 at 8AM EST",
      status: "REQUEST EXTENSION",
      casting: "Nkechi Okoro Carroll and Ny Casting Manager Matthew Wise",
      network: "NBC",
    },
    {
      id: 9,
      project: "BASS REEVES",
      role: "WILLY",
      deadline: "2/6 at 3PM EST",
      status: "SUBMITTED",
      casting: "John Papsidera",
      network: "Paramount +",
    },
    {
      id: 10,
      project: "MOTHER OF THE BRIDE",
      role: "RJ",
      status: "SUBMITTED",
      deadline: "2/6 at 3PM EST",
      casting: "Marisol Roncali and Chelsea Ellis Bloch",
      network: "NETFLIX",
    },
  ]);
};
