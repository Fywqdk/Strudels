samples('github:eddyflux/crate')

setcps(.86)

let beat = stack(
    s("bd").struct("<[x*<1 2> [~@3 x]] x>"),
    s("~ [rim, sd:<2 3>]").room("<0 .2>"),
    n("[0 <1 3>]*<2!3 4>").s("hh"),
    s("rd:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.5)
  ).bank('crate')

let beat_b = stack(
    s("bd").struct("<[x*<1 2> [~@3 x]] x>"),
  ).bank('crate')
  
let bass_chords = chord("[Am C Bm D]/4")
  .offset(-2).voicing().s("gm_epiano1:1")
  .delay(.5)
  .phaser(4).room(.5)
  .color("magenta")
  ._scope()

let melody = note(`[
  [[ ~ ~ D5 E5] [B4 [G4 A4]] [F#4 [B4 D5]] [A4]]
  [[ ~ G5 E5 D5] [B4 [G4 A4]] [F#4 [D5 B4]] [A4]]
  [[ ~ ~ D5 E5] [G5 [B5 A5]] [F#5 [G5 F#5]] [D5]]
  ]/12`)
  .s("gm_epiano1:1")
  .phaser(4).room(.5)
  .color("cyan")
  ._pianoroll()

 arrange(
   // intro
   [12, stack(
     melody,
     bass_chords,
     beat.mask("<[0 1] 1 1 1>/16".early(.2))
   )],
   // main a
   [12, stack(
     beat,
     bass_chords,
     melody,
     )],
   // interlude
   [12, stack(
     beat,
     melody.rev(),   
     bass_chords,  
     )],
   // main b
   [12, stack(
     beat_b,
     melody,
     bass_chords,
     )],    
   )
 
