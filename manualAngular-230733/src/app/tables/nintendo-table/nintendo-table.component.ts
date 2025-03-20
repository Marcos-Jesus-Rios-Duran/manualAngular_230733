import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nintendo-table',
  templateUrl: './nintendo-table.component.html',
  styleUrls: ['./nintendo-table.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class NintendoTableComponent implements OnInit {
  data = [
    {
      "meta_score": null,
      "title": "Super Mario RPG",
      "platform": "Switch",
      "date": "Nov 17, 2023",
      "user_score": null,
      "link": "/game/switch/super-mario-rpg",
      "esrb_rating": "E",
      "developers": ["Nintendo"],
      "genres": ["Role-Playing", "Japanese-Style"]
    },
    {
      "meta_score": null,
      "title": "WarioWare: Move It!",
      "platform": "Switch",
      "date": "Nov 3, 2023",
      "user_score": null,
      "link": "/game/switch/warioware-move-it!",
      "esrb_rating": "RP",
      "developers": ["Intelligent Systems"],
      "genres": ["Miscellaneous", "Party / Minigame"]
    },
    {
      "meta_score": null,
      "title": "Super Mario Bros. Wonder",
      "platform": "Switch",
      "date": "Oct 20, 2023",
      "user_score": null,
      "link": "/game/switch/super-mario-bros-wonder",
      "esrb_rating": "E",
      "developers": ["Nintendo"],
      "genres": ["Action", "Platformer", "2D"]
    },
    {
      "meta_score": null,
      "title": "Detective Pikachu Returns",
      "platform": "Switch",
      "date": "Oct 6, 2023",
      "user_score": null,
      "link": "/game/switch/detective-pikachu-returns",
      "esrb_rating": null,
      "developers": ["Creatures Inc."],
      "genres": ["Adventure", "3D", "Third-Person"]
    },
    {
      "meta_score": null,
      "title": "Fae Farm",
      "platform": "Switch",
      "date": "Sep 8, 2023",
      "user_score": null,
      "link": "/game/switch/fae-farm",
      "esrb_rating": "E10+",
      "developers": ["Phoenix Labs"],
      "genres": ["Simulation", "Virtual", "Virtual Life"]
    },
    {
      "meta_score": 87,
      "title": "Pikmin 4",
      "platform": "Switch",
      "date": "Jul 21, 2023",
      "user_score": 9.0,
      "link": "/game/switch/pikmin-4",
      "esrb_rating": "E10+",
      "developers": ["Nintendo"],
      "genres": ["Strategy", "Real-Time", "General"]
    },
    {
      "meta_score": null,
      "title": "Pokemon Sleep",
      "platform": "iOS",
      "date": "Jul 20, 2023",
      "user_score": null,
      "link": "/game/ios/pokemon-sleep",
      "esrb_rating": null,
      "developers": ["The Pokemon Company", "Select Button"],
      "genres": ["Role-Playing", "Miscellaneous", "Application", "Trainer"]
    },
    {
      "meta_score": 74,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 5",
      "platform": "Switch",
      "date": "Jul 12, 2023",
      "user_score": 7.6,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-5",
      "esrb_rating": null,
      "developers": ["Nintendo"],
      "genres": ["Racing", "Arcade", "Automobile"]
    },
    {
      "meta_score": 56,
      "title": "Everybody 1-2-Switch!",
      "platform": "Switch",
      "date": "Jun 30, 2023",
      "user_score": 5.4,
      "link": "/game/switch/everybody-1-2-switch!",
      "esrb_rating": "E",
      "developers": ["Nintendo"],
      "genres": ["Miscellaneous", "Party / Minigame"]
    },
      {
        "meta_score": 82,
        "title": "Pikmin 1",
        "platform": "Switch",
        "date": "Jun 21, 2023",
        "user_score": 8.4,
        "link": "/game/switch/pikmin-1",
        "esrb_rating": "E10+",
        "developers": ["Nintendo"],
        "genres": ["Strategy", "Real-Time", "General"]
      },
      {
        "meta_score": 65,
        "title": "Pikmin 2",
        "platform": "Switch",
        "date": "Jun 21, 2023",
        "user_score": 8.6,
        "link": "/game/switch/pikmin-2",
        "esrb_rating": "E10+",
        "developers": ["Nintendo"],
        "genres": ["Strategy", "Real-Time", "General"]
      },
      {
        "meta_score": 80,
        "title": "Pikmin 1 + 2",
        "platform": "Switch",
        "date": "Jun 21, 2023",
        "user_score": 8.5,
        "link": "/game/switch/pikmin-1-+-2",
        "esrb_rating": null,
        "developers": ["Nintendo"],
        "genres": ["Miscellaneous", "Compilation"]
      },
      {
        "meta_score": 96,
        "title": "The Legend of Zelda: Tears of the Kingdom",
        "platform": "Switch",
        "date": "May 12, 2023",
        "user_score": 8.2,
        "link": "/game/switch/the-legend-of-zelda-tears-of-the-kingdom",
        "esrb_rating": "E10+",
        "developers": ["Nintendo"],
        "genres": ["Action Adventure", "Open-World"]
      },
      {
        "meta_score": 92,
        "title": "Xenoblade Chronicles 3: Expansion Pass Wave 4 - Future Redeemed",
        "platform": "Switch",
        "date": "Apr 25, 2023",
        "user_score": 8.8,
        "link": "/game/switch/xenoblade-chronicles-3-expansion-pass-wave-4---future-redeemed",
        "esrb_rating": "T",
        "developers": ["Monolith Soft"],
        "genres": ["Role-Playing", "Action RPG"]
      },
      {
        "meta_score": 82,
        "title": "Advance Wars 1 + 2: Re-Boot Camp",
        "platform": "Switch",
        "date": "Apr 21, 2023",
        "user_score": 8.1,
        "link": "/game/switch/advance-wars-1-+-2-re-boot-camp",
        "esrb_rating": "E10+",
        "developers": ["Nintendo", "WayForward"],
        "genres": ["Strategy", "Turn-Based", "Tactics"]
      },
      {
        "meta_score": null,
        "title": "Fire Emblem Engage: Expansion Pass Wave 4",
        "platform": "Switch",
        "date": "Apr 5, 2023",
        "user_score": null,
        "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-4",
        "esrb_rating": null,
        "developers": ["Intelligent Systems"],
        "genres": ["Strategy", "Turn-Based", "Tactics"]
      },
      {
        "meta_score": 81,
        "title": "Bayonetta Origins: Cereza and the Lost Demon",
        "platform": "Switch",
        "date": "Mar 17, 2023",
        "user_score": 8.6,
        "link": "/game/switch/bayonetta-origins-cereza-and-the-lost-demon",
        "esrb_rating": "T",
        "developers": ["PlatinumGames"],
        "genres": ["Action Adventure", "Linear"]
      },
      {
        "meta_score": 86,
        "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 4",
        "platform": "Switch",
        "date": "Mar 9, 2023",
        "user_score": 7.8,
        "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-4",
        "esrb_rating": null,
        "developers": ["Nintendo"],
        "genres": ["Racing", "Arcade", "Automobile"]
      },
      {
        "meta_score": null,
        "title": "Fire Emblem Engage: Expansion Pass Wave 3",
        "platform": "Switch",
        "date": "Mar 7, 2023",
        "user_score": null,
        "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-3",
        "esrb_rating": null,
        "developers": ["Intelligent Systems"],
        "genres": ["Strategy", "Turn-Based", "Tactics"]
      },
        {
          "meta_score": 82,
          "title": "Pikmin 1",
          "platform": "Switch",
          "date": "Jun 21, 2023",
          "user_score": 8.4,
          "link": "/game/switch/pikmin-1",
          "esrb_rating": "E10+",
          "developers": ["Nintendo"],
          "genres": ["Strategy", "Real-Time", "General"]
        },
        {
          "meta_score": 65,
          "title": "Pikmin 2",
          "platform": "Switch",
          "date": "Jun 21, 2023",
          "user_score": 8.6,
          "link": "/game/switch/pikmin-2",
          "esrb_rating": "E10+",
          "developers": ["Nintendo"],
          "genres": ["Strategy", "Real-Time", "General"]
        },
        {
          "meta_score": 80,
          "title": "Pikmin 1 + 2",
          "platform": "Switch",
          "date": "Jun 21, 2023",
          "user_score": 8.5,
          "link": "/game/switch/pikmin-1-+-2",
          "esrb_rating": null,
          "developers": ["Nintendo"],
          "genres": ["Miscellaneous", "Compilation"]
        },
        {
          "meta_score": 96,
          "title": "The Legend of Zelda: Tears of the Kingdom",
          "platform": "Switch",
          "date": "May 12, 2023",
          "user_score": 8.2,
          "link": "/game/switch/the-legend-of-zelda-tears-of-the-kingdom",
          "esrb_rating": "E10+",
          "developers": ["Nintendo"],
          "genres": ["Action Adventure", "Open-World"]
        },
        {
          "meta_score": 92,
          "title": "Xenoblade Chronicles 3: Expansion Pass Wave 4 - Future Redeemed",
          "platform": "Switch",
          "date": "Apr 25, 2023",
          "user_score": 8.8,
          "link": "/game/switch/xenoblade-chronicles-3-expansion-pass-wave-4---future-redeemed",
          "esrb_rating": "T",
          "developers": ["Monolith Soft"],
          "genres": ["Role-Playing", "Action RPG"]
        },
        {
          "meta_score": 82,
          "title": "Advance Wars 1 + 2: Re-Boot Camp",
          "platform": "Switch",
          "date": "Apr 21, 2023",
          "user_score": 8.1,
          "link": "/game/switch/advance-wars-1-+-2-re-boot-camp",
          "esrb_rating": "E10+",
          "developers": ["Nintendo", "WayForward"],
          "genres": ["Strategy", "Turn-Based", "Tactics"]
        },
        {
          "meta_score": null,
          "title": "Fire Emblem Engage: Expansion Pass Wave 4",
          "platform": "Switch",
          "date": "Apr 5, 2023",
          "user_score": null,
          "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-4",
          "esrb_rating": null,
          "developers": ["Intelligent Systems"],
          "genres": ["Strategy", "Turn-Based", "Tactics"]
        },
        {
          "meta_score": 81,
          "title": "Bayonetta Origins: Cereza and the Lost Demon",
          "platform": "Switch",
          "date": "Mar 17, 2023",
          "user_score": 8.6,
          "link": "/game/switch/bayonetta-origins-cereza-and-the-lost-demon",
          "esrb_rating": "T",
          "developers": ["PlatinumGames"],
          "genres": ["Action Adventure", "Linear"]
        },
        {
          "meta_score": 86,
          "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 4",
          "platform": "Switch",
          "date": "Mar 9, 2023",
          "user_score": 7.8,
          "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-4",
          "esrb_rating": null,
          "developers": ["Nintendo"],
          "genres": ["Racing", "Arcade", "Automobile"]
        },
        {
          "meta_score": null,
          "title": "Fire Emblem Engage: Expansion Pass Wave 3",
          "platform": "Switch",
          "date": "Mar 7, 2023",
          "user_score": null,
          "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-3",
          "esrb_rating": null,
          "developers": ["Intelligent Systems"],
          "genres": ["Strategy", "Turn-Based", "Tactics"]
        },
          {
            "meta_score": 80,
            "title": "Fire Emblem Engage",
            "platform": "Switch",
            "date": "Jan 20, 2023",
            "user_score": 6.6,
            "link": "/game/switch/fire-emblem-engage",
            "esrb_rating": "T",
            "developers": ["Intelligent Systems"],
            "genres": ["Strategy", "Turn-Based", "Tactics"]
          },
          {
            "meta_score": null,
            "title": "Fire Emblem Engage: Expansion Pass Wave 1",
            "platform": "Switch",
            "date": "Jan 20, 2023",
            "user_score": null,
            "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-1",
            "esrb_rating": null,
            "developers": ["Intelligent Systems"],
            "genres": ["Strategy", "Turn-Based", "Tactics"]
          },
          {
            "meta_score": 83,
            "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 3",
            "platform": "Switch",
            "date": "Dec 7, 2022",
            "user_score": 7.3,
            "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-3",
            "esrb_rating": null,
            "developers": ["Nintendo"],
            "genres": ["Racing", "Arcade", "Automobile"]
          },
          {
            "meta_score": 71,
            "title": "Pokemon Violet",
            "platform": "Switch",
            "date": "Nov 18, 2022",
            "user_score": 4.0,
            "link": "/game/switch/pokemon-violet",
            "esrb_rating": "E",
            "developers": ["Game Freak"],
            "genres": ["Role-Playing", "Trainer"]
          },
          {
            "meta_score": 72,
            "title": "Pokemon Scarlet",
            "platform": "Switch",
            "date": "Nov 18, 2022",
            "user_score": 3.4,
            "link": "/game/switch/pokemon-scarlet",
            "esrb_rating": "E",
            "developers": ["Game Freak"],
            "genres": ["Role-Playing", "Trainer"]
          }    ,
            {
              "meta_score": 86,
              "title": "Bayonetta 3",
              "platform": "Switch",
              "date": "Oct 28, 2022",
              "user_score": 7.1,
              "link": "/game/switch/bayonetta-3",
              "esrb_rating": "M",
              "developers": ["PlatinumGames"],
              "genres": ["Action Adventure", "Linear"]
            },
            {
              "meta_score": null,
              "title": "Xenoblade Chronicles 3: Expansion Pass Wave 2",
              "platform": "Switch",
              "date": "Oct 13, 2022",
              "user_score": null,
              "link": "/game/switch/xenoblade-chronicles-3-expansion-pass-wave-2",
              "esrb_rating": "T",
              "developers": ["Monolith Soft"],
              "genres": ["Role-Playing", "Action RPG"]
            },
            {
              "meta_score": 83,
              "title": "Splatoon 3",
              "platform": "Switch",
              "date": "Sep 9, 2022",
              "user_score": 6.8,
              "link": "/game/switch/splatoon-3",
              "esrb_rating": "E10+",
              "developers": ["Nintendo"],
              "genres": ["Action", "Shooter", "Third-Person", "Arcade"]
            },
            {
              "meta_score": 67,
              "title": "Kirby's Dream Buffet",
              "platform": "Switch",
              "date": "Aug 17, 2022",
              "user_score": 7.3,
              "link": "/game/switch/kirbys-dream-buffet",
              "esrb_rating": "E",
              "developers": ["HAL Labs"],
              "genres": ["Miscellaneous", "Party / Minigame"]
            },
            {
              "meta_score": 77,
              "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 2",
              "platform": "Switch",
              "date": "Aug 4, 2022",
              "user_score": 6.8,
              "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-2",
              "esrb_rating": null,
              "developers": ["Nintendo"],
              "genres": ["Racing", "Arcade", "Automobile"]
            },
            {
              "meta_score": 89,
              "title": "Xenoblade Chronicles 3",
              "platform": "Switch",
              "date": "Jul 29, 2022",
              "user_score": 8.5,
              "link": "/game/switch/xenoblade-chronicles-3",
              "esrb_rating": "T",
              "developers": ["Monolith Soft"],
              "genres": ["Role-Playing", "Action RPG"]
            },
            {
              "meta_score": 81,
              "title": "Live A Live",
              "platform": "Switch",
              "date": "Jul 22, 2022",
              "user_score": 7.5,
              "link": "/game/switch/live-a-live",
              "esrb_rating": "T",
              "developers": ["Square Enix", "historia Inc"],
              "genres": ["Role-Playing", "Strategy", "Turn-Based", "Japanese-Style", "Tactics"]
            },
            {
              "meta_score": 80,
              "title": "Fire Emblem Warriors: Three Hopes",
              "platform": "Switch",
              "date": "Jun 24, 2022",
              "user_score": 8.9,
              "link": "/game/switch/fire-emblem-warriors-three-hopes",
              "esrb_rating": "T",
              "developers": ["Nintendo", "Koei Tecmo Games"],
              "genres": ["Strategy", "Real-Time", "General", "Action", "Beat-'Em-Up", "3D"]
            },
            {
              "meta_score": 73,
              "title": "Mario Strikers: Battle League",
              "platform": "Switch",
              "date": "Jun 10, 2022",
              "user_score": 4.4,
              "link": "/game/switch/mario-strikers-battle-league",
              "esrb_rating": "E10+",
              "developers": ["Next Level Games", "Nintendo"],
              "genres": ["Sports", "Team", "Soccer", "Arcade"]
            },
            {
              "meta_score": 72,
              "title": "Nintendo Switch Sports",
              "platform": "Switch",
              "date": "Apr 29, 2022",
              "user_score": 5.9,
              "link": "/game/switch/nintendo-switch-sports",
              "esrb_rating": "E10+",
              "developers": ["Nintendo"],
              "genres": ["Sports", "General", "Individual", "Athletics"]
            },
              {
                "meta_score": 85,
                "title": "Kirby and the Forgotten Land",
                "platform": "Switch",
                "date": "Mar 25, 2022",
                "user_score": 8.9,
                "link": "/game/switch/kirby-and-the-forgotten-land",
                "esrb_rating": "E10+",
                "developers": ["Nintendo", "HAL Labs"],
                "genres": ["Action", "Platformer", "3D"]
              },
              {
                "meta_score": 73,
                "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 1",
                "platform": "Switch",
                "date": "Mar 18, 2022",
                "user_score": 6.8,
                "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-1",
                "esrb_rating": "E",
                "developers": ["Nintendo"],
                "genres": ["Racing", "Arcade", "Automobile"]
              },
              {
                "meta_score": 83,
                "title": "Pokemon Legends: Arceus",
                "platform": "Switch",
                "date": "Jan 28, 2022",
                "user_score": 8.1,
                "link": "/game/switch/pokemon-legends-arceus",
                "esrb_rating": "E",
                "developers": ["Game Freak"],
                "genres": ["Role-Playing", "Trainer"]
              },
              {
                "meta_score": 73,
                "title": "Big Brain Academy: Brain vs. Brain",
                "platform": "Switch",
                "date": "Dec 3, 2021",
                "user_score": 8.1,
                "link": "/game/switch/big-brain-academy-brain-vs-brain",
                "esrb_rating": "E",
                "developers": ["Nintendo"],
                "genres": ["Miscellaneous", "Party / Minigame"]
              },
              {
                "meta_score": 69,
                "title": "Disney Magical World 2: Enchanted Edition",
                "platform": "Switch",
                "date": "Dec 3, 2021",
                "user_score": 7.0,
                "link": "/game/switch/disney-magical-world-2-enchanted-edition",
                "esrb_rating": "E",
                "developers": ["h.a.n.d. Inc."],
                "genres": ["Simulation", "Virtual", "Virtual Life"]
              },
              {
                "meta_score": 73,
                "title": "Pokemon Brilliant Diamond",
                "platform": "Switch",
                "date": "Nov 19, 2021",
                "user_score": 5.3,
                "link": "/game/switch/pokemon-brilliant-diamond",
                "esrb_rating": "E",
                "developers": ["ILCA", "Inc."],
                "genres": ["Role-Playing", "Trainer"]
              },
              {
                "meta_score": 73,
                "title": "Pokemon Shining Pearl",
                "platform": "Switch",
                "date": "Nov 19, 2021",
                "user_score": 5.5,
                "link": "/game/switch/pokemon-shining-pearl",
                "esrb_rating": "E",
                "developers": ["ILCA", "Inc."],
                "genres": ["Role-Playing", "Trainer"]
              },
              {
                "meta_score": null,
                "title": "Pokemon Brilliant Diamond / Pokemon Shining Pearl Double Pack",
                "platform": "Switch",
                "date": "Nov 19, 2021",
                "user_score": 6.4,
                "link": "/game/switch/pokemon-brilliant-diamond-pokemon-shining-pearl-double-pack",
                "esrb_rating": "E",
                "developers": ["ILCA", "Inc."],
                "genres": ["Role-Playing", "Trainer"]
              },
              {
                "meta_score": 82,
                "title": "Animal Crossing: New Horizons - Happy Home Paradise",
                "platform": "Switch",
                "date": "Nov 5, 2021",
                "user_score": 7.9,
                "link": "/game/switch/animal-crossing-new-horizons---happy-home-paradise",
                "esrb_rating": null,
                "developers": ["Nintendo"],
                "genres": ["Simulation", "Virtual", "Virtual Life"]
              },
              {
                "meta_score": 80,
                "title": "Mario Party Superstars",
                "platform": "Switch",
                "date": "Oct 29, 2021",
                "user_score": 8.0,
                "link": "/game/switch/mario-party-superstars",
                "esrb_rating": "E",
                "developers": ["Nintendo", "Nd Cube"],
                "genres": ["Miscellaneous", "Party / Minigame"]
              },
              {
                "meta_score": null,
                "title": "Hyrule Warriors: Age of Calamity - Guardian of Remembrance",
                "platform": "Switch",
                "date": "Oct 29, 2021",
                "user_score": null,
                "link": "/game/switch/hyrule-warriors-age-of-calamity---guardian-of-remembrance",
                "esrb_rating": null,
                "developers": ["Omega Force"],
                "genres": ["Action", "Beat-'Em-Up", "3D"]
              },
                {
                  "meta_score": 65,
                  "title": "Pikmin Bloom",
                  "platform": "iOS",
                  "date": "Oct 28, 2021",
                  "user_score": 6.0,
                  "link": "/game/ios/pikmin-bloom",
                  "esrb_rating": "",
                  "developers": ["Niantic Tokyo Studio"],
                  "genres": ["Action", "General"]
                },
                {
                  "meta_score": 70,
                  "title": "Minecraft Dungeons: Ultimate Edition",
                  "platform": "Switch",
                  "date": "Oct 26, 2021",
                  "user_score": 7.1,
                  "link": "/game/switch/minecraft-dungeons-ultimate-edition",
                  "esrb_rating": "",
                  "developers": ["Nintendo", "Mojang AB"],
                  "genres": ["Role-Playing", "Action RPG"]
                },
                {
                  "meta_score": 68,
                  "title": "Super Smash Bros. Ultimate: Sora",
                  "platform": "Switch",
                  "date": "Oct 18, 2021",
                  "user_score": 6.8,
                  "link": "/game/switch/super-smash-bros-ultimate-sora",
                  "esrb_rating": "",
                  "developers": ["Nintendo"],
                  "genres": ["Action", "Fighting", "2D"]
                },
                {
                  "meta_score": 88,
                  "title": "Metroid Dread",
                  "platform": "Switch",
                  "date": "Oct 8, 2021",
                  "user_score": 8.7,
                  "link": "/game/switch/metroid-dread",
                  "esrb_rating": "T",
                  "developers": ["Mercury Steam", "Nintendo"],
                  "genres": ["Action", "Action Adventure", "Platformer", "Open-World", "Metroidvania"]
                },
                {
                  "meta_score": 76,
                  "title": "WarioWare: Get It Together!",
                  "platform": "Switch",
                  "date": "Sep 10, 2021",
                  "user_score": 7.7,
                  "link": "/game/switch/warioware-get-it-together!",
                  "esrb_rating": "E10+",
                  "developers": ["Nintendo", "Intelligent Systems"],
                  "genres": ["Miscellaneous", "Party / Minigame"]
                },
                {
                  "meta_score": 81,
                  "title": "The Legend of Zelda: Skyward Sword HD",
                  "platform": "Switch",
                  "date": "Jul 16, 2021",
                  "user_score": 7.3,
                  "link": "/game/switch/the-legend-of-zelda-skyward-sword-hd",
                  "esrb_rating": "E10+",
                  "developers": ["Tantalus", "Nintendo"],
                  "genres": ["Action Adventure", "Open-World"]
                },
                {
                  "meta_score": 70,
                  "title": "Fitness Boxing 2: Rhythm & Exercise - Musical Journey",
                  "platform": "Switch",
                  "date": "Jul 1, 2021",
                  "user_score": "",
                  "link": "/game/switch/fitness-boxing-2-rhythm-exercise---musical-journey",
                  "esrb_rating": "",
                  "developers": ["Jupiter Corporation"],
                  "genres": ["Miscellaneous", "Exercise / Fitness"]
                },
                {
                  "meta_score": 67,
                  "title": "Super Smash Bros. Ultimate: Kazuya",
                  "platform": "Switch",
                  "date": "Jun 29, 2021",
                  "user_score": "",
                  "link": "/game/switch/super-smash-bros-ultimate-kazuya",
                  "esrb_rating": "",
                  "developers": ["Nintendo"],
                  "genres": ["Action", "Fighting", "2D"]
                },
                {
                  "meta_score": 70,
                  "title": "Mario Golf: Super Rush",
                  "platform": "Switch",
                  "date": "Jun 25, 2021",
                  "user_score": 5.5,
                  "link": "/game/switch/mario-golf-super-rush",
                  "esrb_rating": "E",
                  "developers": ["Nintendo", "Camelot Software Planning"],
                  "genres": ["Sports", "Individual", "Golf", "Arcade"]
                },
                {
                  "meta_score": 67,
                  "title": "Hyrule Warriors: Age of Calamity - Pulse of the Ancients",
                  "platform": "Switch",
                  "date": "Jun 18, 2021",
                  "user_score": 8.2,
                  "link": "/game/switch/hyrule-warriors-age-of-calamity---pulse-of-the-ancients",
                  "esrb_rating": "",
                  "developers": ["Omega Force"],
                  "genres": ["Action", "Beat-'Em-Up", "3D"]
                },
                {
                  "meta_score": 77,
                  "title": "Game Builder Garage",
                  "platform": "Switch",
                  "date": "Jun 11, 2021",
                  "user_score": 7.8,
                  "link": "/game/switch/game-builder-garage",
                  "esrb_rating": "E",
                  "developers": ["Nintendo"],
                  "genres": ["Miscellaneous", "Application"]
                },
                {
                  "meta_score": 66,
                  "title": "DC Super Hero Girls: Teen Power",
                  "platform": "Switch",
                  "date": "Jun 4, 2021",
                  "user_score": 6.7,
                  "link": "/game/switch/dc-super-hero-girls-teen-power",
                  "esrb_rating": "E10+",
                  "developers": ["Nintendo", "TOYBOX"],
                  "genres": ["Action Adventure", "Open-World"]
                },
                {
                  "meta_score": 71,
                  "title": "Miitopia",
                  "platform": "Switch",
                  "date": "May 21, 2021",
                  "user_score": 8.1,
                  "link": "/game/switch/miitopia",
                  "esrb_rating": "E",
                  "developers": ["Nintendo", "GREZZO"],
                  "genres": ["Action", "Role-Playing", "General"]
                },
                {
                  "meta_score": 74,
                  "title": "Famicom Detective Club: The Missing Heir",
                  "platform": "Switch",
                  "date": "May 14, 2021",
                  "user_score": 7.1,
                  "link": "/game/switch/famicom-detective-club-the-missing-heir",
                  "esrb_rating": "T",
                  "developers": ["Nintendo", "Mages."],
                  "genres": ["Adventure", "Visual Novel"]
                },
                {
                  "meta_score": 74,
                  "title": "Famicom Detective Club: The Girl Who Stands Behind",
                  "platform": "Switch",
                  "date": "May 14, 2021",
                  "user_score": 7.1,
                  "link": "/game/switch/famicom-detective-club-the-girl-who-stands-behind",
                  "esrb_rating": "T",
                  "developers": ["Nintendo", "Mages."],
                  "genres": ["Adventure", "Visual Novel"]
                },
                {
                  "meta_score": 79,
                  "title": "New Pokemon Snap",
                  "platform": "Switch",
                  "date": "Apr 30, 2021",
                  "user_score": 6.9,
                  "link": "/game/switch/new-pokemon-snap",
                  "esrb_rating": "E",
                  "developers": ["Bandai Namco Games", "The Pokemon Company"],
                  "genres": ["Action", "Shooter", "Rail"]
                },
                {
                  "meta_score": 78,
                  "title": "Super Smash Bros. Ultimate: Pyra / Mythra",
                  "platform": "Switch",
                  "date": "Mar 4, 2021",
                  "user_score": 7.7,
                  "link": "/game/switch/super-smash-bros-ultimate-pyra-mythra",
                  "esrb_rating": "",
                  "developers": ["Nintendo"],
                  "genres": ["Action", "Fighting", "2D"]
                },
                {
                  "meta_score": 70,
                  "title": "Project Triangle Strategy Debut Demo",
                  "platform": "Switch",
                  "date": "Feb 17, 2021",
                  "user_score": "",
                  "link": "/game/switch/project-triangle-strategy-debut-demo",
                  "esrb_rating": "",
                  "developers": ["Square Enix", "Nintendo"],
                  "genres": ["Strategy", "Turn-Based", "Tactics"]
                },
                {
                  "meta_score": 89,
                  "title": "Super Mario 3D World + Bowser's Fury",
                  "platform": "Switch",
                  "date": "Feb 12, 2021",
                  "user_score": 8.7,
                  "link": "/game/switch/super-mario-3d-world-+-bowsers-fury",
                  "esrb_rating": "E",
                  "developers": ["Nintendo"],
                  "genres": ["Action", "Platformer", "3D"]
                },
                {
                  "meta_score": 76,
                  "title": "Super Smash Bros. Ultimate: Sephiroth",
                  "platform": "Switch",
                  "date": "Dec 22, 2020",
                  "user_score": 7.7,
                  "link": "/game/switch/super-smash-bros-ultimate-sephiroth",
                  "esrb_rating": "",
                  "developers": ["Nintendo"],
                  "genres": ["Action", "Fighting", "2D"]
                },
                {
                  "meta_score": 66,
                  "title": "Fitness Boxing 2: Rhythm & Exercise",
                  "platform": "Switch",
                  "date": "Dec 4, 2020",
                  "user_score": 5.7,
                  "link": "/game/switch/fitness-boxing-2-rhythm-exercise",
                  "esrb_rating": "E",
                  "developers": ["Nintendo", "Jupiter Corporation", "Imagineer Co., Ltd."],
                  "genres": ["Miscellaneous", "Exercise / Fitness"]
                },
                {
                  "meta_score": 63,
                  "title": "Fire Emblem: Shadow Dragon & the Blade of Light",
                  "platform": "Switch",
                  "date": "Dec 4, 2020",
                  "user_score": 7.8,
                  "link": "/game/switch/fire-emblem-shadow-dragon-the-blade-of-light",
                  "esrb_rating": "E",
                  "developers": ["Intelligent Systems"],
                  "genres": ["Strategy", "Turn-Based", "Tactics"]
                },
                {
                  "meta_score": 78,
                  "title": "Hyrule Warriors: Age of Calamity",
                  "platform": "Switch",
                  "date": "Nov 20, 2020",
                  "user_score": 8.0,
                  "link": "/game/switch/hyrule-warriors-age-of-calamity",
                  "esrb_rating": "T",
                  "developers": ["Omega Force", "Koei Tecmo Games"],
                  "genres": ["Action", "Beat-'Em-Up", "3D"]
                },
                {
                  "meta_score": 70,
                  "title": "Pokemon Sword + Pokemon Sword Expansion Pass",
                  "platform": "Switch",
                  "date": "Nov 6, 2020",
                  "user_score": 6.5,
                  "link": "/game/switch/pokemon-sword-+-pokemon-sword-expansion-pass",
                  "esrb_rating": "E",
                  "developers": ["Game Freak"],
                  "genres": ["Role-Playing", "Trainer"]
                },
                {
                  "meta_score": 69,
                  "title": "Pokemon Shield + Pokemon Shield Expansion Pass",
                  "platform": "Switch",
                  "date": "Nov 6, 2020",
                  "user_score": 6.4,
                  "link": "/game/switch/pokemon-shield-+-pokemon-shield-expansion-pass",
                  "esrb_rating": "E",
                  "developers": ["Game Freak"],
                  "genres": ["Role-Playing", "Trainer"]
                },
                {
                  "meta_score": 85,
                  "title": "Pikmin 3 Deluxe",
                  "platform": "Switch",
                  "date": "Oct 30, 2020",
                  "user_score": 8.6,
                  "link": "/game/switch/pikmin-3-deluxe",
                  "esrb_rating": "E10+",
                  "developers": ["Eighting", "Nintendo"],
                  "genres": ["Strategy", "Real-Time", "General"]
                }
              ];

  filteredData = this.data.slice(); // Datos filtrados
  paginatedData = this.data.slice(); // Datos paginados
  pageSize = 5; // Cantidad de datos a mostrar por defecto
  currentPage = 1; // Página actual
  disabledRows: number[] = []; // Filas desactivadas por checkbox

  sortDirection: { [key: string]: 'asc' | 'desc' | 'none' } = {
    meta_score: 'none',
    title: 'none',
    platform: 'none',
    date: 'none',
    user_score: 'none',
    link: 'none',
    esrb_rating: 'none',
    developers: 'none',
    genres: 'none'
  };

  ngOnInit() {
    this.paginateData(); // Aplica el valor por defecto al inicio
  }

  // Filtra la tabla según el texto ingresado
  filterTable(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter(item =>
      (item.meta_score !== null && item.meta_score.toString().includes(filter)) ||
      (item.title !== null && item.title.toLowerCase().includes(filter)) ||
      (item.platform !== null && item.platform.toLowerCase().includes(filter)) ||
      (item.date !== null && item.date.toLowerCase().includes(filter)) ||
      (item.user_score !== null && item.user_score.toString().includes(filter)) ||
      (item.link !== null && item.link.toLowerCase().includes(filter)) ||
      (item.esrb_rating !== null && item.esrb_rating.toLowerCase().includes(filter)) ||
      (item.developers !== null && item.developers.join(', ').toLowerCase().includes(filter)) ||
      (item.genres !== null && item.genres.join(', ').toLowerCase().includes(filter))
    );
    this.currentPage = 1; // Reinicia a la primera página después de filtrar
    this.paginateData(); // Actualiza los datos paginados
  }

  // Ordena la tabla según la columna seleccionada
  sortTable(column: string) {
    if (this.sortDirection[column] === 'none' || this.sortDirection[column] === 'desc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column as keyof typeof a];
        const bValue = b[column as keyof typeof b];
        if (aValue === null || bValue === null) return 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        }
        return (aValue as number) - (bValue as number);
      });
      this.sortDirection[column] = 'asc';
    } else if (this.sortDirection[column] === 'asc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column as keyof typeof a];
        const bValue = b[column as keyof typeof b];
        if (aValue === null || bValue === null) return 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return bValue.localeCompare(aValue);
        }
        return (bValue as number) - (aValue as number);
      });
      this.sortDirection[column] = 'desc';
    } else {
      this.filteredData = this.data.slice(); // Restablece al orden original
      this.sortDirection[column] = 'none';
    }
    this.currentPage = 1; // Reinicia a la primera página después de ordenar
    this.paginateData(); // Actualiza los datos paginados
  }

  // Cambia la cantidad de datos a mostrar
  changePageSize(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.currentPage = 1; // Reinicia a la primera página después de cambiar el tamaño
    this.paginateData(); // Actualiza los datos paginados
  }

  // Pagina los datos según el tamaño de página seleccionado
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }

  // Navega a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  // Navega a la página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }

  // Calcula el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  // Desactiva o activa una fila
  toggleRow(index: number) {
    if (this.disabledRows.includes(index)) {
      this.disabledRows = this.disabledRows.filter(i => i !== index);
    } else {
      this.disabledRows.push(index);
    }
  }
}