var express = require('express');
var guidesRouter = express.Router();

var router = function()  {

    var guidesController = require('../controllers/guidesController')();

    guidesRouter.route('/iwonder')
        .get(guidesController.getIwonderIndex);

    guidesRouter.route('/science')
        .get(guidesController.getScienceIndex);

    return guidesRouter;
};

module.exports = router;
