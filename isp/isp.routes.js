var Isps = require('./isp.controller');

module.exports = function(router) {
  router.post('/create', Isps.createIsp);
  router.get('/get', Isps.getIsp);
  router.get('/get/:name', Isps.getIspByName);
  router.get('/getrating/:rating', Isps.getIspByRating);
  router.get('/getprice/:lowest_price', Isps.getIspByPrice);
  router.put('/update/:id', Isps.updateIsp);
  router.delete('/remove/:id', Isps.removeIsp);
};
