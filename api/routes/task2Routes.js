'use strict';

module.exports = function(app) {
    var bpi = require('../controllers/task2Controller');
    
    app.route('/api/getPriceHistory/:startDate/:endDate')
        .get(bpi.execute);
};
