var express = require('express');
var Long_lat = require('../models/longlat');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        Long_lat.find({})
            .then((longlats) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(longlats);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Long_lat.create(req.body)
            .then((longlat) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(longlat);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete((req, res, next) => {
        Long_lat.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:id')
    .get((req, res, next) => {
        Long_lat.findById(req.params.id)
            .then((longlat) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(longlat);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Long_lat.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((longlat) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(longlat);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Long_lat.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });





    
module.exports = router;