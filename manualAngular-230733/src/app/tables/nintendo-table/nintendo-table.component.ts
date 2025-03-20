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
      "meta_score": NaN,
      "title": "Super Mario RPG",
      "platform": "Switch",
      "date": "Nov 17, 2023",
      "user_score": NaN,
      "link": "/game/switch/super-mario-rpg",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "WarioWare: Move It!",
      "platform": "Switch",
      "date": "Nov 3, 2023",
      "user_score": NaN,
      "link": "/game/switch/warioware-move-it!",
      "esrb_rating": "RP",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Bros. Wonder",
      "platform": "Switch",
      "date": "Oct 20, 2023",
      "user_score": NaN,
      "link": "/game/switch/super-mario-bros-wonder",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Detective Pikachu Returns",
      "platform": "Switch",
      "date": "Oct 6, 2023",
      "user_score": NaN,
      "link": "/game/switch/detective-pikachu-returns",
      "esrb_rating": null,
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Adventure",
        "3D",
        "Third-Person"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fae Farm",
      "platform": "Switch",
      "date": "Sep 8, 2023",
      "user_score": NaN,
      "link": "/game/switch/fae-farm",
      "esrb_rating": "E10+",
      "developers": [
        "Phoenix Labs"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pikmin 4",
      "platform": "Switch",
      "date": "Jul 21, 2023",
      "user_score": 9.0,
      "link": "/game/switch/pikmin-4",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Sleep",
      "platform": "iOS",
      "date": "Jul 20, 2023",
      "user_score": NaN,
      "link": "/game/ios/pokemon-sleep",
      "esrb_rating": null,
      "developers": [
        "The Pokemon Company",
        " Select Button"
      ],
      "genres": [
        "Role-Playing",
        "Miscellaneous",
        "Application",
        "Trainer"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 5",
      "platform": "Switch",
      "date": "Jul 12, 2023",
      "user_score": 7.6,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-5",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Everybody 1-2-Switch!",
      "platform": "Switch",
      "date": "Jun 30, 2023",
      "user_score": 5.4,
      "link": "/game/switch/everybody-1-2-switch!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Pikmin 1",
      "platform": "Switch",
      "date": "Jun 21, 2023",
      "user_score": 8.4,
      "link": "/game/switch/pikmin-1",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "General"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Pikmin 2",
      "platform": "Switch",
      "date": "Jun 21, 2023",
      "user_score": 8.6,
      "link": "/game/switch/pikmin-2",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "General"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pikmin 1 + 2",
      "platform": "Switch",
      "date": "Jun 21, 2023",
      "user_score": 8.5,
      "link": "/game/switch/pikmin-1-+-2",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": 96.0,
      "title": "The Legend of Zelda: Tears of the Kingdom",
      "platform": "Switch",
      "date": "May 12, 2023",
      "user_score": 8.2,
      "link": "/game/switch/the-legend-of-zelda-tears-of-the-kingdom",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Xenoblade Chronicles 3: Expansion Pass Wave 4 - Future Redeemed",
      "platform": "Switch",
      "date": "Apr 25, 2023",
      "user_score": 8.8,
      "link": "/game/switch/xenoblade-chronicles-3-expansion-pass-wave-4---future-redeemed",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Advance Wars 1 + 2: Re-Boot Camp",
      "platform": "Switch",
      "date": "Apr 21, 2023",
      "user_score": 8.1,
      "link": "/game/switch/advance-wars-1-+-2-re-boot-camp",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " WayForward"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Engage: Expansion Pass Wave 4",
      "platform": "Switch",
      "date": "Apr 5, 2023",
      "user_score": NaN,
      "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-4",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Bayonetta Origins: Cereza and the Lost Demon",
      "platform": "Switch",
      "date": "Mar 17, 2023",
      "user_score": 8.6,
      "link": "/game/switch/bayonetta-origins-cereza-and-the-lost-demon",
      "esrb_rating": "T",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Action Adventure",
        "Linear"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 4",
      "platform": "Switch",
      "date": "Mar 9, 2023",
      "user_score": 7.8,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-4",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Engage: Expansion Pass Wave 3",
      "platform": "Switch",
      "date": "Mar 7, 2023",
      "user_score": NaN,
      "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-3",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Splatoon 3: Expansion Pass Wave 1 - Inkopolis",
      "platform": "Switch",
      "date": "Feb 28, 2023",
      "user_score": NaN,
      "link": "/game/switch/splatoon-3-expansion-pass-wave-1---inkopolis",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Kirby's Return to Dream Land Deluxe",
      "platform": "Switch",
      "date": "Feb 24, 2023",
      "user_score": 8.8,
      "link": "/game/switch/kirbys-return-to-dream-land-deluxe",
      "esrb_rating": "E10+",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 3: Expansion Pass Wave 3",
      "platform": "Switch",
      "date": "Feb 15, 2023",
      "user_score": NaN,
      "link": "/game/switch/xenoblade-chronicles-3-expansion-pass-wave-3",
      "esrb_rating": null,
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Engage: Expansion Pass Wave 2",
      "platform": "Switch",
      "date": "Feb 8, 2023",
      "user_score": NaN,
      "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-2",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 94.0,
      "title": "Metroid Prime Remastered",
      "platform": "Switch",
      "date": "Feb 8, 2023",
      "user_score": 8.7,
      "link": "/game/switch/metroid-prime-remastered",
      "esrb_rating": "T",
      "developers": [
        "Nintendo",
        " Retro Studios",
        " Iron Galaxy Studios"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Fire Emblem Engage",
      "platform": "Switch",
      "date": "Jan 20, 2023",
      "user_score": 6.6,
      "link": "/game/switch/fire-emblem-engage",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Engage: Expansion Pass Wave 1",
      "platform": "Switch",
      "date": "Jan 20, 2023",
      "user_score": NaN,
      "link": "/game/switch/fire-emblem-engage-expansion-pass-wave-1",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 3",
      "platform": "Switch",
      "date": "Dec 7, 2022",
      "user_score": 7.3,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-3",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Pokemon Violet",
      "platform": "Switch",
      "date": "Nov 18, 2022",
      "user_score": 4.0,
      "link": "/game/switch/pokemon-violet",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Pokemon Scarlet",
      "platform": "Switch",
      "date": "Nov 18, 2022",
      "user_score": 3.4,
      "link": "/game/switch/pokemon-scarlet",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Scarlet / Pokemon Violet Dual Pack Steelbook Edition",
      "platform": "Switch",
      "date": "Nov 18, 2022",
      "user_score": 8.0,
      "link": "/game/switch/pokemon-scarlet-pokemon-violet-dual-pack-steelbook-edition",
      "esrb_rating": "RP",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation",
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Bayonetta 3",
      "platform": "Switch",
      "date": "Oct 28, 2022",
      "user_score": 7.1,
      "link": "/game/switch/bayonetta-3",
      "esrb_rating": "M",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Action Adventure",
        "Linear"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 3: Expansion Pass Wave 2",
      "platform": "Switch",
      "date": "Oct 13, 2022",
      "user_score": NaN,
      "link": "/game/switch/xenoblade-chronicles-3-expansion-pass-wave-2",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Splatoon 3",
      "platform": "Switch",
      "date": "Sep 9, 2022",
      "user_score": 6.8,
      "link": "/game/switch/splatoon-3",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Kirby's Dream Buffet",
      "platform": "Switch",
      "date": "Aug 17, 2022",
      "user_score": 7.3,
      "link": "/game/switch/kirbys-dream-buffet",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 2",
      "platform": "Switch",
      "date": "Aug 4, 2022",
      "user_score": 6.8,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-2",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Xenoblade Chronicles 3",
      "platform": "Switch",
      "date": "Jul 29, 2022",
      "user_score": 8.5,
      "link": "/game/switch/xenoblade-chronicles-3",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Live A Live",
      "platform": "Switch",
      "date": "Jul 22, 2022",
      "user_score": 7.5,
      "link": "/game/switch/live-a-live",
      "esrb_rating": "T",
      "developers": [
        "Square Enix",
        " historia Inc"
      ],
      "genres": [
        "Role-Playing",
        "Strategy",
        "Turn-Based",
        "Japanese-Style",
        "Tactics"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Fire Emblem Warriors: Three Hopes",
      "platform": "Switch",
      "date": "Jun 24, 2022",
      "user_score": 8.9,
      "link": "/game/switch/fire-emblem-warriors-three-hopes",
      "esrb_rating": "T",
      "developers": [
        "Nintendo",
        " Koei Tecmo Games"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "General",
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Mario Strikers: Battle League",
      "platform": "Switch",
      "date": "Jun 10, 2022",
      "user_score": 4.4,
      "link": "/game/switch/mario-strikers-battle-league",
      "esrb_rating": "E10+",
      "developers": [
        "Next Level Games",
        " Nintendo"
      ],
      "genres": [
        "Sports",
        "Team",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Nintendo Switch Sports",
      "platform": "Switch",
      "date": "Apr 29, 2022",
      "user_score": 5.9,
      "link": "/game/switch/nintendo-switch-sports",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "General",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Kirby and the Forgotten Land",
      "platform": "Switch",
      "date": "Mar 25, 2022",
      "user_score": 8.9,
      "link": "/game/switch/kirby-and-the-forgotten-land",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 1",
      "platform": "Switch",
      "date": "Mar 18, 2022",
      "user_score": 6.8,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-1",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Pokemon Legends: Arceus",
      "platform": "Switch",
      "date": "Jan 28, 2022",
      "user_score": 8.1,
      "link": "/game/switch/pokemon-legends-arceus",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Big Brain Academy: Brain vs. Brain",
      "platform": "Switch",
      "date": "Dec 3, 2021",
      "user_score": 8.1,
      "link": "/game/switch/big-brain-academy-brain-vs-brain",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Disney Magical World 2: Enchanted Edition",
      "platform": "Switch",
      "date": "Dec 3, 2021",
      "user_score": 7.0,
      "link": "/game/switch/disney-magical-world-2-enchanted-edition",
      "esrb_rating": "E",
      "developers": [
        "h.a.n.d. Inc."
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Pokemon Brilliant Diamond",
      "platform": "Switch",
      "date": "Nov 19, 2021",
      "user_score": 5.3,
      "link": "/game/switch/pokemon-brilliant-diamond",
      "esrb_rating": "E",
      "developers": [
        "ILCA",
        " Inc."
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Pokemon Shining Pearl",
      "platform": "Switch",
      "date": "Nov 19, 2021",
      "user_score": 5.5,
      "link": "/game/switch/pokemon-shining-pearl",
      "esrb_rating": "E",
      "developers": [
        "ILCA",
        " Inc."
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Brilliant Diamond / Pokemon Shining Pearl Double Pack",
      "platform": "Switch",
      "date": "Nov 19, 2021",
      "user_score": 6.4,
      "link": "/game/switch/pokemon-brilliant-diamond-pokemon-shining-pearl-double-pack",
      "esrb_rating": "E",
      "developers": [
        "ILCA",
        " Inc."
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Animal Crossing: New Horizons - Happy Home Paradise",
      "platform": "Switch",
      "date": "Nov 5, 2021",
      "user_score": 7.9,
      "link": "/game/switch/animal-crossing-new-horizons---happy-home-paradise",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Mario Party Superstars",
      "platform": "Switch",
      "date": "Oct 29, 2021",
      "user_score": 8.0,
      "link": "/game/switch/mario-party-superstars",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors: Age of Calamity - Guardian of Remembrance",
      "platform": "Switch",
      "date": "Oct 29, 2021",
      "user_score": NaN,
      "link": "/game/switch/hyrule-warriors-age-of-calamity---guardian-of-remembrance",
      "esrb_rating": null,
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Pikmin Bloom",
      "platform": "iOS",
      "date": "Oct 28, 2021",
      "user_score": 6.0,
      "link": "/game/ios/pikmin-bloom",
      "esrb_rating": null,
      "developers": [
        "Niantic Tokyo Studio"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Minecraft Dungeons: Ultimate Edition",
      "platform": "Switch",
      "date": "Oct 26, 2021",
      "user_score": 7.1,
      "link": "/game/switch/minecraft-dungeons-ultimate-edition",
      "esrb_rating": null,
      "developers": [
        "Nintendo",
        " Mojang AB"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Sora",
      "platform": "Switch",
      "date": "Oct 18, 2021",
      "user_score": 6.8,
      "link": "/game/switch/super-smash-bros-ultimate-sora",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Metroid Dread",
      "platform": "Switch",
      "date": "Oct 8, 2021",
      "user_score": 8.7,
      "link": "/game/switch/metroid-dread",
      "esrb_rating": "T",
      "developers": [
        "Mercury Steam",
        " Nintendo"
      ],
      "genres": [
        "Action",
        "Action Adventure",
        "Platformer",
        "Open-World",
        "",
        "Metroidvania"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "WarioWare: Get It Together!",
      "platform": "Switch",
      "date": "Sep 10, 2021",
      "user_score": 7.7,
      "link": "/game/switch/warioware-get-it-together!",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "The Legend of Zelda: Skyward Sword HD",
      "platform": "Switch",
      "date": "Jul 16, 2021",
      "user_score": 7.3,
      "link": "/game/switch/the-legend-of-zelda-skyward-sword-hd",
      "esrb_rating": "E10+",
      "developers": [
        "Tantalus",
        " Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fitness Boxing 2: Rhythm & Exercise - Musical Journey",
      "platform": "Switch",
      "date": "Jul 1, 2021",
      "user_score": NaN,
      "link": "/game/switch/fitness-boxing-2-rhythm-exercise---musical-journey",
      "esrb_rating": null,
      "developers": [
        "Jupiter Corporation"
      ],
      "genres": [
        "Miscellaneous",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Kazuya",
      "platform": "Switch",
      "date": "Jun 29, 2021",
      "user_score": NaN,
      "link": "/game/switch/super-smash-bros-ultimate-kazuya",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Mario Golf: Super Rush",
      "platform": "Switch",
      "date": "Jun 25, 2021",
      "user_score": 5.5,
      "link": "/game/switch/mario-golf-super-rush",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Golf",
        "Arcade"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Hyrule Warriors: Age of Calamity - Pulse of the Ancients",
      "platform": "Switch",
      "date": "Jun 18, 2021",
      "user_score": 8.2,
      "link": "/game/switch/hyrule-warriors-age-of-calamity---pulse-of-the-ancients",
      "esrb_rating": null,
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Game Builder Garage",
      "platform": "Switch",
      "date": "Jun 11, 2021",
      "user_score": 7.8,
      "link": "/game/switch/game-builder-garage",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "DC Super Hero Girls: Teen Power",
      "platform": "Switch",
      "date": "Jun 4, 2021",
      "user_score": 6.7,
      "link": "/game/switch/dc-super-hero-girls-teen-power",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " TOYBOX"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Miitopia",
      "platform": "Switch",
      "date": "May 21, 2021",
      "user_score": 8.1,
      "link": "/game/switch/miitopia",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " GREZZO"
      ],
      "genres": [
        "Action",
        "Role-Playing",
        "General"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Famicom Detective Club: The Missing Heir",
      "platform": "Switch",
      "date": "May 14, 2021",
      "user_score": 7.1,
      "link": "/game/switch/famicom-detective-club-the-missing-heir",
      "esrb_rating": "T",
      "developers": [
        "Nintendo",
        " Mages."
      ],
      "genres": [
        "Adventure",
        "Visual Novel"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Famicom Detective Club: The Girl Who Stands Behind",
      "platform": "Switch",
      "date": "May 14, 2021",
      "user_score": 7.1,
      "link": "/game/switch/famicom-detective-club-the-girl-who-stands-behind",
      "esrb_rating": "T",
      "developers": [
        "Nintendo",
        " Mages."
      ],
      "genres": [
        "Adventure",
        "Visual Novel"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "New Pokemon Snap",
      "platform": "Switch",
      "date": "Apr 30, 2021",
      "user_score": 6.9,
      "link": "/game/switch/new-pokemon-snap",
      "esrb_rating": "E",
      "developers": [
        "Bandai Namco Games",
        " The Pokemon Company"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Rail"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Pyra / Mythra",
      "platform": "Switch",
      "date": "Mar 4, 2021",
      "user_score": 7.7,
      "link": "/game/switch/super-smash-bros-ultimate-pyra-mythra",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Project Triangle Strategy Debut Demo",
      "platform": "Switch",
      "date": "Feb 17, 2021",
      "user_score": NaN,
      "link": "/game/switch/project-triangle-strategy-debut-demo",
      "esrb_rating": null,
      "developers": [
        "Square Enix",
        " Nintendo"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Super Mario 3D World + Bowser's Fury",
      "platform": "Switch",
      "date": "Feb 12, 2021",
      "user_score": 8.7,
      "link": "/game/switch/super-mario-3d-world-+-bowsers-fury",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Sephiroth",
      "platform": "Switch",
      "date": "Dec 22, 2020",
      "user_score": 7.7,
      "link": "/game/switch/super-smash-bros-ultimate-sephiroth",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Fitness Boxing 2: Rhythm & Exercise",
      "platform": "Switch",
      "date": "Dec 4, 2020",
      "user_score": 5.7,
      "link": "/game/switch/fitness-boxing-2-rhythm-exercise",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Jupiter Corporation",
        " Imagineer Co.",
        "Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": 63.0,
      "title": "Fire Emblem: Shadow Dragon & the Blade of Light",
      "platform": "Switch",
      "date": "Dec 4, 2020",
      "user_score": 7.8,
      "link": "/game/switch/fire-emblem-shadow-dragon-the-blade-of-light",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Hyrule Warriors: Age of Calamity",
      "platform": "Switch",
      "date": "Nov 20, 2020",
      "user_score": 8.0,
      "link": "/game/switch/hyrule-warriors-age-of-calamity",
      "esrb_rating": "T",
      "developers": [
        "Omega Force",
        " Koei Tecmo Games"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Sword + Pokemon Sword Expansion Pass",
      "platform": "Switch",
      "date": "Nov 6, 2020",
      "user_score": 6.5,
      "link": "/game/switch/pokemon-sword-+-pokemon-sword-expansion-pass",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Shield + Pokemon Shield Expansion Pass",
      "platform": "Switch",
      "date": "Nov 6, 2020",
      "user_score": 6.4,
      "link": "/game/switch/pokemon-shield-+-pokemon-shield-expansion-pass",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Pikmin 3 Deluxe",
      "platform": "Switch",
      "date": "Oct 30, 2020",
      "user_score": 8.6,
      "link": "/game/switch/pikmin-3-deluxe",
      "esrb_rating": "E10+",
      "developers": [
        "Eighting",
        " Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "General"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Part Time UFO",
      "platform": "Switch",
      "date": "Oct 28, 2020",
      "user_score": 7.5,
      "link": "/game/switch/part-time-ufo",
      "esrb_rating": "E10+",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda - Complete Edition",
      "platform": "Switch",
      "date": "Oct 23, 2020",
      "user_score": 8.8,
      "link": "/game/switch/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda---complete-edition",
      "esrb_rating": "E",
      "developers": [
        "Brace Yourself Games"
      ],
      "genres": [
        "Action",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Pokemon Sword / Shield: The Crown Tundra",
      "platform": "Switch",
      "date": "Oct 22, 2020",
      "user_score": 7.1,
      "link": "/game/switch/pokemon-sword-shield-the-crown-tundra",
      "esrb_rating": null,
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Mario Kart Live: Home Circuit",
      "platform": "Switch",
      "date": "Oct 16, 2020",
      "user_score": 7.1,
      "link": "/game/switch/mario-kart-live-home-circuit",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Velan Studios"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Steve & Alex",
      "platform": "Switch",
      "date": "Oct 13, 2020",
      "user_score": 7.6,
      "link": "/game/switch/super-smash-bros-ultimate-steve-alex",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Kart 8 Deluxe + Super Mario Party",
      "platform": "Switch",
      "date": "Oct 4, 2020",
      "user_score": NaN,
      "link": "/game/switch/mario-kart-8-deluxe-+-super-mario-party",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Super Mario Bros. 35",
      "platform": "Switch",
      "date": "Oct 1, 2020",
      "user_score": 7.6,
      "link": "/game/switch/super-mario-bros-35",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda - DLC 3 Story Pack: Symphony of the Mask",
      "platform": "Switch",
      "date": "Sep 23, 2020",
      "user_score": NaN,
      "link": "/game/switch/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda---dlc-3-story-pack-symphony-of-the-mask",
      "esrb_rating": "E",
      "developers": [
        "Brace Yourself Games"
      ],
      "genres": [
        "Action",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Kirby Fighters 2",
      "platform": "Switch",
      "date": "Sep 23, 2020",
      "user_score": 7.9,
      "link": "/game/switch/kirby-fighters-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " HAL Labs"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Super Mario 3D All-Stars",
      "platform": "Switch",
      "date": "Sep 18, 2020",
      "user_score": 6.4,
      "link": "/game/switch/super-mario-3d-all-stars",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda - DLC 2 Melody Pack",
      "platform": "Switch",
      "date": "Aug 26, 2020",
      "user_score": NaN,
      "link": "/game/switch/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda---dlc-2-melody-pack",
      "esrb_rating": "E",
      "developers": [
        "Brace Yourself Games"
      ],
      "genres": [
        "Action",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda - DLC 1 Character Pack",
      "platform": "Switch",
      "date": "Jul 20, 2020",
      "user_score": NaN,
      "link": "/game/switch/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda---dlc-1-character-pack",
      "esrb_rating": "E",
      "developers": [
        "Brace Yourself Games"
      ],
      "genres": [
        "Action",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Paper Mario: The Origami King",
      "platform": "Switch",
      "date": "Jul 17, 2020",
      "user_score": 7.0,
      "link": "/game/switch/paper-mario-the-origami-king",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Role-Playing",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Min Min",
      "platform": "Switch",
      "date": "Jun 29, 2020",
      "user_score": 8.2,
      "link": "/game/switch/super-smash-bros-ultimate-min-min",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Pokemon Cafe Mix",
      "platform": "Switch",
      "date": "Jun 23, 2020",
      "user_score": 6.2,
      "link": "/game/switch/pokemon-cafe-mix",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc.",
        " The Pokemon Company"
      ],
      "genres": [
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Pokemon Sword / Shield: The Isle of Armor",
      "platform": "Switch",
      "date": "Jun 17, 2020",
      "user_score": 5.2,
      "link": "/game/switch/pokemon-sword-shield-the-isle-of-armor",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Jump Rope Challenge",
      "platform": "Switch",
      "date": "Jun 15, 2020",
      "user_score": 6.9,
      "link": "/game/switch/jump-rope-challenge",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "Miscellaneous",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Clubhouse Games: 51 Worldwide Classics",
      "platform": "Switch",
      "date": "Jun 5, 2020",
      "user_score": 7.7,
      "link": "/game/switch/clubhouse-games-51-worldwide-classics",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Xenoblade Chronicles: Definitive Edition",
      "platform": "Switch",
      "date": "May 29, 2020",
      "user_score": 8.8,
      "link": "/game/switch/xenoblade-chronicles-definitive-edition",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Vs. Wrecking Crew",
      "platform": "Switch",
      "date": "May 1, 2020",
      "user_score": NaN,
      "link": "/game/switch/arcade-archives-vs-wrecking-crew",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Marvel Ultimate Alliance 3: The Black Order - Expansion 3 - Fantastic Four: Shadow of Doom",
      "platform": "Switch",
      "date": "Mar 26, 2020",
      "user_score": 7.9,
      "link": "/game/switch/marvel-ultimate-alliance-3-the-black-order---expansion-3---fantastic-four-shadow-of-doom",
      "esrb_rating": "T",
      "developers": [
        "Team Ninja"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Good Job!",
      "platform": "Switch",
      "date": "Mar 26, 2020",
      "user_score": 8.0,
      "link": "/game/switch/good-job!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Paladin Studios"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Animal Crossing: New Horizons",
      "platform": "Switch",
      "date": "Mar 20, 2020",
      "user_score": 5.6,
      "link": "/game/switch/animal-crossing-new-horizons",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Pokemon Mystery Dungeon: Rescue Team DX",
      "platform": "Switch",
      "date": "Mar 6, 2020",
      "user_score": 8.1,
      "link": "/game/switch/pokemon-mystery-dungeon-rescue-team-dx",
      "esrb_rating": "E",
      "developers": [
        "Spike Chunsoft"
      ],
      "genres": [
        "Role-Playing",
        "Roguelike"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Luigi's Mansion 3: Multiplayer Pack 1 & 2",
      "platform": "Switch",
      "date": "Mar 4, 2020",
      "user_score": NaN,
      "link": "/game/switch/luigis-mansion-3-multiplayer-pack-1-2",
      "esrb_rating": null,
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Action Adventure",
        "General"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Fire Emblem: Three Houses - Side Story: Cindered Shadows",
      "platform": "Switch",
      "date": "Feb 13, 2020",
      "user_score": 8.1,
      "link": "/game/switch/fire-emblem-three-houses---side-story-cindered-shadows",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon HOME",
      "platform": "iOS",
      "date": "Feb 11, 2020",
      "user_score": 3.9,
      "link": "/game/ios/pokemon-home",
      "esrb_rating": null,
      "developers": [
        "Game Freak",
        " ILCA",
        " Inc."
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon HOME",
      "platform": "Switch",
      "date": "Feb 11, 2020",
      "user_score": 3.1,
      "link": "/game/switch/pokemon-home",
      "esrb_rating": "E",
      "developers": [
        "Game Freak",
        " ILCA",
        " Inc."
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Byleth",
      "platform": "Switch",
      "date": "Jan 28, 2020",
      "user_score": 7.1,
      "link": "/game/switch/super-smash-bros-ultimate-byleth",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Tokyo Mirage Sessions #FE Encore",
      "platform": "Switch",
      "date": "Jan 17, 2020",
      "user_score": 6.2,
      "link": "/game/switch/tokyo-mirage-sessions-fe-encore",
      "esrb_rating": "T",
      "developers": [
        "Atlus"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Dr. Kawashima's Brain Training for Nintendo Switch",
      "platform": "Switch",
      "date": "Jan 3, 2020",
      "user_score": 6.4,
      "link": "/game/switch/dr-kawashimas-brain-training-for-nintendo-switch",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Vs. Balloon Fight",
      "platform": "Switch",
      "date": "Dec 27, 2019",
      "user_score": NaN,
      "link": "/game/switch/arcade-archives-vs-balloon-fight",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Marvel Ultimate Alliance 3: The Black Order - Expansion 2: Rise of the Phoenix",
      "platform": "Switch",
      "date": "Dec 23, 2019",
      "user_score": NaN,
      "link": "/game/switch/marvel-ultimate-alliance-3-the-black-order---expansion-2-rise-of-the-phoenix",
      "esrb_rating": "T",
      "developers": [
        "Team Ninja"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon Shield",
      "platform": "Switch",
      "date": "Nov 15, 2019",
      "user_score": 4.7,
      "link": "/game/switch/pokemon-shield",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon Sword",
      "platform": "Switch",
      "date": "Nov 15, 2019",
      "user_score": 4.7,
      "link": "/game/switch/pokemon-sword",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon Sword / Shield Dual Pack",
      "platform": "Switch",
      "date": "Nov 15, 2019",
      "user_score": 4.4,
      "link": "/game/switch/pokemon-sword-shield-dual-pack",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Layton's Mystery Journey: Katrielle and The Millionaires' Conspiracy - Deluxe Edition",
      "platform": "Switch",
      "date": "Nov 8, 2019",
      "user_score": 6.8,
      "link": "/game/switch/laytons-mystery-journey-katrielle-and-the-millionaires-conspiracy---deluxe-edition",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5",
        " h.a.n.d. Inc."
      ],
      "genres": [
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "The Stretchers",
      "platform": "Switch",
      "date": "Nov 8, 2019",
      "user_score": 7.2,
      "link": "/game/switch/the-stretchers",
      "esrb_rating": "E",
      "developers": [
        "Tarsier Studios"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Terry Bogard",
      "platform": "Switch",
      "date": "Nov 6, 2019",
      "user_score": 7.6,
      "link": "/game/switch/super-smash-bros-ultimate-terry-bogard",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Luigi's Mansion 3",
      "platform": "Switch",
      "date": "Oct 31, 2019",
      "user_score": 8.4,
      "link": "/game/switch/luigis-mansion-3",
      "esrb_rating": "E",
      "developers": [
        "Next Level Games",
        " Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "General"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Ring Fit Adventure",
      "platform": "Switch",
      "date": "Oct 18, 2019",
      "user_score": 8.6,
      "link": "/game/switch/ring-fit-adventure",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Little Town Hero",
      "platform": "Switch",
      "date": "Oct 16, 2019",
      "user_score": 4.7,
      "link": "/game/switch/little-town-hero",
      "esrb_rating": "E10+",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Marvel Ultimate Alliance 3: The Black Order - Expansion 1: Curse of the Vampire",
      "platform": "Switch",
      "date": "Sep 30, 2019",
      "user_score": NaN,
      "link": "/game/switch/marvel-ultimate-alliance-3-the-black-order---expansion-1-curse-of-the-vampire",
      "esrb_rating": "T",
      "developers": [
        "Team Ninja"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition",
      "platform": "Switch",
      "date": "Sep 27, 2019",
      "user_score": 8.6,
      "link": "/game/switch/dragon-quest-xi-s-echoes-of-an-elusive-age---definitive-edition",
      "esrb_rating": "T",
      "developers": [
        "Square Enix"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Mario Kart Tour",
      "platform": "iOS",
      "date": "Sep 25, 2019",
      "user_score": 4.2,
      "link": "/game/ios/mario-kart-tour",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "The Legend of Zelda: Link's Awakening",
      "platform": "Switch",
      "date": "Sep 20, 2019",
      "user_score": 8.4,
      "link": "/game/switch/the-legend-of-zelda-links-awakening",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " GREZZO"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Daemon X Machina",
      "platform": "Switch",
      "date": "Sep 13, 2019",
      "user_score": 7.6,
      "link": "/game/switch/daemon-x-machina",
      "esrb_rating": "T",
      "developers": [
        "First Studio",
        " Marvelous First Studio"
      ],
      "genres": [
        "Simulation",
        "Vehicle",
        "Combat"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Banjo & Kazooie",
      "platform": "Switch",
      "date": "Sep 4, 2019",
      "user_score": 8.1,
      "link": "/game/switch/super-smash-bros-ultimate-banjo-kazooie",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Super Kirby Clash",
      "platform": "Switch",
      "date": "Sep 4, 2019",
      "user_score": 7.5,
      "link": "/game/switch/super-kirby-clash",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " HAL Labs"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Pinball",
      "platform": "Switch",
      "date": "Aug 30, 2019",
      "user_score": NaN,
      "link": "/game/switch/arcade-archives-pinball",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Pinball"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Astral Chain",
      "platform": "Switch",
      "date": "Aug 30, 2019",
      "user_score": 8.9,
      "link": "/game/switch/astral-chain",
      "esrb_rating": "T",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Action Adventure",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Hero",
      "platform": "Switch",
      "date": "Jul 30, 2019",
      "user_score": 7.8,
      "link": "/game/switch/super-smash-bros-ultimate-hero",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Fire Emblem: Three Houses",
      "platform": "Switch",
      "date": "Jul 26, 2019",
      "user_score": 8.8,
      "link": "/game/switch/fire-emblem-three-houses",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems",
        " Koei Tecmo Games"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Marvel Ultimate Alliance 3: The Black Order",
      "platform": "Switch",
      "date": "Jul 19, 2019",
      "user_score": 7.3,
      "link": "/game/switch/marvel-ultimate-alliance-3-the-black-order",
      "esrb_rating": "T",
      "developers": [
        "Team Ninja"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "Dr. Mario World",
      "platform": "iOS",
      "date": "Jul 10, 2019",
      "user_score": 3.4,
      "link": "/game/ios/dr-mario-world",
      "esrb_rating": null,
      "developers": [
        "Nintendo",
        " LINE Corporation"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Clu Clu Land",
      "platform": "Switch",
      "date": "Jun 28, 2019",
      "user_score": NaN,
      "link": "/game/switch/arcade-archives-clu-clu-land",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Arcade"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Super Mario Maker 2",
      "platform": "Switch",
      "date": "Jun 28, 2019",
      "user_score": 8.5,
      "link": "/game/switch/super-mario-maker-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda",
      "platform": "Switch",
      "date": "Jun 13, 2019",
      "user_score": 8.0,
      "link": "/game/switch/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda",
      "esrb_rating": "E",
      "developers": [
        "Brace Yourself Games"
      ],
      "genres": [
        "Action",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Nintendo Labo: Toycon 04 VR Kit",
      "platform": "Switch",
      "date": "May 12, 2019",
      "user_score": 6.6,
      "link": "/game/switch/nintendo-labo-toycon-04-vr-kit",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Tetris 99: Big Block",
      "platform": "Switch",
      "date": "May 10, 2019",
      "user_score": 5.9,
      "link": "/game/switch/tetris-99-big-block",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Puzzle",
        "Stacking"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "BoxBoy! + BoxGirl!",
      "platform": "Switch",
      "date": "Apr 26, 2019",
      "user_score": 8.0,
      "link": "/game/switch/boxboy!-+-boxgirl!",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Joker",
      "platform": "Switch",
      "date": "Apr 17, 2019",
      "user_score": 8.1,
      "link": "/game/switch/super-smash-bros-ultimate-joker",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Yoshi's Crafted World",
      "platform": "Switch",
      "date": "Mar 28, 2019",
      "user_score": 7.8,
      "link": "/game/switch/yoshis-crafted-world",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Captain Toad: Treasure Tracker - Special Episode",
      "platform": "Switch",
      "date": "Mar 14, 2019",
      "user_score": 8.2,
      "link": "/game/switch/captain-toad-treasure-tracker---special-episode",
      "esrb_rating": null,
      "developers": [
        "Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Kirby's Extra Epic Yarn",
      "platform": "3DS",
      "date": "Mar 8, 2019",
      "user_score": 6.7,
      "link": "/game/3ds/kirbys-extra-epic-yarn",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Vs. Ice Climber",
      "platform": "Switch",
      "date": "Feb 22, 2019",
      "user_score": 7.3,
      "link": "/game/switch/arcade-archives-vs-ice-climber",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Tetris 99",
      "platform": "Switch",
      "date": "Feb 13, 2019",
      "user_score": 8.1,
      "link": "/game/switch/tetris-99",
      "esrb_rating": "E",
      "developers": [
        "Arika",
        " Nintendo"
      ],
      "genres": [
        "Puzzle",
        "Stacking"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Daemon X Machina: Prototype Missions",
      "platform": "Switch",
      "date": "Feb 13, 2019",
      "user_score": 6.6,
      "link": "/game/switch/daemon-x-machina-prototype-missions",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Vehicle",
        "Combat"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Yo-kai Watch 3",
      "platform": "3DS",
      "date": "Feb 8, 2019",
      "user_score": 8.4,
      "link": "/game/3ds/yo-kai-watch-3",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. Ultimate: Piranha Plant",
      "platform": "Switch",
      "date": "Jan 29, 2019",
      "user_score": 7.1,
      "link": "/game/switch/super-smash-bros-ultimate-piranha-plant",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Travis Strikes Again: No More Heroes",
      "platform": "Switch",
      "date": "Jan 18, 2019",
      "user_score": 7.8,
      "link": "/game/switch/travis-strikes-again-no-more-heroes",
      "esrb_rating": "M",
      "developers": [
        "Grasshopper Manufacture"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
      "platform": "3DS",
      "date": "Jan 11, 2019",
      "user_score": 7.8,
      "link": "/game/3ds/mario-luigi-bowsers-inside-story-+-bowser-jrs-journey",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "New Super Mario Bros. U Deluxe",
      "platform": "Switch",
      "date": "Jan 11, 2019",
      "user_score": 7.0,
      "link": "/game/switch/new-super-mario-bros-u-deluxe",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Fitness Boxing",
      "platform": "Switch",
      "date": "Jan 4, 2019",
      "user_score": 6.5,
      "link": "/game/switch/fitness-boxing",
      "esrb_rating": "T",
      "developers": [
        "Imagineer Co.",
        "Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "Super Smash Bros. Ultimate",
      "platform": "Switch",
      "date": "Dec 7, 2018",
      "user_score": 8.6,
      "link": "/game/switch/super-smash-bros-ultimate",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " HAL Labs",
        " Bandai Namco Games",
        " Sora Ltd."
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon: Let's Go, Eevee!",
      "platform": "Switch",
      "date": "Nov 16, 2018",
      "user_score": 6.4,
      "link": "/game/switch/pokemon-lets-go-eevee!",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Action RPG",
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Pokemon: Let's Go, Pikachu!",
      "platform": "Switch",
      "date": "Nov 16, 2018",
      "user_score": 6.3,
      "link": "/game/switch/pokemon-lets-go-pikachu!",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Action RPG",
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Urban Champion",
      "platform": "Switch",
      "date": "Nov 9, 2018",
      "user_score": NaN,
      "link": "/game/switch/arcade-archives-urban-champion",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "The World Ends with You: Final Remix",
      "platform": "Switch",
      "date": "Oct 12, 2018",
      "user_score": 7.4,
      "link": "/game/switch/the-world-ends-with-you-final-remix",
      "esrb_rating": "T",
      "developers": [
        "Square Enix",
        " h.a.n.d. Inc.",
        " Jupiter Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Luigi's Mansion",
      "platform": "3DS",
      "date": "Oct 12, 2018",
      "user_score": 8.1,
      "link": "/game/3ds/luigis-mansion",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " GREZZO"
      ],
      "genres": [
        "Action Adventure",
        "General"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Super Mario Party",
      "platform": "Switch",
      "date": "Oct 5, 2018",
      "user_score": 7.0,
      "link": "/game/switch/super-mario-party",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Dragalia Lost",
      "platform": "iOS",
      "date": "Sep 27, 2018",
      "user_score": 7.7,
      "link": "/game/ios/dragalia-lost",
      "esrb_rating": "T",
      "developers": [
        "Cygames"
      ],
      "genres": [
        "Role-Playing",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Yo-kai Watch Blasters: Moon Rabbit Crew",
      "platform": "3DS",
      "date": "Sep 27, 2018",
      "user_score": 7.5,
      "link": "/game/3ds/yo-kai-watch-blasters-moon-rabbit-crew",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Excitebike",
      "platform": "Switch",
      "date": "Sep 21, 2018",
      "user_score": NaN,
      "link": "/game/switch/arcade-archives-excitebike",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Xenoblade Chronicles 2: Torna ~ The Golden Country",
      "platform": "Switch",
      "date": "Sep 14, 2018",
      "user_score": 8.5,
      "link": "/game/switch/xenoblade-chronicles-2-torna-the-golden-country",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Nintendo Labo: Toycon 03 Vehicle Kit",
      "platform": "Switch",
      "date": "Sep 14, 2018",
      "user_score": 7.2,
      "link": "/game/switch/nintendo-labo-toycon-03-vehicle-kit",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Yo-kai Watch Blasters: Red Cat Corps",
      "platform": "3DS",
      "date": "Sep 7, 2018",
      "user_score": 6.8,
      "link": "/game/3ds/yo-kai-watch-blasters-red-cat-corps",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Yo-kai Watch Blasters: White Dog Squad",
      "platform": "3DS",
      "date": "Sep 7, 2018",
      "user_score": 7.1,
      "link": "/game/3ds/yo-kai-watch-blasters-white-dog-squad",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "WarioWare Gold",
      "platform": "3DS",
      "date": "Aug 3, 2018",
      "user_score": 8.2,
      "link": "/game/3ds/warioware-gold",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Go Vacation",
      "platform": "Switch",
      "date": "Jul 27, 2018",
      "user_score": 7.7,
      "link": "/game/switch/go-vacation",
      "esrb_rating": "E",
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 2: New Quests Pack 4",
      "platform": "Switch",
      "date": "Jul 26, 2018",
      "user_score": 8.3,
      "link": "/game/switch/xenoblade-chronicles-2-new-quests-pack-4",
      "esrb_rating": null,
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Captain Toad: Treasure Tracker",
      "platform": "Switch",
      "date": "Jul 13, 2018",
      "user_score": 7.9,
      "link": "/game/switch/captain-toad-treasure-tracker",
      "esrb_rating": "E",
      "developers": [
        "Nintendo EAD Tokyo ",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Captain Toad: Treasure Tracker",
      "platform": "3DS",
      "date": "Jul 13, 2018",
      "user_score": 7.0,
      "link": "/game/3ds/captain-toad-treasure-tracker",
      "esrb_rating": "E",
      "developers": [
        "Nintendo EAD Tokyo ",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Octopath Traveler",
      "platform": "Switch",
      "date": "Jul 12, 2018",
      "user_score": 8.4,
      "link": "/game/switch/octopath-traveler",
      "esrb_rating": "T",
      "developers": [
        "Square Enix",
        " Acquire"
      ],
      "genres": [
        "General",
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Mario Tennis Aces",
      "platform": "Switch",
      "date": "Jun 22, 2018",
      "user_score": 7.0,
      "link": "/game/switch/mario-tennis-aces",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Tennis"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Arcade Archives: Donkey Kong",
      "platform": "Switch",
      "date": "Jun 14, 2018",
      "user_score": 7.7,
      "link": "/game/switch/arcade-archives-donkey-kong",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Splatoon 2: Octo Expansion",
      "platform": "Switch",
      "date": "Jun 13, 2018",
      "user_score": 8.5,
      "link": "/game/switch/splatoon-2-octo-expansion",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 2: Battle Challenge Mode Pack",
      "platform": "Switch",
      "date": "Jun 13, 2018",
      "user_score": 8.9,
      "link": "/game/switch/xenoblade-chronicles-2-battle-challenge-mode-pack",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Sushi Striker: The Way of Sushido",
      "platform": "3DS",
      "date": "Jun 8, 2018",
      "user_score": 6.6,
      "link": "/game/3ds/sushi-striker-the-way-of-sushido",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Sushi Striker: The Way of Sushido",
      "platform": "Switch",
      "date": "Jun 8, 2018",
      "user_score": 7.7,
      "link": "/game/switch/sushi-striker-the-way-of-sushido",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Pokemon Quest",
      "platform": "iOS",
      "date": "May 30, 2018",
      "user_score": 4.1,
      "link": "/game/ios/pokemon-quest",
      "esrb_rating": null,
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Pokemon Quest",
      "platform": "Switch",
      "date": "May 29, 2018",
      "user_score": 6.0,
      "link": "/game/switch/pokemon-quest",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 2: New Quests Pack 3",
      "platform": "Switch",
      "date": "May 25, 2018",
      "user_score": 8.9,
      "link": "/game/switch/xenoblade-chronicles-2-new-quests-pack-3",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Dillon's Dead-Heat Breakers",
      "platform": "3DS",
      "date": "May 24, 2018",
      "user_score": 7.7,
      "link": "/game/3ds/dillons-dead-heat-breakers",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Vanpool"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Hyrule Warriors: Definitive Edition",
      "platform": "Switch",
      "date": "May 18, 2018",
      "user_score": 7.9,
      "link": "/game/switch/hyrule-warriors-definitive-edition",
      "esrb_rating": "T",
      "developers": [
        "Koei Tecmo Games"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Donkey Kong Country: Tropical Freeze",
      "platform": "Switch",
      "date": "May 4, 2018",
      "user_score": 8.6,
      "link": "/game/switch/donkey-kong-country-tropical-freeze",
      "esrb_rating": "E",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Nintendo Labo: Toycon 01 Variety Kit",
      "platform": "Switch",
      "date": "Apr 20, 2018",
      "user_score": 6.9,
      "link": "/game/switch/nintendo-labo-toycon-01-variety-kit",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Nintendo Labo: Toycon 02 Robot Kit",
      "platform": "Switch",
      "date": "Apr 20, 2018",
      "user_score": 6.5,
      "link": "/game/switch/nintendo-labo-toycon-02-robot-kit",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Punch-Out!",
      "platform": "Switch",
      "date": "Mar 30, 2018",
      "user_score": 7.5,
      "link": "/game/switch/arcade-archives-punch-out!",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Combat",
        "Boxing / Martial Arts"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 2: New Quests Pack 2",
      "platform": "Switch",
      "date": "Mar 30, 2018",
      "user_score": 8.9,
      "link": "/game/switch/xenoblade-chronicles-2-new-quests-pack-2",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Warriors: Awakening Pack",
      "platform": "3DS",
      "date": "Mar 29, 2018",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-warriors-awakening-pack",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Detective Pikachu",
      "platform": "3DS",
      "date": "Mar 23, 2018",
      "user_score": 7.4,
      "link": "/game/3ds/detective-pikachu",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Adventure",
        "3D",
        "Third-Person"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Kirby Star Allies",
      "platform": "Switch",
      "date": "Mar 16, 2018",
      "user_score": 7.5,
      "link": "/game/switch/kirby-star-allies",
      "esrb_rating": "E10+",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby Star Allies Demo",
      "platform": "Switch",
      "date": "Mar 4, 2018",
      "user_score": 6.6,
      "link": "/game/switch/kirby-star-allies-demo",
      "esrb_rating": null,
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Bayonetta + Bayonetta 2",
      "platform": "Switch",
      "date": "Feb 16, 2018",
      "user_score": 8.7,
      "link": "/game/switch/bayonetta-+-bayonetta-2",
      "esrb_rating": "M",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Bayonetta 2",
      "platform": "Switch",
      "date": "Feb 16, 2018",
      "user_score": 8.6,
      "link": "/game/switch/bayonetta-2",
      "esrb_rating": "M",
      "developers": [
        "Nintendo",
        " PlatinumGames"
      ],
      "genres": [
        "Action Adventure",
        "Linear"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Bayonetta",
      "platform": "Switch",
      "date": "Feb 16, 2018",
      "user_score": 8.3,
      "link": "/game/switch/bayonetta",
      "esrb_rating": "M",
      "developers": [
        "Nintendo",
        " PlatinumGames"
      ],
      "genres": [
        "Action Adventure",
        "Linear"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Warriors: Shadow Dragon Pack",
      "platform": "Switch",
      "date": "Feb 14, 2018",
      "user_score": NaN,
      "link": "/game/switch/fire-emblem-warriors-shadow-dragon-pack",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Warriors: Shadow Dragon Pack",
      "platform": "3DS",
      "date": "Feb 14, 2018",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-warriors-shadow-dragon-pack",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Dragon Quest Builders",
      "platform": "Switch",
      "date": "Feb 9, 2018",
      "user_score": 8.0,
      "link": "/game/switch/dragon-quest-builders",
      "esrb_rating": "E10+",
      "developers": [
        "Square Enix"
      ],
      "genres": [
        "Action Adventure",
        "Sandbox"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokken Tournament DX: Battle Pack",
      "platform": "Switch",
      "date": "Jan 31, 2018",
      "user_score": 6.6,
      "link": "/game/switch/pokken-tournament-dx-battle-pack",
      "esrb_rating": null,
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Xenoblade Chronicles 2: New Quests Pack 1",
      "platform": "Switch",
      "date": "Jan 30, 2018",
      "user_score": 7.5,
      "link": "/game/switch/xenoblade-chronicles-2-new-quests-pack-1",
      "esrb_rating": null,
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 57.0,
      "title": "Kirby Battle Royale",
      "platform": "3DS",
      "date": "Jan 19, 2018",
      "user_score": 7.0,
      "link": "/game/3ds/kirby-battle-royale",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " HAL Labs"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Style Savvy: Styling Star",
      "platform": "3DS",
      "date": "Dec 25, 2017",
      "user_score": 7.6,
      "link": "/game/3ds/style-savvy-styling-star",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " syn Sophia"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Career"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Vs. Super Mario Bros.",
      "platform": "Switch",
      "date": "Dec 22, 2017",
      "user_score": 7.2,
      "link": "/game/switch/arcade-archives-vs-super-mario-bros",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Warriors: Fates Pack",
      "platform": "Switch",
      "date": "Dec 21, 2017",
      "user_score": 7.6,
      "link": "/game/switch/fire-emblem-warriors-fates-pack",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Warriors: Fates Pack",
      "platform": "3DS",
      "date": "Dec 21, 2017",
      "user_score": 9.1,
      "link": "/game/3ds/fire-emblem-warriors-fates-pack",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "The Legend of Zelda: Breath of the Wild - The Champions' Ballad",
      "platform": "Switch",
      "date": "Dec 7, 2017",
      "user_score": 8.5,
      "link": "/game/switch/the-legend-of-zelda-breath-of-the-wild---the-champions-ballad",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda: Breath of the Wild - The Champions' Ballad",
      "platform": "WIIU",
      "date": "Dec 7, 2017",
      "user_score": 9.0,
      "link": "/game/wii-u/the-legend-of-zelda-breath-of-the-wild---the-champions-ballad",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Xenoblade Chronicles 2",
      "platform": "Switch",
      "date": "Dec 1, 2017",
      "user_score": 8.5,
      "link": "/game/switch/xenoblade-chronicles-2",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Animal Crossing: Pocket Camp",
      "platform": "iOS",
      "date": "Nov 21, 2017",
      "user_score": 6.8,
      "link": "/game/ios/animal-crossing-pocket-camp",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Pokemon Ultra Sun",
      "platform": "3DS",
      "date": "Nov 17, 2017",
      "user_score": 7.7,
      "link": "/game/3ds/pokemon-ultra-sun",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Pokemon Ultra Moon",
      "platform": "3DS",
      "date": "Nov 17, 2017",
      "user_score": 7.6,
      "link": "/game/3ds/pokemon-ultra-moon",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Ultra Sun & Pokemon Ultra Moon Veteran Trainer's Dual Pack",
      "platform": "3DS",
      "date": "Nov 17, 2017",
      "user_score": 6.3,
      "link": "/game/3ds/pokemon-ultra-sun-pokemon-ultra-moon-veteran-trainers-dual-pack",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Ittle Dew 2+",
      "platform": "Switch",
      "date": "Nov 14, 2017",
      "user_score": 7.8,
      "link": "/game/switch/ittle-dew-2+",
      "esrb_rating": "E10+",
      "developers": [
        "Ludosity Interactive"
      ],
      "genres": [
        "Role-Playing",
        "Action Adventure",
        "General",
        "Action RPG"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Mario Party: The Top 100",
      "platform": "3DS",
      "date": "Nov 10, 2017",
      "user_score": 6.2,
      "link": "/game/3ds/mario-party-the-top-100",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Snipperclips Plus: Cut It Out, Together!",
      "platform": "Switch",
      "date": "Nov 10, 2017",
      "user_score": 8.0,
      "link": "/game/switch/snipperclips-plus-cut-it-out-together!",
      "esrb_rating": "E",
      "developers": [
        "SFB Games"
      ],
      "genres": [
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 97.0,
      "title": "Super Mario Odyssey",
      "platform": "Switch",
      "date": "Oct 27, 2017",
      "user_score": 8.9,
      "link": "/game/switch/super-mario-odyssey",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Fire Emblem Warriors",
      "platform": "3DS",
      "date": "Oct 20, 2017",
      "user_score": 7.8,
      "link": "/game/3ds/fire-emblem-warriors",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Fire Emblem Warriors",
      "platform": "Switch",
      "date": "Oct 20, 2017",
      "user_score": 7.7,
      "link": "/game/switch/fire-emblem-warriors",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Layton's Mystery Journey: Katrielle and The Millionaires' Conspiracy",
      "platform": "3DS",
      "date": "Oct 6, 2017",
      "user_score": 6.3,
      "link": "/game/3ds/laytons-mystery-journey-katrielle-and-the-millionaires-conspiracy",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5",
        " h.a.n.d. Inc."
      ],
      "genres": [
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Mario & Luigi: Superstar Saga + Bowser's Minions",
      "platform": "3DS",
      "date": "Oct 6, 2017",
      "user_score": 8.2,
      "link": "/game/3ds/mario-luigi-superstar-saga-+-bowsers-minions",
      "esrb_rating": "E",
      "developers": [
        "Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Yo-kai Watch 2: Psychic Specters",
      "platform": "3DS",
      "date": "Sep 29, 2017",
      "user_score": 8.5,
      "link": "/game/3ds/yo-kai-watch-2-psychic-specters",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hive Jump",
      "platform": "WIIU",
      "date": "Sep 28, 2017",
      "user_score": NaN,
      "link": "/game/wii-u/hive-jump",
      "esrb_rating": "E10+",
      "developers": [
        "Graphite Lab"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Monster Hunter Stories: The Legend of Zelda",
      "platform": "3DS",
      "date": "Sep 28, 2017",
      "user_score": NaN,
      "link": "/game/3ds/monster-hunter-stories-the-legend-of-zelda",
      "esrb_rating": "E10+",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Arcade Archives: Mario Bros.",
      "platform": "Switch",
      "date": "Sep 27, 2017",
      "user_score": 6.7,
      "link": "/game/switch/arcade-archives-mario-bros",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Dragon Ball: Xenoverse 2",
      "platform": "Switch",
      "date": "Sep 22, 2017",
      "user_score": 7.5,
      "link": "/game/switch/dragon-ball-xenoverse-2",
      "esrb_rating": "T",
      "developers": [
        "Dimps Corporation"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Pokken Tournament DX",
      "platform": "Switch",
      "date": "Sep 22, 2017",
      "user_score": 7.3,
      "link": "/game/switch/pokken-tournament-dx",
      "esrb_rating": "E10+",
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Metroid: Samus Returns",
      "platform": "3DS",
      "date": "Sep 15, 2017",
      "user_score": 8.7,
      "link": "/game/3ds/metroid-samus-returns",
      "esrb_rating": "E10+",
      "developers": [
        "Mercury Steam"
      ],
      "genres": [
        "Action",
        "Action Adventure",
        "Platformer",
        "Open-World",
        "",
        "Metroidvania"
      ]
    },
    {
      "meta_score": NaN,
      "title": "ARMS: Lola Pop",
      "platform": "Switch",
      "date": "Sep 13, 2017",
      "user_score": NaN,
      "link": "/game/switch/arms-lola-pop",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Monster Hunter Stories",
      "platform": "3DS",
      "date": "Sep 8, 2017",
      "user_score": 8.2,
      "link": "/game/3ds/monster-hunter-stories",
      "esrb_rating": "E10+",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Sine Mora EX",
      "platform": "Switch",
      "date": "Aug 8, 2017",
      "user_score": 7.2,
      "link": "/game/switch/sine-mora-ex",
      "esrb_rating": "M",
      "developers": [
        "Grasshopper Manufacture"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shoot-'Em-Up",
        "Horizontal"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Hey! Pikmin",
      "platform": "3DS",
      "date": "Jul 28, 2017",
      "user_score": 6.6,
      "link": "/game/3ds/hey!-pikmin",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Arzest"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Miitopia",
      "platform": "3DS",
      "date": "Jul 28, 2017",
      "user_score": 7.9,
      "link": "/game/3ds/miitopia",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Role-Playing",
        "General"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Splatoon 2",
      "platform": "Switch",
      "date": "Jul 21, 2017",
      "user_score": 8.4,
      "link": "/game/switch/splatoon-2",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Layton's Mystery Journey: Katrielle and The Millionaire's Conspiracy",
      "platform": "iOS",
      "date": "Jul 20, 2017",
      "user_score": 7.3,
      "link": "/game/ios/laytons-mystery-journey-katrielle-and-the-millionaires-conspiracy",
      "esrb_rating": null,
      "developers": [
        "Level 5",
        " h.a.n.d. Inc."
      ],
      "genres": [
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Miitopia: Casting Call",
      "platform": "3DS",
      "date": "Jul 13, 2017",
      "user_score": 7.1,
      "link": "/game/3ds/miitopia-casting-call",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "ARMS: Max Brass",
      "platform": "Switch",
      "date": "Jul 12, 2017",
      "user_score": 7.3,
      "link": "/game/switch/arms-max-brass",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 53.0,
      "title": "Flip Wars",
      "platform": "Switch",
      "date": "Jul 6, 2017",
      "user_score": 5.9,
      "link": "/game/switch/flip-wars",
      "esrb_rating": "T",
      "developers": [
        "OVER FENCE CO.",
        "LTD.",
        " Over Fence"
      ],
      "genres": [
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Kirby's Blowout Blast",
      "platform": "3DS",
      "date": "Jul 6, 2017",
      "user_score": 7.0,
      "link": "/game/3ds/kirbys-blowout-blast",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " HAL Labs"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "The Legend of Zelda: Breath of the Wild - The Master Trials",
      "platform": "Switch",
      "date": "Jun 30, 2017",
      "user_score": 7.7,
      "link": "/game/switch/the-legend-of-zelda-breath-of-the-wild---the-master-trials",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda: Breath of the Wild - The Master Trials",
      "platform": "WIIU",
      "date": "Jun 30, 2017",
      "user_score": 8.6,
      "link": "/game/wii-u/the-legend-of-zelda-breath-of-the-wild---the-master-trials",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Ever Oasis",
      "platform": "3DS",
      "date": "Jun 23, 2017",
      "user_score": 8.1,
      "link": "/game/3ds/ever-oasis",
      "esrb_rating": "E10+",
      "developers": [
        "GREZZO"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Cipher Legends I",
      "platform": "3DS",
      "date": "Jun 22, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---cipher-legends-i",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Cipher Legends II",
      "platform": "3DS",
      "date": "Jun 22, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---cipher-legends-ii",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Cipher Companions Pack",
      "platform": "3DS",
      "date": "Jun 22, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---cipher-companions-pack",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "ARMS",
      "platform": "Switch",
      "date": "Jun 16, 2017",
      "user_score": 7.1,
      "link": "/game/switch/arms",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Sports",
        "Fighting",
        "Individual",
        "3D",
        "Combat",
        "Boxing / Martial Arts"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Rise of the Deliverance Pack",
      "platform": "3DS",
      "date": "Jun 1, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---rise-of-the-deliverance-pack",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Flight from the Ruins",
      "platform": "3DS",
      "date": "Jun 1, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---flight-from-the-ruins",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Outpost Rescue",
      "platform": "3DS",
      "date": "Jun 1, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---outpost-rescue",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Battle of Zofia Harbor",
      "platform": "3DS",
      "date": "Jun 1, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---battle-of-zofia-harbor",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Siege of Zofia Castle",
      "platform": "3DS",
      "date": "Jun 1, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---siege-of-zofia-castle",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "ARMS: Global Testpunch",
      "platform": "Switch",
      "date": "May 26, 2017",
      "user_score": NaN,
      "link": "/game/switch/arms-global-testpunch",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Undaunted Heroes Pack",
      "platform": "3DS",
      "date": "May 25, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---undaunted-heroes-pack",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Inner Sanctum",
      "platform": "3DS",
      "date": "May 25, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---inner-sanctum",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Lords of the Grave",
      "platform": "3DS",
      "date": "May 25, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---lords-of-the-grave",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Lost Altars Pack",
      "platform": "3DS",
      "date": "May 25, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---lost-altars-pack",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Wealth Before Health",
      "platform": "3DS",
      "date": "May 25, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---wealth-before-health",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Fire Emblem Echoes: Shadows of Valentia",
      "platform": "3DS",
      "date": "May 19, 2017",
      "user_score": 8.6,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Fledging Warriors Pack",
      "platform": "3DS",
      "date": "May 19, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---fledging-warriors-pack",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - The Astral Temple",
      "platform": "3DS",
      "date": "May 19, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---the-astral-temple",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Wretches and Riches",
      "platform": "3DS",
      "date": "May 19, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---wretches-and-riches",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem Echoes: Shadows of Valentia - Band of Bandages",
      "platform": "3DS",
      "date": "May 19, 2017",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-echoes-shadows-of-valentia---band-of-bandages",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Mario Kart 8 Deluxe",
      "platform": "Switch",
      "date": "Apr 28, 2017",
      "user_score": 8.6,
      "link": "/game/switch/mario-kart-8-deluxe",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Other",
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "BYE-BYE BOXBOY!",
      "platform": "3DS",
      "date": "Apr 12, 2017",
      "user_score": 7.9,
      "link": "/game/3ds/bye-bye-boxboy!",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 57.0,
      "title": "Team Kirby Clash Deluxe",
      "platform": "3DS",
      "date": "Apr 12, 2017",
      "user_score": 6.5,
      "link": "/game/3ds/team-kirby-clash-deluxe",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " HAL Labs"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "General",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Mario Sports Superstars",
      "platform": "3DS",
      "date": "Mar 24, 2017",
      "user_score": 7.3,
      "link": "/game/3ds/mario-sports-superstars",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Splatoon 2: Global Testfire",
      "platform": "Switch",
      "date": "Mar 24, 2017",
      "user_score": NaN,
      "link": "/game/switch/splatoon-2-global-testfire",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 96.0,
      "title": "The Legend of Zelda: Breath of the Wild",
      "platform": "WIIU",
      "date": "Mar 3, 2017",
      "user_score": 8.3,
      "link": "/game/wii-u/the-legend-of-zelda-breath-of-the-wild",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Fantasy",
        "Fantasy",
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 97.0,
      "title": "The Legend of Zelda: Breath of the Wild",
      "platform": "Switch",
      "date": "Mar 3, 2017",
      "user_score": 8.7,
      "link": "/game/switch/the-legend-of-zelda-breath-of-the-wild",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "1-2-Switch",
      "platform": "Switch",
      "date": "Mar 3, 2017",
      "user_score": 4.8,
      "link": "/game/switch/1-2-switch",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Snipperclips - Cut it out, together!",
      "platform": "Switch",
      "date": "Mar 3, 2017",
      "user_score": 8.2,
      "link": "/game/switch/snipperclips---cut-it-out-together!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " SFB Games"
      ],
      "genres": [
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Tank Troopers",
      "platform": "3DS",
      "date": "Feb 16, 2017",
      "user_score": 6.0,
      "link": "/game/3ds/tank-troopers",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Vehicle",
        "Combat"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Poochy & Yoshi's Woolly World",
      "platform": "3DS",
      "date": "Feb 3, 2017",
      "user_score": 7.8,
      "link": "/game/3ds/poochy-yoshis-woolly-world",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Fire Emblem Heroes",
      "platform": "iOS",
      "date": "Feb 2, 2017",
      "user_score": 7.2,
      "link": "/game/ios/fire-emblem-heroes",
      "esrb_rating": "T",
      "developers": [
        "Nintendo",
        " Intelligent Systems"
      ],
      "genres": [
        "Role-Playing",
        "Strategy",
        "Turn-Based",
        "General",
        "Tactics"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Dragon Quest VIII: Journey of the Cursed King",
      "platform": "3DS",
      "date": "Jan 20, 2017",
      "user_score": 8.6,
      "link": "/game/3ds/dragon-quest-viii-journey-of-the-cursed-king",
      "esrb_rating": "T",
      "developers": [
        "TOSE",
        " Cygames"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Super Mario Run",
      "platform": "iOS",
      "date": "Dec 15, 2016",
      "user_score": 6.2,
      "link": "/game/ios/super-mario-run",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Excitebots: Trick Racing",
      "platform": "WIIU",
      "date": "Dec 15, 2016",
      "user_score": NaN,
      "link": "/game/wii-u/excitebots-trick-racing",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Animal Crossing: New Leaf - Welcome Amiibo",
      "platform": "3DS",
      "date": "Dec 5, 2016",
      "user_score": 7.6,
      "link": "/game/3ds/animal-crossing-new-leaf---welcome-amiibo",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Super Mario Maker for Nintendo 3DS",
      "platform": "3DS",
      "date": "Dec 2, 2016",
      "user_score": 6.5,
      "link": "/game/3ds/super-mario-maker-for-nintendo-3ds",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon Sun",
      "platform": "3DS",
      "date": "Nov 18, 2016",
      "user_score": 7.6,
      "link": "/game/3ds/pokemon-sun",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon Moon",
      "platform": "3DS",
      "date": "Nov 18, 2016",
      "user_score": 7.6,
      "link": "/game/3ds/pokemon-moon",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Sun and Moon Dual Pack",
      "platform": "3DS",
      "date": "Nov 18, 2016",
      "user_score": 6.1,
      "link": "/game/3ds/pokemon-sun-and-moon-dual-pack",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Swapdoodle",
      "platform": "3DS",
      "date": "Nov 17, 2016",
      "user_score": NaN,
      "link": "/game/3ds/swapdoodle",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Mario Party: Star Rush",
      "platform": "3DS",
      "date": "Nov 4, 2016",
      "user_score": 6.9,
      "link": "/game/3ds/mario-party-star-rush",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors Legends: A Link Between Worlds Pack",
      "platform": "3DS",
      "date": "Oct 31, 2016",
      "user_score": NaN,
      "link": "/game/3ds/hyrule-warriors-legends-a-link-between-worlds-pack",
      "esrb_rating": null,
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Sun and Pokemon Moon Special Demo Version",
      "platform": "3DS",
      "date": "Oct 18, 2016",
      "user_score": 5.9,
      "link": "/game/3ds/pokemon-sun-and-pokemon-moon-special-demo-version",
      "esrb_rating": null,
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Disney Magical World 2",
      "platform": "3DS",
      "date": "Oct 14, 2016",
      "user_score": 5.5,
      "link": "/game/3ds/disney-magical-world-2",
      "esrb_rating": "E",
      "developers": [
        "h.a.n.d. Inc.",
        " Bandai Namco Games"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Paper Mario: Color Splash",
      "platform": "WIIU",
      "date": "Oct 7, 2016",
      "user_score": 7.1,
      "link": "/game/wii-u/paper-mario-color-splash",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Intelligent Systems"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Yo-kai Watch 2: Bony Spirits",
      "platform": "3DS",
      "date": "Sep 30, 2016",
      "user_score": 8.0,
      "link": "/game/3ds/yo-kai-watch-2-bony-spirits",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Yo-kai Watch 2: Fleshy Souls",
      "platform": "3DS",
      "date": "Sep 30, 2016",
      "user_score": 8.0,
      "link": "/game/3ds/yo-kai-watch-2-fleshy-souls",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Dragon Quest VII: Fragments of the Forgotten Past",
      "platform": "3DS",
      "date": "Sep 16, 2016",
      "user_score": 8.2,
      "link": "/game/3ds/dragon-quest-vii-fragments-of-the-forgotten-past",
      "esrb_rating": "E10+",
      "developers": [
        "ArtePiazza"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Picross 3D: Round 2",
      "platform": "3DS",
      "date": "Sep 1, 2016",
      "user_score": 7.8,
      "link": "/game/3ds/picross-3d-round-2",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Puzzle",
        "Logic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors Legends: Phantom Hourglass & Spirit Tracks Pack",
      "platform": "3DS",
      "date": "Sep 1, 2016",
      "user_score": NaN,
      "link": "/game/3ds/hyrule-warriors-legends-phantom-hourglass-spirit-tracks-pack",
      "esrb_rating": "E10+",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Metroid Prime: Federation Force",
      "platform": "3DS",
      "date": "Aug 19, 2016",
      "user_score": 5.4,
      "link": "/game/3ds/metroid-prime-federation-force",
      "esrb_rating": "T",
      "developers": [
        "Next Level Games",
        " Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Style Savvy: Fashion Forward",
      "platform": "3DS",
      "date": "Aug 19, 2016",
      "user_score": 6.9,
      "link": "/game/3ds/style-savvy-fashion-forward",
      "esrb_rating": "E",
      "developers": [
        "syn Sophia"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Career"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Metroid Prime: Blast Ball",
      "platform": "3DS",
      "date": "Jul 21, 2016",
      "user_score": 7.1,
      "link": "/game/3ds/metroid-prime-blast-ball",
      "esrb_rating": null,
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Pokemon GO",
      "platform": "iOS",
      "date": "Jul 6, 2016",
      "user_score": 5.5,
      "link": "/game/ios/pokemon-go",
      "esrb_rating": null,
      "developers": [
        "Niantic Labs"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Teddy Together",
      "platform": "3DS",
      "date": "Jul 1, 2016",
      "user_score": NaN,
      "link": "/game/3ds/teddy-together",
      "esrb_rating": null,
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "BoxBoxBoy!",
      "platform": "3DS",
      "date": "Jun 30, 2016",
      "user_score": 7.9,
      "link": "/game/3ds/boxboxboy!",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors Legends: Link's Awakening Pack",
      "platform": "3DS",
      "date": "Jun 30, 2016",
      "user_score": NaN,
      "link": "/game/3ds/hyrule-warriors-legends-links-awakening-pack",
      "esrb_rating": null,
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Tokyo Mirage Sessions #FE",
      "platform": "WIIU",
      "date": "Jun 24, 2016",
      "user_score": 7.9,
      "link": "/game/wii-u/tokyo-mirage-sessions-fe",
      "esrb_rating": "T",
      "developers": [
        "Atlus"
      ],
      "genres": [
        "General",
        "Fantasy",
        "Role-Playing",
        "Strategy",
        "Turn-Based",
        "Japanese-Style",
        "General"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Mario & Sonic at the Rio 2016 Olympic Games",
      "platform": "WIIU",
      "date": "Jun 24, 2016",
      "user_score": 7.7,
      "link": "/game/wii-u/mario-sonic-at-the-rio-2016-olympic-games",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Sega Sports R&D"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Tokyo Mirage Sessions #FE - EXPedition Hunter",
      "platform": "WIIU",
      "date": "Jun 24, 2016",
      "user_score": NaN,
      "link": "/game/wii-u/tokyo-mirage-sessions-fe---expedition-hunter",
      "esrb_rating": "T",
      "developers": [
        "Atlus"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Tokyo Mirage Sessions #FE - Masterful Hunter",
      "platform": "WIIU",
      "date": "Jun 24, 2016",
      "user_score": NaN,
      "link": "/game/wii-u/tokyo-mirage-sessions-fe---masterful-hunter",
      "esrb_rating": "T",
      "developers": [
        "Atlus"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Tokyo Mirage Sessions #FE - Savage Hunter",
      "platform": "WIIU",
      "date": "Jun 24, 2016",
      "user_score": NaN,
      "link": "/game/wii-u/tokyo-mirage-sessions-fe---savage-hunter",
      "esrb_rating": "T",
      "developers": [
        "Atlus"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Tokyo Mirage Sessions #FE - Tokyo Millennium Collection",
      "platform": "WIIU",
      "date": "Jun 24, 2016",
      "user_score": NaN,
      "link": "/game/wii-u/tokyo-mirage-sessions-fe---tokyo-millennium-collection",
      "esrb_rating": "T",
      "developers": [
        "Atlus"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Rhythm Heaven Megamix",
      "platform": "3DS",
      "date": "Jun 15, 2016",
      "user_score": 8.2,
      "link": "/game/3ds/rhythm-heaven-megamix",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Kirby: Planet Robobot",
      "platform": "3DS",
      "date": "Jun 10, 2016",
      "user_score": 8.7,
      "link": "/game/3ds/kirby-planet-robobot",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Team Kirby Clash",
      "platform": "3DS",
      "date": "Jun 10, 2016",
      "user_score": 6.5,
      "link": "/game/3ds/team-kirby-clash",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors Legends: Master Wind Waker Pack",
      "platform": "3DS",
      "date": "May 19, 2016",
      "user_score": NaN,
      "link": "/game/3ds/hyrule-warriors-legends-master-wind-waker-pack",
      "esrb_rating": null,
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Disney Art Academy",
      "platform": "3DS",
      "date": "May 13, 2016",
      "user_score": 7.1,
      "link": "/game/3ds/disney-art-academy",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Application"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Pocket Card Jockey",
      "platform": "3DS",
      "date": "May 5, 2016",
      "user_score": 8.1,
      "link": "/game/3ds/pocket-card-jockey",
      "esrb_rating": "E10+",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Miscellaneous",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Star Fox Zero",
      "platform": "WIIU",
      "date": "Apr 22, 2016",
      "user_score": 7.4,
      "link": "/game/wii-u/star-fox-zero",
      "esrb_rating": "E10+",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Action",
        "Third-Person",
        "Shooter",
        "Modern",
        "Rail",
        "Simulation",
        "Space",
        "Combat"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Star Fox Guard",
      "platform": "WIIU",
      "date": "Apr 22, 2016",
      "user_score": 7.4,
      "link": "/game/wii-u/star-fox-guard",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " PlatinumGames"
      ],
      "genres": [
        "Action",
        "First-Person",
        "Sci-Fi",
        "Shooter",
        "Strategy",
        "Real-Time",
        "Defense"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Star Fox Zero Double Pack",
      "platform": "WIIU",
      "date": "Apr 22, 2016",
      "user_score": 8.0,
      "link": "/game/wii-u/star-fox-zero-double-pack",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " PlatinumGames"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Bravely Second: End Layer",
      "platform": "3DS",
      "date": "Apr 15, 2016",
      "user_score": 8.2,
      "link": "/game/3ds/bravely-second-end-layer",
      "esrb_rating": "T",
      "developers": [
        "Silicon Studio"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Miitomo",
      "platform": "iOS",
      "date": "Mar 31, 2016",
      "user_score": 7.0,
      "link": "/game/ios/miitomo",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": NaN,
      "title": "My Nintendo Picross - The Legend of Zelda: Twilight Princess",
      "platform": "3DS",
      "date": "Mar 30, 2016",
      "user_score": 7.9,
      "link": "/game/3ds/my-nintendo-picross---the-legend-of-zelda-twilight-princess",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Puzzle",
        "Logic"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Hyrule Warriors Legends",
      "platform": "3DS",
      "date": "Mar 25, 2016",
      "user_score": 7.5,
      "link": "/game/3ds/hyrule-warriors-legends",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mini-Mario & Friends: amiibo Challenge",
      "platform": "WIIU",
      "date": "Mar 25, 2016",
      "user_score": 6.9,
      "link": "/game/wii-u/mini-mario-friends-amiibo-challenge",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mini-Mario & Friends: amiibo Challenge",
      "platform": "3DS",
      "date": "Mar 25, 2016",
      "user_score": 6.8,
      "link": "/game/3ds/mini-mario-friends-amiibo-challenge",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "Mario & Sonic at the Rio 2016 Olympic Games",
      "platform": "3DS",
      "date": "Mar 18, 2016",
      "user_score": 6.9,
      "link": "/game/3ds/mario-sonic-at-the-rio-2016-olympic-games",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Sega Sports R&D"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Pokken Tournament",
      "platform": "WIIU",
      "date": "Mar 18, 2016",
      "user_score": 7.4,
      "link": "/game/wii-u/pokken-tournament",
      "esrb_rating": "E10+",
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Fire Emblem Fates: Revelation",
      "platform": "3DS",
      "date": "Mar 10, 2016",
      "user_score": 7.2,
      "link": "/game/3ds/fire-emblem-fates-revelation",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "The Legend of Zelda: Twilight Princess HD",
      "platform": "WIIU",
      "date": "Mar 4, 2016",
      "user_score": 8.6,
      "link": "/game/wii-u/the-legend-of-zelda-twilight-princess-hd",
      "esrb_rating": "T",
      "developers": [
        "Tantalus",
        " Tantatus",
        " Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "General",
        "Open-World"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Fire Emblem Fates: Conquest",
      "platform": "3DS",
      "date": "Feb 19, 2016",
      "user_score": 8.0,
      "link": "/game/3ds/fire-emblem-fates-conquest",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Fantasy",
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Fire Emblem Fates: Birthright",
      "platform": "3DS",
      "date": "Feb 19, 2016",
      "user_score": 7.8,
      "link": "/game/3ds/fire-emblem-fates-birthright",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Fire Emblem Fates: Special Edition",
      "platform": "3DS",
      "date": "Feb 19, 2016",
      "user_score": 7.8,
      "link": "/game/3ds/fire-emblem-fates-special-edition",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Mario & Luigi: Paper Jam",
      "platform": "3DS",
      "date": "Jan 22, 2016",
      "user_score": 7.3,
      "link": "/game/3ds/mario-luigi-paper-jam",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Xenoblade Chronicles X",
      "platform": "WIIU",
      "date": "Dec 4, 2015",
      "user_score": 9.1,
      "link": "/game/wii-u/xenoblade-chronicles-x",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Action RPG",
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Pokemon Picross",
      "platform": "3DS",
      "date": "Dec 3, 2015",
      "user_score": 7.5,
      "link": "/game/3ds/pokemon-picross",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Jupiter Corporation"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Puzzle",
        "Logic"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Pokemon Super Mystery Dungeon",
      "platform": "3DS",
      "date": "Nov 20, 2015",
      "user_score": 8.2,
      "link": "/game/3ds/pokemon-super-mystery-dungeon",
      "esrb_rating": "E",
      "developers": [
        "Spike Chunsoft Co. Ltd.",
        " Spike Chunsoft"
      ],
      "genres": [
        "Role-Playing",
        "Roguelike"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "Mario Tennis: Ultra Smash",
      "platform": "WIIU",
      "date": "Nov 20, 2015",
      "user_score": 5.1,
      "link": "/game/wii-u/mario-tennis-ultra-smash",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Tennis"
      ]
    },
    {
      "meta_score": 46.0,
      "title": "Animal Crossing: amiibo Festival",
      "platform": "WIIU",
      "date": "Nov 13, 2015",
      "user_score": 4.0,
      "link": "/game/wii-u/animal-crossing-amiibo-festival",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Nintendo Badge Arcade",
      "platform": "3DS",
      "date": "Nov 10, 2015",
      "user_score": 4.0,
      "link": "/game/3ds/nintendo-badge-arcade",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Yo-kai Watch",
      "platform": "3DS",
      "date": "Nov 6, 2015",
      "user_score": 8.1,
      "link": "/game/3ds/yo-kai-watch",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Japanese-Style",
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "The Legend of Zelda: Tri Force Heroes",
      "platform": "3DS",
      "date": "Oct 23, 2015",
      "user_score": 7.2,
      "link": "/game/3ds/the-legend-of-zelda-tri-force-heroes",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Fatal Frame: Maiden of Black Water",
      "platform": "WIIU",
      "date": "Oct 22, 2015",
      "user_score": 8.0,
      "link": "/game/wii-u/fatal-frame-maiden-of-black-water",
      "esrb_rating": "M",
      "developers": [
        "Koei Tecmo Games"
      ],
      "genres": [
        "Action",
        "General",
        "Horror",
        "Action Adventure",
        "Survival"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Yoshi's Woolly World",
      "platform": "WIIU",
      "date": "Oct 16, 2015",
      "user_score": 8.4,
      "link": "/game/wii-u/yoshis-woolly-world",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Action Adventure",
        "Platformer",
        "2D",
        "Fantasy",
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Chibi-Robo! Zip Lash",
      "platform": "3DS",
      "date": "Oct 9, 2015",
      "user_score": 5.1,
      "link": "/game/3ds/chibi-robo!-zip-lash",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Skip Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Animal Crossing: Happy Home Designer",
      "platform": "3DS",
      "date": "Sep 25, 2015",
      "user_score": 6.9,
      "link": "/game/3ds/animal-crossing-happy-home-designer",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Virtual",
        "Career"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Super Mario Maker",
      "platform": "WIIU",
      "date": "Sep 11, 2015",
      "user_score": 8.7,
      "link": "/game/wii-u/super-mario-maker",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Pokemon Shuffle Mobile",
      "platform": "iOS",
      "date": "Aug 31, 2015",
      "user_score": 6.4,
      "link": "/game/ios/pokemon-shuffle-mobile",
      "esrb_rating": null,
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 43.0,
      "title": "Devil's Third",
      "platform": "WIIU",
      "date": "Aug 28, 2015",
      "user_score": 6.6,
      "link": "/game/wii-u/devils-third",
      "esrb_rating": "M",
      "developers": [
        "Valhalla Game Studios"
      ],
      "genres": [
        "Action Adventure",
        "General",
        "Modern",
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "LBX: Little Battlers eXperience",
      "platform": "3DS",
      "date": "Aug 21, 2015",
      "user_score": 7.4,
      "link": "/game/3ds/lbx-little-battlers-experience",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Action",
        "Role-Playing",
        "General",
        "Action RPG"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Art Academy: Home Studio",
      "platform": "WIIU",
      "date": "Jun 25, 2015",
      "user_score": 7.9,
      "link": "/game/wii-u/art-academy-home-studio",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Earthbound Beginnings",
      "platform": "WIIU",
      "date": "Jun 14, 2015",
      "user_score": 8.2,
      "link": "/game/wii-u/earthbound-beginnings",
      "esrb_rating": null,
      "developers": [
        "Pax Softonica"
      ],
      "genres": [
        "Role-Playing",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Smash Controller",
      "platform": "3DS",
      "date": "Jun 14, 2015",
      "user_score": NaN,
      "link": "/game/3ds/smash-controller",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Dr. Mario: Miracle Cure",
      "platform": "3DS",
      "date": "Jun 11, 2015",
      "user_score": 6.9,
      "link": "/game/3ds/dr-mario-miracle-cure",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Puzzle",
        "Stacking"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Splatoon",
      "platform": "WIIU",
      "date": "May 29, 2015",
      "user_score": 8.7,
      "link": "/game/wii-u/splatoon",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Fantasy",
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Puzzle & Dragons Z + Puzzle & Dragons: Super Mario Bros. Edition",
      "platform": "3DS",
      "date": "May 22, 2015",
      "user_score": 7.6,
      "link": "/game/3ds/puzzle-dragons-z-+-puzzle-dragons-super-mario-bros-edition",
      "esrb_rating": "E",
      "developers": [
        "GungHo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Stretchmo",
      "platform": "3DS",
      "date": "May 14, 2015",
      "user_score": 8.0,
      "link": "/game/3ds/stretchmo",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "amiibo Tap: Nintendo's Greatest Bits",
      "platform": "WIIU",
      "date": "Apr 30, 2015",
      "user_score": 7.6,
      "link": "/game/wii-u/amiibo-tap-nintendos-greatest-bits",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. for Nintendo 3DS / Wii U: Mewtwo",
      "platform": "3DS",
      "date": "Apr 28, 2015",
      "user_score": NaN,
      "link": "/game/3ds/super-smash-bros-for-nintendo-3ds-wii-u-mewtwo",
      "esrb_rating": null,
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros. for Nintendo 3DS / Wii U: Mewtwo",
      "platform": "WIIU",
      "date": "Apr 28, 2015",
      "user_score": NaN,
      "link": "/game/wii-u/super-smash-bros-for-nintendo-3ds-wii-u-mewtwo",
      "esrb_rating": null,
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Mario Kart 8 DLC Pack 2",
      "platform": "WIIU",
      "date": "Apr 23, 2015",
      "user_score": 8.2,
      "link": "/game/wii-u/mario-kart-8-dlc-pack-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Kart",
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Xenoblade Chronicles 3D",
      "platform": "3DS",
      "date": "Apr 10, 2015",
      "user_score": 8.7,
      "link": "/game/3ds/xenoblade-chronicles-3d",
      "esrb_rating": "T",
      "developers": [
        "Monster Games Inc."
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "Pokemon Rumble World",
      "platform": "3DS",
      "date": "Apr 8, 2015",
      "user_score": 6.2,
      "link": "/game/3ds/pokemon-rumble-world",
      "esrb_rating": "E10+",
      "developers": [
        "Ambrella",
        " The Pokemon Company"
      ],
      "genres": [
        "Action",
        "General",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "BOXBOY!",
      "platform": "3DS",
      "date": "Apr 2, 2015",
      "user_score": 8.1,
      "link": "/game/3ds/boxboy!",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Mario Party 10",
      "platform": "WIIU",
      "date": "Mar 20, 2015",
      "user_score": 6.4,
      "link": "/game/wii-u/mario-party-10",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Party",
        "Miscellaneous",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 57.0,
      "title": "Fossil Fighters: Frontier",
      "platform": "3DS",
      "date": "Mar 20, 2015",
      "user_score": 5.3,
      "link": "/game/3ds/fossil-fighters-frontier",
      "esrb_rating": "E10+",
      "developers": [
        "RED Entertainment",
        " Spike Chunsoft"
      ],
      "genres": [
        "Role-Playing",
        "General",
        "Trainer"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Code Name: S.T.E.A.M.",
      "platform": "3DS",
      "date": "Mar 13, 2015",
      "user_score": 7.8,
      "link": "/game/3ds/code-name-steam",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Sci-Fi",
        "Strategy",
        "Turn-Based",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors: Boss Pack",
      "platform": "WIIU",
      "date": "Mar 12, 2015",
      "user_score": 7.6,
      "link": "/game/wii-u/hyrule-warriors-boss-pack",
      "esrb_rating": null,
      "developers": [
        "Tecmo Koei Games"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Mario vs. Donkey Kong: Tipping Stars",
      "platform": "WIIU",
      "date": "Mar 5, 2015",
      "user_score": 7.5,
      "link": "/game/wii-u/mario-vs-donkey-kong-tipping-stars",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Mario vs. Donkey Kong: Tipping Stars",
      "platform": "3DS",
      "date": "Mar 5, 2015",
      "user_score": 7.4,
      "link": "/game/3ds/mario-vs-donkey-kong-tipping-stars",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Kirby and the Rainbow Curse",
      "platform": "WIIU",
      "date": "Feb 20, 2015",
      "user_score": 8.0,
      "link": "/game/wii-u/kirby-and-the-rainbow-curse",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Pokemon Shuffle",
      "platform": "3DS",
      "date": "Feb 18, 2015",
      "user_score": 6.1,
      "link": "/game/3ds/pokemon-shuffle",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "The Legend of Zelda: Majora's Mask 3D",
      "platform": "3DS",
      "date": "Feb 13, 2015",
      "user_score": 8.9,
      "link": "/game/3ds/the-legend-of-zelda-majoras-mask-3d",
      "esrb_rating": "E10+",
      "developers": [
        "GREZZO"
      ],
      "genres": [
        "Fantasy",
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Flipnote Studio 3D",
      "platform": "3DS",
      "date": "Feb 10, 2015",
      "user_score": 6.9,
      "link": "/game/3ds/flipnote-studio-3d",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors: Majora's Mask Pack",
      "platform": "WIIU",
      "date": "Feb 5, 2015",
      "user_score": 8.0,
      "link": "/game/wii-u/hyrule-warriors-majoras-mask-pack",
      "esrb_rating": null,
      "developers": [
        "Tecmo Koei Games"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Captain Toad: Treasure Tracker",
      "platform": "WIIU",
      "date": "Dec 5, 2014",
      "user_score": 8.6,
      "link": "/game/wii-u/captain-toad-treasure-tracker",
      "esrb_rating": "E",
      "developers": [
        "Nintendo EAD Tokyo "
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "NES Remix Pack",
      "platform": "WIIU",
      "date": "Dec 5, 2014",
      "user_score": 8.6,
      "link": "/game/wii-u/nes-remix-pack",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors: Twilight Princess Pack",
      "platform": "WIIU",
      "date": "Nov 26, 2014",
      "user_score": 8.3,
      "link": "/game/wii-u/hyrule-warriors-twilight-princess-pack",
      "esrb_rating": "T",
      "developers": [
        "Tecmo Koei Games"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Super Smash Bros. for Wii U",
      "platform": "WIIU",
      "date": "Nov 21, 2014",
      "user_score": 8.9,
      "link": "/game/wii-u/super-smash-bros-for-wii-u",
      "esrb_rating": "E10+",
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "Fighting",
        "Fighting",
        "3D",
        "2D",
        "2D",
        "3D"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Pokemon Alpha Sapphire",
      "platform": "3DS",
      "date": "Nov 21, 2014",
      "user_score": 7.6,
      "link": "/game/3ds/pokemon-alpha-sapphire",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Japanese-Style",
        "Trainer"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Pokemon Omega Ruby",
      "platform": "3DS",
      "date": "Nov 21, 2014",
      "user_score": 7.5,
      "link": "/game/3ds/pokemon-omega-ruby",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Japanese-Style",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Omega Ruby/Alpha Sapphire Double Pack",
      "platform": "3DS",
      "date": "Nov 21, 2014",
      "user_score": 7.4,
      "link": "/game/3ds/pokemon-omega-rubyalpha-sapphire-double-pack",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Japanese-Style",
        "Trainer"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Mario Kart 8 DLC Pack 1",
      "platform": "WIIU",
      "date": "Nov 13, 2014",
      "user_score": 8.2,
      "link": "/game/wii-u/mario-kart-8-dlc-pack-1",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Automobile"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Ultimate NES Remix",
      "platform": "3DS",
      "date": "Nov 7, 2014",
      "user_score": 7.4,
      "link": "/game/3ds/ultimate-nes-remix",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Pokemon Art Academy",
      "platform": "3DS",
      "date": "Oct 24, 2014",
      "user_score": 7.8,
      "link": "/game/3ds/pokemon-art-academy",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Edutainment"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Bayonetta",
      "platform": "WIIU",
      "date": "Oct 24, 2014",
      "user_score": 8.8,
      "link": "/game/wii-u/bayonetta",
      "esrb_rating": "M",
      "developers": [
        "Bee Tribe"
      ],
      "genres": [
        "Action",
        "Fantasy",
        "Beat-'Em-Up",
        "Action Adventure",
        "Linear"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Fantasy Life",
      "platform": "3DS",
      "date": "Oct 24, 2014",
      "user_score": 8.4,
      "link": "/game/3ds/fantasy-life",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5",
        " Brownie Brown"
      ],
      "genres": [
        "Role-Playing",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Bayonetta + Bayonetta 2",
      "platform": "WIIU",
      "date": "Oct 24, 2014",
      "user_score": 8.2,
      "link": "/game/wii-u/bayonetta-+-bayonetta-2",
      "esrb_rating": "M",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hyrule Warriors: Master Quest Pack",
      "platform": "WIIU",
      "date": "Oct 16, 2014",
      "user_score": 7.9,
      "link": "/game/wii-u/hyrule-warriors-master-quest-pack",
      "esrb_rating": null,
      "developers": [
        "Tecmo Koei Games"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Super Smash Bros. for Nintendo 3DS",
      "platform": "3DS",
      "date": "Oct 3, 2014",
      "user_score": 8.4,
      "link": "/game/3ds/super-smash-bros-for-nintendo-3ds",
      "esrb_rating": "E10+",
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Fighting",
        "3D",
        "2D",
        "Action",
        "Fighting",
        "2D",
        "3D"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Hyrule Warriors",
      "platform": "WIIU",
      "date": "Sep 26, 2014",
      "user_score": 8.3,
      "link": "/game/wii-u/hyrule-warriors",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Bayonetta 2",
      "platform": "WIIU",
      "date": "Sep 20, 2014",
      "user_score": 8.9,
      "link": "/game/wii-u/bayonetta-2",
      "esrb_rating": "M",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "Fantasy",
        "Linear"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Professor Layton VS Phoenix Wright Ace Attorney",
      "platform": "3DS",
      "date": "Aug 29, 2014",
      "user_score": 8.2,
      "link": "/game/3ds/professor-layton-vs-phoenix-wright-ace-attorney",
      "esrb_rating": "T",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "General",
        "Puzzle",
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Dedede's Drum Dash Deluxe",
      "platform": "3DS",
      "date": "Aug 29, 2014",
      "user_score": 7.3,
      "link": "/game/3ds/dededes-drum-dash-deluxe",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Kirby Fighters Deluxe",
      "platform": "3DS",
      "date": "Aug 29, 2014",
      "user_score": 6.1,
      "link": "/game/3ds/kirby-fighters-deluxe",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Mysterious Murasame Castle",
      "platform": "3DS",
      "date": "Aug 7, 2014",
      "user_score": NaN,
      "link": "/game/3ds/the-mysterious-murasame-castle",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pushmo World",
      "platform": "WIIU",
      "date": "Jun 19, 2014",
      "user_score": 8.0,
      "link": "/game/wii-u/pushmo-world",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Logic"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Inazuma Eleven Go: Shadow",
      "platform": "3DS",
      "date": "Jun 13, 2014",
      "user_score": 7.2,
      "link": "/game/3ds/inazuma-eleven-go-shadow",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Inazuma Eleven Go: Light",
      "platform": "3DS",
      "date": "Jun 13, 2014",
      "user_score": 7.6,
      "link": "/game/3ds/inazuma-eleven-go-light",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Tomodachi Life",
      "platform": "3DS",
      "date": "Jun 6, 2014",
      "user_score": 7.7,
      "link": "/game/3ds/tomodachi-life",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "General",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Mario Kart 8",
      "platform": "WIIU",
      "date": "May 30, 2014",
      "user_score": 8.7,
      "link": "/game/wii-u/mario-kart-8",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Kart",
        "Automobile"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Photos with Mario",
      "platform": "3DS",
      "date": "May 18, 2014",
      "user_score": 6.9,
      "link": "/game/3ds/photos-with-mario",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Kirby: Triple Deluxe",
      "platform": "3DS",
      "date": "May 2, 2014",
      "user_score": 8.6,
      "link": "/game/3ds/kirby-triple-deluxe",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "General",
        "General",
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Mario Golf: World Tour",
      "platform": "3DS",
      "date": "May 2, 2014",
      "user_score": 8.1,
      "link": "/game/3ds/mario-golf-world-tour",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Golf",
        "Arcade",
        "Arcade"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "NES Remix 2",
      "platform": "WIIU",
      "date": "Apr 25, 2014",
      "user_score": 8.0,
      "link": "/game/wii-u/nes-remix-2",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Nintendo Pocket Football Club",
      "platform": "3DS",
      "date": "Apr 17, 2014",
      "user_score": 7.7,
      "link": "/game/3ds/nintendo-pocket-football-club",
      "esrb_rating": null,
      "developers": [
        "ParityBit"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Disney Magical World",
      "platform": "3DS",
      "date": "Apr 11, 2014",
      "user_score": 7.5,
      "link": "/game/3ds/disney-magical-world",
      "esrb_rating": "E",
      "developers": [
        "h.a.n.d. Inc."
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "General",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Rusty's Real Deal Baseball",
      "platform": "3DS",
      "date": "Apr 3, 2014",
      "user_score": 7.7,
      "link": "/game/3ds/rustys-real-deal-baseball",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Pokemon Battle Trozei",
      "platform": "3DS",
      "date": "Mar 20, 2014",
      "user_score": 7.3,
      "link": "/game/3ds/pokemon-battle-trozei",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Yoshi's New Island",
      "platform": "3DS",
      "date": "Mar 14, 2014",
      "user_score": 6.1,
      "link": "/game/3ds/yoshis-new-island",
      "esrb_rating": "E",
      "developers": [
        "Arzest"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Professor Layton and the Azran Legacy",
      "platform": "3DS",
      "date": "Feb 28, 2014",
      "user_score": 8.1,
      "link": "/game/3ds/professor-layton-and-the-azran-legacy",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "General",
        "Logic",
        "Puzzle",
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Donkey Kong Country: Tropical Freeze",
      "platform": "WIIU",
      "date": "Feb 21, 2014",
      "user_score": 8.9,
      "link": "/game/wii-u/donkey-kong-country-tropical-freeze",
      "esrb_rating": "E",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Platformer",
        "2D",
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Inazuma Eleven 3: Team Ogre Attacks!",
      "platform": "3DS",
      "date": "Feb 14, 2014",
      "user_score": 8.0,
      "link": "/game/3ds/inazuma-eleven-3-team-ogre-attacks!",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Steel Diver: Sub Wars",
      "platform": "3DS",
      "date": "Feb 13, 2014",
      "user_score": 7.6,
      "link": "/game/3ds/steel-diver-sub-wars",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Submarine",
        "Marine",
        "Combat"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Bravely Default",
      "platform": "3DS",
      "date": "Feb 7, 2014",
      "user_score": 8.4,
      "link": "/game/3ds/bravely-default",
      "esrb_rating": "T",
      "developers": [
        "Silicon Studio"
      ],
      "genres": [
        "Console-style RPG",
        "Role-Playing",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Poke Transporter",
      "platform": "3DS",
      "date": "Feb 5, 2014",
      "user_score": NaN,
      "link": "/game/3ds/poke-transporter",
      "esrb_rating": null,
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Bank",
      "platform": "3DS",
      "date": "Feb 5, 2014",
      "user_score": 5.9,
      "link": "/game/3ds/pokemon-bank",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 49.0,
      "title": "Chibi-Robo! Photo Finder",
      "platform": "3DS",
      "date": "Jan 9, 2014",
      "user_score": 7.6,
      "link": "/game/3ds/chibi-robo!-photo-finder",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Action",
        "Action Adventure",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Dr. Luigi",
      "platform": "WIIU",
      "date": "Dec 31, 2013",
      "user_score": 7.3,
      "link": "/game/wii-u/dr-luigi",
      "esrb_rating": "E",
      "developers": [
        "Arika",
        " Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Stacking"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "NES Remix",
      "platform": "WIIU",
      "date": "Dec 18, 2013",
      "user_score": 7.3,
      "link": "/game/wii-u/nes-remix",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo 3DS Guide: Louvre",
      "platform": "3DS",
      "date": "Dec 2, 2013",
      "user_score": NaN,
      "link": "/game/3ds/nintendo-3ds-guide-louvre",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 57.0,
      "title": "Mario Party: Island Tour",
      "platform": "3DS",
      "date": "Nov 22, 2013",
      "user_score": 5.9,
      "link": "/game/3ds/mario-party-island-tour",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nd Cube"
      ],
      "genres": [
        "Party",
        "Miscellaneous",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "The Legend of Zelda: A Link Between Worlds",
      "platform": "3DS",
      "date": "Nov 22, 2013",
      "user_score": 9.0,
      "link": "/game/3ds/the-legend-of-zelda-a-link-between-worlds",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action RPG",
        "Role-Playing",
        "Action Adventure",
        "General",
        "Action RPG",
        "Open-World"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "Super Mario 3D World",
      "platform": "WIIU",
      "date": "Nov 22, 2013",
      "user_score": 8.9,
      "link": "/game/wii-u/super-mario-3d-world",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Platformer",
        "3D",
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 55.0,
      "title": "Mario & Sonic at the Sochi 2014 Olympic Winter Games",
      "platform": "WIIU",
      "date": "Nov 15, 2013",
      "user_score": 6.5,
      "link": "/game/wii-u/mario-sonic-at-the-sochi-2014-olympic-winter-games",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Sega Sports R&D"
      ],
      "genres": [
        "Sports",
        "Olympic Sports",
        "Olympic Sports",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Wii Sports Club",
      "platform": "WIIU",
      "date": "Nov 7, 2013",
      "user_score": 7.0,
      "link": "/game/wii-u/wii-sports-club",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "General",
        "General",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Wii Fit U",
      "platform": "WIIU",
      "date": "Nov 1, 2013",
      "user_score": 7.7,
      "link": "/game/wii-u/wii-fit-u",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Miscellaneous",
        "General",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. U + New Super Luigi U",
      "platform": "WIIU",
      "date": "Nov 1, 2013",
      "user_score": 8.7,
      "link": "/game/wii-u/new-super-mario-bros-u-+-new-super-luigi-u",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Wii Party U",
      "platform": "WIIU",
      "date": "Oct 25, 2013",
      "user_score": 7.1,
      "link": "/game/wii-u/wii-party-u",
      "esrb_rating": "E",
      "developers": [
        "Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon X",
      "platform": "3DS",
      "date": "Oct 12, 2013",
      "user_score": 7.5,
      "link": "/game/3ds/pokemon-x",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Pokemon Y",
      "platform": "3DS",
      "date": "Oct 12, 2013",
      "user_score": 7.5,
      "link": "/game/3ds/pokemon-y",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Inazuma Eleven 3: Lightning Bolt",
      "platform": "3DS",
      "date": "Sep 27, 2013",
      "user_score": 8.1,
      "link": "/game/3ds/inazuma-eleven-3-lightning-bolt",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Inazuma Eleven 3: Bomb Blast",
      "platform": "3DS",
      "date": "Sep 27, 2013",
      "user_score": 8.1,
      "link": "/game/3ds/inazuma-eleven-3-bomb-blast",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "The Legend of Zelda: The Wind Waker HD",
      "platform": "WIIU",
      "date": "Sep 20, 2013",
      "user_score": 9.0,
      "link": "/game/wii-u/the-legend-of-zelda-the-wind-waker-hd",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " HexaDrive"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "Fantasy",
        "Open-World"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "The Wonderful 101",
      "platform": "WIIU",
      "date": "Sep 15, 2013",
      "user_score": 8.6,
      "link": "/game/wii-u/the-wonderful-101",
      "esrb_rating": "T",
      "developers": [
        "PlatinumGames"
      ],
      "genres": [
        "Action",
        "General",
        "General",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 49.0,
      "title": "Pokemon Rumble U",
      "platform": "WIIU",
      "date": "Aug 29, 2013",
      "user_score": 5.2,
      "link": "/game/wii-u/pokemon-rumble-u",
      "esrb_rating": "E",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "2D",
        "3D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Mario & Luigi: Dream Team",
      "platform": "3DS",
      "date": "Aug 11, 2013",
      "user_score": 8.3,
      "link": "/game/3ds/mario-luigi-dream-team",
      "esrb_rating": "E10+",
      "developers": [
        "Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Art Academy: SketchPad",
      "platform": "WIIU",
      "date": "Aug 9, 2013",
      "user_score": 6.3,
      "link": "/game/wii-u/art-academy-sketchpad",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Animal Crossing Plaza",
      "platform": "WIIU",
      "date": "Aug 7, 2013",
      "user_score": 5.2,
      "link": "/game/wii-u/animal-crossing-plaza",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pikmin 3",
      "platform": "WIIU",
      "date": "Aug 4, 2013",
      "user_score": 8.8,
      "link": "/game/wii-u/pikmin-3",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 61.0,
      "title": "Game & Wario",
      "platform": "WIIU",
      "date": "Jun 23, 2013",
      "user_score": 6.7,
      "link": "/game/wii-u/game-wario",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "New Super Luigi U",
      "platform": "WIIU",
      "date": "Jun 20, 2013",
      "user_score": 8.0,
      "link": "/game/wii-u/new-super-luigi-u",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Animal Crossing: New Leaf",
      "platform": "3DS",
      "date": "Jun 9, 2013",
      "user_score": 8.7,
      "link": "/game/3ds/animal-crossing-new-leaf",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Donkey Kong Country Returns 3D",
      "platform": "3DS",
      "date": "May 24, 2013",
      "user_score": 8.2,
      "link": "/game/3ds/donkey-kong-country-returns-3d",
      "esrb_rating": "E",
      "developers": [
        "Monster Games Inc."
      ],
      "genres": [
        "Action",
        "General",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Future Past 3",
      "platform": "3DS",
      "date": "May 23, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---the-future-past-3",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Apotheosis",
      "platform": "3DS",
      "date": "May 23, 2013",
      "user_score": 7.5,
      "link": "/game/3ds/fire-emblem-awakening---apotheosis",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Future Past 2",
      "platform": "3DS",
      "date": "May 16, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---the-future-past-2",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Mario and Donkey Kong: Minis on the Move",
      "platform": "3DS",
      "date": "May 9, 2013",
      "user_score": 7.2,
      "link": "/game/3ds/mario-and-donkey-kong-minis-on-the-move",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "Platformer",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Future Past 1",
      "platform": "3DS",
      "date": "May 9, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---the-future-past-1",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Hot Spring Scramble",
      "platform": "3DS",
      "date": "May 9, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---hot-spring-scramble",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Summer Scramble",
      "platform": "3DS",
      "date": "May 2, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---summer-scramble",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wii U Panorama View",
      "platform": "WIIU",
      "date": "Apr 26, 2013",
      "user_score": 5.4,
      "link": "/game/wii-u/wii-u-panorama-view",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Radiant Hero",
      "platform": "3DS",
      "date": "Apr 25, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---the-radiant-hero",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Harvest Scramble",
      "platform": "3DS",
      "date": "Apr 25, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---harvest-scramble",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Roster Rescue",
      "platform": "3DS",
      "date": "Apr 25, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---roster-rescue",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "LEGO City Undercover: The Chase Begins",
      "platform": "3DS",
      "date": "Apr 21, 2013",
      "user_score": 6.7,
      "link": "/game/3ds/lego-city-undercover-the-chase-begins",
      "esrb_rating": "E10+",
      "developers": [
        "Traveller's Tales"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Five-Anna Firefight",
      "platform": "3DS",
      "date": "Apr 18, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---five-anna-firefight",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Dillon's Rolling Western: The Last Ranger",
      "platform": "3DS",
      "date": "Apr 11, 2013",
      "user_score": 7.0,
      "link": "/game/3ds/dillons-rolling-western-the-last-ranger",
      "esrb_rating": "E10+",
      "developers": [
        "Vanpool"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Rogues and Redeemers 3",
      "platform": "3DS",
      "date": "Apr 11, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---rogues-and-redeemers-3",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Wellspring of Truth",
      "platform": "3DS",
      "date": "Apr 11, 2013",
      "user_score": 7.0,
      "link": "/game/3ds/fire-emblem-awakening---the-wellspring-of-truth",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Death's Embrace",
      "platform": "3DS",
      "date": "Apr 11, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---deaths-embrace",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Rogues and Redeemers 2",
      "platform": "3DS",
      "date": "Apr 4, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---rogues-and-redeemers-2",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "HarmoKnight",
      "platform": "3DS",
      "date": "Mar 28, 2013",
      "user_score": 7.4,
      "link": "/game/3ds/harmoknight",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Ghost of Blade",
      "platform": "3DS",
      "date": "Mar 28, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---ghost-of-blade",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Rogues and Redeemers 1",
      "platform": "3DS",
      "date": "Mar 28, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---rogues-and-redeemers-1",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Smash Brethren 3",
      "platform": "3DS",
      "date": "Mar 28, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---smash-brethren-3",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Luigi's Mansion: Dark Moon",
      "platform": "3DS",
      "date": "Mar 24, 2013",
      "user_score": 8.4,
      "link": "/game/3ds/luigis-mansion-dark-moon",
      "esrb_rating": "E",
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Pokemon Mystery Dungeon: Gates to Infinity",
      "platform": "3DS",
      "date": "Mar 24, 2013",
      "user_score": 6.3,
      "link": "/game/3ds/pokemon-mystery-dungeon-gates-to-infinity",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Spike Chunsoft"
      ],
      "genres": [
        "General",
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Roguelike"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Smash Brethren 2",
      "platform": "3DS",
      "date": "Mar 21, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---smash-brethren-2",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "LEGO City Undercover",
      "platform": "WIIU",
      "date": "Mar 18, 2013",
      "user_score": 8.2,
      "link": "/game/wii-u/lego-city-undercover",
      "esrb_rating": "E10+",
      "developers": [
        "TT Games"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Smash Brethren 1",
      "platform": "3DS",
      "date": "Mar 14, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---smash-brethren-1",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Lost Bloodlines 3",
      "platform": "3DS",
      "date": "Mar 14, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---lost-bloodlines-3",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - A Hard Miracle",
      "platform": "3DS",
      "date": "Mar 13, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---a-hard-miracle",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Kersploosh!",
      "platform": "3DS",
      "date": "Mar 7, 2013",
      "user_score": 7.0,
      "link": "/game/3ds/kersploosh!",
      "esrb_rating": "E",
      "developers": [
        "Poisoft"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Lost Bloodlines 2",
      "platform": "3DS",
      "date": "Mar 7, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---lost-bloodlines-2",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Infinite Regalia",
      "platform": "3DS",
      "date": "Mar 7, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---infinite-regalia",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - EXPonential Growth",
      "platform": "3DS",
      "date": "Feb 28, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---exponential-growth",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Irreconcilable Paths",
      "platform": "3DS",
      "date": "Feb 28, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---irreconcilable-paths",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Lost Bloodlines 1",
      "platform": "3DS",
      "date": "Feb 21, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---lost-bloodlines-1",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wii Street U",
      "platform": "WIIU",
      "date": "Feb 14, 2013",
      "user_score": 5.9,
      "link": "/game/wii-u/wii-street-u",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Champions of Yore 3",
      "platform": "3DS",
      "date": "Feb 14, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---champions-of-yore-3",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Golden Gaffe",
      "platform": "3DS",
      "date": "Feb 14, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---the-golden-gaffe",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - The Dead King's Lament",
      "platform": "3DS",
      "date": "Feb 14, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---the-dead-kings-lament",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Brain Age: Concentration Training",
      "platform": "3DS",
      "date": "Feb 10, 2013",
      "user_score": 7.2,
      "link": "/game/3ds/brain-age-concentration-training",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Edutainment",
        "Miscellaneous",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Champions of Yore 2",
      "platform": "3DS",
      "date": "Feb 7, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---champions-of-yore-2",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Fire Emblem: Awakening",
      "platform": "3DS",
      "date": "Feb 4, 2013",
      "user_score": 9.0,
      "link": "/game/3ds/fire-emblem-awakening",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fire Emblem: Awakening - Champions of Yore 1",
      "platform": "3DS",
      "date": "Jan 31, 2013",
      "user_score": NaN,
      "link": "/game/3ds/fire-emblem-awakening---champions-of-yore-1",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Tokyo Crash Mobs",
      "platform": "3DS",
      "date": "Jan 17, 2013",
      "user_score": 7.4,
      "link": "/game/3ds/tokyo-crash-mobs",
      "esrb_rating": "E",
      "developers": [
        "Mitchell"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Chase Mii",
      "platform": "WIIU",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/wii-u/chase-mii",
      "esrb_rating": "RP",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Fluidity: Spin Cycle",
      "platform": "3DS",
      "date": "Dec 27, 2012",
      "user_score": 6.6,
      "link": "/game/3ds/fluidity-spin-cycle",
      "esrb_rating": "E",
      "developers": [
        "Curve Studios"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Mystery Adventure Pack",
      "platform": "3DS",
      "date": "Dec 20, 2012",
      "user_score": 7.7,
      "link": "/game/3ds/new-super-mario-bros-2-mystery-adventure-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Impossible Pack",
      "platform": "3DS",
      "date": "Dec 20, 2012",
      "user_score": 7.6,
      "link": "/game/3ds/new-super-mario-bros-2-impossible-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Coin Challenge Pack C",
      "platform": "3DS",
      "date": "Dec 5, 2012",
      "user_score": 7.6,
      "link": "/game/3ds/new-super-mario-bros-2-coin-challenge-pack-c",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Platform Panic Pack",
      "platform": "3DS",
      "date": "Dec 5, 2012",
      "user_score": 7.0,
      "link": "/game/3ds/new-super-mario-bros-2-platform-panic-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "3D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Gold Classics Pack",
      "platform": "3DS",
      "date": "Nov 27, 2012",
      "user_score": 7.1,
      "link": "/game/3ds/new-super-mario-bros-2-gold-classics-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Crashmo",
      "platform": "3DS",
      "date": "Nov 22, 2012",
      "user_score": 8.2,
      "link": "/game/3ds/crashmo",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "New Super Mario Bros. U",
      "platform": "WIIU",
      "date": "Nov 18, 2012",
      "user_score": 8.0,
      "link": "/game/wii-u/new-super-mario-bros-u",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Ninja Gaiden 3: Razor's Edge",
      "platform": "WIIU",
      "date": "Nov 18, 2012",
      "user_score": 7.4,
      "link": "/game/wii-u/ninja-gaiden-3-razors-edge",
      "esrb_rating": "M",
      "developers": [
        "Team Ninja"
      ],
      "genres": [
        "Action",
        "Action Adventure",
        "Platformer",
        "General",
        "Platformer",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "SiNG Party",
      "platform": "WIIU",
      "date": "Nov 18, 2012",
      "user_score": 6.1,
      "link": "/game/wii-u/sing-party",
      "esrb_rating": "E10+",
      "developers": [
        "FreeStyleGames"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Nintendo Land",
      "platform": "WIIU",
      "date": "Nov 18, 2012",
      "user_score": 7.9,
      "link": "/game/wii-u/nintendo-land",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Paper Mario: Sticker Star",
      "platform": "3DS",
      "date": "Nov 11, 2012",
      "user_score": 5.5,
      "link": "/game/3ds/paper-mario-sticker-star",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Action Adventure",
        "General",
        "Fantasy",
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Pokedex 3D Pro",
      "platform": "3DS",
      "date": "Nov 8, 2012",
      "user_score": 4.3,
      "link": "/game/3ds/pokedex-3d-pro",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 63.0,
      "title": "Freakyforms Deluxe: Your Creations, Alive!",
      "platform": "3DS",
      "date": "Nov 5, 2012",
      "user_score": 7.5,
      "link": "/game/3ds/freakyforms-deluxe-your-creations-alive!",
      "esrb_rating": "E",
      "developers": [
        "Asobism",
        " Co. ltd.",
        " Asobism.Co.",
        "Ltd",
        " Asobism"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Professor Layton and the Miracle Mask",
      "platform": "3DS",
      "date": "Oct 28, 2012",
      "user_score": 8.1,
      "link": "/game/3ds/professor-layton-and-the-miracle-mask",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Puzzle",
        "Miscellaneous",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Coin Challenge Pack B",
      "platform": "3DS",
      "date": "Oct 25, 2012",
      "user_score": 7.1,
      "link": "/game/3ds/new-super-mario-bros-2-coin-challenge-pack-b",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Gold Mushroom Pack",
      "platform": "3DS",
      "date": "Oct 25, 2012",
      "user_score": 7.1,
      "link": "/game/3ds/new-super-mario-bros-2-gold-mushroom-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Style Savvy: Trendsetters",
      "platform": "3DS",
      "date": "Oct 22, 2012",
      "user_score": 7.6,
      "link": "/game/3ds/style-savvy-trendsetters",
      "esrb_rating": "E",
      "developers": [
        "syn Sophia"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "General",
        "General",
        "Virtual",
        "Career"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Sparkle Snapshots 3D",
      "platform": "3DS",
      "date": "Oct 18, 2012",
      "user_score": NaN,
      "link": "/game/3ds/sparkle-snapshots-3d",
      "esrb_rating": null,
      "developers": [
        "Atlus Co.",
        " Atlus"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wii Sports/Wii Sports Resort",
      "platform": "WII",
      "date": "Oct 15, 2012",
      "user_score": 8.4,
      "link": "/game/wii/wii-sportswii-sports-resort",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation",
        "Compilation"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon Black Version 2",
      "platform": "DS",
      "date": "Oct 7, 2012",
      "user_score": 8.1,
      "link": "/game/ds/pokemon-black-version-2",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon White Version 2",
      "platform": "DS",
      "date": "Oct 7, 2012",
      "user_score": 8.0,
      "link": "/game/ds/pokemon-white-version-2",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 54.0,
      "title": "Pokemon Dream Radar",
      "platform": "3DS",
      "date": "Oct 7, 2012",
      "user_score": 5.9,
      "link": "/game/3ds/pokemon-dream-radar",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Action",
        "General",
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Coin Challenge Pack A",
      "platform": "3DS",
      "date": "Oct 4, 2012",
      "user_score": 7.9,
      "link": "/game/3ds/new-super-mario-bros-2-coin-challenge-pack-a",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Gold Rush Pack",
      "platform": "3DS",
      "date": "Oct 4, 2012",
      "user_score": 7.3,
      "link": "/game/3ds/new-super-mario-bros-2-gold-rush-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Super Mario Bros. 2: Nerve-Wrack Pack",
      "platform": "3DS",
      "date": "Oct 4, 2012",
      "user_score": 7.5,
      "link": "/game/3ds/new-super-mario-bros-2-nerve-wrack-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Art Academy: Lessons for Everyone",
      "platform": "3DS",
      "date": "Oct 1, 2012",
      "user_score": 7.5,
      "link": "/game/3ds/art-academy-lessons-for-everyone",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Art Academy: Lessons for Everyone",
      "platform": "3DS",
      "date": "Oct 1, 2012",
      "user_score": NaN,
      "link": "/game/3ds/art-academy-lessons-for-everyone",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Crosswords Plus",
      "platform": "3DS",
      "date": "Oct 1, 2012",
      "user_score": 7.8,
      "link": "/game/3ds/crosswords-plus",
      "esrb_rating": "E",
      "developers": [
        "Nintendo Software Technology"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General",
        "Puzzle",
        "Logic",
        "General"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Inazuma Eleven Strikers",
      "platform": "WII",
      "date": "Sep 28, 2012",
      "user_score": 8.3,
      "link": "/game/wii/inazuma-eleven-strikers",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Kirby's Dream Collection: Special Edition",
      "platform": "WII",
      "date": "Sep 16, 2012",
      "user_score": 8.9,
      "link": "/game/wii/kirbys-dream-collection-special-edition",
      "esrb_rating": "E10+",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation",
        "Compilation"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "New Super Mario Bros. 2",
      "platform": "3DS",
      "date": "Aug 19, 2012",
      "user_score": 7.1,
      "link": "/game/3ds/new-super-mario-bros-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Project Zero 2: Wii Edition",
      "platform": "WII",
      "date": "Jun 29, 2012",
      "user_score": 8.4,
      "link": "/game/wii/project-zero-2-wii-edition",
      "esrb_rating": null,
      "developers": [
        "Koei Tecmo Games"
      ],
      "genres": [
        "Action Adventure",
        "Horror"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pokemon Conquest",
      "platform": "DS",
      "date": "Jun 18, 2012",
      "user_score": 8.1,
      "link": "/game/ds/pokemon-conquest",
      "esrb_rating": "E",
      "developers": [
        "Koei",
        " Koei Tecmo Games"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "New Play Control! Pikmin 2",
      "platform": "WII",
      "date": "Jun 10, 2012",
      "user_score": 8.7,
      "link": "/game/wii/new-play-control!-pikmin-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Mario Tennis Open",
      "platform": "3DS",
      "date": "May 20, 2012",
      "user_score": 6.9,
      "link": "/game/3ds/mario-tennis-open",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Tennis",
        "Tennis"
      ]
    },
    {
      "meta_score": 54.0,
      "title": "Spirit Camera: The Cursed Memoir",
      "platform": "3DS",
      "date": "Apr 13, 2012",
      "user_score": 6.4,
      "link": "/game/3ds/spirit-camera-the-cursed-memoir",
      "esrb_rating": "T",
      "developers": [
        "Tecmo Koei Games"
      ],
      "genres": [
        "Action Adventure",
        "Horror",
        "Horror",
        "Survival"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Ketzal's Corridors",
      "platform": "3DS",
      "date": "Apr 12, 2012",
      "user_score": 7.6,
      "link": "/game/3ds/ketzals-corridors",
      "esrb_rating": "E",
      "developers": [
        "Keys Factory"
      ],
      "genres": [
        "General",
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Xenoblade Chronicles",
      "platform": "WII",
      "date": "Apr 6, 2012",
      "user_score": 9.1,
      "link": "/game/wii/xenoblade-chronicles",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG",
        "Console-style RPG",
        "Action RPG"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Kid Icarus: Uprising",
      "platform": "3DS",
      "date": "Mar 23, 2012",
      "user_score": 8.7,
      "link": "/game/3ds/kid-icarus-uprising",
      "esrb_rating": "E10+",
      "developers": [
        "Opus",
        " Project Sora"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "3D Classics: Kid Icarus",
      "platform": "3DS",
      "date": "Mar 23, 2012",
      "user_score": 7.4,
      "link": "/game/3ds/3d-classics-kid-icarus",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Inazuma Eleven 2: Firestorm",
      "platform": "DS",
      "date": "Mar 16, 2012",
      "user_score": 8.6,
      "link": "/game/ds/inazuma-eleven-2-firestorm",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Inazuma Eleven 2: Blizzard",
      "platform": "DS",
      "date": "Mar 16, 2012",
      "user_score": 8.2,
      "link": "/game/ds/inazuma-eleven-2-blizzard",
      "esrb_rating": null,
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Mario Party 9",
      "platform": "WII",
      "date": "Mar 11, 2012",
      "user_score": 6.8,
      "link": "/game/wii/mario-party-9",
      "esrb_rating": "E",
      "developers": [
        "Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "PokePark 2: Wonders Beyond",
      "platform": "WII",
      "date": "Feb 27, 2012",
      "user_score": 7.7,
      "link": "/game/wii/pokepark-2-wonders-beyond",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Action Adventure",
        "Adventure",
        "General",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Dillon's Rolling Western",
      "platform": "3DS",
      "date": "Feb 22, 2012",
      "user_score": 7.6,
      "link": "/game/3ds/dillons-rolling-western",
      "esrb_rating": "E10+",
      "developers": [
        "Vanpool"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Rhythm Heaven Fever",
      "platform": "WII",
      "date": "Feb 13, 2012",
      "user_score": 8.3,
      "link": "/game/wii/rhythm-heaven-fever",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 46.0,
      "title": "One Piece: Unlimited Cruise SP",
      "platform": "3DS",
      "date": "Feb 10, 2012",
      "user_score": 6.8,
      "link": "/game/3ds/one-piece-unlimited-cruise-sp",
      "esrb_rating": null,
      "developers": [
        "Bandai Namco Games"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Sakura Samurai: Art of the Sword",
      "platform": "3DS",
      "date": "Feb 2, 2012",
      "user_score": 7.3,
      "link": "/game/3ds/sakura-samurai-art-of-the-sword",
      "esrb_rating": "T",
      "developers": [
        "Grounding Inc."
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pro Wrestling",
      "platform": "WII",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/wii/pro-wrestling",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "Wrestling"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda: Link's Awakening DX",
      "platform": "3DS",
      "date": "TBA 2011",
      "user_score": NaN,
      "link": "/game/3ds/the-legend-of-zelda-links-awakening-dx",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Land",
      "platform": "3DS",
      "date": "TBA 2011",
      "user_score": NaN,
      "link": "/game/3ds/super-mario-land",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Deer Drive Legends",
      "platform": "3DS",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/3ds/deer-drive-legends",
      "esrb_rating": "T",
      "developers": [
        "Raylight Studios"
      ],
      "genres": [
        "Sports",
        "Individual",
        "Nature",
        "Hunting",
        "Hunting"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Swapnote",
      "platform": "3DS",
      "date": "Dec 22, 2011",
      "user_score": 7.3,
      "link": "/game/3ds/swapnote",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Pushmo",
      "platform": "3DS",
      "date": "Dec 8, 2011",
      "user_score": 8.3,
      "link": "/game/3ds/pushmo",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Fortune Street",
      "platform": "WII",
      "date": "Dec 5, 2011",
      "user_score": 7.6,
      "link": "/game/wii/fortune-street",
      "esrb_rating": "E",
      "developers": [
        "Marvelous AQL"
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Mario Kart 7",
      "platform": "3DS",
      "date": "Dec 4, 2011",
      "user_score": 8.2,
      "link": "/game/3ds/mario-kart-7",
      "esrb_rating": "E",
      "developers": [
        "Retro Studios",
        " Entertainment Analysis & Development Division"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Kart",
        "Automobile"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "The Legend of Zelda: Skyward Sword",
      "platform": "WII",
      "date": "Nov 20, 2011",
      "user_score": 8.1,
      "link": "/game/wii/the-legend-of-zelda-skyward-sword",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Fantasy",
        "General",
        "Fantasy",
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "3D Classics: Kirby's Adventure",
      "platform": "3DS",
      "date": "Nov 17, 2011",
      "user_score": 7.9,
      "link": "/game/3ds/3d-classics-kirbys-adventure",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Fossil Fighters: Champions",
      "platform": "DS",
      "date": "Nov 14, 2011",
      "user_score": 7.9,
      "link": "/game/ds/fossil-fighters-champions",
      "esrb_rating": "E",
      "developers": [
        "RED Entertainment",
        " Artdink"
      ],
      "genres": [
        "Role-Playing",
        "General",
        "General",
        "Trainer"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Super Mario 3D Land",
      "platform": "3DS",
      "date": "Nov 13, 2011",
      "user_score": 8.4,
      "link": "/game/3ds/super-mario-3d-land",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Freakyforms: Your Creations, Alive!",
      "platform": "3DS",
      "date": "Nov 10, 2011",
      "user_score": 7.7,
      "link": "/game/3ds/freakyforms-your-creations-alive!",
      "esrb_rating": "E",
      "developers": [
        "Asobism",
        " Co. ltd.",
        " Asobism.Co.",
        "Ltd",
        " Asobism"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Kirby's Return to Dream Land",
      "platform": "WII",
      "date": "Oct 24, 2011",
      "user_score": 8.8,
      "link": "/game/wii/kirbys-return-to-dream-land",
      "esrb_rating": "E10+",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "General",
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Pokemon Rumble Blast",
      "platform": "3DS",
      "date": "Oct 24, 2011",
      "user_score": 6.8,
      "link": "/game/3ds/pokemon-rumble-blast",
      "esrb_rating": "E10+",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Action",
        "General",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "2D",
        "3D"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Professor Layton and the Last Specter",
      "platform": "DS",
      "date": "Oct 18, 2011",
      "user_score": 8.1,
      "link": "/game/ds/professor-layton-and-the-last-specter",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Tetris Axis",
      "platform": "3DS",
      "date": "Oct 2, 2011",
      "user_score": 7.1,
      "link": "/game/3ds/tetris-axis",
      "esrb_rating": "E",
      "developers": [
        "Hudson Soft"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Stacking",
        "Stacking"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "The Legend of Zelda: Four Swords Anniversary Edition",
      "platform": "DS",
      "date": "Sep 28, 2011",
      "user_score": 7.5,
      "link": "/game/ds/the-legend-of-zelda-four-swords-anniversary-edition",
      "esrb_rating": "E10+",
      "developers": [
        "GREZZO"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "3D Classics: TwinBee",
      "platform": "3DS",
      "date": "Sep 22, 2011",
      "user_score": 7.3,
      "link": "/game/3ds/3d-classics-twinbee",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "Scrolling",
        "Scrolling",
        "Shoot-'Em-Up",
        "Vertical"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Kirby Mass Attack",
      "platform": "DS",
      "date": "Sep 19, 2011",
      "user_score": 7.9,
      "link": "/game/ds/kirby-mass-attack",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Dragon Quest Monsters: Joker 2",
      "platform": "DS",
      "date": "Sep 19, 2011",
      "user_score": 7.6,
      "link": "/game/ds/dragon-quest-monsters-joker-2",
      "esrb_rating": "E",
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style",
        "Trainer"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Star Fox 64 3D",
      "platform": "3DS",
      "date": "Sep 9, 2011",
      "user_score": 8.1,
      "link": "/game/3ds/star-fox-64-3d",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Q-Games"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "Rail",
        "Rail"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Inazuma Eleven",
      "platform": "DS",
      "date": "Aug 26, 2011",
      "user_score": 7.9,
      "link": "/game/ds/inazuma-eleven",
      "esrb_rating": "E",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 37.0,
      "title": "3D Classics: Urban Champion",
      "platform": "3DS",
      "date": "Aug 18, 2011",
      "user_score": 4.8,
      "link": "/game/3ds/3d-classics-urban-champion",
      "esrb_rating": "E10+",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "Fighting",
        "Fighting",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "3D Classics: Xevious",
      "platform": "3DS",
      "date": "Jul 21, 2011",
      "user_score": 5.8,
      "link": "/game/3ds/3d-classics-xevious",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "Scrolling",
        "Scrolling",
        "Shoot-'Em-Up",
        "Vertical"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo Video",
      "platform": "3DS",
      "date": "Jul 21, 2011",
      "user_score": 5.9,
      "link": "/game/3ds/nintendo-video",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Mystery Case Files: The Malgrave Incident",
      "platform": "WII",
      "date": "Jun 29, 2011",
      "user_score": 7.4,
      "link": "/game/wii/mystery-case-files-the-malgrave-incident",
      "esrb_rating": "E",
      "developers": [
        "Sanzaru Games"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Hidden Object",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 94.0,
      "title": "The Legend of Zelda: Ocarina of Time 3D",
      "platform": "3DS",
      "date": "Jun 19, 2011",
      "user_score": 9.0,
      "link": "/game/3ds/the-legend-of-zelda-ocarina-of-time-3d",
      "esrb_rating": "E10+",
      "developers": [
        "GREZZO"
      ],
      "genres": [
        "Miscellaneous",
        "Fantasy",
        "Fantasy",
        "Compilation",
        "Action Adventure",
        "Open-World"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "Wii Play: Motion",
      "platform": "WII",
      "date": "Jun 13, 2011",
      "user_score": 6.4,
      "link": "/game/wii/wii-play-motion",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Good-Feel"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Pokedex 3D",
      "platform": "3DS",
      "date": "Jun 6, 2011",
      "user_score": 6.6,
      "link": "/game/3ds/pokedex-3d",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "3D Classics: Excitebike",
      "platform": "3DS",
      "date": "Jun 6, 2011",
      "user_score": 6.6,
      "link": "/game/3ds/3d-classics-excitebike",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Motorcycle",
        "Other",
        "Automobile",
        "Motocross",
        "Motocross"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Nintendogs + Cats: Golden Retriever & New Friends",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.2,
      "link": "/game/3ds/nintendogs-+-cats-golden-retriever-new-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Pilotwings Resort",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.2,
      "link": "/game/3ds/pilotwings-resort",
      "esrb_rating": "E",
      "developers": [
        "Monster Games Inc."
      ],
      "genres": [
        "Simulation",
        "Flight",
        "Civilian Plane",
        "Civilian Plane",
        "Civilian"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "Steel Diver",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 6.3,
      "link": "/game/3ds/steel-diver",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo",
        " Vitei"
      ],
      "genres": [
        "Action",
        "Simulation",
        "General",
        "Submarine",
        "Submarine",
        "Marine",
        "Combat"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Nintendogs + Cats: Toy Poodle & New Friends",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.5,
      "link": "/game/3ds/nintendogs-+-cats-toy-poodle-new-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Nintendogs + Cats: French Bulldog & New Friends",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.1,
      "link": "/game/3ds/nintendogs-+-cats-french-bulldog-new-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": NaN,
      "title": "AR Games",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.1,
      "link": "/game/3ds/ar-games",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Face Raiders",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.2,
      "link": "/game/3ds/face-raiders",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "General",
        "General",
        "Shooter",
        "Light Gun"
      ]
    },
    {
      "meta_score": NaN,
      "title": "StreetPass Mii Plaza",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 7.7,
      "link": "/game/3ds/streetpass-mii-plaza",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Role-Playing",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo 3DS",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 8.1,
      "link": "/game/3ds/nintendo-3ds",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Hardware",
        "Console"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mii Maker",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": 6.5,
      "link": "/game/3ds/mii-maker",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo 3DS Internet Browser",
      "platform": "3DS",
      "date": "Mar 27, 2011",
      "user_score": NaN,
      "link": "/game/3ds/nintendo-3ds-internet-browser",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Application"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon Black Version",
      "platform": "DS",
      "date": "Mar 6, 2011",
      "user_score": 7.9,
      "link": "/game/ds/pokemon-black-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon White Version",
      "platform": "DS",
      "date": "Mar 6, 2011",
      "user_score": 7.9,
      "link": "/game/ds/pokemon-white-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Dragon Quest VI: Realms of Revelation",
      "platform": "DS",
      "date": "Feb 14, 2011",
      "user_score": 8.3,
      "link": "/game/ds/dragon-quest-vi-realms-of-revelation",
      "esrb_rating": "T",
      "developers": [
        "ArtePiazza"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Mario Sports Mix",
      "platform": "WII",
      "date": "Feb 7, 2011",
      "user_score": 7.9,
      "link": "/game/wii/mario-sports-mix",
      "esrb_rating": "E",
      "developers": [
        "Square Enix"
      ],
      "genres": [
        "Sports",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Disaster: Day of Crisis",
      "platform": "WII",
      "date": "TBA",
      "user_score": 8.8,
      "link": "/game/wii/disaster-day-of-crisis",
      "esrb_rating": null,
      "developers": [
        "Monolith Soft"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Another Code R: A Journey into Lost Memories",
      "platform": "WII",
      "date": "TBA",
      "user_score": 7.8,
      "link": "/game/wii/another-code-r-a-journey-into-lost-memories",
      "esrb_rating": null,
      "developers": [
        "Cing"
      ],
      "genres": [
        "Adventure",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Fluidity",
      "platform": "WII",
      "date": "TBA 2010",
      "user_score": NaN,
      "link": "/game/wii/fluidity",
      "esrb_rating": "E",
      "developers": [
        "Curve Studios"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "3D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Party 2",
      "platform": "WII",
      "date": "Dec 20, 2010",
      "user_score": 8.6,
      "link": "/game/wii/mario-party-2",
      "esrb_rating": null,
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Super Mario All-Stars: 25th Anniversary Edition",
      "platform": "WII",
      "date": "Dec 12, 2010",
      "user_score": 7.8,
      "link": "/game/wii/super-mario-all-stars-25th-anniversary-edition",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation",
        "Compilation"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Fluidity",
      "platform": "WII",
      "date": "Dec 6, 2010",
      "user_score": 7.8,
      "link": "/game/wii/fluidity",
      "esrb_rating": "E",
      "developers": [
        "Curve Studios"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "3D",
        "2D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Golden Sun: Dark Dawn",
      "platform": "DS",
      "date": "Nov 29, 2010",
      "user_score": 8.1,
      "link": "/game/ds/golden-sun-dark-dawn",
      "esrb_rating": "E10+",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Snowpack Park",
      "platform": "WII",
      "date": "Nov 22, 2010",
      "user_score": NaN,
      "link": "/game/wii/snowpack-park",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Simulation",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Donkey Kong Country Returns",
      "platform": "WII",
      "date": "Nov 21, 2010",
      "user_score": 8.6,
      "link": "/game/wii/donkey-kong-country-returns",
      "esrb_rating": "E",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Action",
        "Adventure",
        "General",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Mario vs. Donkey Kong: Mini-Land Mayhem",
      "platform": "DS",
      "date": "Nov 14, 2010",
      "user_score": 8.1,
      "link": "/game/ds/mario-vs-donkey-kong-mini-land-mayhem",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 48.0,
      "title": "FlingSmash",
      "platform": "WII",
      "date": "Nov 7, 2010",
      "user_score": 7.4,
      "link": "/game/wii/flingsmash",
      "esrb_rating": "E",
      "developers": [
        "Artoon"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "PokePark Wii: Pikachu's Adventure",
      "platform": "WII",
      "date": "Nov 2, 2010",
      "user_score": 7.7,
      "link": "/game/wii/pokepark-wii-pikachus-adventure",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Action Adventure",
        "Adventure",
        "General",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Art Academy",
      "platform": "DS",
      "date": "Oct 26, 2010",
      "user_score": 7.6,
      "link": "/game/ds/art-academy",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "ThruSpace",
      "platform": "WII",
      "date": "Oct 18, 2010",
      "user_score": 8.3,
      "link": "/game/wii/thruspace",
      "esrb_rating": "E",
      "developers": [
        "Keys Factory"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Snapdots",
      "platform": "DS",
      "date": "Oct 18, 2010",
      "user_score": NaN,
      "link": "/game/ds/snapdots",
      "esrb_rating": "E",
      "developers": [
        "D4 Enterprise"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Kirby's Epic Yarn",
      "platform": "WII",
      "date": "Oct 17, 2010",
      "user_score": 8.5,
      "link": "/game/wii/kirbys-epic-yarn",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Adventure",
        "General",
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Pokemon Ranger: Guardian Signs",
      "platform": "DS",
      "date": "Oct 4, 2010",
      "user_score": 8.1,
      "link": "/game/ds/pokemon-ranger-guardian-signs",
      "esrb_rating": "E",
      "developers": [
        "Creatures Inc."
      ],
      "genres": [
        "Role-Playing",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Wii Party",
      "platform": "WII",
      "date": "Oct 3, 2010",
      "user_score": 8.0,
      "link": "/game/wii/wii-party",
      "esrb_rating": "E",
      "developers": [
        "Nd Cube"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 55.0,
      "title": "Samurai Warriors 3",
      "platform": "WII",
      "date": "Sep 28, 2010",
      "user_score": 7.6,
      "link": "/game/wii/samurai-warriors-3",
      "esrb_rating": "T",
      "developers": [
        "Omega Force"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo Countdown Calendar",
      "platform": "DS",
      "date": "Sep 20, 2010",
      "user_score": NaN,
      "link": "/game/ds/nintendo-countdown-calendar",
      "esrb_rating": null,
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Professor Layton and the Unwound Future",
      "platform": "DS",
      "date": "Sep 12, 2010",
      "user_score": 8.7,
      "link": "/game/ds/professor-layton-and-the-unwound-future",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Metroid: Other M",
      "platform": "WII",
      "date": "Aug 31, 2010",
      "user_score": 6.7,
      "link": "/game/wii/metroid-other-m",
      "esrb_rating": "T",
      "developers": [
        "Team Ninja"
      ],
      "genres": [
        "Action",
        "Action Adventure",
        "Shooter",
        "Sci-Fi",
        "Sci-Fi",
        "General",
        "Third-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Face Pilot: Fly With Your Nintendo DSi Camera!",
      "platform": "DS",
      "date": "Jul 26, 2010",
      "user_score": NaN,
      "link": "/game/ds/face-pilot-fly-with-your-nintendo-dsi-camera!",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Simulation",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 45.0,
      "title": "AquaSpace",
      "platform": "WII",
      "date": "Jul 19, 2010",
      "user_score": 5.6,
      "link": "/game/wii/aquaspace",
      "esrb_rating": "E",
      "developers": [
        "Paon Corporation"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Dragon Quest IX: Sentinels of the Starry Skies",
      "platform": "DS",
      "date": "Jul 11, 2010",
      "user_score": 8.6,
      "link": "/game/ds/dragon-quest-ix-sentinels-of-the-starry-skies",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Tennis",
      "platform": "WII",
      "date": "Jun 28, 2010",
      "user_score": NaN,
      "link": "/game/wii/mario-tennis",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Tennis"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Sin & Punishment: Star Successor",
      "platform": "WII",
      "date": "Jun 27, 2010",
      "user_score": 8.5,
      "link": "/game/wii/sin-punishment-star-successor",
      "esrb_rating": "T",
      "developers": [
        "Treasure"
      ],
      "genres": [
        "Action",
        "General",
        "Shooter",
        "Shooter",
        "Rail",
        "Rail"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Art Style: Rotozoa",
      "platform": "WII",
      "date": "Jun 21, 2010",
      "user_score": NaN,
      "link": "/game/wii/art-style-rotozoa",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Spin Six",
      "platform": "DS",
      "date": "Jun 21, 2010",
      "user_score": NaN,
      "link": "/game/ds/spin-six",
      "esrb_rating": "E",
      "developers": [
        "Zener Works"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Matching",
        "Matching"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "100 Classic Books",
      "platform": "DS",
      "date": "Jun 14, 2010",
      "user_score": 6.5,
      "link": "/game/ds/100-classic-books",
      "esrb_rating": null,
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "A Kappa's Trail",
      "platform": "DS",
      "date": "Jun 14, 2010",
      "user_score": 8.1,
      "link": "/game/ds/a-kappas-trail",
      "esrb_rating": "E",
      "developers": [
        "Brownie Brown"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Flametail",
      "platform": "DS",
      "date": "Jun 7, 2010",
      "user_score": NaN,
      "link": "/game/ds/flametail",
      "esrb_rating": "E",
      "developers": [
        "Mindware"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "X-Scape",
      "platform": "DS",
      "date": "May 31, 2010",
      "user_score": 7.0,
      "link": "/game/ds/x-scape",
      "esrb_rating": "E10+",
      "developers": [
        "Q-Games"
      ],
      "genres": [
        "Simulation",
        "Action Adventure",
        "Sci-Fi",
        "Sci-Fi",
        "General",
        "Space",
        "Combat"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Phoenix Wright: Ace Attorney Episode 5: Rise From the Ashes",
      "platform": "WII",
      "date": "May 25, 2010",
      "user_score": 8.0,
      "link": "/game/wii/phoenix-wright-ace-attorney-episode-5-rise-from-the-ashes",
      "esrb_rating": "T",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Adventure",
        "First-Person",
        "Modern"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Art Style: light trax",
      "platform": "WII",
      "date": "May 24, 2010",
      "user_score": NaN,
      "link": "/game/wii/art-style-light-trax",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Metal Torrent",
      "platform": "DS",
      "date": "May 24, 2010",
      "user_score": 9.6,
      "link": "/game/ds/metal-torrent",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "Scrolling",
        "Scrolling",
        "Shoot-'Em-Up",
        "Vertical"
      ]
    },
    {
      "meta_score": 97.0,
      "title": "Super Mario Galaxy 2",
      "platform": "WII",
      "date": "May 23, 2010",
      "user_score": 9.1,
      "link": "/game/wii/super-mario-galaxy-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo EAD Tokyo "
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby Super Star",
      "platform": "WII",
      "date": "May 17, 2010",
      "user_score": 8.5,
      "link": "/game/wii/kirby-super-star",
      "esrb_rating": "E",
      "developers": [
        "Hal"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Looksley's Line Up",
      "platform": "DS",
      "date": "May 17, 2010",
      "user_score": NaN,
      "link": "/game/ds/looksleys-line-up",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Hidden Object",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Photo Dojo",
      "platform": "DS",
      "date": "May 10, 2010",
      "user_score": 7.0,
      "link": "/game/ds/photo-dojo",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "2D"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Picross 3D",
      "platform": "DS",
      "date": "May 3, 2010",
      "user_score": 8.2,
      "link": "/game/ds/picross-3d",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Logic",
        "Logic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Flagman",
      "platform": "DS",
      "date": "Apr 19, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-flagman",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Ball",
      "platform": "DS",
      "date": "Apr 19, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-ball",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Donkey Kong Jr.",
      "platform": "DS",
      "date": "Apr 19, 2010",
      "user_score": 7.9,
      "link": "/game/ds/game-watch-donkey-kong-jr",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Vermin",
      "platform": "DS",
      "date": "Apr 5, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-vermin",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Trivia / Game Show",
        "Trivia / Game Show",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Helmet",
      "platform": "DS",
      "date": "Apr 5, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-helmet",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Manhole",
      "platform": "DS",
      "date": "Apr 5, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-manhole",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Grill-Off with Ultra Hand!",
      "platform": "WII",
      "date": "Mar 31, 2010",
      "user_score": NaN,
      "link": "/game/wii/grill-off-with-ultra-hand!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch Collection 2",
      "platform": "DS",
      "date": "Mar 31, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-collection-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation",
        "Compilation"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "WarioWare D.I.Y. Showcase",
      "platform": "WII",
      "date": "Mar 29, 2010",
      "user_score": 7.8,
      "link": "/game/wii/warioware-diy-showcase",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo DSi Metronome",
      "platform": "DS",
      "date": "Mar 29, 2010",
      "user_score": 7.4,
      "link": "/game/ds/nintendo-dsi-metronome",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo DSi Instrument Tuner",
      "platform": "DS",
      "date": "Mar 29, 2010",
      "user_score": NaN,
      "link": "/game/ds/nintendo-dsi-instrument-tuner",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "WarioWare D.I.Y.",
      "platform": "DS",
      "date": "Mar 28, 2010",
      "user_score": 8.2,
      "link": "/game/ds/warioware-diy",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "America's Test Kitchen: Let's Get Cooking",
      "platform": "WII",
      "date": "Mar 28, 2010",
      "user_score": NaN,
      "link": "/game/wii/americas-test-kitchen-lets-get-cooking",
      "esrb_rating": null,
      "developers": [],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "America's Test Kitchen: Let's Get Cooking",
      "platform": "DS",
      "date": "Mar 28, 2010",
      "user_score": 6.3,
      "link": "/game/ds/americas-test-kitchen-lets-get-cooking",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Judge",
      "platform": "DS",
      "date": "Mar 22, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-judge",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Chef",
      "platform": "DS",
      "date": "Mar 22, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-chef",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch: Mario's Cement Factory",
      "platform": "DS",
      "date": "Mar 22, 2010",
      "user_score": NaN,
      "link": "/game/ds/game-watch-marios-cement-factory",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon HeartGold Version",
      "platform": "DS",
      "date": "Mar 14, 2010",
      "user_score": 9.1,
      "link": "/game/ds/pokemon-heartgold-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Pokemon SoulSilver Version",
      "platform": "DS",
      "date": "Mar 14, 2010",
      "user_score": 9.2,
      "link": "/game/ds/pokemon-soulsilver-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Endless Ocean: Blue World",
      "platform": "WII",
      "date": "Feb 22, 2010",
      "user_score": 8.6,
      "link": "/game/wii/endless-ocean-blue-world",
      "esrb_rating": "E10+",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Adventure",
        "General",
        "General",
        "3D",
        "Third-Person"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Aura-Aura Climber",
      "platform": "DS",
      "date": "Feb 22, 2010",
      "user_score": 6.0,
      "link": "/game/ds/aura-aura-climber",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General",
        "Arcade"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Spotto!",
      "platform": "DS",
      "date": "Feb 15, 2010",
      "user_score": 5.8,
      "link": "/game/ds/spotto!",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Action",
        "Adventure",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Link 'n' Launch",
      "platform": "DS",
      "date": "Feb 8, 2010",
      "user_score": NaN,
      "link": "/game/ds/link-n-launch",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "True Swing Golf Express",
      "platform": "DS",
      "date": "Feb 1, 2010",
      "user_score": NaN,
      "link": "/game/ds/true-swing-golf-express",
      "esrb_rating": "E",
      "developers": [
        "T&E Soft"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Sim",
        "Sim"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Number Battle",
      "platform": "DS",
      "date": "Jan 25, 2010",
      "user_score": 6.8,
      "link": "/game/ds/number-battle",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Logic",
        "General"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Glory of Heracles",
      "platform": "DS",
      "date": "Jan 18, 2010",
      "user_score": 7.4,
      "link": "/game/ds/glory-of-heracles",
      "esrb_rating": "E10+",
      "developers": [
        "Paon Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Starship Defense",
      "platform": "DS",
      "date": "Jan 18, 2010",
      "user_score": 7.5,
      "link": "/game/ds/starship-defense",
      "esrb_rating": "E",
      "developers": [
        "Q-Games"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Sci-Fi",
        "Sci-Fi",
        "Defense"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Touch Solitaire",
      "platform": "DS",
      "date": "Jan 11, 2010",
      "user_score": NaN,
      "link": "/game/ds/touch-solitaire",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Phoenix Wright: Ace Attorney",
      "platform": "WII",
      "date": "Jan 11, 2010",
      "user_score": 8.7,
      "link": "/game/wii/phoenix-wright-ace-attorney",
      "esrb_rating": "T",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Adventure",
        "First-Person",
        "Visual Novel",
        "Modern",
        "Modern"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Trajectile",
      "platform": "DS",
      "date": "Jan 4, 2010",
      "user_score": NaN,
      "link": "/game/ds/trajectile",
      "esrb_rating": "E",
      "developers": [
        "Q-Games"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Master of Illusion Express: Psychic Camera",
      "platform": "DS",
      "date": "Dec 28, 2009",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion-express-psychic-camera",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pilotwings",
      "platform": "WII",
      "date": "Dec 28, 2009",
      "user_score": NaN,
      "link": "/game/wii/pilotwings",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Flight",
        "Civilian Plane"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Smash Bros.",
      "platform": "WII",
      "date": "Dec 21, 2009",
      "user_score": 7.8,
      "link": "/game/wii/super-smash-bros",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Eco Shooter: Plant 530",
      "platform": "WII",
      "date": "Dec 21, 2009",
      "user_score": NaN,
      "link": "/game/wii/eco-shooter-plant-530",
      "esrb_rating": "E10+",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Action",
        "Adventure",
        "General",
        "Shooter",
        "First-Person",
        "Fantasy",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Master of Illusion Express: Matchmaker",
      "platform": "DS",
      "date": "Dec 14, 2009",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion-express-matchmaker",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "The Legend of Zelda: Spirit Tracks",
      "platform": "DS",
      "date": "Dec 7, 2009",
      "user_score": 7.9,
      "link": "/game/ds/the-legend-of-zelda-spirit-tracks",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "Fantasy",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Master of Illusion Express: Mind Probe",
      "platform": "DS",
      "date": "Nov 30, 2009",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion-express-mind-probe",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Lumiloop",
      "platform": "DS",
      "date": "Nov 23, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-lumiloop",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Sun-Animalcule",
      "platform": "DS",
      "date": "Nov 23, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-sun-animalcule",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Varvoice",
      "platform": "DS",
      "date": "Nov 23, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-varvoice",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Marine-Crystals",
      "platform": "DS",
      "date": "Nov 23, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-marine-crystals",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Luminarrow",
      "platform": "DS",
      "date": "Nov 23, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-luminarrow",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Kart",
      "platform": "WII",
      "date": "Nov 23, 2009",
      "user_score": 7.2,
      "link": "/game/wii/super-mario-kart",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Pokemon Rumble",
      "platform": "WII",
      "date": "Nov 16, 2009",
      "user_score": 8.2,
      "link": "/game/wii/pokemon-rumble",
      "esrb_rating": "E10+",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "2D",
        "3D"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Art Style: DIGIDRIVE",
      "platform": "DS",
      "date": "Nov 16, 2009",
      "user_score": 6.8,
      "link": "/game/ds/art-style-digidrive",
      "esrb_rating": "E",
      "developers": [
        "Q-Games"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "New Super Mario Bros. Wii",
      "platform": "WII",
      "date": "Nov 15, 2009",
      "user_score": 8.4,
      "link": "/game/wii/new-super-mario-bros-wii",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Beatnes",
      "platform": "DS",
      "date": "Nov 9, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-beatnes",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Trapy",
      "platform": "DS",
      "date": "Nov 9, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-trapy",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Nanocarp",
      "platform": "DS",
      "date": "Nov 9, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-nanocarp",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Hanenbow",
      "platform": "DS",
      "date": "Nov 9, 2009",
      "user_score": 7.5,
      "link": "/game/ds/electroplankton-hanenbow",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Electroplankton: Rec-Rec",
      "platform": "DS",
      "date": "Nov 9, 2009",
      "user_score": NaN,
      "link": "/game/ds/electroplankton-rec-rec",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Music"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Excitebike: World Rally",
      "platform": "WII",
      "date": "Nov 9, 2009",
      "user_score": 7.5,
      "link": "/game/wii/excitebike-world-rally",
      "esrb_rating": "E",
      "developers": [
        "Monster Games Inc."
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Motorcycle",
        "Other",
        "Motocross",
        "Motocross"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Style Savvy",
      "platform": "DS",
      "date": "Nov 2, 2009",
      "user_score": 7.5,
      "link": "/game/ds/style-savvy",
      "esrb_rating": "E",
      "developers": [
        "syn Sophia"
      ],
      "genres": [
        "Simulation",
        "General",
        "General",
        "Virtual",
        "Career"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Sparkle Snapshots",
      "platform": "DS",
      "date": "Nov 2, 2009",
      "user_score": NaN,
      "link": "/game/ds/sparkle-snapshots",
      "esrb_rating": null,
      "developers": [
        "Nintendo",
        " Atlus"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Doc Louis's Punch-Out!!",
      "platform": "WII",
      "date": "Oct 27, 2009",
      "user_score": 8.7,
      "link": "/game/wii/doc-louiss-punch-out!!",
      "esrb_rating": "E10+",
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Boxing",
        "Boxing",
        "Combat",
        "Boxing / Martial Arts"
      ]
    },
    {
      "meta_score": NaN,
      "title": "PictureBook Games: The Royal Bluff",
      "platform": "DS",
      "date": "Oct 26, 2009",
      "user_score": NaN,
      "link": "/game/ds/picturebook-games-the-royal-bluff",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Grounding Inc."
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Crash-Course Domo",
      "platform": "DS",
      "date": "Oct 19, 2009",
      "user_score": NaN,
      "link": "/game/ds/crash-course-domo",
      "esrb_rating": "E",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Other",
        "Other"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Hard-Hat Domo",
      "platform": "DS",
      "date": "Oct 19, 2009",
      "user_score": NaN,
      "link": "/game/ds/hard-hat-domo",
      "esrb_rating": "E",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Adventure",
        "Puzzle",
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pro-Putt Domo",
      "platform": "DS",
      "date": "Oct 19, 2009",
      "user_score": NaN,
      "link": "/game/ds/pro-putt-domo",
      "esrb_rating": "E",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Golf",
        "Arcade",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Rock-n-Roll Domo",
      "platform": "DS",
      "date": "Oct 19, 2009",
      "user_score": NaN,
      "link": "/game/ds/rock-n-roll-domo",
      "esrb_rating": "E",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "White-Water Domo",
      "platform": "DS",
      "date": "Oct 19, 2009",
      "user_score": NaN,
      "link": "/game/ds/white-water-domo",
      "esrb_rating": "E",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Snow / Water",
        "Other",
        "Snow / Water"
      ]
    },
    {
      "meta_score": 54.0,
      "title": "Pokemon Mystery Dungeon: Explorers of Sky",
      "platform": "DS",
      "date": "Oct 12, 2009",
      "user_score": 9.0,
      "link": "/game/ds/pokemon-mystery-dungeon-explorers-of-sky",
      "esrb_rating": "E",
      "developers": [
        "ChunSoft"
      ],
      "genres": [
        "Role-Playing",
        "General",
        "Console-style RPG",
        "Console-style RPG",
        "Roguelike"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Pinball Pulse: The Ancients Beckon",
      "platform": "DS",
      "date": "Oct 12, 2009",
      "user_score": NaN,
      "link": "/game/ds/pinball-pulse-the-ancients-beckon",
      "esrb_rating": "E",
      "developers": [
        "Fuse Games Limited"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Parlor",
        "Pinball",
        "Pinball"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Wii Fit Plus",
      "platform": "WII",
      "date": "Oct 4, 2009",
      "user_score": 7.6,
      "link": "/game/wii/wii-fit-plus",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Miscellaneous",
        "Alternative",
        "General",
        "Exercise / Fitness",
        "Other"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Art Academy: Second Semester",
      "platform": "DS",
      "date": "Sep 28, 2009",
      "user_score": NaN,
      "link": "/game/ds/art-academy-second-semester",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Clubhouse Games Express: Strategy Pack",
      "platform": "DS",
      "date": "Sep 21, 2009",
      "user_score": NaN,
      "link": "/game/ds/clubhouse-games-express-strategy-pack",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "You, Me, and the Cubes",
      "platform": "WII",
      "date": "Sep 21, 2009",
      "user_score": 7.0,
      "link": "/game/wii/you-me-and-the-cubes",
      "esrb_rating": "E",
      "developers": [
        "fyto"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Mario & Luigi: Bowser's Inside Story",
      "platform": "DS",
      "date": "Sep 14, 2009",
      "user_score": 8.8,
      "link": "/game/ds/mario-luigi-bowsers-inside-story",
      "esrb_rating": "E",
      "developers": [
        "Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Art Academy: First Semester",
      "platform": "DS",
      "date": "Sep 14, 2009",
      "user_score": 8.0,
      "link": "/game/ds/art-academy-first-semester",
      "esrb_rating": "E",
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Clubhouse Games Express: Family Favorites",
      "platform": "DS",
      "date": "Sep 7, 2009",
      "user_score": NaN,
      "link": "/game/ds/clubhouse-games-express-family-favorites",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Puzzle League Express",
      "platform": "DS",
      "date": "Aug 31, 2009",
      "user_score": NaN,
      "link": "/game/ds/puzzle-league-express",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Professor Layton and the Diabolical Box",
      "platform": "DS",
      "date": "Aug 24, 2009",
      "user_score": 8.5,
      "link": "/game/ds/professor-layton-and-the-diabolical-box",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Metroid Prime Trilogy",
      "platform": "WII",
      "date": "Aug 24, 2009",
      "user_score": 9.2,
      "link": "/game/wii/metroid-prime-trilogy",
      "esrb_rating": "T",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Shooter",
        "Compilation",
        "Compilation",
        "First-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Picture Book Games: Pop-Up Pursuit",
      "platform": "WII",
      "date": "Aug 17, 2009",
      "user_score": NaN,
      "link": "/game/wii/picture-book-games-pop-up-pursuit",
      "esrb_rating": "E",
      "developers": [
        "Grounding Inc."
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Brain Age Express: Sudoku",
      "platform": "DS",
      "date": "Aug 17, 2009",
      "user_score": NaN,
      "link": "/game/ds/brain-age-express-sudoku",
      "esrb_rating": "E",
      "developers": [],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Logic",
        "General"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "Flipnote Studio",
      "platform": "DS",
      "date": "Aug 12, 2009",
      "user_score": 7.7,
      "link": "/game/ds/flipnote-studio",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Fossil Fighters",
      "platform": "DS",
      "date": "Aug 10, 2009",
      "user_score": 8.4,
      "link": "/game/ds/fossil-fighters",
      "esrb_rating": "E",
      "developers": [
        "RED Entertainment"
      ],
      "genres": [
        "Role-Playing",
        "General",
        "General",
        "Trainer"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Rock N' Roll Climber",
      "platform": "WII",
      "date": "Aug 10, 2009",
      "user_score": NaN,
      "link": "/game/wii/rock-n-roll-climber",
      "esrb_rating": "E",
      "developers": [
        "Vitei"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Brain Age Express: Arts & Letters",
      "platform": "DS",
      "date": "Aug 10, 2009",
      "user_score": NaN,
      "link": "/game/ds/brain-age-express-arts-letters",
      "esrb_rating": "E",
      "developers": [],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Art Style: precipice",
      "platform": "DS",
      "date": "Aug 3, 2009",
      "user_score": 7.3,
      "link": "/game/ds/art-style-precipice",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Wii Sports Resort",
      "platform": "WII",
      "date": "Jul 26, 2009",
      "user_score": 8.3,
      "link": "/game/wii/wii-sports-resort",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "General",
        "General",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Art Style: ZENGAGE",
      "platform": "DS",
      "date": "Jul 20, 2009",
      "user_score": NaN,
      "link": "/game/ds/art-style-zengage",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Matching",
        "Matching"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Art Style: BASE 10",
      "platform": "DS",
      "date": "Jul 6, 2009",
      "user_score": NaN,
      "link": "/game/ds/art-style-base-10",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Bit.Trip Core",
      "platform": "WII",
      "date": "Jul 6, 2009",
      "user_score": 8.1,
      "link": "/game/wii/bittrip-core",
      "esrb_rating": "E",
      "developers": [
        "Gaijin Games"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Art Style: BOXLIFE",
      "platform": "DS",
      "date": "Jun 22, 2009",
      "user_score": 6.8,
      "link": "/game/ds/art-style-boxlife",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Calculator",
      "platform": "DS",
      "date": "Jun 15, 2009",
      "user_score": 6.3,
      "link": "/game/ds/mario-calculator",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "General",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Clock",
      "platform": "DS",
      "date": "Jun 15, 2009",
      "user_score": 6.0,
      "link": "/game/ds/mario-clock",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Mario vs. Donkey Kong: Minis March Again!",
      "platform": "DS",
      "date": "Jun 8, 2009",
      "user_score": 7.9,
      "link": "/game/ds/mario-vs-donkey-kong-minis-march-again!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "The Legendary Starfy",
      "platform": "DS",
      "date": "Jun 7, 2009",
      "user_score": 8.4,
      "link": "/game/ds/the-legendary-starfy",
      "esrb_rating": "E",
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Personal Trainer: Walking",
      "platform": "DS",
      "date": "May 26, 2009",
      "user_score": 7.3,
      "link": "/game/ds/personal-trainer-walking",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Creatures Inc."
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Photo Clock",
      "platform": "DS",
      "date": "May 25, 2009",
      "user_score": NaN,
      "link": "/game/ds/photo-clock",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Punch-Out!!",
      "platform": "WII",
      "date": "May 18, 2009",
      "user_score": 8.6,
      "link": "/game/wii/punch-out!!",
      "esrb_rating": "E10+",
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Boxing",
        "Boxing",
        "Combat",
        "Boxing / Martial Arts"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Art Style: PiCTOBiTS",
      "platform": "DS",
      "date": "May 18, 2009",
      "user_score": 7.5,
      "link": "/game/ds/art-style-pictobits",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Matching",
        "Matching"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda: Majora's Mask",
      "platform": "WII",
      "date": "May 18, 2009",
      "user_score": 8.7,
      "link": "/game/wii/the-legend-of-zelda-majoras-mask",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "New Play Control! Donkey Kong Jungle Beat",
      "platform": "WII",
      "date": "May 4, 2009",
      "user_score": 8.5,
      "link": "/game/wii/new-play-control!-donkey-kong-jungle-beat",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Animal Crossing Calculator",
      "platform": "DS",
      "date": "May 4, 2009",
      "user_score": NaN,
      "link": "/game/ds/animal-crossing-calculator",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Animal Crossing Clock",
      "platform": "DS",
      "date": "May 4, 2009",
      "user_score": NaN,
      "link": "/game/ds/animal-crossing-clock",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Application"
      ]
    },
    {
      "meta_score": 51.0,
      "title": "Paper Airplane Chase",
      "platform": "DS",
      "date": "Apr 27, 2009",
      "user_score": 7.2,
      "link": "/game/ds/paper-airplane-chase",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Clubhouse Games Express: Card Classics",
      "platform": "DS",
      "date": "Apr 27, 2009",
      "user_score": NaN,
      "link": "/game/ds/clubhouse-games-express-card-classics",
      "esrb_rating": "T",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Dr. Mario Express",
      "platform": "DS",
      "date": "Apr 20, 2009",
      "user_score": 7.4,
      "link": "/game/ds/dr-mario-express",
      "esrb_rating": "E",
      "developers": [
        "Arika",
        " Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Matching",
        "General"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Excitebots: Trick Racing",
      "platform": "WII",
      "date": "Apr 20, 2009",
      "user_score": 8.1,
      "link": "/game/wii/excitebots-trick-racing",
      "esrb_rating": "E",
      "developers": [
        "Monster Games Inc."
      ],
      "genres": [
        "Driving",
        "Racing",
        "General",
        "Arcade",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Master of Illusion Express: Deep Psyche",
      "platform": "DS",
      "date": "Apr 20, 2009",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion-express-deep-psyche",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Master of Illusion Express: Shuffle Games",
      "platform": "DS",
      "date": "Apr 13, 2009",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion-express-shuffle-games",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Rhythm Heaven",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": 8.4,
      "link": "/game/ds/rhythm-heaven",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Art Style: AQUIA",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": 7.3,
      "link": "/game/ds/art-style-aquia",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo DSi Browser",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": NaN,
      "link": "/game/ds/nintendo-dsi-browser",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Web Browser",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Master of Illusion Express: Funny Face",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion-express-funny-face",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Bird & Beans",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": 7.8,
      "link": "/game/ds/bird-beans",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "General",
        "Arcade"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Brain Age Express: Math",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": NaN,
      "link": "/game/ds/brain-age-express-math",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 53.0,
      "title": "WarioWare: Snapped!",
      "platform": "DS",
      "date": "Apr 5, 2009",
      "user_score": 4.1,
      "link": "/game/ds/warioware-snapped!",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Party / Minigame",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Punch-Out!!",
      "platform": "WII",
      "date": "Mar 30, 2009",
      "user_score": 8.9,
      "link": "/game/wii/super-punch-out!!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Boxing"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Bonsai Barber",
      "platform": "WII",
      "date": "Mar 30, 2009",
      "user_score": 7.4,
      "link": "/game/wii/bonsai-barber",
      "esrb_rating": "E",
      "developers": [
        "Zoonami Ltd."
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Pokemon Platinum Version",
      "platform": "DS",
      "date": "Mar 22, 2009",
      "user_score": 8.9,
      "link": "/game/ds/pokemon-platinum-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Bit.Trip Beat",
      "platform": "WII",
      "date": "Mar 16, 2009",
      "user_score": 8.3,
      "link": "/game/wii/bittrip-beat",
      "esrb_rating": "E",
      "developers": [
        "Gaijin Games"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "New Play Control! Pikmin",
      "platform": "WII",
      "date": "Mar 9, 2009",
      "user_score": 8.4,
      "link": "/game/wii/new-play-control!-pikmin",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "New Play Control! Mario Power Tennis",
      "platform": "WII",
      "date": "Mar 9, 2009",
      "user_score": 7.6,
      "link": "/game/wii/new-play-control!-mario-power-tennis",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Tennis",
        "Tennis"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Fire Emblem: Shadow Dragon",
      "platform": "DS",
      "date": "Feb 16, 2009",
      "user_score": 7.1,
      "link": "/game/ds/fire-emblem-shadow-dragon",
      "esrb_rating": "E10+",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Lonpos",
      "platform": "WII",
      "date": "Feb 2, 2009",
      "user_score": NaN,
      "link": "/game/wii/lonpos",
      "esrb_rating": "E",
      "developers": [
        "Genki"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 63.0,
      "title": "Personal Trainer: Math",
      "platform": "DS",
      "date": "Jan 13, 2009",
      "user_score": NaN,
      "link": "/game/ds/personal-trainer-math",
      "esrb_rating": "E",
      "developers": [
        "Jupiter Corporation"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby's Dream Land 3",
      "platform": "WII",
      "date": "Jan 5, 2009",
      "user_score": 8.0,
      "link": "/game/wii/kirbys-dream-land-3",
      "esrb_rating": "E",
      "developers": [
        "Hal"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Maboshi's Arcade",
      "platform": "WII",
      "date": "Dec 29, 2008",
      "user_score": 7.9,
      "link": "/game/wii/maboshis-arcade",
      "esrb_rating": "E",
      "developers": [
        "Mindware"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Action",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": NaN,
      "title": "StarTropics II: Zoda's Revenge",
      "platform": "WII",
      "date": "Dec 29, 2008",
      "user_score": 8.6,
      "link": "/game/wii/startropics-ii-zodas-revenge",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Modern"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Game & Watch Collection",
      "platform": "DS",
      "date": "Dec 15, 2008",
      "user_score": NaN,
      "link": "/game/ds/game-watch-collection",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation",
        "Compilation"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Personal Trainer: Cooking",
      "platform": "DS",
      "date": "Nov 24, 2008",
      "user_score": 8.1,
      "link": "/game/ds/personal-trainer-cooking",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Animal Crossing: City Folk",
      "platform": "WII",
      "date": "Nov 16, 2008",
      "user_score": 7.9,
      "link": "/game/wii/animal-crossing-city-folk",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Pokemon Ranger: Shadows of Almia",
      "platform": "DS",
      "date": "Nov 10, 2008",
      "user_score": 7.9,
      "link": "/game/ds/pokemon-ranger-shadows-of-almia",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs",
        " Creatures Inc."
      ],
      "genres": [
        "Role-Playing",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Art Style: ROTOHEX",
      "platform": "WII",
      "date": "Oct 27, 2008",
      "user_score": NaN,
      "link": "/game/wii/art-style-rotohex",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 63.0,
      "title": "Wii Music",
      "platform": "WII",
      "date": "Oct 20, 2008",
      "user_score": 4.8,
      "link": "/game/wii/wii-music",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Art Style: CUBELLO",
      "platform": "WII",
      "date": "Oct 13, 2008",
      "user_score": 7.6,
      "link": "/game/wii/art-style-cubello",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Golf",
      "platform": "WII",
      "date": "Oct 6, 2008",
      "user_score": NaN,
      "link": "/game/wii/mario-golf",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Arcade"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Art Style: ORBIENT",
      "platform": "WII",
      "date": "Sep 29, 2008",
      "user_score": 8.2,
      "link": "/game/wii/art-style-orbient",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Wario Land: Shake It!",
      "platform": "WII",
      "date": "Sep 22, 2008",
      "user_score": 8.5,
      "link": "/game/wii/wario-land-shake-it!",
      "esrb_rating": "E",
      "developers": [
        "Good-Feel"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Kirby Super Star Ultra",
      "platform": "DS",
      "date": "Sep 22, 2008",
      "user_score": 8.8,
      "link": "/game/ds/kirby-super-star-ultra",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Mystery Case Files: MillionHeir",
      "platform": "DS",
      "date": "Sep 8, 2008",
      "user_score": NaN,
      "link": "/game/ds/mystery-case-files-millionheir",
      "esrb_rating": "E",
      "developers": [
        "Griptonite Games"
      ],
      "genres": [
        "Miscellaneous",
        "Adventure",
        "Puzzle",
        "General",
        "Hidden Object",
        "Puzzle"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario RPG: Legend of the Seven Stars",
      "platform": "WII",
      "date": "Sep 1, 2008",
      "user_score": 8.9,
      "link": "/game/wii/super-mario-rpg-legend-of-the-seven-stars",
      "esrb_rating": "E",
      "developers": [
        "SquareSoft"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Clu Clu Land",
      "platform": "WII",
      "date": "Sep 1, 2008",
      "user_score": 8.4,
      "link": "/game/wii/clu-clu-land",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Mario Super Sluggers",
      "platform": "WII",
      "date": "Aug 25, 2008",
      "user_score": 7.9,
      "link": "/game/wii/mario-super-sluggers",
      "esrb_rating": "E",
      "developers": [
        "Namco Bandai Games"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Team",
        "Baseball",
        "Arcade",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong 3",
      "platform": "WII",
      "date": "Jul 14, 2008",
      "user_score": NaN,
      "link": "/game/wii/donkey-kong-3",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Magnetica Twist",
      "platform": "WII",
      "date": "Jun 30, 2008",
      "user_score": 7.8,
      "link": "/game/wii/magnetica-twist",
      "esrb_rating": "E",
      "developers": [
        "Mitchell"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Matching",
        "General"
      ]
    },
    {
      "meta_score": 47.0,
      "title": "My Pokemon Ranch",
      "platform": "WII",
      "date": "Jun 9, 2008",
      "user_score": 5.3,
      "link": "/game/wii/my-pokemon-ranch",
      "esrb_rating": "E",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Dr. Mario Online RX",
      "platform": "WII",
      "date": "May 26, 2008",
      "user_score": 8.2,
      "link": "/game/wii/dr-mario-online-rx",
      "esrb_rating": "E",
      "developers": [
        "Arika",
        " Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Matching",
        "Matching"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Wii Fit",
      "platform": "WII",
      "date": "May 19, 2008",
      "user_score": 7.7,
      "link": "/game/wii/wii-fit",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Miscellaneous",
        "General",
        "Exercise / Fitness"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "CrossworDS",
      "platform": "DS",
      "date": "May 5, 2008",
      "user_score": 7.3,
      "link": "/game/ds/crosswords",
      "esrb_rating": "E",
      "developers": [
        "Nuevo Retro Games"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Logic",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Puzzle League",
      "platform": "WII",
      "date": "May 5, 2008",
      "user_score": 7.9,
      "link": "/game/wii/pokemon-puzzle-league",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Mario Kart Wii",
      "platform": "WII",
      "date": "Apr 27, 2008",
      "user_score": 8.5,
      "link": "/game/wii/mario-kart-wii",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Kart",
        "Automobile"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Pokemon Mystery Dungeon: Explorers of Darkness",
      "platform": "DS",
      "date": "Apr 20, 2008",
      "user_score": 8.6,
      "link": "/game/ds/pokemon-mystery-dungeon-explorers-of-darkness",
      "esrb_rating": "E",
      "developers": [
        "ChunSoft"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Roguelike"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "Pokemon Mystery Dungeon: Explorers of Time",
      "platform": "DS",
      "date": "Apr 20, 2008",
      "user_score": 8.4,
      "link": "/game/ds/pokemon-mystery-dungeon-explorers-of-time",
      "esrb_rating": "E",
      "developers": [
        "ChunSoft"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Roguelike"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Yoshi's Cookie",
      "platform": "WII",
      "date": "Apr 7, 2008",
      "user_score": NaN,
      "link": "/game/wii/yoshis-cookie",
      "esrb_rating": "E",
      "developers": [
        "Bullet Proof Software"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Cruis'n USA",
      "platform": "WII",
      "date": "Mar 31, 2008",
      "user_score": 8.6,
      "link": "/game/wii/cruisn-usa",
      "esrb_rating": "E",
      "developers": [
        "Midway"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "Super Smash Bros. Brawl",
      "platform": "WII",
      "date": "Mar 9, 2008",
      "user_score": 8.8,
      "link": "/game/wii/super-smash-bros-brawl",
      "esrb_rating": "T",
      "developers": [
        "Game Arts"
      ],
      "genres": [
        "Action",
        "Fighting",
        "Fighting",
        "3D",
        "2D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby 64: The Crystal Shards",
      "platform": "WII",
      "date": "Feb 25, 2008",
      "user_score": 8.6,
      "link": "/game/wii/kirby-64-the-crystal-shards",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Professor Layton and the Curious Village",
      "platform": "DS",
      "date": "Feb 10, 2008",
      "user_score": 8.4,
      "link": "/game/ds/professor-layton-and-the-curious-village",
      "esrb_rating": "E",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Miscellaneous",
        "Adventure",
        "Puzzle",
        "Edutainment",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "1080: TenEighty Snowboarding",
      "platform": "WII",
      "date": "Jan 28, 2008",
      "user_score": 8.6,
      "link": "/game/wii/1080-teneighty-snowboarding",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Alternative",
        "Snowboarding"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Mario & Sonic at the Olympic Games",
      "platform": "DS",
      "date": "Jan 22, 2008",
      "user_score": 7.0,
      "link": "/game/ds/mario-sonic-at-the-olympic-games",
      "esrb_rating": "E",
      "developers": [
        "Sega",
        " Nintendo",
        " Sega Sports R&D"
      ],
      "genres": [
        "Sports",
        "Olympic Sports",
        "Olympic Sports",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Endless Ocean",
      "platform": "WII",
      "date": "Jan 21, 2008",
      "user_score": 8.2,
      "link": "/game/wii/endless-ocean",
      "esrb_rating": "E",
      "developers": [
        "Arika"
      ],
      "genres": [
        "Adventure",
        "General",
        "General",
        "3D",
        "Third-Person"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Adventures of Lolo 2",
      "platform": "WII",
      "date": "Jan 21, 2008",
      "user_score": NaN,
      "link": "/game/wii/adventures-of-lolo-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Action"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Advance Wars: Days of Ruin",
      "platform": "DS",
      "date": "Jan 21, 2008",
      "user_score": 8.5,
      "link": "/game/ds/advance-wars-days-of-ruin",
      "esrb_rating": "E10+",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Modern",
        "Modern",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "StarTropics",
      "platform": "WII",
      "date": "Jan 7, 2008",
      "user_score": 8.8,
      "link": "/game/wii/startropics",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Modern"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong Country 3: Dixie Kong's Double Trouble",
      "platform": "WII",
      "date": "Dec 24, 2007",
      "user_score": 8.4,
      "link": "/game/wii/donkey-kong-country-3-dixie-kongs-double-trouble",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Snap",
      "platform": "WII",
      "date": "Dec 10, 2007",
      "user_score": 7.8,
      "link": "/game/wii/pokemon-snap",
      "esrb_rating": "E",
      "developers": [
        "Hal"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Master of Illusion",
      "platform": "DS",
      "date": "Nov 26, 2007",
      "user_score": NaN,
      "link": "/game/ds/master-of-illusion",
      "esrb_rating": "E",
      "developers": [
        "Eighting",
        " Tenyo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Application",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Vegas Stakes",
      "platform": "WII",
      "date": "Nov 26, 2007",
      "user_score": NaN,
      "link": "/game/wii/vegas-stakes",
      "esrb_rating": "E",
      "developers": [
        "Hal"
      ],
      "genres": [
        "Miscellaneous",
        "Parlor",
        "Gambling"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Mario Party DS",
      "platform": "DS",
      "date": "Nov 19, 2007",
      "user_score": 7.8,
      "link": "/game/ds/mario-party-ds",
      "esrb_rating": "E",
      "developers": [
        "Hudson Soft"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wrecking Crew",
      "platform": "WII",
      "date": "Nov 19, 2007",
      "user_score": NaN,
      "link": "/game/wii/wrecking-crew",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Link's Crossbow Training",
      "platform": "WII",
      "date": "Nov 19, 2007",
      "user_score": 7.1,
      "link": "/game/wii/links-crossbow-training",
      "esrb_rating": "T",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "Light Gun",
        "Light Gun"
      ]
    },
    {
      "meta_score": 97.0,
      "title": "Super Mario Galaxy",
      "platform": "WII",
      "date": "Nov 12, 2007",
      "user_score": 9.1,
      "link": "/game/wii/super-mario-galaxy",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Volleyball",
      "platform": "WII",
      "date": "Nov 12, 2007",
      "user_score": NaN,
      "link": "/game/wii/volleyball",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Volleyball"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Mario & Sonic at the Olympic Games",
      "platform": "WII",
      "date": "Nov 6, 2007",
      "user_score": 7.6,
      "link": "/game/wii/mario-sonic-at-the-olympic-games",
      "esrb_rating": "E",
      "developers": [
        "Sega",
        " Nintendo",
        " Sega Sports R&D"
      ],
      "genres": [
        "Sports",
        "Olympic Sports",
        "Olympic Sports",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Fire Emblem: Radiant Dawn",
      "platform": "WII",
      "date": "Nov 5, 2007",
      "user_score": 8.9,
      "link": "/game/wii/fire-emblem-radiant-dawn",
      "esrb_rating": "E10+",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Bros. 3",
      "platform": "WII",
      "date": "Nov 5, 2007",
      "user_score": 9.0,
      "link": "/game/wii/super-mario-bros-3",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Battalion Wars 2",
      "platform": "WII",
      "date": "Oct 29, 2007",
      "user_score": 8.2,
      "link": "/game/wii/battalion-wars-2",
      "esrb_rating": "T",
      "developers": [
        "Kuju Entertainment"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Military",
        "Military",
        "Tactics"
      ]
    },
    {
      "meta_score": 59.0,
      "title": "Flash Focus: Vision Training in Minutes a Day",
      "platform": "DS",
      "date": "Oct 15, 2007",
      "user_score": 3.8,
      "link": "/game/ds/flash-focus-vision-training-in-minutes-a-day",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Namco Bandai Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 46.0,
      "title": "Donkey Kong: Barrel Blast",
      "platform": "WII",
      "date": "Oct 8, 2007",
      "user_score": 6.6,
      "link": "/game/wii/donkey-kong-barrel-blast",
      "esrb_rating": "E",
      "developers": [
        "Paon Corporation"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Other",
        "Kart"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "The Legend of Zelda: Phantom Hourglass",
      "platform": "DS",
      "date": "Oct 1, 2007",
      "user_score": 7.9,
      "link": "/game/ds/the-legend-of-zelda-phantom-hourglass",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "Fantasy",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Bros.: The Lost Levels",
      "platform": "WII",
      "date": "Oct 1, 2007",
      "user_score": 5.8,
      "link": "/game/wii/super-mario-bros-the-lost-levels",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Sin and Punishment",
      "platform": "WII",
      "date": "Oct 1, 2007",
      "user_score": 8.6,
      "link": "/game/wii/sin-and-punishment",
      "esrb_rating": "T",
      "developers": [
        "Treasure"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Chibi-Robo! Park Patrol",
      "platform": "DS",
      "date": "Sep 24, 2007",
      "user_score": 7.7,
      "link": "/game/ds/chibi-robo!-park-patrol",
      "esrb_rating": "E",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby's Avalanche",
      "platform": "WII",
      "date": "Sep 24, 2007",
      "user_score": 8.2,
      "link": "/game/wii/kirbys-avalanche",
      "esrb_rating": "E",
      "developers": [
        "Hal"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Yoshi's Story",
      "platform": "WII",
      "date": "Sep 17, 2007",
      "user_score": NaN,
      "link": "/game/wii/yoshis-story",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "DK: Jungle Climber",
      "platform": "DS",
      "date": "Sep 10, 2007",
      "user_score": 6.7,
      "link": "/game/ds/dk-jungle-climber",
      "esrb_rating": "E",
      "developers": [
        "Paon Corporation"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "NES Play Action Football",
      "platform": "WII",
      "date": "Sep 10, 2007",
      "user_score": NaN,
      "link": "/game/wii/nes-play-action-football",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Football",
        "Sim"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong Jr. Math",
      "platform": "WII",
      "date": "Sep 3, 2007",
      "user_score": 5.0,
      "link": "/game/wii/donkey-kong-jr-math",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Metroid Prime 3: Corruption",
      "platform": "WII",
      "date": "Aug 27, 2007",
      "user_score": 8.8,
      "link": "/game/wii/metroid-prime-3-corruption",
      "esrb_rating": "T",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "First-Person",
        "Sci-Fi",
        "Sci-Fi",
        "Arcade"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Brain Age 2: More Training in Minutes a Day",
      "platform": "DS",
      "date": "Aug 20, 2007",
      "user_score": 7.1,
      "link": "/game/ds/brain-age-2-more-training-in-minutes-a-day",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Metroid",
      "platform": "WII",
      "date": "Aug 20, 2007",
      "user_score": 9.3,
      "link": "/game/wii/super-metroid",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Shining in the Darkness",
      "platform": "WII",
      "date": "Aug 13, 2007",
      "user_score": NaN,
      "link": "/game/wii/shining-in-the-darkness",
      "esrb_rating": "E",
      "developers": [
        "Climax Entertainment"
      ],
      "genres": [
        "Role-Playing",
        "First-Person"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Metroid",
      "platform": "WII",
      "date": "Aug 13, 2007",
      "user_score": 7.4,
      "link": "/game/wii/metroid",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wave Race 64",
      "platform": "WII",
      "date": "Aug 6, 2007",
      "user_score": 8.3,
      "link": "/game/wii/wave-race-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Snow / Water"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Mario Strikers Charged",
      "platform": "WII",
      "date": "Jul 30, 2007",
      "user_score": 8.2,
      "link": "/game/wii/mario-strikers-charged",
      "esrb_rating": "E10+",
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Team",
        "Soccer",
        "Arcade",
        "Arcade"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Picross DS",
      "platform": "DS",
      "date": "Jul 30, 2007",
      "user_score": 7.9,
      "link": "/game/ds/picross-ds",
      "esrb_rating": "E",
      "developers": [
        "Jupiter Corporation"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Logic",
        "Logic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby's Dream Course",
      "platform": "WII",
      "date": "Jul 23, 2007",
      "user_score": 8.9,
      "link": "/game/wii/kirbys-dream-course",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Paper Mario",
      "platform": "WII",
      "date": "Jul 16, 2007",
      "user_score": 8.7,
      "link": "/game/wii/paper-mario",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Balloon Fight",
      "platform": "WII",
      "date": "Jul 16, 2007",
      "user_score": 6.8,
      "link": "/game/wii/balloon-fight",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Yoshi",
      "platform": "WII",
      "date": "Jul 9, 2007",
      "user_score": 8.0,
      "link": "/game/wii/yoshi",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mach Rider",
      "platform": "WII",
      "date": "Jul 9, 2007",
      "user_score": NaN,
      "link": "/game/wii/mach-rider",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Motorcycle",
        "Street"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Bros. 2",
      "platform": "WII",
      "date": "Jul 2, 2007",
      "user_score": 7.9,
      "link": "/game/wii/super-mario-bros-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 53.0,
      "title": "Pokemon Battle Revolution",
      "platform": "WII",
      "date": "Jun 25, 2007",
      "user_score": 6.6,
      "link": "/game/wii/pokemon-battle-revolution",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy",
        "General",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "F-Zero X",
      "platform": "WII",
      "date": "Jun 25, 2007",
      "user_score": 7.8,
      "link": "/game/wii/f-zero-x",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Futuristic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "World Sports Competition",
      "platform": "WII",
      "date": "Jun 18, 2007",
      "user_score": NaN,
      "link": "/game/wii/world-sports-competition",
      "esrb_rating": "E",
      "developers": [
        "Hudson Soft"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "NES Open Tournament Golf",
      "platform": "WII",
      "date": "Jun 18, 2007",
      "user_score": NaN,
      "link": "/game/wii/nes-open-tournament-golf",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Arcade"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Big Brain Academy: Wii Degree",
      "platform": "WII",
      "date": "Jun 11, 2007",
      "user_score": 7.1,
      "link": "/game/wii/big-brain-academy-wii-degree",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo DS Web Browser",
      "platform": "DS",
      "date": "Jun 4, 2007",
      "user_score": 6.3,
      "link": "/game/ds/nintendo-ds-web-browser",
      "esrb_rating": null,
      "developers": [
        "Opera"
      ],
      "genres": [
        "Miscellaneous",
        "Web Browser",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Zelda II: The Adventure of Link",
      "platform": "WII",
      "date": "Jun 4, 2007",
      "user_score": 7.1,
      "link": "/game/wii/zelda-ii-the-adventure-of-link",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Planet Puzzle League",
      "platform": "DS",
      "date": "Jun 4, 2007",
      "user_score": 7.9,
      "link": "/game/ds/planet-puzzle-league",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "ToeJam & Earl in Panic on Funkotron",
      "platform": "WII",
      "date": "Jun 4, 2007",
      "user_score": 6.8,
      "link": "/game/wii/toejam-earl-in-panic-on-funkotron",
      "esrb_rating": "E",
      "developers": [
        "ToeJam & Earl Productions"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Mario Party 8",
      "platform": "WII",
      "date": "May 29, 2007",
      "user_score": 6.6,
      "link": "/game/wii/mario-party-8",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kid Chameleon",
      "platform": "WII",
      "date": "May 28, 2007",
      "user_score": NaN,
      "link": "/game/wii/kid-chameleon",
      "esrb_rating": "E",
      "developers": [
        "Sega"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Streets of Rage 2",
      "platform": "WII",
      "date": "May 21, 2007",
      "user_score": 8.1,
      "link": "/game/wii/streets-of-rage-2",
      "esrb_rating": "E",
      "developers": [
        "Sega"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Blazing Lazers",
      "platform": "WII",
      "date": "May 21, 2007",
      "user_score": 8.5,
      "link": "/game/wii/blazing-lazers",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Scrolling"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong Country 2: Diddy's Kong Quest",
      "platform": "WII",
      "date": "May 21, 2007",
      "user_score": 8.9,
      "link": "/game/wii/donkey-kong-country-2-diddys-kong-quest",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Ninja Spirit",
      "platform": "WII",
      "date": "May 14, 2007",
      "user_score": NaN,
      "link": "/game/wii/ninja-spirit",
      "esrb_rating": "E10+",
      "developers": [
        "Irem"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mighty Bomb Jack",
      "platform": "WII",
      "date": "May 7, 2007",
      "user_score": NaN,
      "link": "/game/wii/mighty-bomb-jack",
      "esrb_rating": "E",
      "developers": [
        "Tecmo"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Final Fight",
      "platform": "WII",
      "date": "May 7, 2007",
      "user_score": 8.5,
      "link": "/game/wii/final-fight",
      "esrb_rating": "E",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Ordyne",
      "platform": "TG16)",
      "date": "May 7, 2007",
      "user_score": NaN,
      "link": "/game/wii/ordyne-tg16",
      "esrb_rating": "E",
      "developers": [
        "Namco"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Scrolling"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Shockman",
      "platform": "WII",
      "date": "Apr 30, 2007",
      "user_score": NaN,
      "link": "/game/wii/shockman",
      "esrb_rating": "E",
      "developers": [
        "Winds"
      ],
      "genres": [
        "Action",
        "General",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Pokemon Diamond Version",
      "platform": "DS",
      "date": "Apr 22, 2007",
      "user_score": 8.2,
      "link": "/game/ds/pokemon-diamond-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Pokemon Pearl Version",
      "platform": "DS",
      "date": "Apr 22, 2007",
      "user_score": 8.2,
      "link": "/game/ds/pokemon-pearl-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Punch-Out!! Featuring Mr. Dream",
      "platform": "WII",
      "date": "Apr 16, 2007",
      "user_score": 8.6,
      "link": "/game/wii/punch-out!!-featuring-mr-dream",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Boxing"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Alex Kidd in the Enchanted Castle",
      "platform": "WII",
      "date": "Apr 11, 2007",
      "user_score": NaN,
      "link": "/game/wii/alex-kidd-in-the-enchanted-castle",
      "esrb_rating": "E",
      "developers": [
        "Sega"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Super Paper Mario",
      "platform": "WII",
      "date": "Apr 9, 2007",
      "user_score": 8.0,
      "link": "/game/wii/super-paper-mario",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Action",
        "Role-Playing",
        "Platformer",
        "Platformer",
        "Action RPG",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Star Fox 64",
      "platform": "WII",
      "date": "Apr 2, 2007",
      "user_score": 7.8,
      "link": "/game/wii/star-fox-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Rail"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Teenage Mutant Ninja Turtles",
      "platform": "WII",
      "date": "Apr 2, 2007",
      "user_score": NaN,
      "link": "/game/wii/teenage-mutant-ninja-turtles",
      "esrb_rating": "E10+",
      "developers": [
        "Magic Pockets"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Romance of the Three Kingdoms IV: Wall of Fire",
      "platform": "WII",
      "date": "Mar 26, 2007",
      "user_score": NaN,
      "link": "/game/wii/romance-of-the-three-kingdoms-iv-wall-of-fire",
      "esrb_rating": "E",
      "developers": [
        "Koei"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Historic"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Custom Robo Arena",
      "platform": "DS",
      "date": "Mar 19, 2007",
      "user_score": 8.3,
      "link": "/game/ds/custom-robo-arena",
      "esrb_rating": "E10+",
      "developers": [
        "Noise Inc."
      ],
      "genres": [
        "Action",
        "Fighting",
        "Fighting",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Excitebike",
      "platform": "WII",
      "date": "Mar 19, 2007",
      "user_score": 7.3,
      "link": "/game/wii/excitebike",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Driving",
        "General",
        "Racing",
        "Motorcycle",
        "Motocross"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "Wario: Master of Disguise",
      "platform": "DS",
      "date": "Mar 5, 2007",
      "user_score": 7.3,
      "link": "/game/ds/wario-master-of-disguise",
      "esrb_rating": "E10+",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Action",
        "General",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Ghouls 'n Ghosts",
      "platform": "WII",
      "date": "Mar 5, 2007",
      "user_score": 8.0,
      "link": "/game/wii/super-ghouls-n-ghosts",
      "esrb_rating": "E",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda: Ocarina of Time",
      "platform": "WII",
      "date": "Feb 26, 2007",
      "user_score": 8.5,
      "link": "/game/wii/the-legend-of-zelda-ocarina-of-time",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Chew-Man-Fu",
      "platform": "WII",
      "date": "Feb 26, 2007",
      "user_score": NaN,
      "link": "/game/wii/chew-man-fu",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong Country",
      "platform": "WII",
      "date": "Feb 19, 2007",
      "user_score": 8.5,
      "link": "/game/wii/donkey-kong-country",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Everybody Votes",
      "platform": "WII",
      "date": "Feb 14, 2007",
      "user_score": NaN,
      "link": "/game/wii/everybody-votes",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "Wii Play",
      "platform": "WII",
      "date": "Feb 12, 2007",
      "user_score": 6.6,
      "link": "/game/wii/wii-play",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Ice Climber",
      "platform": "WII",
      "date": "Feb 12, 2007",
      "user_score": 6.3,
      "link": "/game/wii/ice-climber",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kid Icarus",
      "platform": "WII",
      "date": "Feb 12, 2007",
      "user_score": 7.9,
      "link": "/game/wii/kid-icarus",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Kirby's Adventure",
      "platform": "WII",
      "date": "Feb 12, 2007",
      "user_score": 8.5,
      "link": "/game/wii/kirbys-adventure",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 63.0,
      "title": "Diddy Kong Racing DS",
      "platform": "DS",
      "date": "Feb 5, 2007",
      "user_score": 7.0,
      "link": "/game/ds/diddy-kong-racing-ds",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Other",
        "Kart"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario World",
      "platform": "WII",
      "date": "Feb 5, 2007",
      "user_score": 8.9,
      "link": "/game/wii/super-mario-world",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Final Fantasy VI Advance",
      "platform": "GBA",
      "date": "Feb 5, 2007",
      "user_score": 8.7,
      "link": "/game/game-boy-advance/final-fantasy-vi-advance",
      "esrb_rating": "E10+",
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Kart 64",
      "platform": "WII",
      "date": "Jan 29, 2007",
      "user_score": 7.3,
      "link": "/game/wii/mario-kart-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Hotel Dusk: Room 215",
      "platform": "DS",
      "date": "Jan 22, 2007",
      "user_score": 8.6,
      "link": "/game/ds/hotel-dusk-room-215",
      "esrb_rating": "T",
      "developers": [
        "Cing"
      ],
      "genres": [
        "Adventure",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda: A Link to the Past",
      "platform": "WII",
      "date": "Jan 22, 2007",
      "user_score": 8.8,
      "link": "/game/wii/the-legend-of-zelda-a-link-to-the-past",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "WarioWare: Smooth Moves",
      "platform": "WII",
      "date": "Jan 15, 2007",
      "user_score": 7.6,
      "link": "/game/wii/warioware-smooth-moves",
      "esrb_rating": "E10+",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Urban Champion",
      "platform": "WII",
      "date": "Jan 1, 2007",
      "user_score": NaN,
      "link": "/game/wii/urban-champion",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Fighting",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Baseball",
      "platform": "WII",
      "date": "Jan 1, 2007",
      "user_score": NaN,
      "link": "/game/wii/baseball",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Baseball",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario Bros.",
      "platform": "WII",
      "date": "Dec 25, 2006",
      "user_score": 8.4,
      "link": "/game/wii/super-mario-bros",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Tennis",
      "platform": "WII",
      "date": "Dec 18, 2006",
      "user_score": NaN,
      "link": "/game/wii/tennis",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Tennis"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Gunstar Heroes",
      "platform": "WII",
      "date": "Dec 11, 2006",
      "user_score": 8.8,
      "link": "/game/wii/gunstar-heroes",
      "esrb_rating": "E10+",
      "developers": [
        "Treasure"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Scrolling"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Ice Hockey",
      "platform": "WII",
      "date": "Dec 11, 2006",
      "user_score": NaN,
      "link": "/game/wii/ice-hockey",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Ice Hockey",
        "Arcade"
      ]
    },
    {
      "meta_score": 96.0,
      "title": "The Legend of Zelda: Twilight Princess",
      "platform": "GC",
      "date": "Dec 11, 2006",
      "user_score": 9.0,
      "link": "/game/gamecube/the-legend-of-zelda-twilight-princess",
      "esrb_rating": "T",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Internet Channel",
      "platform": "WII",
      "date": "Dec 8, 2006",
      "user_score": NaN,
      "link": "/game/wii/internet-channel",
      "esrb_rating": null,
      "developers": [
        "Opera"
      ],
      "genres": [
        "Miscellaneous",
        "Web Browser",
        "Application"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Kirby: Squeak Squad",
      "platform": "DS",
      "date": "Dec 4, 2006",
      "user_score": 7.8,
      "link": "/game/ds/kirby-squeak-squad",
      "esrb_rating": "E",
      "developers": [
        "Flagship",
        " HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong Jr.",
      "platform": "WII",
      "date": "Dec 4, 2006",
      "user_score": NaN,
      "link": "/game/wii/donkey-kong-jr",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 95.0,
      "title": "The Legend of Zelda: Twilight Princess",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 9.0,
      "link": "/game/wii/the-legend-of-zelda-twilight-princess",
      "esrb_rating": "T",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy",
        "General",
        "Fantasy",
        "Open-World"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Excite Truck",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 8.3,
      "link": "/game/wii/excite-truck",
      "esrb_rating": "E",
      "developers": [
        "Monster Games Inc."
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Wii Sports",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 8.1,
      "link": "/game/wii/wii-sports",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "General",
        "General",
        "Individual",
        "Athletics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wii Channels",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 7.8,
      "link": "/game/wii/wii-channels",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Web Browser",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "F-Zero",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 8.8,
      "link": "/game/wii/f-zero",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Futuristic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Super Mario 64",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 8.0,
      "link": "/game/wii/super-mario-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "SimCity",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": NaN,
      "link": "/game/wii/simcity",
      "esrb_rating": "E",
      "developers": [
        "Maxis"
      ],
      "genres": [
        "Strategy",
        "City Building",
        "Modern"
      ]
    },
    {
      "meta_score": NaN,
      "title": "The Legend of Zelda",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 8.2,
      "link": "/game/wii/the-legend-of-zelda",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Donkey Kong",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 7.1,
      "link": "/game/wii/donkey-kong",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Bros.",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 6.6,
      "link": "/game/wii/mario-bros",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pinball",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": NaN,
      "link": "/game/wii/pinball",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Parlor",
        "Pinball"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Soccer",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": NaN,
      "link": "/game/wii/soccer",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Sim"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wario's Woods",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 7.6,
      "link": "/game/wii/warios-woods",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo Wii",
      "platform": "WII",
      "date": "Nov 19, 2006",
      "user_score": 8.1,
      "link": "/game/wii/nintendo-wii",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Hardware",
        "Console"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Yoshi's Island DS",
      "platform": "DS",
      "date": "Nov 13, 2006",
      "user_score": 8.1,
      "link": "/game/ds/yoshis-island-ds",
      "esrb_rating": "E",
      "developers": [
        "Artoon"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Elite Beat Agents",
      "platform": "DS",
      "date": "Nov 6, 2006",
      "user_score": 8.5,
      "link": "/game/ds/elite-beat-agents",
      "esrb_rating": "E10+",
      "developers": [
        "iNiS"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Final Fantasy V Advance",
      "platform": "GBA",
      "date": "Nov 6, 2006",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/final-fantasy-v-advance",
      "esrb_rating": "E",
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Children of Mana",
      "platform": "DS",
      "date": "Nov 1, 2006",
      "user_score": 6.4,
      "link": "/game/ds/children-of-mana",
      "esrb_rating": "E10+",
      "developers": [
        "Nex Entertainment"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG",
        "Action RPG"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Pokemon Ranger",
      "platform": "DS",
      "date": "Oct 30, 2006",
      "user_score": 7.2,
      "link": "/game/ds/pokemon-ranger",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG",
        "Action RPG"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Magical Starsign",
      "platform": "DS",
      "date": "Oct 23, 2006",
      "user_score": 7.8,
      "link": "/game/ds/magical-starsign",
      "esrb_rating": "E",
      "developers": [
        "Brownie Brown"
      ],
      "genres": [
        "Role-Playing",
        "General",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Nintendogs: Dalmatian & Friends",
      "platform": "DS",
      "date": "Oct 16, 2006",
      "user_score": 7.4,
      "link": "/game/ds/nintendogs-dalmatian-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Clubhouse Games",
      "platform": "DS",
      "date": "Oct 9, 2006",
      "user_score": 7.8,
      "link": "/game/ds/clubhouse-games",
      "esrb_rating": "E",
      "developers": [
        "Agenda"
      ],
      "genres": [
        "Miscellaneous",
        "Board Games",
        "Board Games",
        "Board / Card Game",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Mario vs. Donkey Kong 2: March of the Minis",
      "platform": "DS",
      "date": "Sep 25, 2006",
      "user_score": 7.8,
      "link": "/game/ds/mario-vs-donkey-kong-2-march-of-the-minis",
      "esrb_rating": "E",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Puzzle",
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Baten Kaitos Origins",
      "platform": "GC",
      "date": "Sep 25, 2006",
      "user_score": 8.3,
      "link": "/game/gamecube/baten-kaitos-origins",
      "esrb_rating": "T",
      "developers": [
        "Monolith Soft",
        " Namco Bandai Games"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Pokemon Mystery Dungeon: Blue Rescue Team",
      "platform": "DS",
      "date": "Sep 18, 2006",
      "user_score": 8.0,
      "link": "/game/ds/pokemon-mystery-dungeon-blue-rescue-team",
      "esrb_rating": "E",
      "developers": [
        "ChunSoft"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Roguelike"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Pokemon Mystery Dungeon: Red Rescue Team",
      "platform": "GBA",
      "date": "Sep 18, 2006",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/pokemon-mystery-dungeon-red-rescue-team",
      "esrb_rating": "E",
      "developers": [
        "ChunSoft"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Mario Hoops: 3 on 3",
      "platform": "DS",
      "date": "Sep 11, 2006",
      "user_score": 7.8,
      "link": "/game/ds/mario-hoops-3-on-3",
      "esrb_rating": "E",
      "developers": [
        "Square Enix"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Team",
        "Basketball",
        "Arcade",
        "Arcade"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Star Fox Command",
      "platform": "DS",
      "date": "Aug 28, 2006",
      "user_score": 6.8,
      "link": "/game/ds/star-fox-command",
      "esrb_rating": "E10+",
      "developers": [
        "Q-Games"
      ],
      "genres": [
        "Action",
        "Simulation",
        "Shooter",
        "Flight",
        "Shooter",
        "Third-Person",
        "Combat",
        "Sci-Fi",
        "Sci-Fi",
        "Arcade"
      ]
    },
    {
      "meta_score": 37.0,
      "title": "Tenchu: Dark Secret",
      "platform": "DS",
      "date": "Aug 21, 2006",
      "user_score": 5.6,
      "link": "/game/ds/tenchu-dark-secret",
      "esrb_rating": "T",
      "developers": [
        "From Software",
        " Polygon Magic"
      ],
      "genres": [
        "Action Adventure",
        "Historic",
        "General",
        "Historic"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Sudoku Gridmaster",
      "platform": "DS",
      "date": "Jun 26, 2006",
      "user_score": 6.0,
      "link": "/game/ds/sudoku-gridmaster",
      "esrb_rating": "E",
      "developers": [
        "AI"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Logic",
        "Logic"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Big Brain Academy",
      "platform": "DS",
      "date": "Jun 5, 2006",
      "user_score": 7.4,
      "link": "/game/ds/big-brain-academy",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Magnetica",
      "platform": "DS",
      "date": "Jun 5, 2006",
      "user_score": 7.7,
      "link": "/game/ds/magnetica",
      "esrb_rating": "E",
      "developers": [
        "Mitchell"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Matching",
        "General"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "New Super Mario Bros.",
      "platform": "DS",
      "date": "May 15, 2006",
      "user_score": 8.6,
      "link": "/game/ds/new-super-mario-bros",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Brain Age: Train Your Brain in Minutes a Day!",
      "platform": "DS",
      "date": "Apr 17, 2006",
      "user_score": 7.5,
      "link": "/game/ds/brain-age-train-your-brain-in-minutes-a-day!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Odama",
      "platform": "GC",
      "date": "Apr 10, 2006",
      "user_score": 7.6,
      "link": "/game/gamecube/odama",
      "esrb_rating": "E10+",
      "developers": [
        "Vivarium"
      ],
      "genres": [
        "Miscellaneous",
        "Parlor",
        "Pinball"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Metroid Prime: Hunters",
      "platform": "DS",
      "date": "Mar 20, 2006",
      "user_score": 7.7,
      "link": "/game/ds/metroid-prime-hunters",
      "esrb_rating": "T",
      "developers": [
        "Nintendo",
        " Nintendo Software Technology"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Shooter",
        "First-Person",
        "Sci-Fi",
        "Sci-Fi",
        "Arcade"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Tetris DS",
      "platform": "DS",
      "date": "Mar 20, 2006",
      "user_score": 7.9,
      "link": "/game/ds/tetris-ds",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Stacking",
        "Stacking"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Pokemon Trozei!",
      "platform": "DS",
      "date": "Mar 6, 2006",
      "user_score": 7.2,
      "link": "/game/ds/pokemon-trozei!",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Matching",
        "Matching"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Tales of Phantasia",
      "platform": "GBA",
      "date": "Mar 6, 2006",
      "user_score": 8.1,
      "link": "/game/game-boy-advance/tales-of-phantasia",
      "esrb_rating": "E10+",
      "developers": [
        "Namco"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Super Princess Peach",
      "platform": "DS",
      "date": "Feb 27, 2006",
      "user_score": 8.0,
      "link": "/game/ds/super-princess-peach",
      "esrb_rating": "E",
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 75.0,
      "title": "Chibi-Robo!",
      "platform": "GC",
      "date": "Feb 6, 2006",
      "user_score": 8.8,
      "link": "/game/gamecube/chibi-robo!",
      "esrb_rating": "E10+",
      "developers": [
        "Skip Ltd."
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Drill Dozer",
      "platform": "GBA",
      "date": "Feb 6, 2006",
      "user_score": 8.7,
      "link": "/game/game-boy-advance/drill-dozer",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "True Swing Golf",
      "platform": "DS",
      "date": "Jan 23, 2006",
      "user_score": 7.7,
      "link": "/game/ds/true-swing-golf",
      "esrb_rating": "E",
      "developers": [
        "T&E Soft"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Individual",
        "Golf",
        "Arcade",
        "Arcade",
        "Sim"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Electroplankton",
      "platform": "DS",
      "date": "Jan 9, 2006",
      "user_score": 7.0,
      "link": "/game/ds/electroplankton",
      "esrb_rating": "E",
      "developers": [
        "indieszero"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music Maker",
        "Music Maker",
        "Application",
        "Music"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Final Fantasy IV Advance",
      "platform": "GBA",
      "date": "Dec 12, 2005",
      "user_score": 8.4,
      "link": "/game/game-boy-advance/final-fantasy-iv-advance",
      "esrb_rating": "E10+",
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Animal Crossing: Wild World",
      "platform": "DS",
      "date": "Dec 5, 2005",
      "user_score": 8.5,
      "link": "/game/ds/animal-crossing-wild-world",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Super Mario Strikers",
      "platform": "GC",
      "date": "Dec 5, 2005",
      "user_score": 8.6,
      "link": "/game/gamecube/super-mario-strikers",
      "esrb_rating": "E",
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Soccer",
        "Arcade"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Mario Tennis: Power Tour",
      "platform": "GBA",
      "date": "Dec 5, 2005",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/mario-tennis-power-tour",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Tennis"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Mario & Luigi: Partners in Time",
      "platform": "DS",
      "date": "Nov 28, 2005",
      "user_score": 8.5,
      "link": "/game/ds/mario-luigi-partners-in-time",
      "esrb_rating": "E",
      "developers": [
        "Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG",
        "Console-style RPG",
        "Japanese-Style"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Dr. Mario / Puzzle League",
      "platform": "GBA",
      "date": "Nov 28, 2005",
      "user_score": 8.0,
      "link": "/game/game-boy-advance/dr-mario-puzzle-league",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Mario Kart DS",
      "platform": "DS",
      "date": "Nov 14, 2005",
      "user_score": 8.7,
      "link": "/game/ds/mario-kart-ds",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "Kart",
        "Kart",
        "Automobile"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Mario Party 7",
      "platform": "GC",
      "date": "Nov 7, 2005",
      "user_score": 7.7,
      "link": "/game/gamecube/mario-party-7",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Donkey Kong Country 3",
      "platform": "GBA",
      "date": "Nov 7, 2005",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/donkey-kong-country-3",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Metroid Prime Pinball",
      "platform": "DS",
      "date": "Oct 24, 2005",
      "user_score": 7.9,
      "link": "/game/ds/metroid-prime-pinball",
      "esrb_rating": "E",
      "developers": [
        "Fuse Games Limited"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Parlor",
        "Pinball",
        "Pinball"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendogs: Best Friends",
      "platform": "DS",
      "date": "Oct 24, 2005",
      "user_score": 7.3,
      "link": "/game/ds/nintendogs-best-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Dance Dance Revolution: Mario Mix",
      "platform": "GC",
      "date": "Oct 24, 2005",
      "user_score": 8.1,
      "link": "/game/gamecube/dance-dance-revolution-mario-mix",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Rhythm",
        "Dancing"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Fire Emblem: Path of Radiance",
      "platform": "GC",
      "date": "Oct 17, 2005",
      "user_score": 9.1,
      "link": "/game/gamecube/fire-emblem-path-of-radiance",
      "esrb_rating": "T",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy"
      ]
    },
    {
      "meta_score": 64.0,
      "title": "Pokemon XD: Gale of Darkness",
      "platform": "GC",
      "date": "Sep 28, 2005",
      "user_score": 8.2,
      "link": "/game/gamecube/pokemon-xd-gale-of-darkness",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Trace Memory",
      "platform": "DS",
      "date": "Sep 27, 2005",
      "user_score": 8.1,
      "link": "/game/ds/trace-memory",
      "esrb_rating": "T",
      "developers": [
        "Cing"
      ],
      "genres": [
        "Adventure",
        "General",
        "General",
        "Point-and-Click"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Battalion Wars",
      "platform": "GC",
      "date": "Sep 19, 2005",
      "user_score": 8.4,
      "link": "/game/gamecube/battalion-wars",
      "esrb_rating": "T",
      "developers": [
        "Kuju Entertainment"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Modern"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "DK: King of Swing",
      "platform": "GBA",
      "date": "Sep 19, 2005",
      "user_score": 5.7,
      "link": "/game/game-boy-advance/dk-king-of-swing",
      "esrb_rating": "E",
      "developers": [
        "Paon Corporation"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Mario Superstar Baseball",
      "platform": "GC",
      "date": "Aug 29, 2005",
      "user_score": 8.4,
      "link": "/game/gamecube/mario-superstar-baseball",
      "esrb_rating": "E",
      "developers": [
        "Namco"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Baseball",
        "Arcade"
      ]
    },
    {
      "meta_score": 56.0,
      "title": "Dynasty Warriors Advance",
      "platform": "GBA",
      "date": "Aug 29, 2005",
      "user_score": 7.6,
      "link": "/game/game-boy-advance/dynasty-warriors-advance",
      "esrb_rating": "E",
      "developers": [
        "Koei"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Advance Wars: Dual Strike",
      "platform": "DS",
      "date": "Aug 22, 2005",
      "user_score": 8.8,
      "link": "/game/ds/advance-wars-dual-strike",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Modern",
        "Modern",
        "Tactics"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Nintendogs: Chihuahua & Friends",
      "platform": "DS",
      "date": "Aug 22, 2005",
      "user_score": 7.8,
      "link": "/game/ds/nintendogs-chihuahua-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Nintendogs: Dachshund & Friends",
      "platform": "DS",
      "date": "Aug 22, 2005",
      "user_score": 7.9,
      "link": "/game/ds/nintendogs-dachshund-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Nintendogs: Lab & Friends",
      "platform": "DS",
      "date": "Aug 22, 2005",
      "user_score": 7.6,
      "link": "/game/ds/nintendogs-lab-friends",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Miscellaneous",
        "Virtual Life",
        "Virtual Life",
        "Virtual",
        "Pet"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Geist",
      "platform": "GC",
      "date": "Aug 15, 2005",
      "user_score": 8.0,
      "link": "/game/gamecube/geist",
      "esrb_rating": "M",
      "developers": [
        "n-Space"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Meteos",
      "platform": "DS",
      "date": "Jun 28, 2005",
      "user_score": 7.4,
      "link": "/game/ds/meteos",
      "esrb_rating": "E",
      "developers": [
        "Q Entertainment"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Puzzle",
        "Matching",
        "Matching"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Kirby: Canvas Curse",
      "platform": "DS",
      "date": "Jun 13, 2005",
      "user_score": 7.8,
      "link": "/game/ds/kirby-canvas-curse",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 60.0,
      "title": "Yoshi Topsy-Turvy",
      "platform": "GBA",
      "date": "Jun 13, 2005",
      "user_score": 7.1,
      "link": "/game/game-boy-advance/yoshi-topsy-turvy",
      "esrb_rating": "E",
      "developers": [
        "Artoon"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Fire Emblem: The Sacred Stones",
      "platform": "GBA",
      "date": "May 23, 2005",
      "user_score": 9.0,
      "link": "/game/game-boy-advance/fire-emblem-the-sacred-stones",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "WarioWare: Twisted!",
      "platform": "GBA",
      "date": "May 23, 2005",
      "user_score": 8.7,
      "link": "/game/game-boy-advance/warioware-twisted!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Donkey Konga 2",
      "platform": "GC",
      "date": "May 9, 2005",
      "user_score": 7.0,
      "link": "/game/gamecube/donkey-konga-2",
      "esrb_rating": "T",
      "developers": [
        "Namco"
      ],
      "genres": [
        "Miscellaneous",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Pokemon Emerald Version",
      "platform": "GBA",
      "date": "Apr 30, 2005",
      "user_score": 8.9,
      "link": "/game/game-boy-advance/pokemon-emerald-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Polarium",
      "platform": "DS",
      "date": "Apr 18, 2005",
      "user_score": 8.2,
      "link": "/game/ds/polarium",
      "esrb_rating": "E",
      "developers": [
        "Mitchell"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Stacking",
        "General"
      ]
    },
    {
      "meta_score": 54.0,
      "title": "Mario Party Advance",
      "platform": "GBA",
      "date": "Mar 28, 2005",
      "user_score": 4.8,
      "link": "/game/game-boy-advance/mario-party-advance",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Yoshi Touch & Go",
      "platform": "DS",
      "date": "Mar 14, 2005",
      "user_score": 6.8,
      "link": "/game/ds/yoshi-touch-go",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "2D",
        "2D"
      ]
    },
    {
      "meta_score": 46.0,
      "title": "Pokemon Dash",
      "platform": "DS",
      "date": "Mar 14, 2005",
      "user_score": 5.3,
      "link": "/game/ds/pokemon-dash",
      "esrb_rating": "E",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade",
        "On-foot",
        "Other",
        "On-foot"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Donkey Kong Jungle Beat",
      "platform": "GC",
      "date": "Mar 14, 2005",
      "user_score": 8.3,
      "link": "/game/gamecube/donkey-kong-jungle-beat",
      "esrb_rating": "E10+",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "WarioWare: Touched!",
      "platform": "DS",
      "date": "Feb 14, 2005",
      "user_score": 8.2,
      "link": "/game/ds/warioware-touched!",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "General",
        "Puzzle",
        "Party / Minigame",
        "General"
      ]
    },
    {
      "meta_score": 67.0,
      "title": "Star Fox: Assault",
      "platform": "GC",
      "date": "Feb 14, 2005",
      "user_score": 8.2,
      "link": "/game/gamecube/star-fox-assault",
      "esrb_rating": "T",
      "developers": [
        "Namco"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "The Legend of Zelda: The Minish Cap",
      "platform": "GBA",
      "date": "Jan 10, 2005",
      "user_score": 8.9,
      "link": "/game/game-boy-advance/the-legend-of-zelda-the-minish-cap",
      "esrb_rating": "E",
      "developers": [
        "Flagship"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Mario Party 6",
      "platform": "GC",
      "date": "Dec 6, 2004",
      "user_score": 7.9,
      "link": "/game/gamecube/mario-party-6",
      "esrb_rating": "E",
      "developers": [
        "Hudson Soft"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Final Fantasy I & II: Dawn of Souls",
      "platform": "GBA",
      "date": "Nov 29, 2004",
      "user_score": 8.0,
      "link": "/game/game-boy-advance/final-fantasy-i-ii-dawn-of-souls",
      "esrb_rating": "E",
      "developers": [
        "Tose Software"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": NaN,
      "title": "PictoChat",
      "platform": "DS",
      "date": "Nov 21, 2004",
      "user_score": 7.5,
      "link": "/game/ds/pictochat",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "Super Mario 64 DS",
      "platform": "DS",
      "date": "Nov 20, 2004",
      "user_score": 8.3,
      "link": "/game/ds/super-mario-64-ds",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "Platformer",
        "3D",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo DS",
      "platform": "DS",
      "date": "Nov 20, 2004",
      "user_score": 8.2,
      "link": "/game/ds/nintendo-ds",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Hardware",
        "Console"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Metroid Prime: Hunters - First Hunt",
      "platform": "DS",
      "date": "Nov 20, 2004",
      "user_score": NaN,
      "link": "/game/ds/metroid-prime-hunters---first-hunt",
      "esrb_rating": "RP",
      "developers": [
        "Nintendo Software Technology"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Metroid Prime 2: Echoes",
      "platform": "GC",
      "date": "Nov 15, 2004",
      "user_score": 8.9,
      "link": "/game/gamecube/metroid-prime-2-echoes",
      "esrb_rating": "T",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Donkey Kong Country 2",
      "platform": "GBA",
      "date": "Nov 15, 2004",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/donkey-kong-country-2",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Mario Power Tennis",
      "platform": "GC",
      "date": "Nov 8, 2004",
      "user_score": 8.5,
      "link": "/game/gamecube/mario-power-tennis",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Tennis"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Classic NES Series: Dr. Mario",
      "platform": "GBA",
      "date": "Oct 25, 2004",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/classic-nes-series-dr-mario",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Classic NES Series: Castlevania",
      "platform": "GBA",
      "date": "Oct 25, 2004",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/classic-nes-series-castlevania",
      "esrb_rating": "E",
      "developers": [
        "Konami"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Classic NES Series: Zelda II: The Adventure of Link",
      "platform": "GBA",
      "date": "Oct 25, 2004",
      "user_score": 7.0,
      "link": "/game/game-boy-advance/classic-nes-series-zelda-ii-the-adventure-of-link",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 58.0,
      "title": "Classic NES Series: Metroid",
      "platform": "GBA",
      "date": "Oct 25, 2004",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/classic-nes-series-metroid",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Kirby & the Amazing Mirror",
      "platform": "GBA",
      "date": "Oct 18, 2004",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/kirby-the-amazing-mirror",
      "esrb_rating": "E",
      "developers": [
        "Flagship"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Paper Mario: The Thousand-Year Door",
      "platform": "GC",
      "date": "Oct 11, 2004",
      "user_score": 9.1,
      "link": "/game/gamecube/paper-mario-the-thousand-year-door",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 62.0,
      "title": "Mario Pinball Land",
      "platform": "GBA",
      "date": "Oct 4, 2004",
      "user_score": 4.2,
      "link": "/game/game-boy-advance/mario-pinball-land",
      "esrb_rating": "E",
      "developers": [
        "Fuse Games Limited"
      ],
      "genres": [
        "Miscellaneous",
        "Parlor",
        "Pinball"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "Donkey Konga",
      "platform": "GC",
      "date": "Sep 27, 2004",
      "user_score": 7.9,
      "link": "/game/gamecube/donkey-konga",
      "esrb_rating": "E",
      "developers": [
        "Namco"
      ],
      "genres": [
        "Miscellaneous",
        "Rhythm",
        "Music"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "F-Zero GP Legend",
      "platform": "GBA",
      "date": "Sep 20, 2004",
      "user_score": 8.3,
      "link": "/game/game-boy-advance/f-zero-gp-legend",
      "esrb_rating": "E",
      "developers": [
        "Suzak"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Futuristic"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Pokemon FireRed Version",
      "platform": "GBA",
      "date": "Sep 7, 2004",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/pokemon-firered-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Pokemon LeafGreen Version",
      "platform": "GBA",
      "date": "Sep 7, 2004",
      "user_score": 8.5,
      "link": "/game/game-boy-advance/pokemon-leafgreen-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Pikmin 2",
      "platform": "GC",
      "date": "Aug 30, 2004",
      "user_score": 9.1,
      "link": "/game/gamecube/pikmin-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Fantasy"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Hamtaro: Ham-Ham Games",
      "platform": "GBA",
      "date": "Jul 27, 2004",
      "user_score": 8.3,
      "link": "/game/game-boy-advance/hamtaro-ham-ham-games",
      "esrb_rating": "E",
      "developers": [
        "Alphadream Corporation"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Pokemon Box: Ruby and Sapphire",
      "platform": "GC",
      "date": "Jul 12, 2004",
      "user_score": 5.0,
      "link": "/game/gamecube/pokemon-box-ruby-and-sapphire",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Mario Golf: Advance Tour",
      "platform": "GBA",
      "date": "Jun 22, 2004",
      "user_score": 8.5,
      "link": "/game/game-boy-advance/mario-golf-advance-tour",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Sim"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "The Legend of Zelda: Four Swords Adventures",
      "platform": "GC",
      "date": "Jun 7, 2004",
      "user_score": 7.6,
      "link": "/game/gamecube/the-legend-of-zelda-four-swords-adventures",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Classic NES Series: Ice Climber",
      "platform": "GBA",
      "date": "Jun 2, 2004",
      "user_score": 7.8,
      "link": "/game/game-boy-advance/classic-nes-series-ice-climber",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 66.0,
      "title": "Classic NES Series: Excitebike",
      "platform": "GBA",
      "date": "Jun 2, 2004",
      "user_score": 7.8,
      "link": "/game/game-boy-advance/classic-nes-series-excitebike",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Classic NES Series: Super Mario Bros.",
      "platform": "GBA",
      "date": "Jun 2, 2004",
      "user_score": 8.4,
      "link": "/game/game-boy-advance/classic-nes-series-super-mario-bros",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Classic NES Series: The Legend of Zelda",
      "platform": "GBA",
      "date": "Jun 2, 2004",
      "user_score": 8.4,
      "link": "/game/game-boy-advance/classic-nes-series-the-legend-of-zelda",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 55.0,
      "title": "Classic NES Series: Donkey Kong",
      "platform": "GBA",
      "date": "Jun 2, 2004",
      "user_score": 6.1,
      "link": "/game/game-boy-advance/classic-nes-series-donkey-kong",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 53.0,
      "title": "Classic NES Series: Pac-Man",
      "platform": "GBA",
      "date": "Jun 2, 2004",
      "user_score": 7.8,
      "link": "/game/game-boy-advance/classic-nes-series-pac-man",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Mario vs. Donkey Kong",
      "platform": "GBA",
      "date": "May 24, 2004",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/mario-vs-donkey-kong",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Custom Robo",
      "platform": "GC",
      "date": "May 10, 2004",
      "user_score": 8.1,
      "link": "/game/gamecube/custom-robo",
      "esrb_rating": "T",
      "developers": [
        "Noise Inc."
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 76.0,
      "title": "WarioWare, Inc.: Mega Party Game$!",
      "platform": "GC",
      "date": "Apr 6, 2004",
      "user_score": 8.0,
      "link": "/game/gamecube/warioware-inc-mega-party-game!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "Pokemon Colosseum",
      "platform": "GC",
      "date": "Mar 22, 2004",
      "user_score": 8.0,
      "link": "/game/gamecube/pokemon-colosseum",
      "esrb_rating": "E",
      "developers": [
        "Genius Sonority Inc."
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Final Fantasy Crystal Chronicles",
      "platform": "GC",
      "date": "Feb 9, 2004",
      "user_score": 8.9,
      "link": "/game/gamecube/final-fantasy-crystal-chronicles",
      "esrb_rating": "T",
      "developers": [
        "Square Enix"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Metroid: Zero Mission",
      "platform": "GBA",
      "date": "Feb 9, 2004",
      "user_score": 9.1,
      "link": "/game/game-boy-advance/metroid-zero-mission",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Pac-Man vs.",
      "platform": "GC",
      "date": "Dec 2, 2003",
      "user_score": 8.3,
      "link": "/game/gamecube/pac-man-vs",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 73.0,
      "title": "1080: Avalanche",
      "platform": "GC",
      "date": "Dec 1, 2003",
      "user_score": 7.8,
      "link": "/game/gamecube/1080-avalanche",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "Alternative",
        "Snowboarding"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Sword of Mana",
      "platform": "GBA",
      "date": "Dec 1, 2003",
      "user_score": 8.5,
      "link": "/game/game-boy-advance/sword-of-mana",
      "esrb_rating": "E",
      "developers": [
        "Brownie Brown"
      ],
      "genres": [
        "Role-Playing",
        "Action RPG"
      ]
    },
    {
      "meta_score": 55.0,
      "title": "Pokemon Channel",
      "platform": "GC",
      "date": "Dec 1, 2003",
      "user_score": 6.4,
      "link": "/game/gamecube/pokemon-channel",
      "esrb_rating": "E",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Adventure",
        "First-Person",
        "Fantasy"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Mario Kart: Double Dash!!",
      "platform": "GC",
      "date": "Nov 17, 2003",
      "user_score": 8.6,
      "link": "/game/gamecube/mario-kart-double-dash!!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Mario & Luigi: Superstar Saga",
      "platform": "GBA",
      "date": "Nov 17, 2003",
      "user_score": 8.8,
      "link": "/game/game-boy-advance/mario-luigi-superstar-saga",
      "esrb_rating": "E",
      "developers": [
        "Alphadream Corporation"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 95.0,
      "title": "The Legend of Zelda Collector's Edition",
      "platform": "GC",
      "date": "Nov 17, 2003",
      "user_score": 8.9,
      "link": "/game/gamecube/the-legend-of-zelda-collectors-edition",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 69.0,
      "title": "Mario Party 5",
      "platform": "GC",
      "date": "Nov 10, 2003",
      "user_score": 7.7,
      "link": "/game/gamecube/mario-party-5",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Fire Emblem",
      "platform": "GBA",
      "date": "Nov 3, 2003",
      "user_score": 9.1,
      "link": "/game/game-boy-advance/fire-emblem",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Top Gear Rally",
      "platform": "GBA",
      "date": "Oct 28, 2003",
      "user_score": 7.5,
      "link": "/game/game-boy-advance/top-gear-rally",
      "esrb_rating": "E",
      "developers": [
        "Tantalus"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Rally / Offroad"
      ]
    },
    {
      "meta_score": 94.0,
      "title": "Super Mario Advance 4: Super Mario Bros. 3",
      "platform": "GBA",
      "date": "Oct 21, 2003",
      "user_score": 9.1,
      "link": "/game/game-boy-advance/super-mario-advance-4-super-mario-bros-3",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 61.0,
      "title": "Kirby Air Ride",
      "platform": "GC",
      "date": "Oct 13, 2003",
      "user_score": 8.2,
      "link": "/game/gamecube/kirby-air-ride",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Final Fantasy Tactics Advance",
      "platform": "GBA",
      "date": "Sep 8, 2003",
      "user_score": 9.0,
      "link": "/game/game-boy-advance/final-fantasy-tactics-advance",
      "esrb_rating": "E",
      "developers": [
        "Square Enix"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Fantasy"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "F-Zero GX",
      "platform": "GC",
      "date": "Aug 26, 2003",
      "user_score": 8.6,
      "link": "/game/gamecube/f-zero-gx",
      "esrb_rating": "T",
      "developers": [
        "Amusement Vision"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Futuristic"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Pokemon Pinball: Ruby & Sapphire",
      "platform": "GBA",
      "date": "Aug 26, 2003",
      "user_score": 7.7,
      "link": "/game/game-boy-advance/pokemon-pinball-ruby-sapphire",
      "esrb_rating": "E",
      "developers": [
        "Jupiter Corporation"
      ],
      "genres": [
        "Miscellaneous",
        "Parlor",
        "Pinball"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Mario Golf: Toadstool Tour",
      "platform": "GC",
      "date": "Jul 29, 2003",
      "user_score": 8.1,
      "link": "/game/gamecube/mario-golf-toadstool-tour",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Arcade"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Wario World",
      "platform": "GC",
      "date": "Jun 24, 2003",
      "user_score": 7.6,
      "link": "/game/gamecube/wario-world",
      "esrb_rating": "E",
      "developers": [
        "Treasure"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Advance Wars 2: Black Hole Rising",
      "platform": "GBA",
      "date": "Jun 24, 2003",
      "user_score": 8.8,
      "link": "/game/game-boy-advance/advance-wars-2-black-hole-rising",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Donkey Kong Country",
      "platform": "GBA",
      "date": "Jun 9, 2003",
      "user_score": 8.7,
      "link": "/game/game-boy-advance/donkey-kong-country",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "WarioWare, Inc.: Mega Microgame$!",
      "platform": "GBA",
      "date": "May 21, 2003",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/warioware-inc-mega-microgame!",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "Golden Sun: The Lost Age",
      "platform": "GBA",
      "date": "Apr 14, 2003",
      "user_score": 9.0,
      "link": "/game/game-boy-advance/golden-sun-the-lost-age",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 72.0,
      "title": "Hamtaro: Ham Ham Heartbreak",
      "platform": "GBA",
      "date": "Apr 8, 2003",
      "user_score": 8.4,
      "link": "/game/game-boy-advance/hamtaro-ham-ham-heartbreak",
      "esrb_rating": "E",
      "developers": [
        "Pax Softonica"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 96.0,
      "title": "The Legend of Zelda: The Wind Waker",
      "platform": "GC",
      "date": "Mar 24, 2003",
      "user_score": 9.0,
      "link": "/game/gamecube/the-legend-of-zelda-the-wind-waker",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Pokemon Ruby Version",
      "platform": "GBA",
      "date": "Mar 18, 2003",
      "user_score": 8.5,
      "link": "/game/game-boy-advance/pokemon-ruby-version",
      "esrb_rating": "E",
      "developers": [
        "Game Freak"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "The Legend of Zelda: Ocarina of Time / Master Quest",
      "platform": "GC",
      "date": "Feb 28, 2003",
      "user_score": 8.9,
      "link": "/game/gamecube/the-legend-of-zelda-ocarina-of-time-master-quest",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 95.0,
      "title": "The Legend of Zelda: A Link to the Past",
      "platform": "GBA",
      "date": "Dec 3, 2002",
      "user_score": 9.0,
      "link": "/game/game-boy-advance/the-legend-of-zelda-a-link-to-the-past",
      "esrb_rating": "E",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Kirby: Nightmare in Dream Land",
      "platform": "GBA",
      "date": "Dec 2, 2002",
      "user_score": 8.6,
      "link": "/game/game-boy-advance/kirby-nightmare-in-dream-land",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 97.0,
      "title": "Metroid Prime",
      "platform": "GC",
      "date": "Nov 17, 2002",
      "user_score": 9.0,
      "link": "/game/gamecube/metroid-prime",
      "esrb_rating": "T",
      "developers": [
        "Retro Studios"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Metroid Fusion",
      "platform": "GBA",
      "date": "Nov 17, 2002",
      "user_score": 9.0,
      "link": "/game/game-boy-advance/metroid-fusion",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Cubivore: Survival of the Fittest",
      "platform": "GC",
      "date": "Nov 5, 2002",
      "user_score": 8.1,
      "link": "/game/gamecube/cubivore-survival-of-the-fittest",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "General"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Game & Watch Gallery 4",
      "platform": "GBA",
      "date": "Oct 28, 2002",
      "user_score": 8.1,
      "link": "/game/game-boy-advance/game-watch-gallery-4",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Compilation"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Mario Party 4",
      "platform": "GC",
      "date": "Oct 21, 2002",
      "user_score": 7.7,
      "link": "/game/gamecube/mario-party-4",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Yoshi's Island: Super Mario Advance 3",
      "platform": "GBA",
      "date": "Sep 24, 2002",
      "user_score": 9.1,
      "link": "/game/game-boy-advance/yoshis-island-super-mario-advance-3",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Star Fox Adventures",
      "platform": "GC",
      "date": "Sep 22, 2002",
      "user_score": 8.0,
      "link": "/game/gamecube/star-fox-adventures",
      "esrb_rating": "T",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action Adventure",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 87.0,
      "title": "Animal Crossing",
      "platform": "GC",
      "date": "Sep 15, 2002",
      "user_score": 8.8,
      "link": "/game/gamecube/animal-crossing",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Virtual Life"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Super Mario Sunshine",
      "platform": "GC",
      "date": "Aug 25, 2002",
      "user_score": 8.3,
      "link": "/game/gamecube/super-mario-sunshine",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 50.0,
      "title": "Disney's Magical Mirror Starring Mickey Mouse",
      "platform": "GC",
      "date": "Aug 13, 2002",
      "user_score": 7.6,
      "link": "/game/gamecube/disneys-magical-mirror-starring-mickey-mouse",
      "esrb_rating": "E",
      "developers": [
        "Capcom"
      ],
      "genres": [
        "Adventure",
        "Third-Person",
        "Fantasy"
      ]
    },
    {
      "meta_score": 70.0,
      "title": "Disney's Magical Quest",
      "platform": "GBA",
      "date": "Aug 13, 2002",
      "user_score": NaN,
      "link": "/game/game-boy-advance/disneys-magical-quest",
      "esrb_rating": "E",
      "developers": [
        "Sun-Tec"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Eternal Darkness: Sanity's Requiem",
      "platform": "GC",
      "date": "Jun 23, 2002",
      "user_score": 8.8,
      "link": "/game/gamecube/eternal-darkness-sanitys-requiem",
      "esrb_rating": "M",
      "developers": [
        "Silicon Knights"
      ],
      "genres": [
        "Action Adventure",
        "Horror"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Super Mario World: Super Mario Advance 2",
      "platform": "GBA",
      "date": "Feb 9, 2002",
      "user_score": 9.1,
      "link": "/game/game-boy-advance/super-mario-world-super-mario-advance-2",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "NBA Courtside 2002",
      "platform": "GC",
      "date": "Jan 13, 2002",
      "user_score": 7.4,
      "link": "/game/gamecube/nba-courtside-2002",
      "esrb_rating": "E",
      "developers": [
        "Left Field Productions"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Basketball",
        "Sim"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Super Smash Bros. Melee",
      "platform": "GC",
      "date": "Dec 2, 2001",
      "user_score": 9.0,
      "link": "/game/gamecube/super-smash-bros-melee",
      "esrb_rating": "T",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 89.0,
      "title": "Pikmin",
      "platform": "GC",
      "date": "Dec 2, 2001",
      "user_score": 8.7,
      "link": "/game/gamecube/pikmin",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Fantasy"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Wario Land 4",
      "platform": "GBA",
      "date": "Nov 18, 2001",
      "user_score": 8.8,
      "link": "/game/game-boy-advance/wario-land-4",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Wave Race: Blue Storm",
      "platform": "GC",
      "date": "Nov 17, 2001",
      "user_score": 8.0,
      "link": "/game/gamecube/wave-race-blue-storm",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Snow / Water"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Luigi's Mansion",
      "platform": "GC",
      "date": "Nov 17, 2001",
      "user_score": 8.6,
      "link": "/game/gamecube/luigis-mansion",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Golden Sun",
      "platform": "GBA",
      "date": "Nov 11, 2001",
      "user_score": 9.0,
      "link": "/game/game-boy-advance/golden-sun",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Advance Wars",
      "platform": "GBA",
      "date": "Sep 9, 2001",
      "user_score": 8.8,
      "link": "/game/game-boy-advance/advance-wars",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Strategy",
        "Turn-Based",
        "Modern"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "Mario Kart Super Circuit",
      "platform": "GBA",
      "date": "Aug 26, 2001",
      "user_score": 8.0,
      "link": "/game/game-boy-advance/mario-kart-super-circuit",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 86.0,
      "title": "F-Zero: Maximum Velocity",
      "platform": "GBA",
      "date": "Jun 12, 2001",
      "user_score": 7.8,
      "link": "/game/game-boy-advance/f-zero-maximum-velocity",
      "esrb_rating": "E",
      "developers": [
        "Nd Cube"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Futuristic"
      ]
    },
    {
      "meta_score": 84.0,
      "title": "Super Mario Advance",
      "platform": "GBA",
      "date": "Jun 10, 2001",
      "user_score": 8.2,
      "link": "/game/game-boy-advance/super-mario-advance",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 74.0,
      "title": "Mario Party 3",
      "platform": "N64",
      "date": "May 6, 2001",
      "user_score": 8.2,
      "link": "/game/nintendo-64/mario-party-3",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Dr. Mario 64",
      "platform": "N64",
      "date": "Apr 8, 2001",
      "user_score": 7.3,
      "link": "/game/nintendo-64/dr-mario-64",
      "esrb_rating": "E",
      "developers": [
        "Newcom"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 78.0,
      "title": "Pokemon Stadium 2",
      "platform": "N64",
      "date": "Mar 28, 2001",
      "user_score": 8.4,
      "link": "/game/nintendo-64/pokemon-stadium-2",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Strategy",
        "General"
      ]
    },
    {
      "meta_score": 93.0,
      "title": "Paper Mario",
      "platform": "N64",
      "date": "Feb 5, 2001",
      "user_score": 9.0,
      "link": "/game/nintendo-64/paper-mario",
      "esrb_rating": "E",
      "developers": [
        "Intelligent Systems"
      ],
      "genres": [
        "Role-Playing",
        "Console-style RPG"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Banjo-Tooie",
      "platform": "N64",
      "date": "Nov 19, 2000",
      "user_score": 8.8,
      "link": "/game/nintendo-64/banjo-tooie",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 71.0,
      "title": "Mickey's Speedway USA",
      "platform": "N64",
      "date": "Nov 13, 2000",
      "user_score": 7.7,
      "link": "/game/nintendo-64/mickeys-speedway-usa",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 57.0,
      "title": "Hey You, Pikachu!",
      "platform": "N64",
      "date": "Nov 5, 2000",
      "user_score": 6.3,
      "link": "/game/nintendo-64/hey-you-pikachu!",
      "esrb_rating": "E",
      "developers": [
        "Ambrella"
      ],
      "genres": [
        "Adventure",
        "General"
      ]
    },
    {
      "meta_score": 95.0,
      "title": "The Legend of Zelda: Majora's Mask",
      "platform": "N64",
      "date": "Oct 25, 2000",
      "user_score": 9.1,
      "link": "/game/nintendo-64/the-legend-of-zelda-majoras-mask",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 81.0,
      "title": "Pokemon Puzzle League",
      "platform": "N64",
      "date": "Sep 1, 2000",
      "user_score": 8.4,
      "link": "/game/nintendo-64/pokemon-puzzle-league",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Matching"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Mario Tennis",
      "platform": "N64",
      "date": "Aug 28, 2000",
      "user_score": 8.7,
      "link": "/game/nintendo-64/mario-tennis",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Tennis"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Kirby 64: The Crystal Shards",
      "platform": "N64",
      "date": "Jun 26, 2000",
      "user_score": 8.1,
      "link": "/game/nintendo-64/kirby-64-the-crystal-shards",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Starcraft 64",
      "platform": "N64",
      "date": "Jun 13, 2000",
      "user_score": 7.6,
      "link": "/game/nintendo-64/starcraft-64",
      "esrb_rating": "T",
      "developers": [
        "Mass Media"
      ],
      "genres": [
        "Strategy",
        "Real-Time",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 97.0,
      "title": "Perfect Dark",
      "platform": "N64",
      "date": "May 22, 2000",
      "user_score": 8.8,
      "link": "/game/nintendo-64/perfect-dark",
      "esrb_rating": "M",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Sci-Fi"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Excitebike 64",
      "platform": "N64",
      "date": "Apr 30, 2000",
      "user_score": 8.2,
      "link": "/game/nintendo-64/excitebike-64",
      "esrb_rating": "E",
      "developers": [
        "Left Field Productions"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Motorcycle",
        "Motocross"
      ]
    },
    {
      "meta_score": 82.0,
      "title": "Ridge Racer 64",
      "platform": "N64",
      "date": "Feb 14, 2000",
      "user_score": 8.1,
      "link": "/game/nintendo-64/ridge-racer-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Arcade"
      ]
    },
    {
      "meta_score": 91.0,
      "title": "Mario Golf",
      "platform": "N64",
      "date": "Jun 30, 1999",
      "user_score": 7.8,
      "link": "/game/nintendo-64/mario-golf",
      "esrb_rating": "E",
      "developers": [
        "Camelot Software Planning"
      ],
      "genres": [
        "Sports",
        "Traditional",
        "Golf",
        "Arcade"
      ]
    },
    {
      "meta_score": 77.0,
      "title": "Pokemon Snap",
      "platform": "N64",
      "date": "Jun 30, 1999",
      "user_score": 7.7,
      "link": "/game/nintendo-64/pokemon-snap",
      "esrb_rating": "E",
      "developers": [
        "Hal"
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Super Smash Bros.",
      "platform": "N64",
      "date": "Apr 26, 1999",
      "user_score": 8.6,
      "link": "/game/nintendo-64/super-smash-bros",
      "esrb_rating": "E",
      "developers": [
        "HAL Labs"
      ],
      "genres": [
        "Action",
        "Fighting",
        "3D"
      ]
    },
    {
      "meta_score": 79.0,
      "title": "Mario Party",
      "platform": "N64",
      "date": "Feb 8, 1999",
      "user_score": 8.0,
      "link": "/game/nintendo-64/mario-party",
      "esrb_rating": "E",
      "developers": [
        "Hudson"
      ],
      "genres": [
        "Miscellaneous",
        "Party"
      ]
    },
    {
      "meta_score": 99.0,
      "title": "The Legend of Zelda: Ocarina of Time",
      "platform": "N64",
      "date": "Nov 23, 1998",
      "user_score": 9.1,
      "link": "/game/nintendo-64/the-legend-of-zelda-ocarina-of-time",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action Adventure",
        "Fantasy"
      ]
    },
    {
      "meta_score": 85.0,
      "title": "F-Zero X",
      "platform": "N64",
      "date": "Sep 30, 1998",
      "user_score": 8.7,
      "link": "/game/nintendo-64/f-zero-x",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Futuristic"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Banjo-Kazooie",
      "platform": "N64",
      "date": "May 31, 1998",
      "user_score": 9.2,
      "link": "/game/nintendo-64/banjo-kazooie",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": 65.0,
      "title": "Yoshi's Story",
      "platform": "N64",
      "date": "Mar 1, 1998",
      "user_score": 7.4,
      "link": "/game/nintendo-64/yoshis-story",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "2D"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Diddy Kong Racing",
      "platform": "N64",
      "date": "Nov 24, 1997",
      "user_score": 8.4,
      "link": "/game/nintendo-64/diddy-kong-racing",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 96.0,
      "title": "GoldenEye 007",
      "platform": "N64",
      "date": "Aug 25, 1997",
      "user_score": 8.9,
      "link": "/game/nintendo-64/goldeneye-007",
      "esrb_rating": "T",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Modern"
      ]
    },
    {
      "meta_score": 88.0,
      "title": "Star Fox 64",
      "platform": "N64",
      "date": "Jul 1, 1997",
      "user_score": 8.8,
      "link": "/game/nintendo-64/star-fox-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Rail"
      ]
    },
    {
      "meta_score": 90.0,
      "title": "Blast Corps",
      "platform": "N64",
      "date": "Feb 28, 1997",
      "user_score": 8.4,
      "link": "/game/nintendo-64/blast-corps",
      "esrb_rating": "E",
      "developers": [
        "Rare Ltd."
      ],
      "genres": [
        "Action",
        "General"
      ]
    },
    {
      "meta_score": 83.0,
      "title": "Mario Kart 64",
      "platform": "N64",
      "date": "Feb 10, 1997",
      "user_score": 8.6,
      "link": "/game/nintendo-64/mario-kart-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Kart"
      ]
    },
    {
      "meta_score": 92.0,
      "title": "Wave Race 64",
      "platform": "N64",
      "date": "Nov 1, 1996",
      "user_score": 8.3,
      "link": "/game/nintendo-64/wave-race-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Driving",
        "Racing",
        "Snow / Water"
      ]
    },
    {
      "meta_score": 80.0,
      "title": "Pilotwings 64",
      "platform": "N64",
      "date": "Sep 29, 1996",
      "user_score": 7.9,
      "link": "/game/nintendo-64/pilotwings-64",
      "esrb_rating": "E",
      "developers": [
        "Paradigm Entertainment"
      ],
      "genres": [
        "Simulation",
        "General"
      ]
    },
    {
      "meta_score": 94.0,
      "title": "Super Mario 64",
      "platform": "N64",
      "date": "Sep 26, 1996",
      "user_score": 9.1,
      "link": "/game/nintendo-64/super-mario-64",
      "esrb_rating": "E",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Platformer",
        "3D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Project H.A.M.M.E.R.",
      "platform": "WII",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/wii/project-hammer",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Beat-'Em-Up",
        "Beat-'Em-Up",
        "2D"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Jet Impulse",
      "platform": "DS",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/ds/jet-impulse",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Simulation",
        "Flight",
        "Modern Jet",
        "Combat"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Line Attack Heroes",
      "platform": "WII",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/wii/line-attack-heroes",
      "esrb_rating": null,
      "developers": [
        "GREZZO"
      ],
      "genres": [
        "Action",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Wii U Play",
      "platform": "WIIU",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/wii-u/wii-u-play",
      "esrb_rating": "RP",
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "Party",
        "Party / Minigame"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Measure Up",
      "platform": "WIIU",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/wii-u/measure-up",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Make 10",
      "platform": "DS",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/ds/make-10",
      "esrb_rating": null,
      "developers": [
        "MuuMuu"
      ],
      "genres": [
        "Miscellaneous",
        "Puzzle",
        "Puzzle",
        "Logic",
        "Logic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "ASH: Archaic Sealed Heat",
      "platform": "DS",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/ds/ash-archaic-sealed-heat",
      "esrb_rating": "E10+",
      "developers": [
        "Mistwalker"
      ],
      "genres": [
        "Role-Playing",
        "Strategy",
        "Turn-Based",
        "General",
        "General",
        "Fantasy",
        "Tactics"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Nintendo Letterbox",
      "platform": "DS",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/ds/nintendo-letterbox",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Miscellaneous",
        "General",
        "General",
        "Application"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Art Academy: Lessons for Everyone",
      "platform": "WIIU",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/wii-u/art-academy-lessons-for-everyone",
      "esrb_rating": null,
      "developers": [
        "Nintendo",
        " Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment",
        "Edutainment"
      ]
    },
    {
      "meta_score": 68.0,
      "title": "Wii Karaoke U",
      "platform": "WIIU",
      "date": "Canceled",
      "user_score": 7.8,
      "link": "/game/wii-u/wii-karaoke-u",
      "esrb_rating": null,
      "developers": [
        "TOSE"
      ],
      "genres": [
        "Action",
        "Miscellaneous",
        "Rhythm",
        "Music",
        "Music"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Art Academy",
      "platform": "WIIU",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/wii-u/art-academy",
      "esrb_rating": null,
      "developers": [
        "Headstrong Games"
      ],
      "genres": [
        "Miscellaneous",
        "Edutainment"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Project Giant Robot",
      "platform": "WIIU",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/wii-u/project-giant-robot",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Simulation",
        "Fighting",
        "Vehicle",
        "3D",
        "Combat"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Zero: Tsukihami no Kamen",
      "platform": "WII",
      "date": "Canceled",
      "user_score": NaN,
      "link": "/game/wii/zero-tsukihami-no-kamen",
      "esrb_rating": null,
      "developers": [
        "Grasshopper Manufacture"
      ],
      "genres": [
        "Action Adventure",
        "Horror",
        "Survival"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Blast Ball",
      "platform": "3DS",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/3ds/blast-ball",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Sports",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "FAST Racing Neo",
      "platform": "3DS",
      "date": "Q4 2015",
      "user_score": NaN,
      "link": "/game/3ds/fast-racing-neo",
      "esrb_rating": null,
      "developers": [
        "Shin'en"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Futuristic"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Seasons of Heaven",
      "platform": "Switch",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/switch/seasons-of-heaven",
      "esrb_rating": null,
      "developers": [
        "AnyArts Productions"
      ],
      "genres": [
        "Action Adventure",
        "Survival",
        "Open-World"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Metroid Prime 4",
      "platform": "Switch",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/switch/metroid-prime-4",
      "esrb_rating": null,
      "developers": [
        "Nintendo",
        " Retro Studios"
      ],
      "genres": [
        "Action",
        "Shooter",
        "First-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Yo-kai Watch 4",
      "platform": "Switch",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/switch/yo-kai-watch-4",
      "esrb_rating": "E10+",
      "developers": [
        "Level 5"
      ],
      "genres": [
        "Role-Playing",
        "Trainer"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Splatoon 3: Expansion Pass Wave 2 - Side Order",
      "platform": "Switch",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/switch/splatoon-3-expansion-pass-wave-2---side-order",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Action",
        "Shooter",
        "Third-Person",
        "Arcade"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Mario Kart 8 Deluxe: Booster Course Pass - Wave 6",
      "platform": "Switch",
      "date": "TBA",
      "user_score": NaN,
      "link": "/game/switch/mario-kart-8-deluxe-booster-course-pass---wave-6",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Racing",
        "Arcade",
        "Automobile"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Princess Peach for Nintendo Switch",
      "platform": "Switch",
      "date": "TBA 2024",
      "user_score": NaN,
      "link": "/game/switch/princess-peach-for-nintendo-switch",
      "esrb_rating": null,
      "developers": [
        "Nintendo"
      ],
      "genres": [
        "Adventure",
        "General"
      ]
    },
    {
      "meta_score": NaN,
      "title": "Luigi's Mansion: Dark Moon",
      "platform": "Switch",
      "date": "TBA 2024",
      "user_score": NaN,
      "link": "/game/switch/luigis-mansion-dark-moon",
      "esrb_rating": null,
      "developers": [
        "Next Level Games"
      ],
      "genres": [
        "Action Adventure",
        "General"
      ]
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