# OPEN STAGE CONTROL HANDBOOK
## https://openstagecontrol.ammd.net

## Code Snippets

### SLEEP 

`//noprotect` allow the script to work

```
// noprotect 
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
```

this function can be called with : `sleep(300);`