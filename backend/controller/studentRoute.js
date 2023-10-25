
const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

studentRoute.post('/create-student', (req,res)=>{
    studentSchema.create(req.body, //{"name":"Kunj", "email":"kunjm@outlook.com", "rollNo":3}
    (err, data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
studentRoute.get('/', async (req, res) => {
    try {
        const data = await studentSchema.find().exec();
        res.json(data);
    } catch (err) {
        // Handle any errors here
        res.status(500).json({ error: err.message });
    }
});
studentRoute.route('/update-student/:id')
.get((req,res)=>{
    studentSchema.find(mongoose.Types.ObjectID(req.params.id), (err, data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body}, 
    (err, data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
studentRoute.delete('/delete-student/:id', (req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), 
    (err, data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = studentRoute;
