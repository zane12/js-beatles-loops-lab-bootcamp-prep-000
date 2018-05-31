function theBeatlesPlay(musicians, instruments){
  
  var bands = []
  
  for(var i = 0; i < musicians.length; i++){
    
    bands = [...bands, musicians[i] + " plays " + instruments[i]]
    
    
  }
  
  return bands
  
}



function johnLennonFacts(facts) {
  
  var i = facts.length
  
  while(i > 1){
    facts[i] = facts[i] + "!!!"
    i--
  }
  
  return facts
  
}