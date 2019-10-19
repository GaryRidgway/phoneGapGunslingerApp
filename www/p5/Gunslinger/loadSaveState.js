function loadSaveState(data = 'GunslingerData') {
  if (data == 'GunslingerData') {
    try {
      data = JSON.parse(localStorage.getItem('GunslingerData'));
      let protoGuns        = data['newSavedGuns'];
      for (let i = 0; i < protoGuns.length; i++) {
        addgun(protoGuns[i][0], protoGuns[i][1], protoGuns[i][2]);
      }

      guncounter  = data['savedGuncounter'];
    }

    // If anything goes wrong, there is no data to load.
    catch(err) {
      return;
    }
  }

  // Check if there is no data to load.
  if (data == null) {
      return;
  }
}
