<script lang="ts" setup>
const ids = [
  "_",
  "-1",
  ":3c",
  ":D (vivid/stasis edit)",
  "∀",
  "∀NARCHIC LIGHT",
  "+ERABY+E CONNEC+10N",
  "00",
  "1112",
  "3, 2, 1, Let's Go",
  "3.1V.C1",
  "ABSOLUTION (A-Saph Remix)",
  "Aci-L",
  "Acolyte",
  "acta est fabula, plaudite",
  "Aleph-0",
  "All The Times",
  "ALLIEVERWANTED",
  "And So You Felt",
  "Angel's Window",
  "Angelstar",
  "APO11O",
  "APOCALYPSE CALL(Theatrum Calamititus)",
  "Arachnid",
  "aria of ruinated winds",
  "Ascent",
  "ASTELLION",
  "Asymmetry (takehirotei remix)",
  "Attractor Force",
  "B3611V",
  "BADSECRET",
  "bardess :0: of the future",
  "Battle in Enemy Territory",
  "BEATROCK (get it?)",
  "Benighted Rewaking",
  "Beyond the Heart (Broken Heart Mix)",
  "Bloom in Two",
  "BPM",
  "calming patterns to soothe the mind",
  "Candy@-Cracker",
  "Chronoexplorers",
  "Chronomia",
  "CITY RIDE IN THE JUNGLE",
  "CLAUDIA -estella-",
  "CLAUDIA -libertia-",
  "Concrete Jungle",
  "CONVERGENCE",
  "Cosmogyral",
  "Courage",
  "crack in the earth",
  "Credits",
  "Crimson Dance (vivid/stasis Edit)",
  "Crosshatch",
  "Crusader Mk.III (Stelli Edit)",
  "Cyclical Rebellion",
  "Dark Star",
  "Dear My Endsummer",
  "DeSPAROLA",
  "Distorted Fate",
  "Domain Breached",
  "Doppelganger",
  "Dreams From Another World",
  "dyauspitr, thunder of heaven",
  "eachother",
  "endless.reality",
  "ENERGY SYNERGY MATRIX",
  "energy trixxx",
  "Ephemeral Sunrise",
  "Era Chimaera",
  "Etiquette",
  "Evaniscentia",
  "even at the end of the world, you left it",
  "evil pimp dracula fire beat",
  "execution_program",
  "exterminate()",
  "F1055",
  "Farewell to Syzygia",
  "Faux Real (VIVID REDUX)",
  "final farewell -aquaregia-",
  "First Breath",
  "Fixations Toward the Stars",
  "Foolish Ambition",
  "for.loop",
  "FULi AUTO BUSTER",
  "FULi AUTO SHOOTER",
  "G e n g a o z o",
  "Gauntlet",
  "Goodbye To Your Vicious Cycles",
  "GOODRAGE",
  "grode",
  "grode (A-Saph Multigenre Remix)",
  "grode (DJ HOE SCARER REMIX)",
  "grode (Wyvren's Remix)",
  "grode(decoherence)",
  "Happy Go Lucky!!!",
  "heptagramme",
  "hotline_ophiucus",
  "HTTPS",
  "Idealized Nilpotency",
  "IGNITED",
  "Images",
  "INFiNiTE ENERZY -Overdoze-",
  "Ione",
  "Is This It Is It",
  "It Go (Cheryl Stelli remix)",
  "Last Wish (vivid/stasis ver.)",
  "LET THE CREATION BEGIN",
  "Locked Out",
  "LORELEI",
  "Lost City",
  "lost contact",
  "Luminaria",
  "Luminous Entities Lost Heart",
  "Luxvinore",
  "Macropolis",
  "MARENOL",
  "Memories Sacrifice",
  "micro.wav",
  "Miryark's Scroll",
  "MULTIPHEX",
  "MVURBD",
  "MYSTERIOUS TRIGGER",
  "The River",
  "Nhelv",
  "Nightshade",
  "NONSENSE",
  "Novena",
  "NULCTRL",
  "NULCTRL EX",
  "nullbreak",
  "obair-ghreis",
  "Octava",
  "Ops:Limone",
  "Options",
  "Orphen",
  "Perfect ConfeCute!!",
  "Pictured as Perfect",
  "POISON GARDEN",
  "PRECiOUS : PROMiSE",
  "Prime",
  "Prismatic Vortex",
  "PROPER RHYTHM",
  "PSYCHO-BOMB",
  "PYROMANIA",
  "QUASAR",
  "Rafflesia",
  "RAM (Rotating Auto-Mobiles)",
  "Random",
  "Reboot",
  "reFract::dense",
  "Renatus",
  "Revelation",
  "Rrhar'il",
  "safe_state (MANIAQ Sound Team Remix)",
  "Sanzui",
  "Scarlet Death",
  "Secret Illumination",
  "See You Move",
  "SEKAISEN::OBSERVER",
  "SELF",
  "SENT://INEL",
  "septima",
  "Seraphiel",
  "Shattered Sky After Rain",
  "Showdown",
  "Signals Afar",
  "Simulated Reality",
  "Singularity",
  "slic.hertz",
  "Solomon's Seal",
  "Some More of That Song",
  "Spell Diver",
  "Spin Cycle (NETCAVY ReMiX)",
  "Star Dream -Millenium Vision-",
  "STARCRASHERS (new)",
  "stardust",
  "STARGAZERS (new)",
  "Stellar Sky",
  "Stellaria",
  "Sternstunde",
  "stop-motion",
  "SUPERNOVA",
  "SUPERNOVA ~Life Cycle of a Star~",
  "Surtr's Wish",
  "Synthesis.",
  "Synthesizer Party",
  "taffy",
  "Tau",
  "Tavgha",
  "tenpo pakala",
  "Thaumaturgy",
  "The 89's Momentum",
  "The Last Page",
  "the more i carry on...",
  "The Next Arcady",
  "The Night of Fright",
  "There",
  "thrinos;pygmalion",
  "Tormented World",
  "TRAILBLAZER",
  "Trip Coffee",
  "Tutorial",
  "ULTiM∀TUM",
  "ULTIMATE",
  "Un-TECHNiCAL Reason",
  "Unraveling Stasis",
  "Unsigned Amalgam",
  "until next time!",
  "UTF-8000000000",
  "valor/starcross",
  "Volition",
  "Voltage Strike",
  "WATAGASHI RUSH",
  "WAVE PUNCH",
  "Wavetapper",
  "What You Love",
  "When the Dragon Falls",
  "WOLVRAVES",
  "WORN OUT TAPES [tally-ho! version]",
  "Yamai",
  "zylphexica",
  "χΩ",
  "Itsuka kaerubasho",
  "Zephyrs",
  "Haru no kizashi",
  "Heimat",
  "REM",
  "Gray Snow",
  "Irritation of Heart",
  "We Want to Run",
  "Fragile",
  "Darklove",
  "glitter ✩‧₊˚",
  "Halfpipe",
  "Going Back",
  "Locked Out",
  "Stalemate",
  "hitomi",
  "saigo",
  "Rise Up",
  "namida",
  "sequence",
  "#808080",
  "chasing a day",
  "naraku",
  "Genom By Death",
  "The First Memory",
  "Hanabi [vivid/stasis ver.]",
  "Carousel",
  "afterglow [vivid/stasis ver.]",
  "Apocalypse Call (Kry.exe vs rN vs Ardolf)",
  "STARCRASHERS (old with Ardolf)",
  "(execute.)",
  "STARGAZERS (old with Ardolf)"
]
const data: (string | number)[][] = [
  [
    "_XAM",
    "183",
    0,
    "160",
    0,
    "198",
    0,
    "181",
    0,
    "159",
    0,
    "15",
    0
  ],
  [
    "请输入文本",
    "183",
    0,
    "170",
    "依旧Tutorial大战Solomon's Seal（",
    "202",
    0,
    "123",
    "N/A是什么歌",
    "108",
    "怎么两个Locked Out（",
    "236",
    0
  ],
  [
    "WHYHW2297",
    "181",
    "节奏医生使我了解到vs，stop-motion使我决定入坑vs。\n还记得以前第一次加vs群的时候，入群问题是最喜欢的歌曲\n我毫不犹豫写下了stop-motion，而如今这个问题的答案依旧不会改变\n曾经的最虚高定数也让我曾无数次尝试使别的曲子的Rating与其并肩，但就算玩了那么多，在定数重做前也从未有一首歌达到它在我bp中的高度\n我的心里也是一样的\n\n只不过在这里，我从未认为其虚高，也不会重做定数",
    "181",
    "F",
    "137",
    "r",
    "134",
    "u",
    "51",
    "m",
    "215",
    "s"
  ],
  [
    "筱星星_Star",
    "182",
    0,
    "183",
    0,
    "222",
    0,
    "21",
    0,
    "15",
    0,
    "206",
    0
  ],
  [
    "鱼某k",
    "158",
    "人帅jb大。",
    "38",
    0,
    "9",
    "我我我操这这这个ssschhhraaanzzz也太太太正了了了吧",
    "160",
    0,
    "197",
    0,
    "233",
    "宝贝我喜欢你的路你闪粉闪粉闪粉闪粉"
  ],
  [
    "Yu_Sh_Q",
    "182",
    0,
    "176",
    0,
    "158",
    0,
    "213",
    0,
    "251",
    0,
    "80",
    0
  ],
  [
    "Herun",
    "160",
    "融合Chiptune风格呼应着VS的美学风格与世界观，其感情又足够真挚动人。从SELF充满怀念又饱含力量的旋律之中，我们看见的不只是Sat与Tsuki的“告别”，更是那告别背后“面对创伤”的勇气与决心。长长的旅途让Sat成长了很多，她最后一点点迷茫与踟躇，都在SELF的旋律里溶解，化作天空中绽放的烟火。这是属于两位stargazers的歌，但它带来的是属于我们每一位玩家的内在力量。正如Storyteller在Sat离开Duskbreaker时所说，VS的故事对不论哪个层级的人们而言都有它的意义。SELF的真挚，就是它打破层级之间阻隔的力量。",
    "203",
    "红温持枪女人大笑.jpg\n“i wont give up.”",
    "52",
    "刻在Duskbreaker心脏里的旋律。旋律的忧伤气质与breakcore结合，可以听到一份挣扎，一份怀念和一份决心。",
    "117",
    "剧情里这首歌响起的时候谁会不被帅到。schranz的工业气质足够富有野性，用在剧情里面意外地合适。",
    "164",
    "在中间的Breakdown部分，所有乐器安静下来，只有合唱的声音零星点缀……我相信很多都会被这一段出人意料的编排摄住心神。我们看见雨后最后一丝即将散去的浮云，从天空的罅隙里倾泻而下细碎的阳光，这首清新的歌曲带给人的美学感受是独一档的。",
    "236",
    "跑图配乐。带给人彷徨的感觉，又有富有行进感，仿佛身临其境漫步在betweenspace。"
  ],
  [
    "irocyan会梦见电子松鸦吗",
    "3",
    "新颖的结构，独特的听感，倾泻的情绪，kyot的风味，美艳的Alli，超爽的铺面。\n作为我新手时期的噩梦，也作为我第一个ac的15，这首歌给我带来了极其深刻的印象……\n我要听一辈子:3c！！！",
    "37",
    "Bloom in two，双生的繁茂，Allison的角色曲。\nbotanica，breakcore，digital rock……多种元素的混合竟令我产生了别样的情感！\n最绝的是rock段中间的一声独特的霹雳，那如同春雷一般的巨响，让我彻底融入这生机勃勃的奇境之中……\n天哪，太美了，就如同Sat与Alli那甜蜜的爱情一般！\n我会听一辈子Bloom in two！",
    "63",
    "天父，天堂之雷。\n正如曲名一样，这首歌中有着满满的雷霆元素，雷霆一般的音色独具一种究极的爽感！\n雷霆曲目，雷霆曲绘，雷霆铺面！\n雷霆的劲爆！雷霆的爽感！雷霆的一切！\n天雷滚滚我好怕怕呜呜呜……(指虚低的铺面)\n(雷霆真的很好听！都给我去听雷霆！)",
    "160",
    "SELF，“自我”。\n“final intermission”，最后的中场休息。\nTsuki的最终告别。\nlog()为这首歌塑造的独特音色，为整首歌带来了一种“感情的倾泻”，配合上剧情的高潮，铺面的表演，无论多少次都会令我内心一揪。\n感谢SELF，感谢log()，感谢v/s为我留下了这么美好的回忆……\nGood night，Tsuki！",
    "183",
    "新星的循环，一颗新星由诞生直至终结。\n作为v/s第二首究极马拉松曲目，新星循环给我带来的震撼感不输当年的aefp。\n16分钟，我仿佛见证了一颗新星轰轰烈烈的诞生，活泼跃动的成长，爆发能量的成熟，与逐渐归于宁静的终末。\n我原以为SUPERNOVA已经是kyot的一个高峰，但他在vs的最终更新为我们带来了SUPERNOVA的究极加长版，天啊，一山更比一山高。\n我爱SUPERNOVA！我爱新星循环！",
    "249",
    "Oh let's go around again and again！\n哦！就让我们走一遭，再走一遭！\nAnd again will your dreams remain dust……\n直至你的梦想化为尘土……\n……\n作为Alpha章节的最终剧情曲，在亲眼见证Dawn举枪亲自终结循环时，这首歌便完美地插入了整个剧情中，为Dawn的死亡塑造了更加深刻的无奈感与悲剧感。\n……\n“Dawn Hisomeru，the Liberater”\n在你的梦想化作尘土前，去奋力打破这8266轮，这一万三千年的循环吧！"
  ],
  [
    "zj2y",
    "151",
    0,
    "222",
    0,
    "47",
    0,
    "63",
    0,
    "15",
    0,
    "21",
    0
  ],
  [
    "oxidawns",
    "58",
    "神秘v/s大混曲，我操我操怎么混的这么好听。？！以严肃完成今日A-Saph大学习。",
    "15",
    "请输入文本",
    "83",
    "你们俩这么会写就多写点。",
    "175",
    "我说新撞星比旧撞星好听一万倍有没有人懂的",
    "177",
    "我说新观星比旧观星好听一万倍有没有人懂的",
    "206",
    "unraveling v.-ing.解开\nstasis n.停滞\n\n当Tsuki首次在剧情中出场——然而不是重逢。此刻，vivid/stasis的故事才真正拉开帷幕。Unraveling Stasis作为vivid/stasis第二章里魔王曲，携着富有标识性的dubstep和breakcore曲风，完美叙述了这一情节。我操怎么这么好听。"
  ],
  [
    "Unknown239",
    "158",
    "人帅几把大",
    "74",
    "谁敢对Lusumi大人和全游最权威的叠谱不敬",
    "9",
    0,
    "27",
    0,
    "20",
    0,
    "203",
    "我要操荡。。。。。。。。。。。。。！！！！！！！！"
  ],
  [
    "cos(x)",
    "183",
    "于永恒中破茧而得新生，\n与往事相和解而塑自我\n与原版SUPERNOVA相似的剧情台词插入，却是不同的内核表达\n毫无疑问，超星循环是继aefp之后vivid/stasis至音游领域的又一在无论是长度，剧情切合度还是情感表达的多个层面的高山",
    "15",
    "入坑曲，这曲子除了混音真的还有任何缺点吗？这个长度摆在那里都是能把osu tb都给薄纱的级别，放眼整个音游区唯二能在长度上碰碰的只有后来的ofnr和超新循环，更别说结构和叙事非常清晰，衔接也很好，其他音游曲在aefp面前对比显得像儿歌",
    "198",
    "为什么说lavenir proche是神",
    "151",
    "没有元素的堆彻，朴素的Dnb和真挚的旋律却依然能够打动人心",
    "91",
    "原本枯燥无味的grode经过A-Saph的蜜汁Full Flavor改良后瞬间就成爽曲了\nCamellia core还是好听",
    "182",
    "Ｓ U  P  E  R  N  O  V  A  我  们  喜  欢  你  口  牙"
  ],
  [
    "fuyun",
    "64",
    "啊！宝宝们你们是香香软软的蓝莓、草莓、奶油、桃子味小蛋糕啊啊啊！",
    "71",
    "她自杀了（）",
    "47",
    "allison宝宝你最棒了！知道要保护自己女朋友啊！！！",
    "133",
    "这首很好听啊，这种风格我只在PHIGROS见过一首",
    "144",
    "传奇耐烧王，YADA！我是火龙王。那我就成全你们吧！（启动终末化）",
    "183",
    "依旧超长耐力，依旧制霸最严厉的父亲（断一下直接白打），目前见过最长的曲"
  ],
  [
    "chariot152",
    "206",
    "锚。",
    "15",
    "vs必吃榜(?)",
    "30",
    "trung-nova的曲子怎么这么好听啊我不行了啊啊啊啊啊啊我飞升",
    "74",
    "从这首开始认识的lusumi，然后就是溜冰嗯对",
    "175",
    "新年曲，这是proxime曲师团队第一次震撼到我，听哭了",
    "183",
    "neutronhexima的最后潜水为什么是神。"
  ],
  [
    "Cash1zo",
    "154",
    0,
    "14",
    0,
    "18",
    0,
    "32",
    0,
    "38",
    0,
    "49",
    0
  ],
  [
    "红富士平果",
    "181",
    "这首歌将鼓女士的风格提现的淋漓尽致，并与剧情完美契合，整首歌给人一种破碎的虚无的走马灯的感受，像无力地尝试把零散的回忆碎片拼凑，但一切都是徒劳感觉",
    "37",
    0,
    "47",
    0,
    "96",
    0,
    "183",
    0,
    "15",
    0
  ],
  [
    "supernova",
    "175",
    0,
    "5",
    0,
    "15",
    "aefp",
    "112",
    0,
    "164",
    0,
    "182",
    0
  ],
  [
    "咸番茄（saltomato）",
    "15",
    "唯一真神，还是入坑曲，走马灯的连贯性让我一度以为是原曲，前10分钟的铺垫把最后的高潮推向了最高点，最后的kick对轰把厮杀渲染的淋漓尽致，最后的钢琴旋律是人能写出来的吗，听一次哭一次\n最后，她如往常说了句：Good night！\nSaturday的故事结束了，也开始了…",
    "251",
    0,
    "74",
    0,
    "64",
    0,
    "160",
    0,
    "181",
    0
  ],
  [
    "夜桜",
    "52",
    "世界上最无敌的人声",
    "183",
    "最神演出",
    "106",
    0,
    "156",
    0,
    "176",
    0,
    "",
    0
  ],
  [
    "穆棱",
    "160",
    0,
    "52",
    0,
    "181",
    0,
    "182",
    0,
    "63",
    0,
    "64",
    0
  ],
  [
    "意泽",
    "232",
    "阳光中透着黑暗的曲子，就像哭完后挤出来的笑，我认为这首曲子很好的表达了Saturday的心境:即使世界是假的，依然爱着这个世界，爱着自己所爱的人",
    "15",
    "孩子们我被骗了，我根本不是生动停滞的句号\n无需多言，每个玩v/s的玩家都应该听的一首曲子",
    "1",
    "神曲",
    "69",
    "纯纯的冰",
    "252",
    "我心中v/s真正的句号，最盛大，最烂漫的告别仪式，旧的结束，新的开始\n少了trung_nova有点遗憾，至于阿道夫，这么浪漫的歌曲我们还是不要提他了",
    "160",
    "最后一次中场休息\n“晚安 tsuki.”\n女孩在崩坏的世界中向着剧院走去……"
  ],
  [
    "这是名字374",
    "175",
    0,
    "177",
    0,
    "160",
    0,
    "37",
    0,
    "30",
    0,
    "23",
    0
  ],
  [
    "kiwii",
    "125",
    "4 21 19 11\n4 1 23 14",
    "160",
    "SELF",
    "64",
    "后面听到self的旋律差点哭出来...N:H章节里个人最爱的一首！",
    "252",
    "撞星比起修正过后的版本，本人更喜欢修正前的。感觉情绪上的表达更强烈、更有感染力((",
    "181",
    "悲壮感",
    "194",
    0
  ],
  [
    "Nsoomnigs",
    "64",
    "eachother虽然融合了诸多主线重要歌曲的旋律等，但各个部分间的衔接非常自然，情绪极为饱满，算得上是为Saturday的故事画上了完美的句号",
    "160",
    "SELF给我的感觉像是一场告别，有些对过往悲伤不舍，又饱含着对未来希望，最后的升华更是美不胜收",
    "181",
    "Frums的又一神作，极致的情绪爆发",
    "96",
    "七拍子作为完整整体而非简单的3+4或者8-1，超级好听",
    "203",
    "拍砖，爽！",
    "18",
    "被trapstep炸飞"
  ],
  [
    "ziprager",
    "229",
    0,
    "233",
    0,
    "64",
    0,
    "210",
    0,
    "15",
    0,
    "37",
    0
  ],
  [
    111,
    "164",
    0,
    "37",
    0,
    "52",
    0,
    "87",
    0,
    "160",
    0,
    "175",
    0
  ],
  [
    "YFMonochrome",
    "21",
    "Encore章的最终曲，为故事画下了圆满的句号。",
    "248",
    0,
    "183",
    0,
    "181",
    "Tu fui, ego eris.",
    "64",
    "The FINALE of vivid/stasis",
    "156",
    "YOU ARE HAVING A HEART ATTACK"
  ],
  [
    "XIEFISH",
    "37",
    "无论过去多久，我都不会忘记有一首叫bloom in two的botanica+breakcore为一朵于长久循环中绽放的恋花作出了完美诠释。",
    "37",
    1,
    "37",
    2,
    "37",
    3,
    "37",
    4,
    "37",
    5
  ],
  [
    "frac",
    "181",
    "经历了美好，疑惑，震惊并险些崩溃的saturday，见到了这个模拟世界的核心，如果_是营造出DB核心一种诡谲又有些诱人的气氛，stop motion就是对sat经历了种种后内心的转变，开头混乱较为无序的节奏配上sv充满压迫而后归于静默，间奏逐渐平静又透露出一丝悲伤和迷茫，剧情插入后的音乐，我和sat一同感受千万个sat最后都没能打破循环的悲伤，随着最后闪回段开始，看着一幕幕定格画面闪过和cycle counts的增加，我仿佛能够感受自己的心情由震撼转为坚定，尾杀音乐听上去虽然背景依然嘈杂，却有明显的旋律，也象征着sat找到了一定要做的事情，内心虽有万千波澜，但都最后归于平静，也代表了sat的重大转变。这首歌是我心目中剧情和音乐和特效配合的顶峰。",
    "252",
    "创星确实是vs制作组献给玩家们最好的礼物，从主歌到副歌无处不透露出一种美好，快乐和安宁的感觉，又带点经历了一切得到平静的淡淡的伤感，结尾无疑是升华，斯人已逝，她将留在我们心里，我们也将带着这份美好继续向前，good night，tsuki",
    "15",
    "无需多言，主线剧情的集大成者，一切的终幕，这首歌将永远伟大，无论从音乐角度还是剧情角度，都称得上是我心目中音乐展现剧情，剧情配合音乐的高山。",
    "64",
    "所有的一切都是为了更好的明天，而经历了这么多事，我们庆幸还拥有彼此，eachother虽说也是串烧，却也融合了四个灵魂的特色：sat作为protagonist活泼，storyteller的静默，tsuki作为worldkeeper的冷峻，dawn作为liberator的打破一切的决心。无论时间，无论世界变化，她们都成就了SELF。",
    "159",
    "SEIKAISEN作为LD开场曲，意境塑造近乎完美，听着就有一种世界线收束的震撼，也感受到正在爬升。间奏让我联想到了群星般的多个世界泡闪闪发亮的样子。是一首极为优秀的曲子，虽说是大时探，却展现出完全不同的意境.",
    "206",
    "US，作为worldkeeper的角色登场曲，对角色的形象心境刻画非常生动：一个冷峻肃杀的循环维护者，内心又有些悲凉的，不知内心感受的人"
  ],
  [
    "ryy",
    "47",
    "霸道绿毛护妻（？",
    "206",
    "碎核万岁",
    "210",
    "第一次了解到vs还是phi联动",
    "",
    0,
    "",
    0,
    "",
    0
  ],
  [
    "烧烧饼饼",
    "15",
    0,
    "251",
    0,
    "249",
    0,
    "252",
    0,
    "183",
    0,
    "151",
    0
  ],
  [
    "ryanchen",
    "64",
    "真神（反馈self不够难的有福了）",
    "183",
    "新剧情巅峰",
    "177",
    "个人觉得改的最好的一首",
    "159",
    "太符合剧情了",
    "182",
    "第一次玩的时候泪目了",
    "251",
    "en18  ？？？？？？（改了）"
  ],
  [
    "星河流萤",
    "181",
    "Frums神曲。全曲情感都很高昂，感觉有种与命运抗争的激情。\nstop对stasis，motion对vivid，正好相反，象征扭转命运。\n全曲呼吸感很强，也就导致张力与起伏不一般。底部伴奏比较脏乱，反而衬出干净的主旋律，在污泥中重构新生。\nFrums is god.",
    "15",
    "终章魔王，13’55”超长曲，同时也是我入坑曲。\n与其说是音乐，不如说是故事。\n戏中那二人，本是同源，却渐行渐远。在最后时刻，一人仍放不下挂念，但另一人却已麻木。面对深深的恶意（烤Sat这一块），仍选择与自我和解，这就叫魄力吧。\n那A C D E——的四个音，在最高潮时插入，反而显得悲伤。斩断的不仅仅是4个track，更是被束缚的循环与命运。\n那一声轻叹，是无奈，是放弃，更是和解。\naefp其实不好听，我只连续听了50遍就不想听了。（再串打死）",
    "220",
    "非常可爱的一首小歌",
    "30",
    "BEGIN.\n在原曲旋律上做了很大调整，更干净了。底部kick初听意义不明，但其实为上升的旋律奠定基调。",
    "183",
    "好听。\ndawn紫砂的时候给我看愣了。",
    "252",
    "诶不是你怎么似了。\n本来挺好的，改太空了。"
  ],
  [
    "_iteractor",
    "87",
    "元人类男孩牛逼！三连音的听感很奇妙，第一次听是过完主线的第二天，旋律好像是saturday在哭着回忆破暮者里发声的事，感叹这一路上的艰险，还有对光明的明天的期盼！",
    "252",
    "我永远忘不了那个元旦！",
    "182",
    "一枪击碎了循环与saturday的命运！",
    "119",
    "不知道曲绘是什么意思",
    "63",
    "雷霆歌曲，像是在商场刚退勤回家路上刮雷雨把伞吹飞了（（（",
    "104",
    "“Would you  take it？”\n一个背影，一首片尾曲，为duskbreaker中的故事画上了句号。\ngarlagan是神"
  ],
  [
    "想要一个AC的萌新",
    "183",
    "听完此歌，Vivid stasis再无遗憾。\nkyotsugyon你是我爹。",
    "47",
    "神曲神谱神演出，独属于Allison一个人的魔王曲\n＜老婆我来救你了>是什么歌?\n情绪太丰富饱满了，个人top1.000000000000000000000001",
    "251",
    "Kye.exe VS Ardolf VS Rn\n神奇的组合,一样的劲爆\n作为sunrise showdown2024的魔王曲当之无愧\n说实话，游戏里要是能把那个PV也搬过去就好了\n整体节奏非常的爽，旋律很抓耳，还有我最喜欢的劲爆lead和kick\n听完太爽了😄😄😄😄😄😄\n但ENCORE的配置太难绷了😨",
    "206",
    "Unraveling Stasis\n当时就很想让phigros联动拿这首。\nI'avenir proche一位没入坑前不认识的曲师，入坑后就特别喜欢他的曲子。\n只可惜b站没他号了，他本人也放弃作曲了😔\n只能用US来纪念一下了",
    "160",
    "SELF\n神曲，无需多言\nv/s玩家没有一个人过这段剧情时是不会哭的。(┳◇┳)\n怀念tsuki第8266次",
    "222",
    "xΩ\nn-my老师"
  ],
  [
    "change",
    "203",
    "最后通牒\n夯爆了，vs最喜欢的一首，个人观点听感能和supernova齐平吧\n前半段像一声令下大炮齐射，尾杀前有一声的上膛声音，然后疯狂开枪的这样子，溜大了😆",
    "15",
    "aefp，绝世神作，个人感觉中间段听感稍微不太好，瑕不掩瑜。",
    "253",
    "牙刷😭我的牙刷😭还我牙刷😭\n很有特色，，时长短，重复段多，但是真爽\n听的时候总是想起牙刷配置",
    "71",
    "α章魔王曲，喜欢，还有剧情和特效加持，从头爽到尾，过完终章剧情后很久没有这么爽的曲了",
    "182",
    "supernova，主线唯一真神，这么伟大的作品竟然不能联动出去\n听星星循环的时候就没有第一次看到超新星的震撼了，虽然星星循环也夯",
    "18",
    "all i ever wanted ，推last dive前面那四个gate里面唯一留有印象的，\n怎么我喜欢的都是曲绘里有dawn的"
  ],
  [
    "whaleeee",
    "206",
    "真爱票投给了情怀。无法忘记刚开始玩v/s，只能打13的我硬是用几十把磨破了紫U锁，也正是l‘avenir proche这首完美的魔王曲激励了我继续玩下去，从而邂逅了更多优秀的曲目。乐音的顿挫抑扬完全牵动着我的心，如同正在Saturday视角被枪指着（x）这不一定是l‘avenir proche最好听的作品，但在第二章这个位置，在这个将故事由点铺开到4个layer的关键节点，是对剧情的最完美展现。",
    "15",
    "无需多言，没给真爱是因为感觉不缺我一个（x）整首曲的连贯性真的没得说，初见浑身鸡皮疙瘩，由幕起到幕落的感觉把握的极其到位。一场荒谬又感人的戏剧，一首勇气与希望的赞歌，一个故事最华美的结局，和另一个故事的开端。",
    "198",
    "这票其实是投给终章四大天王的，个人还是最喜欢l’avenir proche的展现，所以选这首为代表。这个节奏，这个音色，每一下都在往我心巴上戳…嚎听炸了！",
    "151",
    "本来想给evaniscentia的，不过这首的演出与旋律打动了我。前半段给人一种追忆感，副歌…“死亡没什么大不了的。”dawn啊dawn啊你好坚强😭另外a章结束的那首曲子也很好听！！",
    "183",
    "无需多言的神曲，我长耳朵大概就是为了听这个。犹如一颗明星爆发，最绚烂的光，与宇宙中无尽的回响，最终归于沉寂。kyotsugyon牛逼。",
    "181",
    "stop/motion对应vivud/stasis，可以说是整个游戏格调的奠基曲。于极度混乱中的极致静谧，是鼓为storyteller谱写的诗篇。初听没带耳机并无感触，随着深入游戏，再听就浸透在这独特的音色里，如同超脱了束缚向着成为“自我”进发，不禁泪流。一人血书颁发最震撼奖！"
  ],
  [
    "puguang",
    "15",
    "神曲无需多言",
    "160",
    0,
    "183",
    0,
    "252",
    0,
    "181",
    0,
    "64",
    0
  ],
  [
    "hnzero",
    "37",
    0,
    "175",
    0,
    "177",
    0,
    "182",
    0,
    "183",
    0,
    "",
    0
  ],
  [
    "Shive",
    "175",
    "牛逼",
    "37",
    "牛逼",
    "188",
    "牛逼",
    "",
    0,
    "",
    0,
    "",
    0
  ],
  [
    "Stellar1a",
    "64",
    0,
    "56",
    0,
    "",
    0,
    "",
    0,
    "",
    0,
    "",
    0
  ],
  [
    "我的名字",
    "1",
    "想當初過劇情時被這首歌的抽離感和充滿張力的鋪面震撼到了，完全無法忘記。神曲一個，其表現太合我的胃口了。",
    "37",
    "我太愛breakcore啦（）",
    "48",
    "小清新，偶然聽到能快樂一天",
    "160",
    "單看歌曲本身能與其比擬的其實有很多好曲子，但它靠著與故事的契合達到了1+1趨近無限的高度，堪稱強中強",
    "181",
    "在《_》之後感受到的二次震撼，frums依舊權威",
    "15",
    "v/s最偉大的詩篇，一路走來承載太多的回憶了。good night,vivid /stasis"
  ],
  [
    "aaa",
    "182",
    0,
    "52",
    0,
    "159",
    0,
    "191",
    0,
    "233",
    0,
    "251",
    0
  ],
  [
    "浮光",
    "198",
    0,
    "80",
    0,
    "206",
    0,
    "251",
    0,
    "182",
    0,
    "157",
    0
  ],
  [
    "GoldenSun17",
    "125",
    "这一首曲目的拍号变化多样性算是最大的亮点之一了，我曾经做过拍号分析，并且发布在了相关评论区，以下仅为个人见解(我不太了解剧情)。\nBPM180。一段很短的引入，像是倒叙一般，一声卡顿带入了曲目。一段钢琴成功营造出了幽暗的 Nightshade(夜晚、影子)的氛围，急促的钟表声、几下Kick、悠长的人声、渐入的碎拍给人以紧张之感。一小节短促的 2/4 拍打破了原先的 4/4 拍的秩序感，在跌撞中很自然过渡到 7/4 拍。Neurofunk的底色恰好适配了本曲的黑暗风格。开始是零星的钢琴声、突显的Kick、优美的提琴，像是一个人在黑暗中艰难的摸索前行，之后的钢琴忽快忽慢更突出了这样的跌宕起伏之感。然后异象徒生，11/4 拍由 3/4+3/4+3/4+2/4 交替构成，不整齐的拍号、加快的速度、碎拍中描写了内心的不安，类似于节拍器的声音与比较圆滑的Kick给人紧张焦虑更有压迫感，似是在黑暗中找不到出路。再次 7/4 拍已是速度的高峰260，像是在重重困难中跌倒一般，3小节后是 8/4 拍，多出的一拍使人意犹未尽。原先的紧张在速度减半至130后已然消失，拍号变回到 4/4，这里对于环境的叙述中多了几分凄凉。一会后速度重新加快到原本的180。一声 “Night” 采样，好像暗示着深夜到来，延续了之前的旋律，无尽的阴影涌来。再后是报数采样段是根据字母顺序编译的，4 21 19 11 (DUSK黄昏) 4 1 23 14 (DAWN黎明)，在黄昏与黎明间正是黑夜，黄昏与黎明的交织似乎是幻觉，报数后的正弦波暗示了这一点，其中稍有灵动的旋律更衬出这中不真实。报数之后，这个旋律再持续了一会，带着些许人声，似是幻觉消散。曲师采取了与之前类似的方式Build Up，高潮到来，好像是对暗黑、阴影作出的最后的斗争。特别的是后半段Drop，曲风突然换为了 Hardcore，更是激烈，Kick通过强弱拍的交替很好的适应了 7/4 拍。结束的一小段微弱的旋律，似乎描绘着天边亮起来了的样子，但在似于倒放的音色中，才看清了，那只是月光。\n在铺面上有趣的是，报数段的采音，Finale (小键) 与 Encore (长条) 都选择了采下人声，通过第几轨来反映了报数内容。",
    "62",
    "十分优秀的作品，前面可能略显比较鬼，但仔细去品味乐趣无穷，让人在这场梦中越来越深，有种天旋地转的递进感。脱离了之前Trance，带有了一定的碎拍、实验，曲目变得激烈。最终再次回到Trance，旋律卒章显志，音色带来独特的空灵感，梦也该醒了。最后的零星的旋律与Psytrance搭配让心最终回归到平静。",
    "224",
    "Frums的曲，很可惜vivid/stasis没有铺面，风格比较偏向早期，一首十分优秀的Breakbeat。Frums很擅长在曲目中烘托氛围感，直入人心的传递情感。用风形容这首曲再贴切不过了，无规则的热运动之下又藏着坚定不移的匀速直线运动。天堂中模糊的风之声，传达飞翔的感觉。在心潮澎湃的驰骋，或者空旷苍穹独一无二的孤独感中，当你想不顾阴霾继续前进时，不妨听听这首歌吧。",
    "216",
    "铺面虽然说有些失望，采音舍弃比较多，也没有顺应歌曲特点写SV，但是歌曲本身很优秀，尤其是没有裁剪的六分钟长版。独特的编曲，混音很干净，而音乐中的休止带来卡顿感更是趣味盎然。",
    "97",
    "nitro独有的故障风的编曲，在一直蜿蜒向上而无序迷茫的旋律中透出的一种特别的氛围，神秘、心悸而微妙，而铺面的特效也就很好的诠释了这一点，MULTIPHEX也是同样的道理，六分半的长版十分值得一听。",
    "96",
    "常人难以驾驭的七拍子写得趣味盎然，令人惊叹。这首歌曲完全没有照搬四四拍的创作框架的意思，而是顺应四七拍的特点，巧妙地把节奏切分，保留七拍子的实验性，同时也照顾了听众的听感，做到了让律动“奇”而不“怪”，丝毫没有刻意而为的痕迹，可谓浑然天成。纵观全曲，从张弛有度的Bassline，到恰到好处的声效点缀，再到淡雅自然而富有浮游感的旋律线，起承转合间处处透着优雅的气质，配合着纯净朴素的音色设计，营造出恬淡却意趣十足的独特意境。"
  ],
  [
    "阿绫阿绫吖",
    "15",
    0,
    "251",
    0,
    "37",
    0,
    "80",
    0,
    "52",
    0,
    "117",
    0
  ],
  [
    "cyhg",
    "3",
    "如果我想用一个字来形容这首歌，那就会是“萌”。曲师Kyotsugyon的这首歌，完美地体现出了开心的情感",
    "1",
    "简直就是神曲。不安的弦乐器，掺杂着杂乱的电子音效，再加上疯狂的谱面，无疑是真个游戏中令人难忘的一幕。",
    "63",
    "雷霆歌曲，雷霆谱面，我好喜欢。如果曲师打算继续为音游写歌，我会拭目以待",
    "156",
    "曲师lexycat的个人专辑Dark Blossom在我的心底刻下了深深的烙印。当我得知她为v/s写了一首隐藏魔王曲，而且是Dark Blossom其中一首歌的改写的时候，我就已经知道这首歌肯定不简单。\n\"YOU ARE HAVING A HEART ATTACK.\"",
    "207",
    "变速、变拍数好好玩。\n整首歌的杂乱无章，充分体现了db系统糟蹋的故事情节。\n\n我花了整整两晚才算得出这首歌的bpm。我再也不想做这种东西了",
    "230",
    "Frums的神曲。一首情感忧伤却节奏极快的歌曲，也是我所有音游之中所听过最喜欢的歌曲之一。"
  ],
  [
    "挽酥",
    "37",
    "bloom in two就是最吊的！\n作为我的入坑曲 在我的心中占有无可替代的地位 在终章众多曲子中 bit如同一股清流一般出现在玩家眼前 小清新的碎核 灵动的旋律 让人耳目一新的曲风牢牢抓住了我的耳朵 pv的风格也有着简约清新的感觉 完美诠释了Allison的性格特点 虽然自我零碎却依旧有着那颗纯洁的内心 同样曲子零零碎碎的拍子也像duskbreaker逐渐分崩离析 而在破碎的世界中 Allison与Saturday的感情 就如同一道清风拂过这片废墟 随着曲子的高潮渐进 零碎的音符凑出了完整 震撼的音调 让人不由得起一身鸡皮疙瘩 一遍一遍振奋人心 他没有炫酷的异象 没有强劲的节奏 但却让人留下来深刻的印象 就如同曲名一样 与你我之间绽放 也昭示着Saturday和Allison俩人纯洁的爱恋 而这份爱恋 也是她们坚持到现在最关键的决心\n在破碎的 虚拟的世界里 但你我之间的爱 是货真价实的 无可替代的",
    "3",
    "非常轻快 灵动的曲子 非常可爱 猫猫Allison可爱捏。。。曲子如曲名一样 像猫儿轻快的步伐 也展示出了Allison的另一副面孔 爱抖露！总之是一首听完后会在脑中反复重复的旋律",
    "15",
    "戏已完结 请鼓掌\n作为游戏的谢幕曲 无疑 它的地位是所有vs玩家心中无可替代的 虽然是一首长曲 但是编排 整体风格都不分裂 很和谐 因为没有因为是剧情曲而听感贡献给了功能性 从一开始到结束只能用一个词概括就是 震撼 无论是开头的钢琴 空灵的回荡在剧院里 再到后面串烧段 繁多又不失秩序 就像一点一点回顾来时路 一路的坎坷 也该画上句号了 随着尾杀 高潮段到来 剧情也达到了制高点 紧迫的节奏 加急的鼓点 一步一步把整个剧情推上了制高点 最后一击 来吧！ 随着轨道的断开 一切的一切最终迎来了他的句点 一切 结束了 结束的是8266次轮回 是无尽的战争 是无法互相理解 是泪水\n结束了 是啊 结束了",
    "47",
    "“这便是我的选择”\n是我厨Allison的开端 这首的剧情刷新了我对Allison的看法 她穿上了铠甲 举起了大剑 一改当初软弱的自己 担任起了骑士的职责“这次该我来守护你了” 即便从未为自己活过 即便被人看不起 但她用自己的行为 自己的决心 来证明 她不会只是一个配角 不会只是那个需要被Saturday保护的人 她也可以保护大家 \n面对dawn的嘲笑 她不退缩 不害怕 勇敢的面对 她 真正的证明了自己\n这份名为“爱”的勇气 成就了她的勇气与决心",
    "64",
    "我是你们 你们也是我 没有你们 就没有我\n让人震撼不已的一首曲子 正如曲名一般 它概括了这一路上 这8266次循环的不易 是感慨 是感动 是欣慰 随着曲子的结束 cg的出现 让人不禁感慨 是啊 都结束了 是结束 也是我 不 是我们的开始",
    "160",
    "goodnight Tsuki\n第一次泪目的地方 轻快的曲调却包含着浓浓的悲伤 是分别 又是重逢\n是日思夜想的亲人 也是必定接受的事实 最后一次中场休息 随着剧情的放出 一改轻缓 悲痛的曲调 随着最后一次拥抱 互相叨着再见与思念 分开后 曲调上涨 达到高潮 泪水不禁在眼眶打转 最后的落幕 坟墓的出现 眼泪控制不住的下流 爱 但是你我阴阳俩隔 无论是谁都很难做出这样的决定 但对于Saturday来说这是必须面对的 他无可选择 即便不是自己的姐姐 但这份念想是不可消散的 但为了大家 只能这样接受\n最后 晚安 goodnight！"
  ],
  [
    "彩色大橙子",
    "15",
    "一首独属于vivid/stasis的史诗🙏",
    "47",
    "亲爱的我来救你了是什么歌🗡️",
    "177",
    0,
    "182",
    "游戏内第一次曲目中插入剧情的地方，当时玩到这里的时候真的超级震撼😮，曲本身也是神曲，神中神(¯▽¯)👍",
    "181",
    0,
    "160",
    "在终章这么紧张的节奏下有一首优美抒情歌真的很打动人心❤️\nfinal intermission……\nTsuki😭😭😭"
  ],
  [
    "雾鸣k",
    "37",
    "💚💚💚",
    "3",
    0,
    "156",
    0,
    "21",
    0,
    "183",
    0,
    "181",
    0
  ],
  [
    "一朵杨阳泥",
    "20",
    "在这首和入坑曲之间来回徘徊，最终还是选了这个ˆ-ˆ\n我说真的，这个曲子初听给我的感觉真的很惊艳，现在仍在仔细品鉴（？）\n我不会音乐分析啊qwq但是我就是觉得很神，所以把真爱给了它🥹（我去我写留言怎么这么草吓哭了qwq）",
    "71",
    0,
    "53",
    "神了，我喜欢这个的8-bit音色",
    "80",
    0,
    "151",
    0,
    "156",
    0
  ],
  [
    114514,
    "1",
    0,
    "14",
    0,
    "76",
    0,
    "143",
    0,
    "48",
    0,
    "79",
    0
  ],
  [
    79835706600,
    "52",
    0,
    "249",
    0,
    "247",
    0,
    "248",
    0,
    "230",
    0,
    "232",
    0
  ],
  [
    "BirdX",
    "198",
    "欸我怎么在天上飞啊",
    "206",
    "Unraveling the lock of stasis,releasing the vivid beginning.",
    "96",
    "l'avenir proche牛逼",
    "64",
    "Good morning！",
    "181",
    "stop-motion,but never stopping motion.Frums伟大无需多言",
    "222",
    "旋律太强了，很符合Chiyo给我的感觉"
  ],
  [
    "whewyhe",
    "18",
    0,
    "233",
    0,
    "181",
    0,
    "182",
    0,
    "160",
    0,
    "198",
    0
  ],
  [
    "=P",
    "53",
    0,
    "20",
    0,
    "21",
    0,
    "62",
    0,
    "233",
    0,
    "56",
    0
  ],
  [
    "beforebackspace",
    "71",
    "f2是谁？？不管了反正这个怎么这么好听。。Silentroom vs. Laur vs. Team Grimoire是你们吗。",
    "",
    0,
    "",
    0,
    "",
    0,
    "",
    0,
    "",
    0
  ],
  [
    "千まん",
    "206",
    "Unraveling Stasis是我目前v/s最喜欢的歌曲，无论是切碎的钟声，还是优雅的唱诗班，都为故事增添了沉浸感，作为第二章的里魔王，这首曲子的异像可以说是当时的巅峰，一直期盼这首曲子联动出去，甚至做了这首曲子的自制谱，可以说l'avenir procheNB！",
    "37",
    "开头戳我，碎核，爽！",
    "3",
    "开头戳我awa",
    "106",
    "This is you last wish",
    "59",
    "v/s甚至给联动曲安排上了异像，phi排面！",
    "156",
    "！？工工？！"
  ],
  [
    "开口剑要学JS",
    "252",
    "“from hajimeli with love”\nv/s官方给我们最好的新年礼物，出色的谱面演出以及非常好听的歌曲，虽说是STARGAZERS的续作但其意义以及超过了它；\n个人感觉修订版写的有点没味道了，最喜欢的还是旧版\n“I'll see you again someday, okay?”",
    "222",
    "chi omega ×\nchi(y)o mega √\nnm-y写的最好听的一首艺核，它给我的惊喜正如歌名：Unknown Absolute！",
    "181",
    "from stop to motion.\nFrums个人最佳，在混乱的鼓点中极具张力的旋律真的惊艳到了我？",
    "182",
    "“Because I'm sure as hell not！！！”\n速核还能这么写？！！\n中间剧情插入帅炸了！",
    "3",
    "突然的开始，突然的结束，动人的旋律，好听！",
    "160",
    "感人的旋律！\n再见，tsuki"
  ],
  [
    "X2s0ne",
    "21",
    "游戏尽头的神曲，顶级的情感爆发",
    "24",
    "hardcore是对的，rawstyle是对的",
    "178",
    "自认为log（）最温柔的一首",
    "156",
    "工工工？",
    "232",
    "标题曲，平静中带有如同时间倒流般深沉的情感",
    "15",
    "Dawn,I want to 和你PVP！"
  ],
  [
    "Touyousaki",
    "181",
    "※含有剧透成分注意 \nfrums的作品，个人认为在各方面都完美契合、描述storyteller的曲目。在入坑曲aefp和这首中抉择了好一会，还是打算选这首…如果aefp是入坑vs的契机和意犹未尽旅程的落幕，那stop-motion就是愿在结束后也于vs多停驻的片刻。过剧情的时候一直觉得这首很震撼，现在也是，无论回听多少次，总是能够感受到过往初次过剧情的那种…心灵上的颤抖。前半段开头，类似于机器开机时的电流声缓缓增强，伴随启动融合的代码（鼓点）落下与消逝，感觉在暗示着融合只不过是一瞬的事…配合着之后引入的断断续续的主旋律，以及不连续的鼓点，真的像是听见了数据融合时机器运作的轰鸣声…再以宁静的钢琴音反差地激发出第一段高潮，却又转瞬即逝，接着各种叮当作响的乐器像是在把storyteller的记忆撕扯、压缩进sat的头脑中一般，最后归于平静，表明融合已进入尾声。最震撼的点在于…数据融合和超频循环的剧情插入都是在这同一首中。以chiptone的衔接将sat带领入storyteller的记忆世界，不仅是让sat，也让玩家能感受到storyteller那经历上千次循环中的情感。后半段渐起的尖锐的lead，更加急促的鼓点，随着空旷的音色响尽，谱面上方不断增大的循环数，不断闪烁切换的红蓝背景，就如同描述sat在逐渐和storyteller的记忆交融中，sat经历/观看了storyteller所见的每一片记忆，每一次循环，以及她所有的心路历程。她是全知的叙事者，但她曾无法干涉叙事，忍受过无可奈何的孤独，未知前方的犹豫不决。最终在lead的尖啸中爆发到最高点，这一切苦涩、孤独、不甘、压抑、亦或是决定后的坚定，似storyteller的心灵的呐喊，全部被释放出来。最后曲目渐淡，storyteller消失，回归sat意识中，使她升华更加完整…也许大半的评论都是个人的主观臆造，这首曲在frums的一众作品之中也称不上最完美的，但，个人认为好曲的定义就是充分的情感调动、契合剧情，这首曲目显然做到了这一点。那么，在结尾祝愿…这首曲能拿到一个好成绩。",
    "182",
    "由在破暮者中坚持不懈的角色们共同铸成的奇迹。跃动吧，超新星。不在沉默中爆发，就在沉默中灭亡。",
    "80",
    "storyteller给予sat的最终考验时的配曲，很帅。叙事性更强了",
    "15",
    "戏已落幕，请鼓掌。非常震撼的功能性与听感兼备的曲子。追寻自我心灵旅程的完美谢幕",
    "27",
    "给予玩家的考验。“你愿意接受任务，直面叙事的极限吗？”",
    "21",
    "神"
  ],
  [
    "4h_0x1",
    "252",
    0,
    "3",
    0,
    "15",
    0,
    "64",
    0,
    "83",
    0,
    "183",
    0
  ],
  [
    "Diary*",
    "155",
    "aefp很耐听，和剧情联系到一起很有纪念意义，前后钢琴段神了，魔王曲remix串烧听着也很好",
    "37",
    "bit碎核风格好听，安静的音乐与破碎的节拍简直不要太神",
    "71",
    "这首歌感觉和v/s不太配，但不影响好听，打击感很强，主歌部分音乐写得好",
    "87",
    "就是很有希望感和宿命感（？），芯片风好听",
    "175",
    "撞星够浪漫，satalli99！",
    "183",
    "新星循环也耐听，中间打击乐神了，后面电吉他音调配kick写得够爽"
  ],
  [
    "啊啊啊史",
    "64",
    "这期神了，从开头到结尾的串烧十分爽，log()神了，v/s也神了",
    "1",
    "极致的混乱，极致的神巅",
    "18",
    "十分爽trap，SH0WTIME你牛大了",
    "123",
    "真有人投么？",
    "7",
    "很好，但剪烂了",
    "23",
    "回来吧我的ardolf（/(ㄒoㄒ)/~~)"
  ],
  [
    "IWannaFans",
    "15",
    "非常震撼惊艳的结局。",
    "21",
    0,
    "47",
    0,
    "64",
    0,
    "117",
    0,
    "151",
    0
  ],
  [
    "阿巴阿巴",
    "230",
    "战斗仍在继续。呐喊仍在继续。命运永远地交织在莫比乌斯带上,一次次重蹈着生与死的覆辙。\n作为第三章bad ending过场音乐，We Want to Run在此处完美契合了vivid/stasis的主题\nHERE WE GO AGAIN，原作为曲目中的采样，在游戏中又仿佛述说着命运的无力，又带有对结束这一切的渴望\n而随后的高BPM和8-bitdrop可谓神来之笔，将听众置身于8266次循环的冲刷之下，解放者和护界者的怒火，主人公的绝望，情感在此刻喷涌而出，席卷着听众的心灵。\nFrums让你飞起来！Far in the Frums sky！",
    "71",
    "Evaniscentia神了",
    "15",
    "acta est fabula, plaudite神了",
    "64",
    "eachother神了",
    "56",
    "Dark Star神了",
    "37",
    "Bloom in Two神了"
  ],
  [
    "AZxzr",
    "15",
    0,
    "15",
    0,
    "30",
    0,
    "47",
    0,
    "182",
    0,
    "183",
    0
  ],
  [
    "CTENO1D",
    "15",
    "绝对的长曲，由此而生的终结，教会你爱的是...",
    "52",
    0,
    "58",
    0,
    "64",
    0,
    "80",
    0,
    "159",
    0
  ],
  [
    "AZxzr",
    "15",
    "\"GOOD NIGHT！\"",
    "37",
    0,
    "156",
    "▅▅▅\n▅\n▅▅▅\n   ▅▅▅\n         ▅\n   ▅▅▅\n   ▅▅▅\n      ▅\n   ▅▅▅\n你是正在有一块心脏的攻击",
    "181",
    0,
    "182",
    0,
    "203",
    "荡发儿音的不如四该是什么歌"
  ],
  [
    "RS-超音速",
    "151",
    "renatus在我游玩vs之前是没有听过的，在chap alpha的时候一进入到歌曲的前奏就深深吸引了我 不错的铺面质量和近乎完美的gimmick相结合更是为歌曲添加了令人震撼的视觉效果 我初见之后忍不住的想去打第二遍第三遍 直到现在我的vs1群群昵称还带有renatus 这首歌整体的情感走向十分合理且适宜 作为我全vs唯一一个放在favorite文件夹中的歌曲 我觉得是我在vs中无论是歌曲还是谱面都一定会排到第一位的曲目",
    "123",
    0,
    "151",
    0,
    "64",
    0,
    "207",
    0,
    "211",
    0
  ],
  [
    "__sora__",
    "187",
    "Memory and Disarray.\n从入坑到完结撒花都无法忘怀的神曲，个人Frums最神作。从下划线对sat心灵创伤的描绘（SV)到这首的情感爆发——痛苦，抗争，悲凉，愤怒在融合进程中尽数迸发。最后storyteller的消失，sat与荡的斗争正式宣告循环的彻底终结。从此主角团真正踏上了逃离Duskbreaker的路途，saturday也终于摆脱失去tsuki的创伤，直面未来的希望与坎坷——尽管前路漫漫，但背负着自我救赎的重任，saturday会在自己的道路上行则将至。\nstop-motion堪称真——vs主题曲，混乱暴力乃至突兀的鼓点映衬出来的却是令人宁静的旋律。尾杀的高速鼓点的轰炸更是纯粹的情感调动。鼓奶奶的个人风格完全保留下还能有如此贴合故事的发挥（上一首带给我这样深刻冲击的音游曲还是光追），私の母亲还是太权威了（\n真爱票为啥只有一张啊啊啊啊啊啊啊啊啊啊啊啊啊啊投出去的全是真爱你让窝怎么选啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
    "177",
    "Tatsunojin好改改出阿道夫永远写不出来的高度阿道夫就受着\n超级积极向上充满希望的合作曲，合作浑然天成有BlackYooh vs siromaru风范，但enc啥音不如fin一根",
    "1",
    "没有stop-motion这个就是真爱了啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊(6.12记现在仅次于unsigned amalgam了)\n神曲神谱我懂得欣赏\n交响乐风格足够震撼同时gimmick震撼贴歌搭配剧情完全是情绪调动\n这期神了",
    "198",
    "拜谢l'avenir proche\nNicibotsu姐妹的主题曲,即使是初听也能体会到独特的个性真是夯爆了\nunity nexus四神最爱没有之一\n虽然但是gimmick600+(((",
    "206",
    "依旧没有stop-motion就是真爱(((\ntsuki神曲无需多言\n全曲没有情感爆发但是依旧充满冷峻和悲伤,完全就是Worldkeeper的特性啊l'avenir proche是我叠\n这期又神了",
    "3",
    "v/s不能没有Kyotsugyon\nv/s不能没有Kyotsugyon\nv/s不能没有Kyotsugyon\n这家伙是怎么把polyrhythm写的这么抓耳的拜谢\n8-bit音色空灵感拉满旋律封神谱子更是首个单曲w7大水分vs怎么会有这么完美的东西哦吼吼吼吼吼吼吼吼\n还有本来想投启的但是阿道夫啥福"
  ],
  [
    "gr0def1sh",
    "123",
    "我家 没啥说的(\n好了来点正经的 这个游戏将一个看似没啥用的小游戏做进shatter中其实是别有他的用意的 音游对于精力的消耗是巨大的 而钓鱼小游戏正好能作为放松的地方 the river中各种各样的鱼更是给玩家带来更多的欢乐 最后 编不下去了你怎么知道我10勾钓了4个自己(",
    "90",
    0,
    "91",
    0,
    "92",
    0,
    "93",
    0,
    "94",
    0
  ],
  [
    "一只大土豆",
    "160",
    0,
    "160",
    0,
    "160",
    0,
    "160",
    0,
    "160",
    0,
    "160",
    0
  ],
  [
    "lieskh",
    "15",
    0,
    "183",
    0,
    "232",
    0,
    "222",
    0,
    "106",
    0,
    "151",
    0
  ],
  [
    "daite",
    "222",
    "设电阻为x（）这太好听了你知道吗 ——daite",
    "80",
    "打完我呼吸是第一次呼吸吗（）——daite",
    "15",
    "终章神曲，无需多言——daite",
    "182",
    "虽然有15分钟超长加长版但我更喜欢原版——daite",
    "45",
    "If you think I'm going to just sit here and let you cycle reset after we've come this far…😔 …you clearly haven't known who I am from the start！😠 HYSTERICAL！ Look who's talk now,little miss 'miracle can't save us'！😂 Seems like I had a change of heart.I guess that makes me more human than you, huh?😏 WORLDKEEPER…！！！😡——daite",
    "22",
    "萌新时期的曲子，神曲啊！——daite"
  ],
  [
    "Luray_init",
    "99",
    "我必须给Idealized Nilpotency投上真爱\n在这首歌出之前我一直在SUPERNOVA和Unraveling Stasis之间徘徊\n这首出了直接无脑改票\n一首神级full flavor，涵盖Hardcore,EDM,Hi-tech,Hardstyle,Dubstep,Artcore,Speedcore等曲风，衔接到位，听感劲爆，是一首不可多得的神曲（铺面也很神）",
    "1",
    "滚木是什么歌（\n两位曲师做出了一首非常有特色的偏交响乐的曲子，配上铺面的神级演出，让人心生压抑之感\n个人喜欢最结尾那段非常混乱的旋律",
    "18",
    "神曲神人，后面忘了\n你问我为什么说神人，你看pv就知道了",
    "47",
    0,
    "159",
    "这首神了\n曾经溜到忘记自己要睡觉一直听到了凌晨3点",
    "74",
    "冰！冰！冰！\nLusumi神曲，包括两首续作"
  ],
  [
    "grode.",
    "56",
    0,
    "175",
    0,
    "181",
    0,
    "182",
    0,
    "45",
    0,
    "27",
    0
  ],
  [
    "Pcho",
    "1",
    "不知道为什么，我对噪音、故障音有着极度的痴迷，可能因为这个原因我对extratone产生了强烈的兴趣。但是这首，交响乐后面以无节奏的故障结尾，却成功的对上了我的电波，_可能是除了SUPERNOVA等一众魔王曲以外最喜欢的曲子了。",
    "119",
    "这首曲子可能受xi先生的Aragami的启发，无论是从结构还是情感上都和Aragami有异曲同工之妙，总之神曲。",
    "121",
    "Attoclef给v/s提供的独占曲里最好听的一首，毋庸置疑",
    "203",
    "Hardcore nb.",
    "183",
    "说实话，这首曲还没有上架的时候我觉得aefp简直是巅峰，但现在不一样了，毕竟是SUPERNOVA加长版，也是剧情里的又一大转折点，意义非凡。",
    "207",
    "只能说Kyotsugyon真的会编排节奏，就是这首太短了……"
  ],
  [
    "Alphacodmyyds",
    "183",
    "如果说，去年的acta est fabula,plaudite给vs画上了一个句号，那么超新星循环周期就是把那个句号改为了逗号，并加上了一个完美的感叹号。虽然在看到这首歌之前我们经历了重重阻碍，但当你真正开始沉下心来游玩这张谱的时候，你就会知道这首歌到底为什么被玩家封为“自acta est fabula, plaudite 之后的又一首代表vivid/stasis的神曲。”鉴于内容涉嫌剧透，我只能告诉你这首歌有十足的情感推进，丰富的层次，尤其是末尾电吉他一出来，把SUPERNOVA这首歌抬升到了一个新的高度，意味着它已经不是原来那个SUPERNOVA了。借用我最好的一位朋友的话：“如果说第一章happy go lucky是开幕的挑战，那最终supernova就是把管理者们在八千次时间循环中的复杂情感与决意呈现在我们面前。\n里世界的崩坏与重置，面前的无尽黑暗与虚无，八千余次的循环中求得的第一也是唯一的奇迹。\n跃动吧，超新星，不在沉默中爆发，就在沉默中灭亡。”",
    "90",
    "grode.",
    "",
    0,
    "",
    0,
    "",
    0,
    "",
    0
  ],
  [
    "Islooo",
    "182",
    "Iconic. Genuinely one of the best rhythm game boss songs to come out over the past few years. I wish I could put into words just how much I love this song, but I honestly don’t think I can. All I’ll say is that I hope kyotsugyon goes Far in the rhythm game music scene, because if this song is any indication, they absolutely have the talent to surpass the greats. That is all.",
    "",
    0,
    "183",
    0,
    "160",
    0,
    "181",
    0,
    "1",
    0
  ],
  [
    "Anaya",
    "181",
    "My stance on this song remains the same from the previous vote. A powerful, powerful moment in the game. To me, I hear agonising screams for help in the climaxes of this song, hits me in the gut every time. Frums music my beloved.",
    "30",
    "Chaotic, yet grooves at the same time. Hard to choose between this and 3.1V.C1.",
    "37",
    "Beautiful and calming.",
    "63",
    "The opening chords hit hard, and the song in general is so overwhelming, I just love it.",
    "207",
    "I haven't the faintest notion what the hell is happening in this song and I adore it for that.",
    "249",
    "Accompanies the poem and gunshot really well, and concludes the chapter beautifully."
  ],
  [
    "toforgeteasy",
    "159",
    "It's incredibly hard to pick a favourite, but in the end, I settled for this for being my current favourite song. takehirotei absolutely killed it for their first ever rhythm game original, and is, honestly, fighting with Unraveling Stasis over the spot for my favourite v/s original of all time.",
    "206",
    "Still my favourite v/s original ever, with SEKAISEN::OBSERVER fighting over it.",
    "81",
    "Absolute sleeper pick. Definitely underrated and firmly seats itself with the likes of Poison Garden, BPM, and Sternstunde, in my opinion.",
    "80",
    "Don't. Go.",
    "109",
    "Favourite collaboration pick, and one of my most favourite Camellia songs in general.",
    "222",
    "While I don't hold it as high of a regard as First Breath, I honestly consider it an equal in terms of quality. They're both of my favourites in the chapter they appear in."
  ],
  [
    "Keyboardspam",
    "58",
    "it sounds very melancholic with all of the songs being mashed together",
    "183",
    "16 minute long song with an incredible story",
    "203",
    "i liked it before ch a but now its one of my faves",
    "45",
    "very story relevant and a fun chart",
    "156",
    "good song, charting and the gimmicks are awesome",
    "160",
    "really good part of story"
  ],
  [
    "_archaicfalcon_",
    "71",
    "perhaps my favorite experience in the game period, mv is peak, song is AMAZING, story significance is on point, THEY HIDE JACKET ART FROM A FUTURE SONG AT THE END OF THE MV\n\nclosest thing to perfection from this game",
    "80",
    "this was my favorite experience in the game before the chalpha boss was added, it was peak before better peak showed up",
    "56",
    "favorite Boundary Shatter song, it was either this or NULCTRL EX as EX is kinda its own song but it's also just an extended cut of NULCTRL, still a banger tho ",
    "223",
    "favorite story theme, actually mistook this with a soundtrack from Limbus Company at one point",
    "156",
    "favorite song tied to a secret in the game of which there are many. chart's a pain tho but it's been somewhat fun inching closer to beating it",
    "96",
    "something about this track just hits in all the best ways and im sad that this isnt getting more attention so im voting it. probably my favorite non-boss story node track - it was close between this and Farewell to Syzygia but Syzygia loses points for being frustrating to grind its \"Encore\" track for rn"
  ],
  [
    "LiquidFyre",
    "238",
    "</3",
    "15",
    0,
    "64",
    0,
    "160",
    0,
    "47",
    0,
    "175",
    0
  ],
  [
    "amazindood._.",
    "15",
    "holy shit acta est fabula, plaudite is such a good finale",
    "120",
    "nitro's songs are so good",
    "156",
    "i cant find ANY songs like this PLEASE someone recommend something similar i love this song",
    "248",
    0,
    "101",
    "Getty Images",
    "140",
    "its like hotline_ophiucus but more catchy"
  ],
  [
    "megeservice",
    "183",
    "I'm a sucker for long songs, and kyotsugyon is my favorite artist. it's a combo that can't be beaten by anything else lol, it's also my favorite chart in the whole game (shatter 17+), genuinely the best thing ever. also, the cutscenes?? it just has so much behind it!! I love you so much kyotsugyon!!",
    "249",
    "Vylet ponys songs always make me cry. no matter what, it's obvious that every one of her songs have a meaning, a story behind it. to have one of her songs included in vivid/stasis, it's surreal and I found myself not even realizing I'm crying while listening to it. during chapter alpha, this ruined me, this shocked me, it really shocked me. I love it so much. Vylet pony will always be one of my favorite artists.",
    "207",
    "KYOTSUGYON!!!!!!!!!! again! one of my favorite charts, one of my favorite songs, and my favorite artist! It's so unique, it's so incredibly unique and makes me go crazy listening to the preview. just amazing <3 Kyotsujigyo foreva",
    "52",
    "I could play this song on a bad day and come out stress-free. the chart is calming, easy, stress-free, and perfectly synced up to the music. while the song lays out a story, a story that relates to vivid/stasis in its edit, allowing me to remember the whole game again. it also allows me to remember just how much I grinded to beat scarlet death for the first time, good memories. I love lexycat!",
    "160",
    "some of log()s best work. I remember playing the game, forgetting this song existed, and being shocked at how amazing it was all over again. I'm a person with memory problems, so forgetting this just to relive it, was one of the only times my memory loss benefited me. it was an amazing feeling, and this song will never make me forget that. keep going log()!!",
    "71",
    "the incredible song with EASILY the coolest MV, coolest preview, coolest in-game chart visuals, and a really nice chart!! I could never forget this song, I can't resist the urge to play it every-time I hear it, I'm so happy it even exists. the hard lock puzzle just to unlock this masterpiece was so incredibly worth it. both me and my friend started tearing up when we saw the MV, and we were SHOCKED at the incredible music behind it. thank you F2!"
  ],
  [
    "Zellerrz",
    "183",
    "Every time this shows up, I listen to it in full. The best thing to come out of vivid/stasis, 10/10.",
    "170",
    "Very catchy song that somehow slipped my radar for a long time. Loving it.",
    "156",
    "HELLL YEAHHHH",
    "7",
    "Listening to it now, it's actually really fun. Camellia can't miss, huh...",
    "94",
    "grodegrodegrodeeee but cooler",
    "104",
    "Another catchy song, I always listen to this as well."
  ],
  [
    "clover",
    "63",
    "I like section at 300k score",
    "18",
    0,
    "151",
    0,
    "64",
    0,
    "111",
    "underrated",
    "249",
    "the perfect song for the end of \"Chapter Alpha\""
  ],
  [
    "among us blaster",
    "151",
    "the best combination of chart, quality of the actual track and emotion appeal. fits wonderfully at the end of episode alpha and is probably my most played song by a wide margin (most because i keep 1 missing it....)",
    "56",
    "really really good song that caught me offguard when i went to play angelstar again in break. i'm turbo ass at the chart but the song itself is so good i can put up with it",
    "108",
    "i love how chill this song is and it fits so damn well in betweenspace. really wish there were more super chill ass viber tracks like this one and i think its prolly the most underrated song in the game.",
    "210",
    "my favorite boss track even though the first time i played it it beat my ass so hard i had to use story assist. just a really really good song",
    "37",
    "i don't think i need to explain why bloom in two is good i feel like its very self explanatory. ",
    "50",
    "the song goes ballistic and it really grew on me on repeat listens. It just goes so crazy"
  ],
  [
    "mauveberry",
    "80",
    "this song slaps so hard, especially in the cutscene with storyteller (and also how it's a remix of last wish) ",
    "159",
    "really like how it's used in last dive, and it just sounds really good",
    "15",
    "i mean it's literally the most important song in the game. mixing the past boss songs was really cool to hear in-game",
    "47",
    "it just sounds so good",
    "63",
    "it sounds so funky, love the vibes",
    "45",
    "one of the best boss songs other than first breath/plaudite, also it's just fun to listen to"
  ],
  [
    "Link",
    "63",
    "silly goofy beat makes me happy",
    "183",
    "i love supernova so when theres an extended 15 minute long version of it i love that more",
    "182",
    "i love supernova",
    "52",
    "i like the fact that its used in the menu and the beat of it",
    "232",
    "the best bgm song",
    "80",
    "i like the sequence leading up to the song and the song itself"
  ]
]

