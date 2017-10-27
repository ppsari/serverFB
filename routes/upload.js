'use strict'
const express = require('express');
let router = express.Router();
// import axios from 'axios';
// import ;

// var multer = require('multer'),
//     multerS3 = require('multer-s3'),
//     fs = require('fs'),
//     AWS = require('aws-sdk');


// AWS.config.update({
//     accessKeyId: 'AKIAJYLOGZUUG25RI4VQ',
//     secretAccessKey: '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',
//     region: "us-east-1"
// });

// {
//     "accessKeyId": "access key id goes here",
//     "secretAccessKey": "secret access key goes here",
//     "region": "us-east-1"
// }

// var s3 = new aws.S3({apiVersion: '2006-03-01', region:'us-east-1'});
// var s3 = new AWS.S3();


// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'room360img',
//     acl: 'public-read',
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })

// var upload = multer({
//     storage: multerS3({
//         s3: s3,
//         acl: 'public-read',
//         bucket:  'http://room360img.s3-us-east-2.amazonaws.com/',
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
// });


// var uploadFile = function (req, res) {
//   // console.log(req.body);
//   // console.log('--------------------');
//   console.log('masuk upload file');
//   console.log(req.file)
//     var item = req.body;
//
//     res.send('tes')
// }

// 
// router.get('/sign_s3', require('react-s3-upload/S3Sign')({
//    S3_BUCKET:'room360img',
//    unique: false
//  }));

module.exports = router;