# Brief for scene authors (Story Pipeline animation package)

Working dir: `/tmp/hoplite/workspace/animation`. Read this whole brief, then `src/plan.json` (plan + styleBible),
`src/lib.js` (shared drawing library) and `src/scenes/s01.js` (reference scene, already approved).
The original task spec is `../.hoplite/attachments/art_upload_ffa404c14c164f48b43f6e4400f72fbd/animation-task-1-part1.md` (Russian; lines 120–215 and 496–556 contain the rules for scenes).

## What you produce
For each assigned scene N write `src/scenes/sNN.js` = the BODY of a function `function(g,t,p,env){...}`.
`node build.mjs N` wraps the body and inlines (tree-shakes) the library declarations it references into `dist/sNN.js`.
- `g` CanvasRenderingContext2D 540×960, `t` local seconds from scene start, `p` 0..1, `env={time,duration}`.
- Only allowed external names: g,t,p,env, Math, Number, Array, Object, JSON, parseFloat. NO Path2D, Image, window, document,
  Math.random, Infinity, NaN, undefined, isFinite, String, Date, performance. `g.roundRect`, `g.filter`, `g.shadowBlur`, gradients are fine.
- Do NOT edit `src/lib.js`, `src/plan.json`, `build.mjs`, `check.mjs`, or other agents' scene files. If you need a helper, declare it inside
  your scene file. Do not reuse a library name for a different meaning (grep `^function NAME\|^const NAME` in src/lib.js first).
- Deterministic: everything derives from `t` (use `hash`, `nz`, `blink`). Each call redraws the full frame.

## Commands (run from the animation dir)
- `node build.mjs 5` (only your scene numbers, comma list ok) → dist/s05.js
- `node check.mjs 5` → eslint no-undef with the allowed globals, runtime sweep every 0.05 s for exceptions, non-finite numbers and
  unbalanced save/restore. Must print `ALL OK`.
- `node render.mjs 5 0.5,2,3.4,... 4 .5 out/s5.png` → contact sheet (times in local seconds, 4 columns, half scale; yellow box = subtitle zone y 730..930).
  Then LOOK at it with the Read tool. `node timeit.mjs 5 1,2,3` → ms per frame (keep < ~40 ms).
Do NOT run commands that start servers. Never write files with shell heredocs (they are blocked) — use the Write/Edit tools.

## Hard rules from the task (all scenes)
- No letters, digits, captions, subtitles in the frame. Numbers from the voice-over are shown graphically (bar length, segments,
  pips, counts of objects) EXACTLY when the word is spoken (timings below). Main number gold/accent, alarming one red.
- y=730..930 is reserved for subtitles: no faces or key objects there (legs/ground/foreground fine).
- New shot (change of framing/angle) every 2–3.5 s (fast 1–2 s, emotion 4–6 s), cut inside the function with `shot(t,[starts])`.
  A shot starts 0.1–0.2 s before its phrase. Never >8 s without new action/camera move. Not more than 3 similar shots in a row.
  Shot mix: medium ~30%, close-up ~15% (face fills frame, blurred darker background), infographic/UI ~15%, wide ~10%, insert ~10%.
- Hard cuts get a short 0.13 s darkening: `wash('#000000',cutDip(t,starts))` (skip it where a flash or fade is used).
  Transitions per plan (fade from/to black, white flash, dive) live in the first/last 0.15–0.4 s of the scene.
- Camera always moves gently in active shots (slow push ~1.0→1.1, drifts, slight rotation), plus a 2–4 px kick (`kick()`) on impacts.
  Depth: ≥3 layers with parallax (`layer(f,fn,blur)`: f<1 far, 1 action plane, >1 foreground), DOF blur on far layers in close-ups.
- Living background: ≥3 moving details per shot (smoke, leaves, motes, ripples, clouds, birds, candle flicker, swaying herbs...).
- Characters: never frozen — breathing is automatic in `person()`, blinking automatic (`blink`), add extra blink after sharp events
  (`em.blink`). Anticipation before actions; reaction delay: eyes first (look), +0.05–0.1 s head (turn/tilt), +0.1–0.2 s body (yaw/lean).
  Pose changes over 0.3–0.5 s with `ease/sm`. Hold strong emotion 0.5–1 s. Look into camera ONLY in the final scene ending.
