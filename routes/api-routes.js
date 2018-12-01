const express = require("express");
const router = express.Router();
const path = require('path');
const db = require('../models')
// const en = require('../../crypto');

// router.post('/users', (req, res) => {
//     db.Users.create(req.body)
//     .then(data =>{
//         console.log(data)
//         res.status(200).json({
//             data: data
//         })
//     })
//     .catch(err =>{
//         res.status(500).json({
//             error: err
//         })
//     });
// });

router.get('/users', (req, res) =>{
    db.Users.find({})
    .then(data => {
        console.log(data)
        res.status(200).json(data)
    })

    .catch(err => {
        console.log(err)
        res.json(err)
    })
    
});

router.get('/secrets', (req, res) =>{
    db.Secrets.find({})
    .then(data => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
    
});

router.post('/secrets', (req,res) => {
    console.log(req.body)
    db.Secrets.create(req.body)        
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
})

router.put('/secrets/:name', (req,res) => {
    console.log(req.body)
    db.Secrets.findOneAndUpdate({name: req.body.name}, req.body)        
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
})

router.delete('/secrets/:name', (req,res) => {
    console.log(req.body)
    db.Secrets.findOneAndDelete({name: req.params.name})        
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
})

// router.delete('/users/_id', (req, res)=> {
//     db.Users.rev
// })

// router.get('/api/secrets', function (req, res) {
// 	db.pword_data.findAll({}).then(function (response, err) {
// 		if (err) {
// 			res.json(err)
// 		}
// 		res.json(response)
// 	});
// });


// //----------UPDATE INFORMATION WHEN IN VAULT----------//
// router.put('/secret/:id', function (req, res) {
// 	console.log("=========================================")
// 	console.log(req.body);
// 	let updatePW = en.encrypt(req.body.password);
// 	console.log(req.body.password);
// 	console.log(updatePW);

// 	// let idWhere = $(this).closest(".card").find("#id");
// 	// console.log(idWhere);
// 	db.pword_data.update({url: req.body.url, user_name: req.body.user_name, password:updatePW},{
// 			where: { id: req.params.id
// 		}
// 	}).then(function (response, err) {
// 		if (err) {
// 			res.json(err)
// 		}
// 		console.log(response)
// 		res.json(response)
// 	});
// });

// router.delete('/secret/:id', function (req, res) {
// 	db.pword_data.destroy({
// 		where: {
// 		  id: req.params.id
// 		}
// 	  }).then(function (response){
// 		  console.log("DELETED")
// 		  res.json(response)
// 	  });
// 		});

// router.post('/secret', function (req, res) {
// 	let pw = en.encrypt(req.body.password);
// 	db.pword_data.create({ name: req.body.name, url: req.body.url, user_name: req.body.user_name, password: pw })
// 	.then(function (response, error) {
// 		res.json(response);
// 	})
// });

module.exports = router;
