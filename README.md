# jake-script
Looks like assembly. Runs like javascript.  

## Docs
Live demo: https://demo.jakethethe1.repl.co/  
Docs: https://demo.jakethethe1.repl.co/docs.html

## Example Code
### Counts too a number inputed then counts down to 0.
```
using utils
//get input
inp number:
//start loop. if add == input
com r!0 r!5
jmp 4
//add 1 and print
add r!0 1
dbg r!0
jmp -4
//finish loop
dbg add_is_done
//move add to register 50
mov r!0 50
//start loop. if register 50 == 0
com r!50 0
jmp 5
//subtract 1 from register 50 and print
sub r!50 1
mov r!1 50
dbg r!50
jmp -5
//finish loop
dbg sub_is_done
```
### Draw a face with the render library.
```
using render
render.setup
render.draw 0 0 85 65 #8d5524
render.draw 0 65 85 65 blue
render.draw 10 10 25 25 white
render.draw 50 10 25 25 white
render.draw 20 20 5 5 black
render.draw 60 20 5 5 black
render.draw 10 50 65 5 red
```