- Walking: use `person(C,{walk:{d,st}})` with `d` = distance travelled (world px, can be eased) and body x = x0 + face*d — this keeps
  stance feet planted. Never slide a static pose. Background walkers too (they are people: use person()).
- Anatomy: arms/legs only via the rig (it uses the mandated ik2/leg/arm/gait). Knees forward along facing, elbow below shoulder
  when the hand is at face/chest. Hands hold items via `itemR/itemL` callbacks so items stay in hands. Items must not be hidden behind hands.
- Characters must match styleBible: use the constants HERO, NEIGH, ELDER, CARP, SMITH, BOY, GRANNY, woman(seed,kerchiefTriad), worker(seed).
  Hero: medallion in RIGHT hand; after scene 2 it is under the shirt (`medal:'hidden'`), pulled out with the right hand to use the UI;
  he selects UI items with the right index finger (`finger()` helper or a hand). Neighbour male with planks (scene 7) = `worker(1)`
  with planks on the RIGHT shoulder. Women at the well = `woman(11,['#7A5A8A','#4E3A60','#9A7AAA'])` and `woman(12,['#A0606A','#703E4A','#C08088'])`.
- Exposure: light layered over the scene (`lampLight` screen glow, `wash(c,a,'multiply')` night tint, `beam`, `vignette`). Do not blow out faces.

## Library cheat-sheet (see src/lib.js for details)
- Math: cl, lerp, sm(a,b,x) smoothstep, ease, eout, ein, hash, nz (noise), rot, op(o,k,def), mixc(hexA,hexB,u)->hex, rgba(hex,a), kick(t,e,amp,dur), blink(t,seed).
- Camera: `setCam(x,y,zoom,rot)`; CAM.sx/sy shake; `layer(f,fn,blurPx)`; `toScreen(x,y,f)`. Outline width auto (LW), use `ol()`, `fo(fill)`.
  World frame at zoom 1 = screen 540×960. Village: road/ground line y≈716 (ruts 704/738), houses plane f=.5, foreground grass f=1.7.
  Wide: z≈1, character s≈.6. Medium: z≈1.6–1.9. Close-up face: z≈6–8 centred on the head (head world y ≈ GY − 271·s).
- `person(C,o)`: o.x,o.y ground point (world), o.s scale (hero is 300px tall at s=1), o.yaw (+.95 = 3/4 facing right, −.95 left, 0 front;
  intermediate values turn smoothly), o.lean, o.hipY (local units; standing ≈ −142.8 for hero; crouch ≈ −84; seated at the hut table see
  below), o.hipX, o.fr/o.fl [x,y] local foot positions (y negative = lifted), o.hr/o.hl [x,y] local hand targets (null = rest),
  o.itemR/o.itemL (g,x,y,ang)=>{} draws an item in the hand, o.turn (extra head yaw), o.tilt (head roll, + = chin down), o.headDX/headDY,
  o.em {look:[x,y] (−1..1), brow (−1..1 raise), browIn (+ worried, − angry), smile (−1..1), open (0..1 mouth), eyeOpen (1 normal, 1.3 wide, .6 squint), blink (force 0..1)},
  o.medal 'chest'|'hidden', o.ls light side (1 = key light from right), o.rimC/rimA rim light, o.walk {d,st,lift}, o.breath, o.cloth (fabric swing), o.shadowA.
  Local coordinates = unscaled units relative to the ground point; shoulder height for hero ≈ −239, chin ≈ −255, head centre ≈ −271.
- Locations: `villageWorld({tod:'dawn'|'day'|'sunset'|'night', bF,bM,bMain,bFg blur, far(), mid(), main(), fg:0})` draws sky, sun/moon,
  hills, houses+birches+fence, road, foreground grass; put characters/well in main() (action plane, GY≈716).
  `well(x,gy,s,state 0 old..1 new,crankAngle)` returns windlass point; `bucket(x,y,s,ang,water)`; `palisade(x0,x1,gy,h,seed)`;
  `izba(x,gy,w,h,seed,lit,smoke)`; `birch(x,gy,h,seed)`; `fenceW`; `smoke`, `motes`, `leaves`, `ripples`, `clouds`, `stars`, `birds`, `spark`.
  `hutInterior({night,red,candle,bBack,main(),front()})`: hero's izba at night; table top y≈700 with a long cloth hiding legs, candle at
  (455,700), window at left (70..210, 250..420), stove right. Seated hero example: `person(HERO,{x:150,y:1000,s:1.35,yaw:.5,hipY:-200,fr:[20,0],fl:[-10,0],medal:'hidden',...})`
  (legs hidden by the cloth). Call lights are applied inside; draw emissive UI after hutInterior returns (screen-space or inside a layer).
