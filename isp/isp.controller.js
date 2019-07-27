//all business logic (CRUD operations) contian in this file.
var Isps = require('./isp.dao');

//create ISP
exports.createIsp = function(req, res, next) {
  var isp = {
    name: req.body.name,
    lowest_price: req.body.lowest_price,
    rating: req.body.rating,
    max_speed: req.body.max_speed,
    description: req.body.description,
    contact_number: req.body.contact_number,
    email: req.body.email,
    image: req.body.image,
    url: req.body.url
  };

  Isps.create(isp, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.json({
        message: 'ISP is created successfully'
      });
    }
  });
};

//find or get all isps from db
exports.getIsp = function(req, res, next) {
  Isps.get({}, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.send(isp);
    }
  });
};

//find isp by name
exports.getIspByName = function(req, res, next) {
  Isps.get({ name: req.params.name }, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.send(isp);
    }
  });
};

//find isp by rating
exports.getIspByRating = function(req, res, next) {
  Isps.get({ rating: req.params.rating }, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.send(isp);
    }
  });
};

//find isp by price
exports.getIspByPrice = function(req, res, next) {
  Isps.get({ lowest_price: req.params.lowest_price }, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.send(isp);
    }
  });
};

//Update ISP
exports.updateIsp = function(req, res, next) {
  var isp = {
    name: req.body.name,
    lowest_price: req.body.lowest_price,
    rating: req.body.rating,
    max_speed: req.body.max_speed,
    description: req.body.description,
    contact_number: req.body.contact_number,
    email: req.body.email,
    image: req.body.image,
    url: req.body.url
  };

  Isps.update({ _id: req.params.id }, isp, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.json({
        message: 'ISP is updated successfully'
      });
    }
  });
};

//Delete ISP entry from DB
exports.removeIsp = function(req, res, next) {
  Isps.delete({ _id: req.params.id }, function(err, isp) {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.json({
        message: 'ISP is deleted successfully'
      });
    }
  });
};
