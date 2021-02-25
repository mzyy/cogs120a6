var data = require('../collectionData.json');
exports.view = function(req, res){
    res.render('Collectionselecter', data);
};