- UI (no glyphs): `panel(x,y,w,h,a,frameHex,glow)`, `bar(x,y,w,h,v01,col,a,glow)`, `ticks`, `icon(kind,x,y,s,a)` kinds: wood iron stone grain food happy
  well bench roof road axe person warn; `resPanel(x,y,w,{a,v:{wood,iron,stone,grain,food,happy},rows:[6 reveal 0..1],red:rowIdx,redA})`
  (bar maxima: wood 200, iron 50, stone 100, grain 500, food 500, happy 100 as 10 gold segments) returns height (≈374);
  `problemsPanel(x,y,w,{a,rows:[3],hi})` (row 0 = well with 5 stars); `hiddenPanel(x,y,w,{a,open,rows:[{C,v,bar,a,hero,blink,warn,em}],scroll,listH,limit:{a,v,glow}})`;
  `portrait(C,x,y,r,yaw,em)`; `medallion(x,y,R,ang,dirt,glow)`; `finger(x,y,s,ang,pressA)` (a hand with index finger pointing up, wrist at y+60·s);
  `scribble` (illegible "name" squiggle), `star5`, `eyeClosed`.
- Finishing: `vignette(a)`, `wash(hex,a,mode)`, `lampLight(x,y,r,hex,a)`, `beam(...)`, `grain(a)`, `cutDip(t,starts)`, `shot(t,starts)`.

## Resource values continuity
Start (scene 3): wood 140, iron 23, stone 60, grain 410, food 380, happiness 41.
Scene 4 cost: wood −30 → 110, iron −8 → 15, stone −20 → 40. Scene 6: happiness 41 → 47.
Scene 7 bench cost: wood −4 → 106, iron −1 → 14. Scene 9: wood 61 (red, blinking; it fell step by step after buildings: 106 → … → 61).
Scene 10: wood grows 61 → 118 (gold), red indicator off.
Hidden menu (scenes 11–12): elder 12, carpenter 9, neighbour 87 (red), others e.g. smith 34, women 51/63, boys 70; hero 0 (row blinks, "manager"),
previous manager: vanished (ghost silhouette dissolving + warn icon), limit of influence button 83/100 (red bar with cap marker).

## Spoken timings (scene-local seconds). Numbers must appear on these words.
S2 (start 14.2): "Деревня Берёзовка" 0.1–1.3 (village emblem/houses icon), "Население: 86 человек" 1.4–3.2 — 86 at ~2.3 (86 person pips),
 "Управляющий медальон найден" 3.4–4.7, "уронили находку в лужу" ~5.0, "строки исчезли" ~6.0; c5 6.54–10.52 ("Подняли, и они появились снова" 6.54–8.3,
 "Никто рядом не стоял, никто ничего не заметил" 8.4–10.5); c6 10.67–13.85 hides it under the shirt; end fade to black (evening).
S3 (start 28.13): c7 0.07–3.0 ("Вечером, запершись в избе, вы открыли главное окно"); c8 3.15–11.26: wood 140 ~5.7, iron 23 ~6.7, stone 60 ~7.55,
 grain 410 ~8.5, food 380 ~9.5, happiness 41/100 ~10.3–11.2; c9 11.41–12.93 problems list blinking.
S4 (start 41.13): c10 0.08–5.89 ("Больше всего очков обещал старый колодец" 0.08–2.4; "вёдра приходилось тянуть вдвоём" 2.4–4.0; "у женщин к сорока годам болели спины" 4.0–5.9);
 c11 6.04–12.54: press "improve well" ~6.5–7.6, "медальон потребовал" 7.6–8.7, wood 30 ~9.0, iron 8 ~9.7, stone 20 ~10.4, "цифры тут же уменьшились" 10.9–12.5. End fade to black.
