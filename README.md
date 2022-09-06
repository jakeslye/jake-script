# jake-script
Looks like assembly. Is definitely not assembly.  

## Docs
Live demo: <a href="https://demo.jakethethe1.repl.co/" target="_blank">demo.jakethethe1.repl.co</a>  
Docs: <a href="https://demo.jakethethe1.repl.co/docs.html" target="_blank">demo.jakethethe1.repl.co/docs.html</a>

## Example Code
Counts too a number inputed then counts down to 0.
```
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
//subtract 1 from register 50 and pring
sub r!50 1
mov r!1 50
dbg r!50
jmp -5
//finish loop
dbg sub_is_done
```
