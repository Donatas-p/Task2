'use strict';
module.exports = function(app) {
  var bpi = require('../controllers/task2Controller');

  // todoList Routes

  app.route('/api/getPriceHistory/:startDate/:endDate')
    .get(bpi.execute);
};
