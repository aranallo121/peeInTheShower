var express = require("express");
var peopleRoutes = express.Router();
var Person = require("../schema/peopleSchema.js");

peopleRoutes.route("/")
    .get(function(req, res){
        Person.find({}, function(err, people){
            res.send(people)
        })
    })
    .post(function (req, res){
        var newPerson  = new Person(req.body);
        console.log(newPerson);
        newPerson.save(function(err, savedPerson){
            if(err) res.status(500).send(err);
            res.send(savedPerson);
        })
    })
peopleRoutes.route('/:id')
    .get(function(req,res){
        var personId = req.params.id;
        Person.find({
            _id: personId
        }, function (err, foundPerson){
            if(err) res.status(500).send(err);
            res.send(foundPerson);
        })
    })
    .delete(function(req, res){
        var personId = req.params.id;
        Person.findOneAndRemove({
            _id: personId
        }, function (err, deletedPerson){
            if(err) res.status(500).send(err);
            res.send(deletedPerson);
        })
    })
peopleRoutes.route('/:id')
    .put(function(req, res){
        var personId = req.params.id;
        Person.findOne({
            _id: personId
        }, function(err, foundPerson){
            foundPerson.peeCount +=1;
            foundPerson.save(function(err, savedPerson){
                if(err) res.status(500).send(err);
                res.send(savedPerson);
            })
        })
    })

module.exports=peopleRoutes;


