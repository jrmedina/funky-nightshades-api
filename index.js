const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.locals.movies = [
  {
    id: 694919,
    poster_path:
      "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: 6.666666666666667,
    release_date: "2020-09-29",
    tagline: "",
    revenue: 0,
    runtime: 82,
    overview:
      "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    genres: ["Action"],
    budget: 0,
    videos: [
      {
        id: 330,
        key: "aETz_dRDEys",
        movie_id: 694919,
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    id: 337401,
    poster_path:
      "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
    title: "Mulan",
    average_rating: 4.909090909090909,
    release_date: "2020-09-04",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    budget: 200000000,
    tagline: "",
    revenue: 57000000,
    runtime: 115,
    overview:
      "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
    videos: [
      {
        id: 242,
        movie_id: 337401,
        key: "01ON04GCwKs",
        site: "YouTube",
        type: "Teaser",
      },
      {
        id: 243,
        movie_id: 337401,
        key: "KK8FHdFluOQ",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 246,
        movie_id: 337401,
        key: "1UXZEGYSwgg",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 244,
        movie_id: 337401,
        key: "R-eFm--k21c",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 245,
        movie_id: 337401,
        key: "bJbAZh3fv0g",
        site: "YouTube",
        type: "Teaser",
      },
    ],
  },
  {
    average_rating: 7.333333333333333,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
    budget: 0,
    genres: ["Action"],
    id: 718444,
    overview:
      "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
    release_date: "2020-08-20",
    revenue: 0,
    runtime: 106,
    tagline: "When the hunter becomes the prey.",
    title: "Rogue",
    videos: [
      {
        id: 331,
        movie_id: 718444,
        key: "IpSK2CsKULg",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.875,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
    budget: 0,
    genres: ["Action", "Crime", "Drama", "Thriller"],
    id: 539885,
    overview:
      "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
    release_date: "2020-07-02",
    revenue: 152812,
    runtime: 96,
    tagline: "Kill. Or be killed.",
    title: "Ava",
    videos: [
      {
        id: 290,
        movie_id: 539885,
        key: "ozUuAcGOhPs",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 7.166666666666667,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
    budget: 17000000,
    genres: ["Action", "Horror", "Thriller"],
    id: 581392,
    overview:
      "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
    release_date: "2020-07-15",
    revenue: 35878266,
    runtime: 114,
    tagline: "Escape The Apocalypse",
    title: "Peninsula",
    videos: [
      {
        id: 303,
        movie_id: 581392,
        key: "aRuhOJJA56U",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 302,
        movie_id: 581392,
        key: "cRvHl1dThlg",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 304,
        movie_id: 581392,
        key: "XdruWAKcoxc",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 301,
        movie_id: 581392,
        key: "yVucSRLLeIM",
        site: "YouTube",
        type: "Teaser",
      },
    ],
  },
  {
    average_rating: 7.5,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
    budget: 0,
    genres: ["Comedy", "Action"],
    id: 726739,
    overview:
      "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
    release_date: "2020-10-02",
    revenue: 0,
    runtime: 84,
    tagline: "",
    title: "Cats & Dogs 3: Paws Unite",
    videos: [
      {
        id: 332,
        movie_id: 726739,
        key: "ct5mQYE3Xk4",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6.571428571428571,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//pGqBDYycGWsMYc57sYv5M9GAQoW.jpg",
    budget: 0,
    genres: ["Horror"],
    id: 627290,
    overview:
      "Successful author Veronica finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.",
    poster_path:
      "https://image.tmdb.org/t/p/original//irkse1FMm9dWemwlxKJ7RINT9Iy.jpg",
    release_date: "2020-09-02",
    revenue: 0,
    runtime: 105,
    tagline: "If it chooses you, nothing can save you.",
    title: "Antebellum",
    videos: [
      {
        id: 324,
        movie_id: 627290,
        key: "mXcZ7WDsVwk",
        site: "YouTube",
        type: "Teaser",
      },
      {
        id: 326,
        movie_id: 627290,
        key: "7MPib67BDHY",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 325,
        movie_id: 627290,
        key: "AIrzZ18K_3k",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.25,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
    budget: 0,
    genres: ["Romance", "Drama"],
    id: 613504,
    overview:
      "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
    release_date: "2020-09-02",
    revenue: 0,
    runtime: 105,
    tagline: "Can love overcome the past?",
    title: "After We Collided",
    videos: [
      {
        id: 320,
        movie_id: 613504,
        key: "2SvwX3ux_-8",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 318,
        movie_id: 613504,
        key: "u5B76cpkbfU",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 319,
        movie_id: 613504,
        key: "BJBxXDhpZq0",
        site: "YouTube",
        type: "Teaser",
      },
    ],
  },
  {
    average_rating: 4.857142857142857,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
    budget: 0,
    genres: ["Thriller", "Horror", "Action"],
    id: 659986,
    overview:
      "A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
    release_date: "2020-09-04",
    revenue: 0,
    runtime: 92,
    tagline: "",
    title: "The Owners",
    videos: [
      {
        id: 328,
        movie_id: 659986,
        key: "yMvJSivVNrs",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 4.857142857142857,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//cVdYaAQmd5DZNdo0KFJruz7JpUs.jpg",
    budget: 0,
    genres: ["Thriller", "Crime", "Drama"],
    id: 632618,
    overview:
      "When her son is accused of raping and trying to murder his ex-wife, Alicia embarks on a journey that will change her life forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sDi6wKgECUjDug2gn4uODSqZ3yC.jpg",
    release_date: "2020-08-20",
    revenue: 0,
    runtime: 99,
    tagline: "",
    title: "The Crimes That Bind",
    videos: [
      {
        key: "dQw4w9WgXcQ",
        site: "YouTube",
        type: "Clip",
      },
    ],
  },
  {
    average_rating: 6.4,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
    budget: 0,
    genres: ["Animation", "Family", "Comedy", "Fantasy", "Adventure", "Music"],
    id: 446893,
    overview:
      "Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
    release_date: "2020-03-12",
    revenue: 1946164,
    runtime: 91,
    tagline: "",
    title: "Trolls World Tour",
    videos: [
      {
        id: 266,
        movie_id: 446893,
        key: "3cCoDDhFpmY",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 267,
        movie_id: 446893,
        key: "08AExF6dETA",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 265,
        movie_id: 446893,
        key: "SyTg7RIn-X8",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6.4,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
    budget: 200000000,
    genres: ["Animation", "Family", "Adventure", "Comedy", "Fantasy"],
    id: 508439,
    overview:
      "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    poster_path:
      "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    release_date: "2020-02-29",
    revenue: 103181419,
    runtime: 102,
    tagline: "Their quest begineth.",
    title: "Onward",
    videos: [
      {
        id: 284,
        movie_id: 508439,
        key: "di1DPydyqdk",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 282,
        movie_id: 508439,
        key: "A5Z7QsRGxGo",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 283,
        movie_id: 508439,
        key: "HxKXiQvyG_o",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 281,
        movie_id: 508439,
        key: "gn5QmllRCn4",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 280,
        movie_id: 508439,
        key: "x8DKg_fsacM",
        site: "YouTube",
        type: "Teaser",
      },
    ],
  },
  {
    average_rating: 5.142857142857143,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//wUP0KIAXcRevjjJpoSKT7LLhiaK.jpg",
    budget: 0,
    genres: ["Drama", "Thriller"],
    id: 479259,
    overview:
      "Searching for escape in Tokyo's back alleys, a haunted English teacher explores love and lust with a dashing Yakuza, as their tumultuous affair takes her on a journey through the city's dive bars and three-hour love hotels.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vQgXwuJrlpzGDI8169tRQRy71Nv.jpg",
    release_date: "2020-09-18",
    revenue: 0,
    runtime: 97,
    tagline: "",
    title: "Lost Girls & Love Hotels",
    videos: [
      {
        key: "dQw4w9WgXcQ",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 271,
        movie_id: 479259,
        key: "436179361",
        site: "Vimeo",
        type: "Teaser",
      },
    ],
  },
  {
    average_rating: 5.285714285714286,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//9guoVF7zayiiUq5ulKQpt375VIy.jpg",
    budget: 0,
    genres: ["Animation", "Action"],
    id: 592350,
    overview:
      "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg",
    release_date: "2019-12-20",
    revenue: 29900850,
    runtime: 104,
    tagline: "",
    title: "My Hero Academia: Heroes Rising",
    videos: [
      {
        id: 310,
        movie_id: 592350,
        key: "ezHmHHt0B78",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 309,
        movie_id: 592350,
        key: "_A-6qcgExA4",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 4.666666666666667,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//n1RohH2VoK1CdVI2fXvcP19dSlm.jpg",
    budget: 0,
    genres: ["War", "Drama", "History", "Action"],
    id: 531876,
    overview:
      "A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hPkqY2EMqWUnFEoedukilIUieVG.jpg",
    release_date: "2020-06-24",
    revenue: 0,
    runtime: 123,
    tagline: "The mission was survival.",
    title: "The Outpost",
    videos: [
      {
        id: 289,
        movie_id: 531876,
        key: "CGI0ug1obzc",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 288,
        movie_id: 531876,
        key: "3RrdQsFC0ms",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 287,
        movie_id: 531876,
        key: "KNaKL9crha4",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 286,
        movie_id: 531876,
        key: "f4LM9a02q9Q",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//rUeqBuNDR9zN6vZV9kpEFMtQm0E.jpg",
    budget: 0,
    genres: ["Crime", "Drama", "Thriller"],
    id: 499932,
    overview:
      "In Knockemstiff, Ohio and its neighboring backwoods, sinister characters converge around young Arvin Russell as he fights the evil forces that threaten him and his family.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
    release_date: "2020-09-11",
    revenue: 0,
    runtime: 138,
    tagline: "Everyone ends up in the same damned place.",
    title: "The Devil All the Time",
    videos: [
      {
        id: 273,
        movie_id: 499932,
        key: "EIzazUv2gtI",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 4.2,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
    budget: 12400000,
    genres: ["Fantasy", "Family", "Adventure", "Drama"],
    id: 413518,
    overview:
      "In this live-action adaptation of the beloved fairytale, old woodcarver Geppetto fashions a wooden puppet, Pinocchio, who magically comes to life. Pinocchio longs for adventure and is easily led astray, encountering magical beasts, fantastical spectacles, while making friends and foes along his journey. However, his dream is to become a real boy, which can only come true if he finally changes his ways.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4w1ItwCJCTtSi9nPfJC1vU6NIVg.jpg",
    release_date: "2019-12-19",
    revenue: 17133446,
    runtime: 120,
    tagline: "The most beloved fairy tale comes to life",
    title: "Pinocchio",
    videos: [
      {
        id: 262,
        movie_id: 413518,
        key: "v1VH-8ezqTw",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 263,
        movie_id: 413518,
        key: "yxqws07xGxg",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.428571428571429,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
    budget: 205000000,
    genres: ["Action", "Thriller", "Science Fiction"],
    id: 577922,
    overview:
      "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    poster_path:
      "https://image.tmdb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    release_date: "2020-08-22",
    revenue: 239100000,
    runtime: 150,
    tagline: "Time runs out.",
    title: "Tenet",
    videos: [
      {
        id: 297,
        movie_id: 577922,
        key: "AZGcmvrTX9M",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 294,
        movie_id: 577922,
        key: "LdOM0x0XDMo",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 296,
        movie_id: 577922,
        key: "dXd0eyrLS-A",
        site: "YouTube",
        type: "Teaser",
      },
      {
        id: 295,
        movie_id: 577922,
        key: "L3pk_TBkihU",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 298,
        movie_id: 577922,
        key: "u0hCSxqnjT0",
        site: "YouTube",
        type: "Behind the Scenes",
      },
    ],
  },
  {
    average_rating: 4.5,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//eIqyISB5j99OSRZUuvdN9g2bBsS.jpg",
    budget: 0,
    genres: ["Action", "Drama", "Crime"],
    id: 619592,
    overview:
      "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
    release_date: "2020-07-02",
    revenue: 215668,
    runtime: 91,
    tagline: "",
    title: "Force of Nature",
    videos: [
      {
        key: "dQw4w9WgXcQ",
        site: "YouTube",
        type: "Clip",
      },
    ],
  },
  {
    average_rating: 3.75,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
    budget: 25000000,
    genres: ["Comedy", "Science Fiction", "Adventure"],
    id: 501979,
    overview:
      "Yet to fulfill their rock and roll destiny, the now middle-aged best friends Bill and Ted set out on a new adventure when a visitor from the future warns them that only their song can save life as we know it. Along the way, they are helped by their daughters, a new batch of historical figures and a few music legends—to seek the song that will set their world right and bring harmony to the universe.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",
    release_date: "2020-08-27",
    revenue: 0,
    runtime: 92,
    tagline: "The future awaits",
    title: "Bill & Ted Face the Music",
    videos: [
      {
        id: 279,
        movie_id: 501979,
        key: "yevysSJlRdQ",
        site: "YouTube",
        type: "Behind the Scenes",
      },
      {
        id: 278,
        movie_id: 501979,
        key: "1gPGeAYo3yU",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 276,
        movie_id: 501979,
        key: "0hAL7emClFM",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 4,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
    budget: 67000000,
    genres: ["Action", "Science Fiction", "Horror", "Adventure"],
    id: 340102,
    overview:
      "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
    release_date: "2020-08-26",
    revenue: 3100000,
    runtime: 94,
    tagline: "It's time to face your demons",
    title: "The New Mutants",
    videos: [
      {
        id: 255,
        movie_id: 340102,
        key: "v4jbjZQXWdE",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 254,
        movie_id: 340102,
        key: "JO-tpM6xWrE",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 257,
        movie_id: 340102,
        key: "oZm1YjUJ3_E",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 247,
        movie_id: 340102,
        key: "bu9e410C__I",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 256,
        movie_id: 340102,
        key: "Na1gg0lY_M4",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 248,
        movie_id: 340102,
        key: "SX6orc4EQLw",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 249,
        movie_id: 340102,
        key: "S3ZkL3boVyQ",
        site: "YouTube",
        type: "Teaser",
      },
      {
        id: 250,
        movie_id: 340102,
        key: "W_vJhUAOFpI",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 251,
        movie_id: 340102,
        key: "if0WjWq-lec",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 252,
        movie_id: 340102,
        key: "PXh2gkuzgbg",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 253,
        movie_id: 340102,
        key: "3j__98wtzLY",
        site: "YouTube",
        type: "Teaser",
      },
    ],
  },
  {
    average_rating: 5.25,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//48OhmVjmjqhB1TrevTMKwKUDetU.jpg",
    budget: 0,
    genres: ["Drama", "Romance"],
    id: 605499,
    overview:
      "Kit can’t remember much of his native Vietnam. When he returns to the Land of the Golden Star for the first time in over thirty years, he takes in his local surroundings as any Western tourist would, and the environment is as exotic as the language is incomprehensible. The aim of Kit’s travels – to find a place to scatter his parents’ ashes – thus becomes part of a journey back to his roots and to the discovery of his identity, which external circumstances have rendered ambiguous and complex.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xIKVeH1iAKJOYYh9lvObD3hYIaf.jpg",
    release_date: "2020-09-25",
    revenue: 0,
    runtime: 85,
    tagline: "",
    title: "Monsoon",
    videos: [
      {
        id: 316,
        movie_id: 605499,
        key: "wiKxgGAYU40",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 315,
        movie_id: 605499,
        key: "a-phXZel83o",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.333333333333333,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//9pHxv7TX0jOKNgnGMDP6RJ2m1GL.jpg",
    budget: 0,
    genres: ["Action", "Thriller"],
    id: 737568,
    overview:
      "A former Marine turned doorman at a luxury New York City high-rise must outsmart and battle a group of art thieves and their ruthless leader — while struggling to protect her sister's family. As the thieves become increasingly desperate and violent, the doorman calls upon her deadly fighting skills to end the showdown.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pklyUbh4k1DbHdnsOMASyw7C6NH.jpg",
    release_date: "2020-10-01",
    revenue: 0,
    runtime: 97,
    tagline: "Be careful who you trust.",
    title: "The Doorman",
    videos: [
      {
        id: 333,
        movie_id: 737568,
        key: "pugLE1ifvbY",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6.25,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//bt4xA9WZE9P1wiRILRFt0Zh2wmV.jpg",
    budget: 0,
    genres: ["Fantasy", "Animation", "Adventure", "Comedy", "Family"],
    id: 400160,
    overview:
      "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gxK2lB1w8an5ViPXzisDsRsyHr0.jpg",
    release_date: "2020-08-14",
    revenue: 0,
    runtime: 91,
    tagline: "A Huge Journey to Find a Tiny Friend",
    title: "The SpongeBob Movie: Sponge on the Run",
    videos: [
      {
        id: 258,
        movie_id: 400160,
        key: "HfiH_526qhY",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 261,
        movie_id: 400160,
        key: "NqLl-b-PhLo",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 259,
        movie_id: 400160,
        key: "oKDotSYRuiI",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 260,
        movie_id: 400160,
        key: "NF_yXu7frnI",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6.8,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//5rwcd24GGltKiqdPT4G2dmchLr9.jpg",
    budget: 0,
    genres: ["Comedy", "Drama"],
    id: 579583,
    overview:
      "Scott has been a case of arrested development ever since his firefighter father died when he was seven. He’s now reached his mid-20s having achieved little, chasing a dream of becoming a tattoo artist that seems far out of reach. As his ambitious younger sister heads off to college, Scott is still living with his exhausted ER nurse mother and spends his days smoking weed, hanging with the guys — Oscar, Igor and Richie — and secretly hooking up with his childhood friend Kelsey.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
    release_date: "2020-07-22",
    revenue: 0,
    runtime: 137,
    tagline: "",
    title: "The King of Staten Island",
    videos: [
      {
        id: 299,
        movie_id: 579583,
        key: "azkVr0VUSTA",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 300,
        movie_id: 579583,
        key: "7np6nTJ7VOU",
        site: "YouTube",
        type: "Behind the Scenes",
      },
    ],
  },
  {
    average_rating: 4.2,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//ccwPF5jN09S4Cz7u6qs3T2yKOpO.jpg",
    budget: 0,
    genres: ["Animation", "Adventure", "Fantasy"],
    id: 597398,
    overview:
      "After suffering a plane crash on a mysterious island, a young man embarks on an epic journey through forests, deserts and mountains trying to escape the shadow of a huge dark spirit.",
    poster_path:
      "https://image.tmdb.org/t/p/original//c59eplVELdwrUfGBUAZVin3HfaL.jpg",
    release_date: "2019-11-15",
    revenue: 0,
    runtime: 75,
    tagline: "",
    title: "Away",
    videos: [
      {
        id: 313,
        movie_id: 597398,
        key: "cSI85iGoH_s",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 312,
        movie_id: 597398,
        key: "334196246",
        site: "Vimeo",
        type: "Trailer",
      },
      {
        id: 314,
        movie_id: 597398,
        key: "J885t4B3PmI",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 311,
        movie_id: 597398,
        key: "255250498",
        site: "Vimeo",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.333333333333333,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//oj9pEWQq5higRzKWiE8f0d5hBSb.jpg",
    budget: 0,
    genres: ["Thriller", "Horror", "Drama"],
    id: 617708,
    overview:
      "A tale of horror and fantasy, ripe with suspense, and an urgent metaphor of Guatemalan recent history and its unhealed political wounds.",
    poster_path:
      "https://image.tmdb.org/t/p/original//yVsINl4Aa9vvQ9lE2LF77qNj7AP.jpg",
    release_date: "2020-01-22",
    revenue: 0,
    runtime: 97,
    tagline: "The past will haunt you.",
    title: "La llorona",
    videos: [
      {
        id: 322,
        movie_id: 617708,
        key: "SVf8in0dj9s",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 321,
        movie_id: 617708,
        key: "tfachDElCzA",
        site: "YouTube",
        type: "Clip",
      },
    ],
  },
  {
    average_rating: 5,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
    budget: 0,
    genres: ["Science Fiction", "Thriller"],
    id: 528085,
    overview:
      "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    release_date: "2020-10-01",
    revenue: 0,
    runtime: 114,
    tagline: "The fight for the future has begun.",
    title: "2067",
    videos: [
      {
        id: 285,
        movie_id: 528085,
        key: "cU5875rHQ8k",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 3,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//ruXHUA3KiiLEjCwvSqKuxe9O6ZQ.jpg",
    budget: 0,
    genres: ["Horror", "Western"],
    id: 610201,
    overview:
      "The Dalton gang escape to a nearby town after a train robbery goes south, but they are met by a coven of witches with sinister plans for the unsuspecting outlaws.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jkAZb9jteax1XRnEFlCU9Oer1YJ.jpg",
    release_date: "2020-08-21",
    revenue: 0,
    runtime: 96,
    tagline: "It was the perfect score. But hell was their reward.",
    title: "The Pale Door",
    videos: [
      {
        id: 317,
        movie_id: 610201,
        key: "2CLqzKWDyxg",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 4.333333333333333,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//zRc6SG8V8WTTDrmZ78PgqjwYqoN.jpg",
    budget: 21000000,
    genres: [("Drama", "Romance")],
    id: 550231,
    overview:
      "A widow with three children hires a handyman to fix her house during a major storm. When not doing home repairs, he shares his philosophy of believing in the power of the universe to deliver what we want.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5mCqEeBA0MW7H6akFrFQXJu68rU.jpg",
    release_date: "2020-04-16",
    revenue: 0,
    runtime: 107,
    tagline: "",
    title: "The Secret: Dare to Dream",
    videos: [
      {
        id: 293,
        movie_id: 550231,
        key: "76PmxBH-oBo",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 292,
        movie_id: 550231,
        key: "t130FLX_ke0",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.5,
    backdrop_path: "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg",
    budget: 0,
    genres: [],
    id: 737173,
    overview: "",
    poster_path:
      "https://image.tmdb.org/t/p/original//opZKcgocttEOAUzqluX3bUbbDew.jpg",
    release_date: "2020-09-03",
    revenue: 0,
    runtime: 0,
    tagline: "",
    title: "Maratón After",
    videos: [
      {
        key: "dQw4w9WgXcQ",
        site: "YouTube",
        type: "Clip",
      },
    ],
  },
  {
    average_rating: 4.8,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//ysGikUSBjG3NRSyycHPf4rsIXQm.jpg",
    budget: 280000,
    genres: ["Drama"],
    id: 737799,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    poster_path:
      "https://image.tmdb.org/t/p/original//tEvGSlRO0dz1pINzjSEELdTHvwk.jpg",
    release_date: "2020-08-28",
    revenue: 0,
    runtime: 0,
    tagline: "",
    title: "Maquis",
    videos: [
      {
        key: "dQw4w9WgXcQ",
        site: "YouTube",
        type: "Clip",
      },
    ],
  },
  {
    average_rating: 7.333333333333333,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg",
    budget: 0,
    genres: ["Drama", "Thriller"],
    id: 500840,
    overview:
      "Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg",
    release_date: "2020-08-28",
    revenue: 0,
    runtime: 135,
    tagline: "",
    title: "I'm Thinking of Ending Things",
    videos: [
      {
        id: 274,
        movie_id: 500840,
        key: "cDTg62vsV4U",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 5.25,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//97UR8xPpUNqpvx5zr7eyf4YSBCE.jpg",
    budget: 0,
    genres: ["Drama", "Thriller"],
    id: 547017,
    overview:
      "A famous horror writer finds inspiration for her next book after she and her husband take in a young couple.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iSwTnNS7TKAS79Sz9LvyqlBxxrU.jpg",
    release_date: "2020-09-11",
    revenue: 73626,
    runtime: 107,
    tagline: "",
    title: "Shirley",
    videos: [
      {
        id: 291,
        movie_id: 547017,
        key: "wxMtEean_V8",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6.4,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//hb3kjSQI0lwGUCIxnfAYec08VSq.jpg",
    budget: 52000000,
    genres: ["Action", "Drama", "History"],
    id: 449924,
    overview:
      "Following the death of his wife, Ip Man travels to San Francisco to ease tensions between the local kung fu masters and his star student, Bruce Lee, while searching for a better future for his son.",
    poster_path:
      "https://image.tmdb.org/t/p/original//swmjF0CQc59K3jdUFzOirXESeGN.jpg",
    release_date: "2019-12-19",
    revenue: 0,
    runtime: 105,
    tagline: "",
    title: "Ip Man 4: The Finale",
    videos: [
      {
        id: 269,
        movie_id: 449924,
        key: "jpe1h0USjIM",
        site: "YouTube",
        type: "Featurette",
      },
      {
        id: 268,
        movie_id: 449924,
        key: "oCBGTCNJW2g",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 270,
        movie_id: 449924,
        key: "f40JahDi1Uc",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//4gKyQ1McHa8ZKDsYoyKQSevF01J.jpg",
    budget: 0,
    genres: ["Comedy", "Family", "Drama"],
    id: 425001,
    overview:
      "Sixth-grader Peter is pretty much your average kid—he likes gaming, hanging with his friends and his beloved pair of Air Jordans. But when his recently widowed grandfather Ed  moves in with Peter’s family, the boy is forced to give up his most prized possession of all, his bedroom. Unwilling to let such an injustice stand, Peter devises a series of increasingly elaborate pranks to drive out the interloper, but Grandpa Ed won’t go without a fight.",
    poster_path:
      "https://image.tmdb.org/t/p/original//yUFbPtWeDbVR3zmqshOaL5lScyo.jpg",
    release_date: "2020-01-31",
    revenue: 0,
    runtime: 94,
    tagline: "Old school vs new cool",
    title: "The War with Grandpa",
    videos: [
      {
        id: 264,
        movie_id: 425001,
        key: "EohVvIWg-Oc",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 3.5,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//6j2g4fEAmjJqAclzprIpvz9Gaw4.jpg",
    budget: 0,
    genres: ["Drama"],
    id: 582885,
    overview:
      "Amy, an 11-year-old girl, joins a group of dancers named “the cuties” at school, and rapidly grows aware of her burgeoning femininity—upsetting her mother and her values in the process.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ow3OA6OC0rjgbMVaLn2drwjvqZE.jpg",
    release_date: "2020-08-19",
    revenue: 0,
    runtime: 96,
    tagline: "",
    title: "Cuties",
    videos: [
      {
        id: 305,
        movie_id: 582885,
        key: "M0O7lLe4SmA",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 6.5,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//5nRyaVklxyA9OkxqZaPv1KBRqpd.jpg",
    budget: 0,
    genres: ["Comedy", "Drama"],
    id: 659991,
    overview:
      "A bohemian artist travels from London to Italy with his estranged son to sell the house they inherited from his late wife.",
    poster_path:
      "https://image.tmdb.org/t/p/original//erl30EcM8b8S84mvw8QXhNIeSfi.jpg",
    release_date: "2020-08-06",
    revenue: 0,
    runtime: 94,
    tagline: "",
    title: "Made in Italy",
    videos: [
      {
        id: 329,
        movie_id: 659991,
        key: "tJHcv0Pm0RU",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 3,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//oeaLQKoPFQxvhEz3yyR1QuestXG.jpg",
    budget: 0,
    genres: ["Comedy", "Drama"],
    id: 501953,
    overview:
      "When Jane is rejected by life, she spirals into a chaotic, schizophrenic world where love and normality collide with humorous consequences.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2wXrBtfrvwMWE1i3iHjKjoRZjYk.jpg",
    release_date: "2020-08-21",
    revenue: 0,
    runtime: 95,
    tagline: "Embrace different",
    title: "Eternal Beauty",
    videos: [
      {
        id: 275,
        movie_id: 501953,
        key: "5GoIVAd6xOs",
        site: "YouTube",
        type: "Trailer",
      },
      {
        id: 277,
        movie_id: 501953,
        key: "9q_oBwY5AOk",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  {
    average_rating: 3.8333333333333335,
    backdrop_path:
      "https://image.tmdb.org/t/p/original//21Q8bzu10YF9i4O5amBkJBombYo.jpg",
    budget: 0,
    genres: ["Drama", "Music"],
    id: 585244,
    overview:
      "The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dqA2FCzz4OMmXLitKopzf476RVB.jpg",
    release_date: "2020-03-12",
    revenue: 0,
    runtime: 115,
    tagline: "One love can change your life.",
    title: "I Still Believe",
    videos: [
      {
        id: 307,
        movie_id: 585244,
        key: "0H6O4Ty9oBg",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 308,
        movie_id: 585244,
        key: "BkgsVV0xF-s",
        site: "YouTube",
        type: "Clip",
      },
      {
        id: 306,
        movie_id: 585244,
        key: "YnxHyBbYwQQ",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
];

app.get("/:id", (request, response) => {
  const data = app.locals.movies;
  // const movie = data.find((movie) => movie.id === parseInt(request.params.id));
  const movie = data.reduce((format, movie) => {
    if (movie.id === parseInt(request.params.id)) {
      const [year, month, day] = movie.release_date.split("-");
      const hours = Math.floor(movie.runtime / 60);
      const minutes = movie.runtime % 60;
      const budget =
        movie.budget === 0 ? "None" : `$${movie.budget.toLocaleString()}`;
      const revenue =
        movie.revenue === 0
          ? "This movie wasn't so funky..."
          : `$${movie.revenue.toLocaleString()}`;

      const url = movie.videos.length
        ? movie.videos
        : "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

      format["average_rating"] = movie.average_rating;
      format["backdrop_path"] = movie.backdrop_path;
      format["budget"] = budget;
      format["genres"] = movie.genres.join(", ");
      format["id"] = movie.id;
      format["overview"] = movie.overview;
      format["poster_path"] = movie.poster_path;
      format["release_date"] = `${month}/${day}/${year}`;
      format["revenue"] = revenue;
      format["runtime"] = `${hours}h : ${minutes}m`;
      format["tagline"] = `${movie.tagline}` || movie.title;
      format["title"] = movie.title;
      format["videos"] = url;
    }
    return format;
  }, {});

  if (!movie) {
    response.status(404).send({
      error: `Sorry this movie doesn't exist yet!`,
    });
  }
  response.send({ movie });
});

app.set("port", process.env.PORT || 3001);
app.locals.title = "funky-nightshades-api";

app.get("/", (request, response) => {
  const movies = app.locals.movies;
  if (!movies) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ movies });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
