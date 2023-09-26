const lessonText = {
  beginner: {
    1: [
      "ffff jjjj fff jjj ff jj ffj jjf ffj jjf fjf jfj fjj jff fj jf",
      "gggg hhhh ggg hhh gg hh ggh hhg ggh hhg ghg hgh ghh hgg gh hg",
      "dddd kkkk ddd kkk dd kk ddk kkd ddk kkd dkd kdk dkk kdd dk kd",
      "ssss llll sss lll ss ll ssl lls ssl lls sls lsl sll lss sl ls",
      "aaaa ;;;; aaa ;;; aa ;; aa; ;;a aa; ;;a a;a ;a; a;; ;aa a; ;a",
      "salad flask sad hask gask half ask dash slag glad;",
      "flag gash jag lash adak all dahl skald kad hall;",
    ],
    2: [
      "rrrr uuuu rrr uuu rr uu rru uur rru uur rur uru ruu urr ru ur",
      "tttt yyyy ttt yyy tt yy tty yyt tty yyt tyt yty tyy ytt ty yt",
      "eeee iiii eee iii ee ii eei iie eei iie eie iei eii iee ei ie",
      "wwww oooo www ooo ww oo wwo oow wwo oow wow owo woo oww wo ow",
      "qqqq pppp qqq ppp qq pp qqp ppq qqp ppq qpq pqp qpp pqq qp pq",
      "typo riot you wire quite port poet router query rip",
      "twerp wiry tripe quiet retry pure troupe quip ripe poetry",
    ],
    3: [
      "vvvv mmmm vvv mmm vv mm vvm mmv vvm mmv vmv mvm vmm mvv vm mv",
      "bbbb nnnn bbb nnn bb nn bbn nnb bbn nnb bnb nbn bnn nbb bn nb",
      "cccc ,,,, ccc ,,, cc ,, cc, ,,c cc, ,,c c,c ,c, c,, ,cc c, ,c",
      "xxx ... zzz xx .. zz x . z xx..zz zz..xx xx.zz zz.xx x.x z.z .x. .z. x..z z..x xx. zz. .xx .zz",
      "max come zoom nice mix zen, maven zinc mob box nix mox coma, comb vibe vox cave.",
    ],
    4: [
      "the be to of and a in that have it for not on with he as you do i at",
      "this but his by from, they we say her she or an will my one all would there their what.",
      "so up out if about who get which go me when make can like time no just him know take.",
      "people into year your good some could, them see other than then now look only come its over think also.",
      "back after use two how our work first well way even new want, because any these give day most us.",
    ],
  },
  intermediate: {
    1: [
      "Apple Sun Dog Fish Grape House Jump Kite Lemon Ant Star Duck Frog Giraffe Horse Jelly Kangaroo Lion All Snake Dragon Fox Gull Hut Jacket Koala Lamp",
      "Queen Wagon Elephant Rainbow Tiger Yacht Umbrella Igloo Octopus Penguin Quilt Whale Eagle Rabbit Turtle Yellow Umbrella Igloo Ostrich Panda",
      "Zebra Xylophone Cactus Violet Banana Nectarine Mango Zero Cat Vase Bee Noodle Magnet Zone Carrot Velvet Nest Moth Zucchini Candle Vine Mushroom",
      "Ant Bear Cat Dog Elephant Fish Giraffe Horse Igloo Jacket Kite Lion Monkey Nest Owl Penguin Quilt Rabbit Sun Tiger Umbrella Vase Whale Xylophone Yacht Zebra",
    ],
    2: [
      `He visited three cities on his trip: Paris, London and Rome. The cat, with its fluffy tail, leaped onto the windowsill. I need to buy groceries: milk, eggs and bread.`,
      `After work, I'll go to the gym, then meet you for dinner. She said, "I'll be there in a minute." The storm was brewing; dark clouds gathered overhead.`,
      `The recipe called for sugar, salt and flour. His favorite books include "To Kill a Mockingbird" and "Pride and Prejudice." The concert tickets were expensive; however, it was worth every penny.`,
      `The river was calm, reflecting the stars above. John's hobbies include hiking, painting and playing the guitar. "I can't believe you did that," he exclaimed. To be continued...`,
    ],
    3: [
      "The sun hung low on the horizon, casting long shadows across the tranquil meadow. Birds chirped in the distance as a gentle breeze rustled the leaves of the tall oak trees. It was a perfect afternoon for a leisurely walk. Sarah took a deep breath, inhaling the earthy scent of the forest. With each step, she felt a sense of calm wash over her, leaving behind the worries of the day.",
      "In the heart of the bustling city, a small cafe nestled in between towering skyscrapers. Its quaint charm attracted people from all walks of life. Inside, the aroma of freshly brewed coffee mingled with the sweet scent of pastries. The soft murmur of conversation filled the air as friends gathered to catch up, and strangers found solace in the simple pleasure of a warm cup of joe.",
      "As the night descended, the city came alive with a vibrant energy. Neon signs lit up the streets, and the distant sounds of music and laughter echoed through the urban canyons. On a rooftop bar, people clinked glasses under a canopy of stars. It was a reminder that in the midst of chaos, there was always a space for connection, celebration, and the promise of a new day.",
    ],
    4: [
      `In the heart of the small town of Elmsworth, Mrs. Clara Bennett was known as the "Lady of Letters." She owned the local post office and had a penchant for writing to anyone and everyone. To most, receiving a handwritten letter from Clara was a cherished occasion.`,
      `On sunny afternoons, Clara could often be spotted in Elmsworth Park, writing under the shade of a grand old oak tree. With a quill in hand and an inkpot beside her, she'd weave tales of the town's history, events, and daily happenings. The park's serene setting, with birds chirping and the distant sound of the river, often served as her muse.`,
      `One day, Mr. Jonathan Grey, a historian from the city, visited Elmsworth. He had heard tales of Clara's letters and was eager to meet her. Intrigued by her accounts of the town, he proposed turning her letters into a book. Clara hesitated but, with Jonathan's persistence, she agreed. The town of Elmsworth was soon buzzing with excitement about their very own "Lady of Letters" becoming an author.`,
    ],
  },
  advanced: {
    1: [
      "444 777 47 74 555 666 56 65 44 77 55 66 4567 7654 467 754 454 767 545 676",
      "333 888 33 88 38 83 383 838 345 876 357 864 334 887 58 63 345678 876543",
      "222 999 22 99 29 92 292 929 239 982 234 987 22399 99822 23456789 987654321",
      "111 000 11 00 10 01 101 010 120 091 123 098 11200 00911 1234567890 0987654321",
      "759 385 0209 34866 911234 4502054 88530 2850892 5739057 8124 90 85539 5156795",
      "25890 12051 195283 50192576 102935 120 3829 5937710 5012925 92835 7686644 5109858",
    ],
    2: [
      "!!! ??? !! ?? !? ?! () () () @@@ ### $$$ %%% &&& /// --- === +++ !($-)#?",
      `hey! what? where? stop! my e-mail: "username@email.com" new price is $351.99 instead of $427.99! how? johnson & johnson 1+1=3???`,
      `(parenthesis) x-ray 100% correct, #1 and #4 WHY?! 1/4 of 24 is 6. hole-in-one! the password is: $P@ssw0rd567#`,
    ],
    3: [
      "Winter nights are best spent indoors.",
      "The library was eerily quiet...",
      "Apples are her favorite fruit!",
      "Sunsets over the ocean mesmerize me.",
      "He forgot his umbrella again.",
      "Shadows played on the wall.",
      "The leaves crunched underfoot.",
      "They danced under the stars.",
      "The cat slept atop the bookshelf?",
      "She bought fresh flowers for the table.",
      "The kettle began to whistle.",
    ],
    4: [
      "Emily, after reading countless books on philosophy and arts, decided to embark on a journey to Greece: the cradle of Western civilization.",
      `"If we truly understood the meaning of life," he mused, "we'd probably spend our days very differently, prioritizing experiences over acquisitions."`,
      "I have read 52 books this year, and, interestingly, 14 of them were solely focused on ancient civilizations and their intriguing mysteries.",
      "If you visit the museum, you'll find artifacts from 2000 B.C., along with detailed descriptions of the daily life from that era.",
      `She exclaimed, "$500 for that vintage watch? That's a steal!" and immediately decided to buy it without a second thought.`,
      `When John said, "I've visited 30+ countries, including Norway, Sweden, and Finland," his friend retorted, "Well, I've been to 50 - beat that!"`,
      `At #5 on the bestseller list, the book titled "Symbols & Secrets: A Journey Through Time" dives deep into 21 different ancient scripts, each with its unique characters like %, &, @, and /.`,
    ],
  },
};

export default lessonText;
