const {Item} =require("../model/itemModel")
const asyncHandler=require('express-async-handler')
const mongoose=require("mongoose")

const getAllItems = async(req,res) => { 
    try {
        const allItems=await Item.find()
        res.status(200).json(allItems);
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }
};

const getItem = async(req,res) => {
    try {
        const itemId = req.params.id;
        const item=await Item.findById(itemId);
        //If item not found
        if(!item){             
            res.send(400)
            throw new Error('Item not found')
        }
        res.status(200).json(item);
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const deleteItem = async(req,res) => {
    try {
       // const itemId = req.params.id;
        const item=await Item.findById(req.params.id)
        //If item is not found
        if(!item){
            res.send(400)
            throw new Error('Item not found')
        }
        await item.remove()
        res.status(200).json({id:req.params.id})
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const updateItem = async(req,res) => {
    try {
        const item=await Item.findById(req.params.id)
        //If item not found
        if(!item){
            res.send(400)
            throw new Error('Item not found')
        }
        const updatedItem=await Item.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json(updatedItem)
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const createItem= async(req,res) => {
    try {
        const item = await Item.create(req.body);
       res.status(200).json(item)
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

module.exports = {getAllItems,getItem,deleteItem,createItem,updateItem};
