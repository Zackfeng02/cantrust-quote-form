(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.MapleQuestConversation = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const CATEGORIES = {
    family: { zh: "家庭关系", en: "Family bonds", mark: "家" },
    self: { zh: "认识自己", en: "Knowing myself", mark: "我" },
    imagination: { zh: "想象拓展", en: "Imagination", mark: "想" },
    thinking: { zh: "发散思维", en: "Creative thinking", mark: "思" },
    friendship: { zh: "人际关系", en: "Friendship", mark: "伴" },
    feelings: { zh: "情绪觉察", en: "Feelings", mark: "心" }
  };

  const CARDS = [
    {
      id: "family-help", category: "family",
      z: "今天，家里谁做的一件小事让你觉得很开心？", e: "What small thing did someone in our family do today that made you happy?",
      a4z: "是谁做的？你可以用动作演出来吗？", a4e: "Who did it? Can you act it out?",
      a7z: "为什么这件小事对你很重要？", a7e: "Why did that small thing matter to you?",
      tz: "每个人向右边的家人说一句“谢谢你今天……”", te: "Turn to the person on your right and say, “Thank you for...”"
    },
    {
      id: "family-tradition", category: "family",
      z: "我们家有什么特别的习惯，是你想一直保留的？", e: "What special family tradition would you like us to keep forever?",
      a4z: "你最喜欢我们一起做什么？", a4e: "What do you love doing together?",
      a7z: "这个习惯让我们家有什么不一样？", a7e: "What does this tradition say about our family?",
      tz: "给这个家庭习惯取一个只有我们懂的名字。", te: "Give that tradition a secret name only our family knows."
    },
    {
      id: "family-meal", category: "family",
      z: "如果你来设计一顿“全家开心晚餐”，桌上会有什么？", e: "If you designed a family-happiness dinner, what would be on the table?",
      a4z: "选一道菜，再选一种颜色。", a4e: "Pick one food and one colour.",
      a7z: "怎样让每个人都能选到喜欢的东西？", a7e: "How would you make sure everyone gets something they enjoy?",
      tz: "一起用手指在空中画出这张特别菜单。", te: "Draw the special menu together in the air."
    },
    {
      id: "family-siblings", category: "family",
      z: "你从哥哥、姐姐、弟弟或妹妹身上学到过什么？", e: "What have you learned from your brother or sister?",
      a4z: "他/她有什么事情做得很棒？", a4e: "What is something they do really well?",
      a7z: "你们不一样的地方，什么时候反而能互相帮忙？", a7e: "When do your differences help you work as a team?",
      tz: "兄弟姐妹交换一句真心的夸奖。", te: "Siblings trade one genuine compliment."
    },
    {
      id: "family-memory", category: "family",
      z: "最近一次让你笑得停不下来的家庭时刻是什么？", e: "What recent family moment made you laugh and laugh?",
      a4z: "当时谁在哪里？发生了什么？", a4e: "Who was there, and what happened?",
      a7z: "如果把它拍成电影，这一幕叫什么名字？", a7e: "If it were a movie scene, what would you call it?",
      tz: "全家一起摆出那个时刻的“定格照片”。", te: "Recreate the moment as a family freeze-frame."
    },
    {
      id: "family-love", category: "family",
      z: "不用说“我爱你”，还可以怎样让家人感受到爱？", e: "Without saying “I love you,” how can we help family feel loved?",
      a4z: "你想送一个拥抱、一个帮忙，还是一幅画？", a4e: "Would you give a hug, help out, or make a picture?",
      a7z: "不同的人喜欢收到爱的方式一样吗？为什么？", a7e: "Does everyone like to receive love in the same way? Why?",
      tz: "每个人选一个明天可以做到的小行动。", te: "Choose one tiny action each of us can do tomorrow."
    },

    {
      id: "self-proud", category: "self",
      z: "今天有什么小事，让你为自己感到骄傲？", e: "What small thing made you proud of yourself today?",
      a4z: "做完以后，你的脸是什么表情？", a4e: "What did your face look like afterward?",
      a7z: "你用了什么办法，才把它做成？", a7e: "What strategy helped you do it?",
      tz: "每个人给自己一个“我做到了”的手势。", te: "Invent your own “I did it!” gesture."
    },
    {
      id: "self-learning", category: "self",
      z: "有什么事情你现在还不会，但很想学会？", e: "What can’t you do yet but really want to learn?",
      a4z: "谁可以教你第一步？", a4e: "Who could teach you the first step?",
      a7z: "把它分成三个小步骤，第一步是什么？", a7e: "Break it into three small steps. What comes first?",
      tz: "一起把“我不会”改说成“我还不会”。", te: "Change “I can’t” into “I can’t yet.”"
    },
    {
      id: "self-brave", category: "self",
      z: "你最近什么时候有一点害怕，却还是试了试？", e: "When were you a little scared but tried anyway?",
      a4z: "当时谁或什么让你更有勇气？", a4e: "Who or what helped you feel brave?",
      a7z: "勇敢和“不害怕”是一回事吗？", a7e: "Is being brave the same as not feeling scared?",
      tz: "每个人说一句自己的“勇气口令”。", te: "Each person creates a short courage phrase."
    },
    {
      id: "self-strength", category: "self",
      z: "如果要介绍一个最棒的你，你会说自己有什么优点？", e: "If you introduced the best of you, what strength would you name?",
      a4z: "你觉得自己是勇敢、友善，还是有趣？", a4e: "Are you brave, kind, funny—or something else?",
      a7z: "举一个例子，证明这个优点真的属于你。", a7e: "What example shows that this strength is really yours?",
      tz: "家人轮流补充一个他看到的优点。", te: "Let family members add one strength they see in you."
    },
    {
      id: "self-body", category: "self",
      z: "你的身体会怎样告诉你：“我累了，需要休息”？", e: "How does your body tell you, “I’m tired and need a rest”?",
      a4z: "是打哈欠、揉眼睛，还是想躺下？", a4e: "Do you yawn, rub your eyes, or want to lie down?",
      a7z: "你还能发现身体发出的哪些小信号？", a7e: "What other quiet messages does your body send you?",
      tz: "闭眼十秒，安静听一听身体现在想说什么。", te: "Close your eyes for ten seconds and listen to your body."
    },
    {
      id: "self-choice", category: "self",
      z: "今天你自己做了哪个决定？结果怎么样？", e: "What decision did you make for yourself today, and how did it go?",
      a4z: "你选了什么？", a4e: "What did you choose?",
      a7z: "如果重来一次，你会做同样的选择吗？", a7e: "Would you make the same choice again? Why?",
      tz: "用大拇指表示：满意、还可以，或想重来。", te: "Use your thumb to show: pleased, unsure, or try again."
    },

    {
      id: "imagination-animal", category: "imagination",
      z: "如果今晚有一只会说话的小动物来敲门，它会是谁？", e: "If a talking animal knocked tonight, who would it be?",
      a4z: "它会发出什么声音？", a4e: "What sound would it make?",
      a7z: "它为什么来找我们？它需要什么帮助？", a7e: "Why did it find us, and what help does it need?",
      tz: "一个人演动物，其他人猜它带来的消息。", te: "One person acts as the animal; everyone guesses its message."
    },
    {
      id: "imagination-spaceship", category: "imagination",
      z: "如果这个房间突然变成宇宙飞船，我们要飞去哪里？", e: "If this room became a spaceship, where would we fly?",
      a4z: "指一指：哪里是驾驶座？", a4e: "Point to where the pilot would sit.",
      a7z: "旅途中可能遇到什么难题？我们怎么解决？", a7e: "What problem might we meet, and how would we solve it?",
      tz: "全家一起倒数五秒，准备“起飞”。", te: "Count down from five together and launch."
    },
    {
      id: "imagination-holiday", category: "imagination",
      z: "如果可以发明一个新节日，它要庆祝什么？", e: "If you invented a holiday, what would it celebrate?",
      a4z: "那天大家穿什么颜色？", a4e: "What colour would everyone wear?",
      a7z: "这个节日有哪些规则或传统？", a7e: "What rules or traditions would the holiday have?",
      tz: "一起为新节日设计一个三秒钟的舞蹈。", te: "Create a three-second holiday dance together."
    },
    {
      id: "imagination-door", category: "imagination",
      z: "墙上出现一扇魔法门，你希望门后是什么？", e: "A magic door appears in the wall. What do you hope is behind it?",
      a4z: "门是什么颜色、什么形状？", a4e: "What colour and shape is the door?",
      a7z: "进去以后，你只能带回一样东西，会带什么？", a7e: "You may bring back one thing. What do you choose?",
      tz: "轮流做出“开门”的动作和惊讶表情。", te: "Take turns opening the door and showing your surprised face."
    },
    {
      id: "imagination-robot", category: "imagination",
      z: "你会发明一个帮家里做什么事的机器人？", e: "What job would your new home robot do?",
      a4z: "它长什么样？给它取个名字。", a4e: "What does it look like? Give it a name.",
      a7z: "它需要听懂哪三条重要指令？", a7e: "What three important instructions must it understand?",
      tz: "一个人当机器人，其他人用清楚的话给指令。", te: "One person is the robot; others practise giving clear directions."
    },
    {
      id: "imagination-cloud", category: "imagination",
      z: "云朵上有一座城市，那里的生活是什么样？", e: "There is a city on the clouds. What is life like there?",
      a4z: "房子软软的还是硬硬的？", a4e: "Are the houses soft or hard?",
      a7z: "没有地面，人们怎样上学、买东西和运动？", a7e: "Without ground, how do people learn, shop, and play?",
      tz: "每个人加一个细节，合作讲完“云城的一天”。", te: "Add one detail each to tell a day in Cloud City."
    },

    {
      id: "thinking-box", category: "thinking",
      z: "一个空纸盒，除了装东西，还能变成什么？", e: "Besides holding things, what could an empty box become?",
      a4z: "说出一种，再用手比出它的样子。", a4e: "Name one idea and shape it with your hands.",
      a7z: "一分钟能想出五种完全不同的用法吗？", a7e: "Can you think of five very different uses in one minute?",
      tz: "轮流接龙，不重复别人说过的答案。", te: "Take turns adding ideas without repeating one."
    },
    {
      id: "thinking-share", category: "thinking",
      z: "只有五颗草莓，四个人怎样分才算公平？", e: "We have five strawberries for four people. What would be fair?",
      a4z: "你会怎么切、怎么摆？", a4e: "How would you cut and arrange them?",
      a7z: "“公平”和“每个人一样多”总是一回事吗？", a7e: "Does fair always mean everyone gets exactly the same?",
      tz: "用手边的小物件演一遍不同的分法。", te: "Use nearby objects to model different solutions."
    },
    {
      id: "thinking-clocks", category: "thinking",
      z: "如果世界上没有钟表，我们怎么知道该做什么了？", e: "If clocks disappeared, how would we know when to do things?",
      a4z: "天亮时做什么？天黑时呢？", a4e: "What would you do at sunrise? At sunset?",
      a7z: "没有准确时间，会带来哪些方便和麻烦？", a7e: "What would become easier—and harder—without exact time?",
      tz: "一起设计一种不用数字的“家庭时间信号”。", te: "Invent a family time signal that uses no numbers."
    },
    {
      id: "thinking-lost", category: "thinking",
      z: "心爱的玩具找不到了，你会先做哪三件事？", e: "A favourite toy is missing. What are your first three steps?",
      a4z: "先找哪里？你会请谁帮忙？", a4e: "Where would you look first? Who could help?",
      a7z: "怎样找才不会把已经找过的地方再找一遍？", a7e: "How could you avoid searching the same place twice?",
      tz: "选一个小物件，合作说出最有顺序的寻找计划。", te: "Pick an object and build an orderly search plan together."
    },
    {
      id: "thinking-opposite", category: "thinking",
      z: "如果明天是“相反日”，哪些事情会变得最好笑？", e: "If tomorrow were Opposite Day, what would be funniest?",
      a4z: "你会倒着走，还是早餐吃晚餐？", a4e: "Would you walk backward or eat dinner for breakfast?",
      a7z: "哪些规则可以相反，哪些为了安全不能变？", a7e: "Which rules could flip, and which must stay for safety?",
      tz: "轮流说一句相反话，让家人翻译成正常意思。", te: "Say an opposite sentence for the family to translate."
    },
    {
      id: "thinking-island", category: "thinking",
      z: "全家去一座小岛，只能带三样东西，你会选什么？", e: "Our family is going to an island with only three things. What do you choose?",
      a4z: "选一样最想带的，说说为什么。", a4e: "Choose your one must-have item and tell why.",
      a7z: "怎样让三样东西同时满足安全、吃住和快乐？", a7e: "Can three items cover safety, survival, and fun?",
      tz: "每个人提方案，最后合作选出全家的三样。", te: "Share ideas, then agree on the family’s final three."
    },

    {
      id: "friendship-good", category: "friendship",
      z: "你觉得一个好朋友会做哪些事情？", e: "What are some things a good friend does?",
      a4z: "好朋友会怎么一起玩？", a4e: "How do good friends play together?",
      a7z: "好朋友需要每次都同意你吗？为什么？", a7e: "Does a good friend always have to agree with you? Why?",
      tz: "全家一起想出三个“好朋友动作”。", te: "Make a list of three friendship actions together."
    },
    {
      id: "friendship-include", category: "friendship",
      z: "看到一个人独自在旁边，你可以怎样邀请他加入？", e: "Someone is standing alone. How could you invite them in?",
      a4z: "你会对他说哪一句话？", a4e: "What words could you say?",
      a7z: "如果对方说“不想”，怎样尊重他又保持友善？", a7e: "If they say no, how can you be respectful and still kind?",
      tz: "两人一组，练习一次温柔的邀请。", te: "Pair up and practise one kind invitation."
    },
    {
      id: "friendship-repair", category: "friendship",
      z: "不小心让别人难过了，怎样才能把关系修补好？", e: "If you accidentally hurt someone’s feelings, how can you repair things?",
      a4z: "除了“对不起”，你还可以做什么？", a4e: "Besides saying sorry, what could you do?",
      a7z: "一个真诚的道歉应该包含哪些部分？", a7e: "What makes an apology feel sincere?",
      tz: "一起完成句子：“我很抱歉……下次我会……”", te: "Complete: “I’m sorry for... Next time I will...”"
    },
    {
      id: "friendship-boundary", category: "friendship",
      z: "当你不喜欢别人正在做的事，可以怎样清楚地说出来？", e: "How can you speak clearly when you don’t like what someone is doing?",
      a4z: "练习说：“请停一下，我不喜欢。”", a4e: "Practise: “Please stop. I don’t like that.”",
      a7z: "怎样坚定地说“不”，同时不故意伤害别人？", a7e: "How can you be firm without trying to hurt someone?",
      tz: "全家练习用平静声音说一句边界话。", te: "Practise one boundary sentence in a calm voice."
    },
    {
      id: "friendship-different", category: "friendship",
      z: "和你喜欢不同东西的人一起玩，会有什么有趣之处？", e: "What can be fun about playing with someone who likes different things?",
      a4z: "你喜欢什么？朋友可能喜欢什么？", a4e: "What do you like? What might a friend like?",
      a7z: "怎样设计一个游戏，让两种兴趣都能出现？", a7e: "How could one game include both interests?",
      tz: "把两个人的兴趣合在一起，发明一个新游戏。", te: "Combine two interests to invent a new game."
    },
    {
      id: "friendship-team", category: "friendship",
      z: "两个人一起做，什么事情会比一个人做更容易？", e: "What becomes easier when two people work together?",
      a4z: "你想请谁和你一起做什么？", a4e: "Who would you ask to do something with you?",
      a7z: "好队友之间应该怎样分工和交流？", a7e: "How should good teammates divide jobs and communicate?",
      tz: "不用说话，合作把三个物件从小到大排好。", te: "Without talking, work together to order three objects by size."
    },

    {
      id: "feelings-weather", category: "feelings",
      z: "如果你现在的心情是一种天气，会是什么天气？", e: "If your mood were weather right now, what would it be?",
      a4z: "是太阳、雨、风，还是彩虹？", a4e: "Sun, rain, wind, rainbow—or something else?",
      a7z: "今天发生的什么事，让心里的天气变成这样？", a7e: "What happened today that shaped your inner weather?",
      tz: "每个人用手和声音表演自己的心情天气。", te: "Use your hands and sounds to perform your mood-weather."
    },
    {
      id: "feelings-angry", category: "feelings",
      z: "生气刚刚出现时，你的身体哪里最先感觉到？", e: "Where in your body do you first notice anger arriving?",
      a4z: "你的手、脸或肚子会怎样？", a4e: "What happens in your hands, face, or tummy?",
      a7z: "在“小火苗”变成“大火”前，你能做什么？", a7e: "What can you do before a small spark becomes a big fire?",
      tz: "一起做三次“闻花、吹蜡烛”的慢呼吸。", te: "Take three slow flower-smelling, candle-blowing breaths."
    },
    {
      id: "feelings-worry", category: "feelings",
      z: "最近有什么小担心常常跑进你的脑袋？", e: "What small worry has been visiting your mind lately?",
      a4z: "这个担心像什么小动物？", a4e: "What little animal does that worry resemble?",
      a7z: "这件事里，哪些能控制，哪些不能控制？", a7e: "Which parts can you control, and which parts can’t you?",
      tz: "说出一个明天能做的小步骤，再把剩下的交给大人。", te: "Name one small next step, then let an adult carry the rest."
    },
    {
      id: "feelings-calm", category: "feelings",
      z: "什么事情最能帮助你慢慢平静下来？", e: "What helps you slowly feel calm again?",
      a4z: "抱一抱、安静坐着，还是喝点水？", a4e: "A hug, quiet time, water—or something else?",
      a7z: "不同的情绪可能需要不同的平静方法吗？", a7e: "Might different feelings need different calming tools?",
      tz: "一起选出三样东西，组成我们的“家庭平静工具箱”。", te: "Choose three ideas for a family calm-down toolbox."
    },
    {
      id: "feelings-mixed", category: "feelings",
      z: "一个人可以同时有两种不同的心情吗？", e: "Can a person feel two different feelings at the same time?",
      a4z: "你有没有又开心、又有点舍不得的时候？", a4e: "Have you ever felt happy and a little sad together?",
      a7z: "想一个“又……又……”的真实时刻。", a7e: "Remember a real “I felt both...and...” moment.",
      tz: "每个人用左右手各表示一种心情。", te: "Use each hand to show one of two feelings."
    },
    {
      id: "feelings-clues", category: "feelings",
      z: "不直接问，你能从哪些线索看出别人心情不好？", e: "Without asking directly, what clues show someone may be upset?",
      a4z: "看看脸、听听声音，还能看哪里？", a4e: "Look at their face, hear their voice—what else?",
      a7z: "猜到别人的心情后，为什么还需要问一问？", a7e: "After noticing clues, why should we still check in?",
      tz: "练习一句：“我注意到你……你还好吗？”", te: "Practise: “I noticed... Are you okay?”"
    }
  ];

  function shuffle(items, random = Math.random) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(random() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function buildDeck(category = "all", previousId = null, random = Math.random) {
    const eligible = category === "all" ? CARDS : CARDS.filter(card => card.category === category);
    const deck = shuffle(eligible, random);
    if (deck.length > 1 && deck[0].id === previousId) {
      [deck[0], deck[1]] = [deck[1], deck[0]];
    }
    return deck;
  }

  function init() {
    const cardElement = document.querySelector("#talk-card");
    if (!cardElement) return;

    const elements = Object.fromEntries([
      "category-mark", "card-category-zh", "card-category-en", "card-number",
      "question-zh", "question-en", "age4-zh", "age4-en", "age7-zh", "age7-en",
      "together-zh", "together-en", "deck-status"
    ].map(id => [id, document.getElementById(id)]));

    let category = "all";
    let deck = [];
    let current = null;
    let drawTimer = null;

    function activeCount() {
      return category === "all" ? CARDS.length : CARDS.filter(card => card.category === category).length;
    }

    function render(card) {
      const meta = CATEGORIES[card.category];
      cardElement.dataset.category = card.category;
      elements["category-mark"].textContent = meta.mark;
      elements["card-category-zh"].textContent = meta.zh;
      elements["card-category-en"].textContent = meta.en;
      elements["card-number"].textContent = `${String(CARDS.indexOf(card) + 1).padStart(2, "0")} / ${CARDS.length}`;
      elements["question-zh"].textContent = card.z;
      elements["question-en"].textContent = card.e;
      elements["age4-zh"].textContent = card.a4z;
      elements["age4-en"].textContent = card.a4e;
      elements["age7-zh"].textContent = card.a7z;
      elements["age7-en"].textContent = card.a7e;
      elements["together-zh"].textContent = card.tz;
      elements["together-en"].textContent = card.te;
      elements["deck-status"].textContent = `本轮还有 ${deck.length} 张未抽 · ${deck.length} cards left before reshuffle`;
    }

    function drawCard(animate = true) {
      if (!deck.length) deck = buildDeck(category, current && current.id);
      const next = deck.shift();
      window.clearTimeout(drawTimer);

      if (animate) {
        cardElement.classList.add("is-shuffling");
        drawTimer = window.setTimeout(() => {
          current = next;
          render(current);
          cardElement.classList.remove("is-shuffling");
        }, 180);
      } else {
        current = next;
        render(current);
      }
    }

    document.getElementById("draw-card").addEventListener("click", () => drawCard(true));
    document.querySelectorAll("#topic-filters [data-category]").forEach(button => {
      button.addEventListener("click", () => {
        category = button.dataset.category;
        deck = [];
        document.querySelectorAll("#topic-filters [data-category]").forEach(option => {
          option.setAttribute("aria-pressed", String(option === button));
        });
        drawCard(true);
        document.getElementById("talk-card").scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });

    drawCard(false);
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
  }

  return { CATEGORIES, CARDS, shuffle, buildDeck };
});
