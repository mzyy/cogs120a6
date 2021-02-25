exports.view = function(req, res){
    var col = req.params.name;
    var data = require('../' + col + '.json');
    res.render('CollectionPlaceholder', data);
  };