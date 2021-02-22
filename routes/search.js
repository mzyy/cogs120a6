exports.view = function(req, res){
    word = req.query.word;
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://twinword-word-graph-dictionary.p.rapidapi.com/examhistory/?entry=mask",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1db4c8f7e1msh630a5ef79301c90p19a55bjsn4e6d426ef3c4",
        "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function(response) {
      console.log(response);
    });
    
  };