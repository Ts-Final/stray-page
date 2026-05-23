<script lang="ts" setup>

import ATextInput from "../../../components/a-elements/a-text-input.vue"
import {computed, ref} from "vue"
import AHref from "../../../components/a-elements/a-href.vue"

const search = ref("")
const values = [
  "1 _",
  "2 -1",
  "3 :3c",
  "4 :D (vivid/stasis edit)",
  "5 ∀",
  "6 ∀NARCHIC LIGHT",
  "7 +ERABY+E CONNEC+10N",
  "8 00",
  "9 1112",
  "10 3, 2, 1, Let's Go",
  "11 3.1V.C1",
  "12 ABSOLUTION (A-Saph Remix)",
  "13 Aci-L",
  "14 Acolyte",
  "15 acta est fabula, plaudite",
  "16 Aleph-0",
  "17 All The Times",
  "18 ALLIEVERWANTED",
  "19 And So You Felt",
  "20 Angel's Window",
  "21 Angelstar",
  "22 APO11O",
  "23 APOCALYPSE CALL(Theatrum Calamititus)",
  "24 Arachnid",
  "25 aria of ruinated winds",
  "26 Ascent",
  "27 ASTELLION",
  "28 Asymmetry (takehirotei remix)",
  "29 Attractor Force",
  "30 B3611V",
  "31 BADSECRET",
  "32 bardess :0: of the future",
  "33 Battle in Enemy Territory",
  "34 BEATROCK (get it?)",
  "35 Benighted Rewaking",
  "36 Beyond the Heart (Broken Heart Mix)",
  "37 Bloom in Two",
  "38 BPM",
  "39 calming patterns to soothe the mind",
  "40 Candy@-Cracker",
  "41 Chronoexplorers",
  "42 Chronomia",
  "43 CITY RIDE IN THE JUNGLE",
  "44 CLAUDIA -estella-",
  "45 CLAUDIA -libertia-",
  "46 Concrete Jungle",
  "47 CONVERGENCE",
  "48 Cosmogyral",
  "49 Courage",
  "50 crack in the earth",
  "51 Credits",
  "52 Crimson Dance (vivid/stasis Edit)",
  "53 Crosshatch",
  "54 Crusader Mk.III (Stelli Edit)",
  "55 Cyclical Rebellion",
  "56 Dark Star",
  "57 Dear My Endsummer",
  "58 DeSPAROLA",
  "59 Distorted Fate",
  "60 Domain Breached",
  "61 Doppelganger",
  "62 Dreams From Another World",
  "63 dyauspitr, thunder of heaven",
  "64 eachother",
  "65 endless.reality",
  "66 ENERGY SYNERGY MATRIX",
  "67 energy trixxx",
  "68 Ephemeral Sunrise",
  "69 Era Chimaera",
  "70 Etiquette",
  "71 Evaniscentia",
  "72 even at the end of the world, you left it",
  "73 evil pimp dracula fire beat",
  "74 execution_program",
  "75 exterminate()",
  "76 F1055",
  "77 Farewell to Syzygia",
  "78 Faux Real (VIVID REDUX)",
  "79 final farewell -aquaregia-",
  "80 First Breath",
  "81 Fixations Toward the Stars",
  "82 Foolish Ambition",
  "83 for.loop",
  "84 FULi AUTO BUSTER",
  "85 FULi AUTO SHOOTER",
  "86 G e n g a o z o",
  "87 Gauntlet",
  "88 Goodbye To Your Vicious Cycles",
  "89 GOODRAGE",
  "90 grode",
  "91 grode (A-Saph Multigenre Remix)",
  "92 grode (DJ HOE SCARER REMIX)",
  "93 grode (Wyvren's Remix)",
  "94 grode(decoherence)",
  "95 Happy Go Lucky!!!",
  "96 heptagramme",
  "97 hotline_ophiucus",
  "98 HTTPS",
  "99 Idealized Nilpotency",
  "100 IGNITED",
  "101 Images",
  "102 INFiNiTE ENERZY -Overdoze-",
  "103 Ione",
  "104 Is This It Is It",
  "105 It Go (Cheryl Stelli remix)",
  "106 Last Wish (vivid/stasis ver.)",
  "107 LET THE CREATION BEGIN",
  "108 Locked Out",
  "109 LORELEI",
  "110 Lost City",
  "111 lost contact",
  "112 Luminaria",
  "113 Luminous Entities Lost Heart",
  "114 Luxvinore",
  "115 Macropolis",
  "116 MARENOL",
  "117 Memories Sacrifice",
  "118 micro.wav",
  "119 Miryark's Scroll",
  "120 MULTIPHEX",
  "121 MVURBD",
  "122 MYSTERIOUS TRIGGER",
  "123 N/A",
  "124 Nhelv",
  "125 Nightshade",
  "126 NONSENSE",
  "127 Novena",
  "128 NULCTRL",
  "129 NULCTRL EX",
  "130 nullbreak",
  "131 obair-ghreis",
  "132 Octava",
  "133 Ops:Limone",
  "134 Options",
  "135 Orphen",
  "136 Perfect ConfeCute!!",
  "137 Pictured as Perfect",
  "138 POISON GARDEN",
  "139 PRECiOUS : PROMiSE",
  "140 Prime",
  "141 Prismatic Vortex",
  "142 PROPER RHYTHM",
  "143 PSYCHO-BOMB",
  "144 PYROMANIA",
  "145 QUASAR",
  "146 Rafflesia",
  "147 RAM (Rotating Auto-Mobiles)",
  "148 Random",
  "149 Reboot",
  "150 reFract::dense",
  "151 Renatus",
  "152 Revelation",
  "153 Rrhar'il",
  "154 safe_state (MANIAQ Sound Team Remix)",
  "155 Sanzui",
  "156 Scarlet Death",
  "157 Secret Illumination",
  "158 See You Move",
  "159 SEKAISEN::OBSERVER",
  "160 SELF",
  "161 SENT://INEL",
  "162 septima",
  "163 Seraphiel",
  "164 Shattered Sky After Rain",
  "165 Showdown",
  "166 Signals Afar",
  "167 Simulated Reality",
  "168 Singularity",
  "169 slic.hertz",
  "170 Solomon's Seal",
  "171 Some More of That Song",
  "172 Spell Diver",
  "173 Spin Cycle (NETCAVY ReMiX)",
  "174 Star Dream -Millenium Vision-",
  "175 STARCRASHERS (new)",
  "176 stardust",
  "177 STARGAZERS (new)",
  "178 Stellar Sky",
  "179 Stellaria",
  "180 Sternstunde",
  "181 stop-motion",
  "182 SUPERNOVA",
  "183 SUPERNOVA ~Life Cycle of a Star~",
  "184 Surtr's Wish",
  "185 Synthesis.",
  "186 Synthesizer Party",
  "187 taffy",
  "188 Tau",
  "189 Tavgha",
  "190 tenpo pakala",
  "191 Thaumaturgy",
  "192 The 89's Momentum",
  "193 The Last Page",
  "194 the more i carry on...",
  "195 The Next Arcady",
  "196 The Night of Fright",
  "197 There",
  "198 thrinos;pygmalion",
  "199 Tormented World",
  "200 TRAILBLAZER",
  "201 Trip Coffee",
  "202 Tutorial",
  "203 ULTiM∀TUM",
  "204 ULTIMATE",
  "205 Un-TECHNiCAL Reason",
  "206 Unraveling Stasis",
  "207 Unsigned Amalgam",
  "208 until next time!",
  "209 UTF-8000000000",
  "210 valor/starcross",
  "211 Volition",
  "212 Voltage Strike",
  "213 WATAGASHI RUSH",
  "214 WAVE PUNCH",
  "215 Wavetapper",
  "216 What You Love",
  "217 When the Dragon Falls",
  "218 WOLVRAVES",
  "219 WORN OUT TAPES [tally-ho! version]",
  "220 Yamai",
  "221 zylphexica",
  "222 χΩ",

  "223 Itsuka kaerubasho",
  "224 Zephyrs",
  "225 Haru no kizashi",
  "226 Heimat",
  "227 REM",
  "228 Gray Snow",
  "229 Irritation of Heart",
  "230 We Want to Run",
  "231 Fragile",
  "232 Darklove",
  "233 glitter ✩‧₊˚",
  "234 Halfpipe",
  "235 Going Back",
  "236 Locked Out",
  "237 Stalemate",
  "238 hitomi",
  "239 saigo",
  "240 Rise Up",
  "241 namida",
  "242 sequence",
  "243 #808080",
  "244 chasing a day",
  "245 naraku",
  "246 Genom By Death",
  "247 The First Memory",
  "248 Hanabi [vivid/stasis ver.]",
  "249 Carousel",
  "250 afterglow [vivid/stasis ver.]",

  "251 Apocalypse Call (Kry.exe vs rN vs Ardolf)",
  "252 STARCRASHERS (old with Ardolf)",
  "253 (execute.)",
  "254 STARGAZERS (old with Ardolf)"
].map(x => {
  return {
    id: x.split(" ")[0],
    name: x.split(" ").slice(1).join(" ")
  }
})
const the_shown = computed(() => {
  return values.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="contain-90">
    <div class="title">2026 vivid/stasis曲目投票</div>
    <div class="h2-title">Beyond Escape</div>
    <pre class="main-content">
      2026 "Beyond Escape" 曲目投票现已开始！
      投票时间：2026.05.23 - 2026.06.25
      本次投票中，各位可以投1真爱票 + 至多5普通票。真爱票最终折算为3票（可能修改）。
      本次投票采用曲目id计票，即投票时只需要填写曲目的id而不需要选择完整曲名，但相应地，曲目栏中除了数字id以外的任何答案均<span
        class="c-red">不会</span>被接受。
      感谢各位的支持！

      2026 "Beyond Escape" Vote has started
      Vote time: 2026.05.23 - 2026.06.25 (UTC +8)
      You can vote for (1 fav. vote) and (up to 5) normal votes. (Note: Fav. vote will be counted as 3 votes)
      This vote is counted by song-id, so you only need to fill in the song-id. But any answer except the number id will <span
        class="c-red">not</span> be accepted.
      Thank you for your support!

      <span class="c-big">id列表见pastebin / 本页面下方</span>
      <span class="c-big">id-list see pastebin / below</span>
      <a-href href="https://docs.google.com/forms/d/e/1FAIpQLSeJGOmdkT2EHIH-f6YuxdYVV7V7PB-0nq7wbeO1DR8k83fdoQ"/>
      <span class="c-red">
        Special Notes: The songs by Ardolf are also included(and separated) on No.251-254.
      </span>
      <span>
         I'm sorry for any offense, and if necessary, quit this page.
      </span>
    </pre>
    <div class="contain-90 card-bg">
      <div>
        🔎
        <a-text-input v-model="search" class="id-input" placeholder="曲名/Song Name"/>
      </div>
      <div class="id-list">
        <div v-for="x in the_shown" :key="x.id">
          <div class="song-id">{{ x.id }}</div>
          <div class="song-name">{{ x.name }}</div>
        </div>
      </div>
    </div>
    <div class="main-content story-songs">
      <div class="c-big" style="grid-column: span 2">Story Songs</div>
      <div>Itsuka kaerubasho</div>
      <div>EP 7 Allison's words
        <a-href href="https://soundcloud.com/kanki2/kankitsu">link</a-href>
      </div>
      <div>Zephyrs</div>
      <div>Ch1 credits
        <a-href href="https://soundcloud.com/frums/zephyrs">link</a-href>
      </div>
      <div>Haru no kizashi</div>
      <div>EP 15
        <a-href href="https://soundcloud.com/dachs0201/unisphere">link</a-href>
      </div>
      <div>Heimat</div>
      <div>EP14 worldkeeper-showup
        <a-href href="https://unisphere.tv/unsp0009/">link</a-href>
      </div>
      <div>REM</div>
      <div>Ch2 ending
        <a-href href="https://ft.unisphere.tv/">link</a-href>
      </div>
      <div>Gray Snow</div>
      <div>ep21 eri'gun at Dawn
        <a-href href="https://soundcloud.com/u-hey-setapy/gray-snow">link</a-href>
      </div>
      <div>Irritation of Heart</div>
      <div>EP22 dawn fights with Tsuki before Lastwish's unlock
        <a-href href="https://5th.unisphere.tv/">link</a-href>
      </div>
      <div>We Want to Run</div>
      <div>ch3 bad-end
        <a-href href="https://soundcloud.com/frums/we-want-to-run">link</a-href>
      </div>
      <div>Fragile</div>
      <div>Ch2/3 Title
        <a-href href="https://5th.unisphere.tv/">link</a-href>
      </div>
      <div>Darklove</div>
      <div>Ch4 title
        <a-href href="https://soundcloud.com/1lexycat/darklove">link</a-href>
      </div>
      <div>Stalemate</div>
      <div>Catstory / EP 24 / Encore Episode
        <a-href href="https://soundcloud.com/me1s0/stalemate">link</a-href>
      </div>
      <div>hitomi</div>
      <div>EP 25 sat-grave BGM II
        <a-href href="https://note.com/rengokuteien/n/n98358b129375">link</a-href>
      </div>
      <div>saigo</div>
      <div>Final Act I, when dawn/tsuki appear at graveyard
        <a-href href="https://note.com/rengokuteien/n/n1cc351e48a8c">link</a-href>
      </div>
      <div>Rise Up</div>
      <div>post-claudia story song / EP 26
        <a-href href="https://note.com/rengokuteien/n/nf92edf82cf66">link</a-href>
      </div>
      <div>namida</div>
      <div>Final Act II when Dawn declares her sync with L1
        <a-href href="https://note.com/rengokuteien/n/nee5be232f2d3">link</a-href>
      </div>
      <div>sequence</div>
      <div>Unity nexus, also used in X7, X8A/B X9 X10A
        <a-href href="https://unisphere.tv/unsp0014/">link</a-href>
      </div>
      <div>#808080</div>
      <div>X8A X10B X10C exploring BGM
        <a-href href="https://unisphere.tv/unsp0014/">link</a-href>
      </div>
      <div>chasing a day</div>
      <div>X10C
        <a-href href="https://soundcloud.com/kaname_shigeyoshi/epkaname-shigeyoshi-chasing-a-day">link</a-href>
      </div>
      <div>naraku</div>
      <div>Dawn's betray at X7
        <a-href href="https://note.com/rengokuteien/n/n9262c76fce20">link</a-href>
      </div>
      <div>Genom By Death</div>
      <div>X7' when sat knows the S&L
        <a-href href="https://note.com/rengokuteien/n/n1ef4663a0c6a">link</a-href>
      </div>
      <div>The First Memory</div>
      <div>X10B Kanshi's arrive</div>
      <div>Wait</div>
      <div>aefp-credits
        <a-href href="https://soundcloud.com/garlagan/wait">link</a-href>
      </div>
      <div>Hanabi [vivid/stasis ver.]</div>
      <div>post-aefp bgm
        <a-href href="https://soundcloud.com/1lexycat/izwwegpdi87j">link</a-href>
      </div>
      <div>Carousel</div>
      <div>chapter-Alpha ending credits
        <a-href href="https://www.youtube.com/watch?v=HK6cC6ttZ4o">link</a-href>
      </div>
      <div>afterglow [vivid/stasis ver.]</div>
      <div>nh-final credits
        <a-href href="https://mozzi.bandcamp.com/track/afterglow-feat-koyorutsuki">link</a-href>
      </div>
      <div>Moonlit Requiem</div>
      <div>End Title
        <a-href href="https://soundcloud.com/1lexycat/moonlit-requiem">link</a-href>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-red {
  font-size: 1.2em;
  color: red;
}

.c-big {
  font-size: 1.5em;
  line-height: 2em;
}

.id-input {
  width: 80%;
  text-align: left;
  border-bottom: 1px solid #b8dcee;
  padding-bottom: 2px;
  padding-left: 10px;
  box-sizing: border-box;
}

.id-list > div {
  display: grid;
  grid-template-columns: 3rem 1fr;
}

.song-id {
  text-align: center;
}

.song-name {
  text-align: left;
}

.story-songs {
  display: grid;
  grid-template-columns: auto 4fr;
}

.a-href {
  text-decoration: 2px underline #7cdcf4;
  color: gold;
}
</style>