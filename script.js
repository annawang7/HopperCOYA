
  allScenes = {
    "role": {
      "prompt":"Choose one of the follow (fictional) roles for your adventure.",
      "answers": [
        {"text":"Emma Davis, family friend",
         "next": "emma_intro"},
        {"text": "Commander Andrew Wilson, of the U.S. Navy",
         "next": "andrew_intro"},
        {"text": "Amy Miller, age 7, aspiring Computer Sceintist",
         "next": "amy_intro"}]
     },
     "emma_intro": {
        "prompt": "Hi! Your name is Emma Davis. You grew up with Grace as a family friend, so you've been with her as a friend and an advisor throughout all of her accomplishments. This is the story of your friendship.",
        "answers": [{"text": "Next", "next": "emma_intro_2"}],
     },
     "emma_intro_2": {
       "prompt": "Your dear friend Grace Brewster Murray was born in New York City on December 9, 1906. The Murray family was friends with your own, so you often grew up witnessing her shenanigans.",
       "answers": [{"text": "Next", "next": "emma_activity"}],
     },
    "emma_activity": {
      "prompt": "One day when you were 7, Grace came by my place and asked if we could play. Of course you wanted to! What should you do?",
      "answers": [
        {"text": "Climb a tree",
         "next": "emma_climb"},
        {"text": "Engineering!",
         "next": "emma_engineer"},
        {"text": "Study Math",
         "next": "emma_math"}]
     },
    "emma_climb": {
       "prompt": "Even though it wasn't ladylike, you and Grace loved the outdoors. While you were playing outside, you dared Grace to climb a huge oak tree -- and she did! At the time, you couldn't believe how brave she was.",
       "answers": [{"text": "Next", "next": "emma_climb_caught"}],
     },
    "emma_climb_caught": {
       "prompt": "But of course, her mother caught you both, and before you knew it, Grace had taken the full blame for climbing the trees. She lost her swimming privileges for a week!",
       "answers": [{"text": "Next", "next": "emma_college"}],
     },
    "emma_engineer": {
       "prompt": "The two of you decide that you want to get your hands dirty in learning some engineering. All the boys do it, so why can't you?",
       "answers": [{"text": "Next", "next": "emma_engineer_2"}],
     },
    "emma_engineer_2": {
       "prompt": "Grace find a clock in her house and wants to figure out how it works. Before you know it, the clock is dismantled, and the pieces lie on the floor of the living room, the complex parts looking foreign and intimidating. ",
       "answers": [{"text": "Next", "next": "emma_engineer_3"}],
     },
    "emma_engineer_3": {
       "prompt": "You realize that it's about time to put the clock back together... but neither of you can figure out how. What's the solution?",
       "answers":
      [{"text": "Take apart six more clocks, obviously.",
        "next": "emma_engineer_caught"},
       {"text": "Freak out and tell Grace's mother.",
        "next": "emma_engineer_4"}],
     },
    "emma_engineer_4": {
       "prompt": "You stand up to find Grace's mother and confess to her what you two have done. However, you find out that her mother has gone out to run errands, and she won't be home for another two hours. Grace continues to take apart more clocks out of curiosity and persistence.",
       "answers": [{"text": "Next", "next": "emma_engineer_caught"}],
     },
    "emma_engineer_caught": {
      "prompt": "When Grace's mother comes home, she sees you two in the living room, with seven dismantled clocks splayed all over the floor. Disgruntled, she acknowledges your curiosity. \"Next time,\" she says, \"you're only allowed to use one clock.\"",
      "answers": [{"text": "College!", "next": "emma_college"}]
     },
    "emma_math": {
       "prompt": "Despite social norms discouraging girls from studying math, Grace's father encourages you both to practice and learn for the future. Grace's enthusiasm for the subject inspires you to love math, as well. ",
       "answers": [{"text": "Next", "next": "emma_college"}],
     },
    "emma_college": {
      "prompt": "After years of her shenanigans, the two of you eventually grow up. When you're sixteen, Grace applies to Vassar College.",
      "answers": [{"text": "Next", "next": "emma_college_2"}]
     },
    "emma_college_2": {
      "prompt": "Grace doesn't get into college her first time, but a year later, she persistently tried again and got in. This persistency was a theme in her life.",
      "answers": [{"text": "Next", "next": "emma_college_3"}]
     },
    "emma_college_3": {
      "prompt": "In 1928, Grace graduates Vassar College with a bachelor's degree in mathematics and physics, and in 1930, she earns her master's at Yale.",
      "answers": [{"text": "Next", "next": "emma_college_4"}]
     },
    "emma_college_4": {
      "prompt": "Although you two are friends for life, there are two other roles that would better explain Grace's life after college. Choose one to continue the story: ",
     "answers":
      [{"text": "Commander Andrew Wilson, of the U.S. navy",
        "next": "andrew_intro"},
       {"text": "Amy Miller, age 7, aspiring Computer Scientist",
        "next": "amy_intro"},
       {"text": "Finish game.",
        "next": "end"}]
     },
    "andrew_intro": {
        "prompt": "Hello! Your name is Andrew Wilson. You are a commander in the United States navy. In 1940, your job was do direct recruitment efforts and choose who successfully enlists in the Navy.",
        "answers": [{"text": "Next", "next": "andrew_intro_2"}],
     },
     "andrew_intro_2": {
       "prompt": "One woman attempts to enlist -- her name is Grace Hopper. She's 34 and she is also a mathematics professor at Vassar College. Do you accept or reject her?",
       "answers":
      [{"text": "Reject her on her age: she is too old.",
        "next": "andrew_reject"},
       {"text": "Reject her on her weight: her weight to heigh ratio is too low.",
        "next": "andrew_reject"},
       {"text": "Reject her on her job: math professors are valuable to the war effort.",
        "next": "andrew_reject"}]
     },
    "andrew_reject": {
        "prompt": "The Navy decide to reject Grace Hopper, for all three reasons. Nevertheless, she persisted. In 1943, Hopper took a leave of absence from her job at Vassar College and joined the Navy, as part of the Women's Reserve, or WAVES.",
        "answers": [{"text": "Next", "next": "andrew_waves"}]
     },
    "andrew_waves": {
        "prompt": "You and the Navy decide to reject Grace Hopper, for all three reasons. Nevertheless, she persisted, In 1943, Hopper took a leave of absence from her job at Vassar College and joined the Navy, as part of the Women's Reserve, or WAVES.",
        "answers": [{"text": "Next", "next": "andrew_waves_2"}]
     },
    "andrew_waves_2": {
        "prompt": "In 1944, you find out that Hopper graduated first in her class at WAVES, and, due to her background in mathematics, was assigned to Harvard University's Bureau of Ordnance Computation Project.",
        "answers": [{"text": "Next", "next": "andrew_waves_3"}]
     },
    "andrew_waves_3": {
        "prompt": "CONGRATULATIONS! You've been offered a promotion. Do you take it? (If you stay, you can witness Hopper's career trajectory from a closer perspective.)",
        "answers": [{"text": "Yes", "next": "andrew_admiral"},
                    {"text": "No", "next": "andrew_univac"}]
     },
    "andrew_univac": {
        "prompt": "You stay in your department, and you're amazed at Hopper's work. In 1949, you assign her as a senior mathemetician in the team creating UNIVAC I, or the UNIVersal Automatical Computer I.",
        "answers": [{"text": "Next", "next": "andrew_univac_2"}]
     },
    "andrew_univac_2": {
        "prompt": "In 1950, working within the UNIVAC team, Hopper recommends developing <i>a new programming language in English,</i> the first to exist. However, many don't accept her theory, and brush it off as impossible, as computers cannot understand English. Do you believe her?",
        "answers": [{"text": "Support her", "next": "andrew_believe"},
                    {"text": "That's impossible", "next": "andrew_disbelieve"}]
     },
  "andrew_believe": {
        "prompt": "Although this technology has never been done before, Hopper has proven you wrong again and again when you didn't believe in her. You decide to support her through all of her efforts. ",
        "answers": [{"text": "Next", "next": "andrew_believe_2"}]
     },
    "andrew_believe_2": {
        "prompt": "In 1952, Hopper was proven right. She built an operational link-loader, or a compiler, that could use symbol manipulation to eventually interpret English into machine code! She quickly iterated this creation into what would later become the programming language COBOL.",
        "answers": [{"text": "Next", "next": "andrew_believe_3"}]
     },
    "andrew_believe_3": {
        "prompt": "You were right to believe in her! Hopper truly left a legacy and an impact in proving persistence and showing what she could do, and proving that women can more than accomplish what men can. Since then, she has been promoted to the rank of commodore, or rear admiral, at the age of 77.",
        "answers": [{"text": "Next", "next": "andrew_end"}]
     },
    "andrew_disbelieve": {
        "prompt": "This technology has been previously impossible, so you are doubtful that Hopper can accomplish her theory, and dismiss it as crazy talk.",
        "answers": [{"text": "Next", "next": "andrew_disbelieve_2"}]
     },
    "andrew_disbelieve_2": {
        "prompt": "Yet in 1952, Hopper was proven right. She built an operational link-loader, or a compiler, that could use symbol manipulation to eventually interpret English into machine code! She quickly iterated this creation into what would later become the programming language COBOL.",
        "answers": [{"text": "Next", "next": "andrew_disbelieve_3"}]
     },
    "andrew_disbelieve_3": {
        "prompt": "Finally, Hopper has taught you her lesson, that her persistence can teach her to do things previously though unimaginable. She has taught you not to judge others, especially based on gender. And at the age of 77, Hopper has since been promoted to the rank of commodore.",
        "answers": [{"text": "Next", "next": "andrew_end"}]
     },
    "andrew_admiral": {
        "prompt": "Now an admiral, you have risen to a higher rank and you do not see Hopper or her work for a long time. Until...",
        "answers": [{"text": "Next", "next": "andrew_admiral_2"}]
     },
    "andrew_admiral_2": {
        "prompt": "One day, when you're watching 60 minutes, you see a familiar face on the screen. It's Grace Hopper! She has made significant advances in the computing world, inventing one of the earliest computer languages, COBOL.",
        "answers": [{"text": "Next", "next": "andrew_admiral_3"}]
     },
    "andrew_admiral_3": {
        "prompt": "Inspired by the woman you once rejected from the Navy, you make amends by championing H.J.Res. 341, to promote Hopper into the rank of commodore in 1983. Against all doubt, she has proven that women accomplish amazing feats. ",
        "answers": [{"text": "Next", "next": "andrew_end"}]
     },
    "andrew_end": {
        "prompt": "If you want to learn more about her legacy, follow the path of Amy Miller, or choose to Finish Game. ",
        "answers": [{"text": "Amy Miller, age 7, aspiring Computer Scientist", "next": "amy_intro"},
                    {"text": "Finish Game", "next": "end"}]
     },
    "amy_intro": {
        "prompt": "Hi! Your name is Amy Miller. You are seven years old and an aspiring Computer Scientist. Do you love STEM or do you hate STEM?",
        "answers": [
          {"text": "Love it!", "next": "amy_love"},
          {"text": "Hate it!", "next": "amy_hate"}]
     },
     "amy_love": {
       "prompt": "Yay! You love STEM -- you take after your mother, who is also an engineer. One day, she takes you to one of Grace Hopper's talks.",
       "answers": [{"text": "Next", "next": "amy_love_2"}]
     },
     "amy_love_2": {
       "prompt": "This woman is amazing. A lively and charming speaker, she describes her unique stories about World War II, and her passion for computing shows. The way she describes computing captivates you, and immediately, she becomes your role model.",
       "answers": [{"text": "Next", "next": "amy_research"}]
     },
     "amy_hate": {
       "prompt": "Growing up, you haven't seen many women in STEM, so it's difficult to imagine yourself pursuing it. It's not that STEM is too hard for you, but it's always made you uncomfortable or feeling left out.",
       "answers": [{"text": "Next", "next": "amy_hate_2"}]
     },
     "amy_hate_2": {
       "prompt": "One day, you're watching the TV when a 60 minutes episode pops up, describing the efforts of Grace Hopper and her research in creating COBOL. Immediately, it captivates you to see such a strong figure on the screen, and her passion excites you.",
       "answers": [{"text": "Next", "next": "amy_research"}]
     },
     "amy_research": {
       "prompt": "Immediately, you read articles and learn more about her life. Each story is captivating, and even more, you are happy to finally see a role model in STEM who looks like you. In fact, you find three fun facts about Grace Hopper!",
       "answers":
      [{"text": "Fun Fact 1", "next": "fun_1"},
       {"text": "Fun Fact 2", "next": "fun_2"},
       {"text": "Fun Fact 3", "next": "fun_3"}]
     },
     "fun_1": {
       "prompt": "Grace Hopper created the words 'bug' and 'debug' when she found a moth imbedded in her computer during research, which caused the computer to not work. After removing the bug, she fixed the issue!",
       "answers": [{"text": "Next", "next": "amy_future"}]
     },
     "fun_2": {
       "prompt": "Grace Hopper's nicknames included \"Grandmother COBOL\" and \"Amazing Grace\", after the work she's accomplished in her field.",
       "answers": [{"text": "Next", "next": "amy_future"}]
     },
     "fun_3": {
       "prompt": "Grace Hopper once said, \"The most important thing I've accomplished, other than building the compiler,\" she said, \"is training young people.\" They come to me, you know, and say, 'Do you think we can do this?' I say, 'Try it.' And I back 'em up. They need that.\"",
       "answers": [{"text": "Next", "next": "amy_future"}]
     },
     "amy_future": {
       "prompt": "Inspired by this woman's work, you continue to pursue STEM throughout your childhood. Although Grace Hopper passed away, her legacy lives on in the inspiration that she passed to the next generation.",
       "answers": [{"text": "Finish Game", "next": "end"}]
     },
      "end": {
       "prompt": "COBOL and the first compiler weren't the only contributions of Grace Hopper. She also inspired others and strove for equality through her merit and her actions. Whether a friend, coworker, or the next generation, Hopper left a lasting impact that still pushes us today. Thanks for playing!",
       "answers": [{"text": "Restart", "next": "role"}]
     }
  };

$(document).ready(function () {
  prompt = document.getElementById("prompt");
  answers = document.getElementById("answers");

  let reload = function (scene) {
    promptText = scene.prompt;
    prompt.innerHTML = promptText;
    answers.innerHTML = "";
    answerText = scene.answers;

    for (var i = 0; i < answerText.length; i++) {
      var option = document.createElement("input");
      option.setAttribute("id", "option-" + i);
      option.setAttribute("type", "radio");
      option.setAttribute("name", 'option')
      option.setAttribute("value", 'option-' + i)
      option.setAttribute("checked", "true");

      var opttext = document.createElement("label");
      opttext.innerHTML = answerText[i].text;
      opttext.setAttribute("for", "option-" + i);
      nextScene = eval("allScenes." + answerText[i].next)
      opttext.addEventListener("click", () => reload(nextScene));
      answers.appendChild(option);
      answers.appendChild(opttext);
    }
  }

  reload(allScenes.role);
});