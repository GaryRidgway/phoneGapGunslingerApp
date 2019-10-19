function saveState() {
  clog('call');
  let savedGuns        = guns;
  let savedGuncounter  = guncounter;
  let newSavedGuns     = [];

  for (let i = 0; i < savedGuns.length; i++) {
    let gundata = [];
    gundata[0] = savedGuns[i].name;
    gundata[1] = parseInt(savedGuns[i].chambers);
    gundata[2] = savedGuns[i].gunIndex;
    newSavedGuns[i] = gundata;
  }

  var dict = {
    newSavedGuns: newSavedGuns,
    savedGuncounter: savedGuncounter,
  };

    localStorage.setItem('GunslingerData', JSON.stringify(dict));
}
