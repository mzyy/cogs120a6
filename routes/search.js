exports.view = function(req, res){
    var word = req.query.word;
    var data = {
      "word": word
    }
    res.render('search', data);
};