const RESULT: {
  id: number
  most: number
  normal: number
  total: number
  comments: [string, string, boolean][]
}[] = []

for (let i = 0; i < data.length; i++) {
  const single = data[i]

  const MOST = 3
  const name = String(single[0])
  for (let j = 1; j < 11; j += 2) {
    const song_id = parseInt(String(single[j]))
    const comment = String(single[j + 1])
    if (song_id <= 0) continue
    const x = RESULT.find(a => a.id == song_id)
    if (x) {
      if (j == 1) {
        x.most += 1
        x.total += MOST
        x.comments.push([name, comment, true])
      } else {
        x.normal += 1
        x.total += 1
        x.comments.push([name, comment, false])
      }
    } else {
      if (j == 1) RESULT.push({
        id: song_id,
        most: 1,
        normal: 0,
        total: MOST,
        comments: [[name, comment, true]]
      })
      else RESULT.push({
        id: song_id,
        most: 0,
        normal: 1,
        total: 1,
        comments: [[name, comment, false]]
      })
    }
  }
}

import {computed, nextTick, ref, useTemplateRef} from "vue"

const res = ref(RESULT.slice())

res.value.sort((a, b) => b.total - a.total)


const ix = ref(1)
const the = computed(() => {
  return RESULT.find(x => x.id == ix.value)
})

