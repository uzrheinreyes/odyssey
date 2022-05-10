const express = require('express');
const blogRoute = express.Router();
// model
let BlogModel = require('../models/blog');
blogRoute.route('/create-blog').post((req, res, next) => {
  BlogModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
blogRoute.route('/').get((req, res, next) => {
    BlogModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
blogRoute.route('/edit-blog/:id').get((req, res, next) => {
   if (id.match(/^[0-9a-fA-F]{24}$/)) {
    BlogModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
   }
})
// Update
blogRoute.route('/update-blog/:id').put((req, res, next) => {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
  BlogModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Blog successfully updated!')
    }
  })
  }
})
// Delete
blogRoute.route('/delete-blog/:id').delete((req, res, next) => {
  BlogModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = blogRoute;