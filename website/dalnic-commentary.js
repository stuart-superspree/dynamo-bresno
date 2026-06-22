// =====================================================================
//  DALNIC LEAGUE: MATCH COMMENTARY  (MODDABLE TEXT FILE)
// ---------------------------------------------------------------------
//  Structure modelled on Championship Manager's ENG_MTCH.TXT.
//  Each event type holds an array of phrasings. The engine rolls an
//  outcome from player attributes + tactics, then picks a line at random
//  and fills the tokens below. Add, remove, or reword freely.
//
//  TOKENS:
//    <T>   = team in possession / acting team
//    <O>   = the opposing team
//    <P>   = player on the ball / shooter / fouler
//    <GK>  = goalkeeper making the save
//    <S>   = current scoreline (e.g. "2-1")
//
//  TONE: terse, dry, terrace-flavoured, the Valrekian press box.
//        Keep lines short; the feed scrolls fast.
// =====================================================================

var COMMENTARY = {

  // ---- match flow ----------------------------------------------------
  kickoff: [
    "<T> get the Dalnic clash under way.",
    "We're off at last, <T> to kick off.",
    "The referee checks his watch, and <T> start the match.",
    "Navy and crimson out of the blocks, <T> kick off."
  ],
  half: [
    "Half time. A breather, and a few stern words on the touchline.",
    "That's the half-time whistle. Honours even on the pitch, perhaps not in the dugout.",
    "Forty-five gone. Time for the manager to earn his wage.",
    "The interval. The Bresno faithful settle, the tea goes cold."
  ],
  fulltime: [
    "FULL TIME. The board goes up and that, as they say, is that.",
    "The referee ends it. Final whistle in the Dalnic.",
    "That's all she wrote. Full time.",
    "It's over. The result stands: <S>."
  ],

  // ---- build-up / possession ----------------------------------------
  possession: [
    "<T> knock it around with no great urgency.",
    "<P> sees plenty of the ball for <T>.",
    "<T> build patiently through the middle.",
    "<P> drops a shoulder and switches the play for <T>.",
    "Measured stuff from <T>, probing for an opening.",
    "<P> keeps the move ticking over for <T>.",
    "<T> recycle possession on the edge of the final third."
  ],
  press: [
    "<T> snap into the press and win it straight back!",
    "<P> hounds the ball loose, <T> turn it over high up.",
    "No time to breathe, <T> press and force the mistake.",
    "<P> nicks it cleanly in midfield for <T>."
  ],
  counter: [
    "Turnover! <T> break at pace through <P>.",
    "<P> springs the counter for <T>, three on two!",
    "<T> are away on the break, <P> driving."
  ],

  // ---- chances -------------------------------------------------------
  chance_off: [
    "<P> drags it wide of the far post for <T>.",
    "<P> leans back and lashes it over the bar.",
    "Chance for <T>! <P> can't keep his effort down.",
    "<P> shoots, and it's away into the away end.",
    "Half a yard out and <P> skews it wide for <T>.",
    "<P> goes for goal but it whistles past the upright."
  ],
  chance_save: [
    "SAVED! <GK> gets down smartly to deny <P>.",
    "Big stop, <P>'s strike is beaten away by <GK>.",
    "<P> forces a fine save out of <GK>.",
    "<GK> stands tall and smothers <P>'s effort.",
    "Denied! <GK> claws <P>'s header off the line."
  ],
  chance_block: [
    "Blocked! <T> get a desperate body in the way of <P>.",
    "<P>'s shot is charged down at the last.",
    "Last-ditch defending denies <P> a clear sight of goal.",
    "Into the wall of bodies, <P>'s effort is smothered."
  ],
  goal: [
    "GOAL! <P> rifles it home for <T>! It's <S>.",
    "<P> scores! A cool finish, and <T> lead the dance, <S>.",
    "IT'S IN! <P> buries it for <T>. <S>.",
    "GOAL for <T>, <P> with the decisive touch! <S>.",
    "The net ripples! <P> finishes for <T>, <S>.",
    "<P> makes no mistake, <T> score, and it's <S>."
  ],
  goal_header: [
    "GOAL! <P> rises highest and heads <T> in front, <S>!",
    "Towering header from <P>! <T> score, <S>."
  ],
  goal_screamer: [
    "GOAL!! <P> from distance, an absolute thunderbolt for <T>! <S>.",
    "Out of nothing! <P> lets fly and it flies in for <T>, <S>!"
  ],

  // ---- set pieces ----------------------------------------------------
  corner: [
    "Corner to <T>, <P> over to take it.",
    "<T> win a corner on the right.",
    "It's a flag kick for <T>, the big men go up."
  ],
  freekick: [
    "Free kick to <T> in a promising spot.",
    "<P> is hauled down, <T> free kick, and a chance to load the box.",
    "Whistle. Dangerous free kick for <T>."
  ],
  penalty: [
    "PENALTY to <T>! The referee points to the spot.",
    "He's given it! Spot kick for <T> after <P> goes down."
  ],

  // ---- discipline ----------------------------------------------------
  foul: [
    "Cynical foul by <T> halts the move.",
    "<P> gives away a needless free kick.",
    "Robust challenge from <P>, the referee isn't impressed.",
    "<P> clatters into the back of his man for <T>."
  ],
  card: [
    "BOOKED. <P> goes into the referee's notebook for <T>.",
    "Yellow card for <P>, one to be careful with now.",
    "The referee reaches for his pocket: yellow for <P>.",
    "<P> is cautioned for a late one."
  ],
  card_red: [
    "RED CARD! <P> is sent off, <T> down to ten men!",
    "Off! <P> sees a second yellow and <T> are a man light."
  ],

  // ---- other ---------------------------------------------------------
  injury: [
    "<P> is down and the physio is called for <T>.",
    "Concern for <T> as <P> stays down, clutching a hamstring."
  ],
  sub: [
    "<T> make a change, fresh legs from the bench.",
    "Tactical switch for <T>.",
    "<T> turn to the bench to alter the game."
  ],
  woodwork: [
    "OFF THE POST! <P> rattles the upright for <T>!",
    "So close! <P>'s effort cannons back off the crossbar."
  ]
};

if (typeof window !== 'undefined') window.COMMENTARY = COMMENTARY;
if (typeof module !== 'undefined') module.exports = COMMENTARY;