const the_ref = useTemplateRef<HTMLDivElement>("the-ref")

function set_ix(x: number) {
  ix.value = x
  nextTick(() => {
    the_ref.value?.scrollTo({top: 0})
  })
}
</script>

<template>
  <div class="h2-title">2025 最爱曲目 投票结果</div>
  <div class="h3-title subtitle">2025 Loved Song Vote Result</div>
  <div class="outer contain-90">
    <div class="rank-container">
      <div>
        <div class="rank-title rank-line">
          <div>名次</div>
          <div>曲名</div>
          <div>票数</div>
        </div>
        <div v-for="(rx, i) in res" class="rank-line">
          <div>{{ i + 1 }}</div>
          <div class="rx-name" @click="set_ix(rx.id)">{{ ids[rx.id - 1] }}</div>
          <div>{{ rx.total }}</div>
        </div>
      </div>
    </div>
    <div v-if="ix" ref="the-ref" class="the">
      <template v-if="the">
        <div class="the-name">{{ ids[the.id - 1] }}</div>
        <div class="the-values">
          <div>真爱票 {{ the.most }}</div>
          <div>普通票 {{ the.normal }}</div>
          <div>总计 {{ the.total }}</div>
        </div>
        <div class="the-comments">
          <div v-for="com in the.comments">
            <template v-if="com[1]">
              <span :class="com[2] ? 'the-most rainbow-text-flow': ''">{{ com[0] }}</span>: {{ com[1] }}
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.outer {
  width: 90%;
  display: flex;
  gap: 15px;
  container-type: inline-size;
  height: auto;
  flex-wrap: wrap;
}

