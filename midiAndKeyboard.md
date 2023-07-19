# OPEN STAGE CONTROL HANDBOOK
## https://openstagecontrol.ammd.net



### MIDI 

#### sending midi 
first, you'll need to create a virtual midiDevice.  
in the home panel, fill the midi field with : `list toAbleton:virtual`.

![midi config](img/midiConfig.png)

- 'list' will list the available midi devices.

This will create a midi pipe named 'toAbleton'  
Then, in your widget setting, fill the OSC panel like so :  
![midi widget](img/midiWidget.png)

This will send a CC at midi channel 1 CC 7  
Don't forget to change the rangee to 0-127 in cas of a fader

Other possible addresses are : 
- /note
- /note_off
- /program
- /sysex
- /pitch 
- /mtc 

Note that you can send midi messages via the 'onValue' script :  
`send ('/control',1,7,42);`sends a CC to channel 1 CC 7 with value 42  
However, you still need to set the target accordingly : `midi:toAbleton` for exemple  

#### receiving midi 

this is an exemple to call the 'onValue' script when receeiving MIDI on Channel 1 CC 24  
![midi widget](img/midiReceive.png)

You can then use the value like this : 

`var val = get('this'); `  
`console.log(val);`  

Note that you can receive all midi CC by removing the 'preArgs'  
You will then receive arrays [1,24,127] for exemple. 
Getting the MIDI Value is done by the following script :  

`var val = get('this');`  
`console.log(val[2]);`

### KEYBOARD 

Only, in 'script' widget.  
You should define wich key is concerned by the script by filling the key 'keyBinding' field with :  
- 'a' -> script is called when 'a' is pressed 
- 'a + z' -> 'a' and 'z' are pressed 
- ["a", "z"] -> 'a' or 'z' are pressed 
- alt + e -> alt + e combo key
- [''] -> call script if any key is pressed

Then, you can use the result il the 'onKeyboard' script :  
`console.log('key '+type+ ' '+key+' '+ alt);`  
`if( key  === 'a'){`  
    `console.log("A is pressed")`  
`}`  