S5 (start 53.74): c12 0.08–4.89 ("Утром вы вышли на улицу и замерли" 0.08–2.1; people gather with planks/stones/tools 2.1–4.9);
 c13 5.04–9.39 (carpenter wiping hands 5.04–6.5; smith with brackets 6.5–7.6; boys carrying stones in shirt hems 7.6–9.4);
 c14 9.54–13.75 (hero walks to the elder and asks 9.54–11.9; elder shrugs, palms up 11.9–13.75).
S6 (start 67.56): c15 0.08–3.97 (elder: "колодец чинить пора, все ведь знают" 0.08–2.0; "хотя ещё вчера никто не говорил" 2.0–3.97 — hero suspicious close-up);
 c16 4.12–9.68 (sunset, work finished 4.12–5.6; buckets rise easily 5.6–6.8; women laugh at the water 6.8–9.68); c17 9.83–12.10 happiness 41→47, "47" at ~11.4.
S7 (start 79.73): c18 0.08–4.94 (decides to test 0.08–2.7; chooses a small thing: a bench near his own house 2.7–4.94);
 c19 5.09–7.62 (cost: wood 4 at ~6.4, iron 1 at ~7.2); c20 part: "Через час сосед принёс отшлифованные доски" 7.77–10.0, "ещё через час кто-то вбил новые гвозди" 10.2–12.1.
S8 (start 91.9): old woman "сама не понимая почему, притащила подушку" 0.1–3.15 (puts pillow ~2.8); c21 3.3–8.8 (bench wide, high back, carved armrests 3.3–6.5;
 sitting, looking at the sunset 6.5–8.8); c22 8.95–13.42 (nobody asked a reward 8.95–10.6; people went home as after ordinary work 10.6–13.42). End fade to black (night).
S9 (start 105.4): c23 0.07–6.88 (back to the table 0.07–1.3; red indicator at the wood row long blinking 1.3–3.6; "61" ~4.1; stock fell after each building 4.7–6.88);
 c24 7.03–12.93 (nearest forest cut down in grandfathers' time 7.03–8.9 — schematic top view; found "assign extraction" 8.9–10.4; chose wood 10.4–11.2;
 set fifteen workers 11.2–12.93, "15" at ~12.2 → 15 pips).
S10 (start 118.4): c25 0.08–5.28 (morning, fifteen men with axes silently line up at the palisade 0.08–3.2; leave for the far forest 3.2–5.28);
 c26 5.43–8.30 (evening, return with logs, cannot explain); c27 8.45–12.32 (wood grows to 118 at ~10.1; "for the first time it was enough" 10.6–12.3);
 c28 part "Той ночью вы листали интерфейс" 12.47–13.9 (night, scrolling the panel).
S11 (start 132.3): c28 rest 0–3.12 (at the very bottom a thin grey line that was never there); c29 3.27–8.33 (touched it 3.27–4.2; new menu with red frame 4.2–6.2;
 header "Hidden parameters" 6.3–8.3); c30 8.48–14.35 (list of names of all villagers 8.48–10.9; against each a parameter he never chose 10.9–13.3; "Внушаемость" 13.4–14.35).
S12 (start 146.72): elder 12 at ~1.3, carpenter 9 at ~2.2, neighbour 87 at ~3.7, hero's own row blinking "Управляющий" 4.3–6.6, "Внушаемость 0" ~7.7,
 "Предыдущий управляющий: исчез" ~8.4–9.8, "Причина: превысил лимит влияния" ~10.0–11.6, "Ниже горела кнопка" ~12.0–12.6, "Лимит влияния: 83 из 100" ~12.8–14.4; scene ends 14.92.

## Process (mandatory)
1. For each scene: write a shot list (starts aligned with the timings above and the plan beats/direction/continuity), then code it.
2. build + check until ALL OK. Render contact sheets covering every shot (≥12 frames incl. shot boundaries) and inspect them.
3. Self-review like the task's "Ревью сцены": beats implemented, characters match styleBible, faces outside 730..930, joints (check knee/elbow
   numerically at rest and at the extreme pose), living background, camera motion, transitions match plan continuity with neighbour scenes.
   Fix and re-render. Do at least 2 review/fix iterations per scene.
4. Final report (concise): per scene the shot list with times, how numbers are visualised and when, known remaining weaknesses.
   Do not claim video playback or audio was verified — only code checks and still frames.