.rank-container {
  height: 70vh;
  overflow-y: scroll;
  padding: 0 15px 15vmin 15px;
  box-sizing: border-box;
  background-color: #ffffff05;
  position: relative;
  flex-basis: 500px;
  flex-grow: 1;
  transition: max-height 0.2s ease-in-out;
}

@container (width < 1015px) {
  .rank-container {
    max-height: 15rem;
    flex-grow: 0;
    justify-self: center;
    width: 100%;
    flex-basis: unset;
  }

  .outer {
    flex-direction: column;
  }
}

.rank-title {
  margin-bottom: 15px;
  color: azure;
  border-bottom: 1px solid #b8dcee;
  position: sticky;
  user-select: none;
  top: 0;
  backdrop-filter: blur(4px);
  padding-top: 5px;
}

.rank-line {
  display: grid;
  grid-template-columns: 2rem auto 5rem;
  text-align: center;
}

.rx-name {
  cursor: pointer;
}

.the {
  flex-grow: 10;
  flex-basis: 500px;
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-y: scroll;
  max-height: 70vh;
  scroll-behavior: smooth;
  container-type: scroll-state;
  container-name: the;

}

@container the scroll-state(scrollable: top) {
  .the-name {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    padding: 1rem;
  }
}

.the > div:last-child {
  margin-bottom: 100px;
}

.the-name {
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  width: 90%;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  transition-property: background-color, padding;
  padding: 0.5rem;
  box-sizing: border-box;
}

.the-values {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
}

.the-comments {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-right: 15px;
  word-break: break-all;
  cursor: default;
  width: 90%;
  width: -webkit-fill-available;
  text-indent: 1rem hanging;
}

.the-most {
  color: #faa;
}
</style>