# OPEN STAGE CONTROL HANDBOOK
## https://openstagecontrol.ammd.net

### animating a fader 
``` 
let faderName = "fader_1" //ONLY CHANGE THESE LINES
let targetVal = 0.1  //ONLY CHANGE THESE LINES
let increment = 0.002  //ONLY CHANGE THESE LINES
let faderVal = get(faderName);

var fadeInterval = setInterval(function() {
  if( targetVal > faderVal)
  {
      faderVal += increment
      faderVal = Math.min(targetVal,faderVal)
  }
  else
  {
      faderVal -= increment
      faderVal = Math.max(targetVal,faderVal)
  }
  set(faderName,faderVal)
  if(get(faderName) == targetVal )
{
  clearInterval(fadeInterval)
}
  
}, 1); 
``` 

