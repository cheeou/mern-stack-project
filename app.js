const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
    
        const database = client.db('secondDB'); 
        const inventory = database.collection('inventory');

        // const query = { item: 'canvas',  qty: 100,  tags: ['cotton'],  size: { h: 28, w: 35.5, uom: 'cm' } };
        // const execute = inventory.insertOne(query);
        
        // const query = [
        //     {
        //         item: 'journal',
        //         qty: 25,
        //         tags: ['blank', 'red'],
        //         size: { h: 14, w: 21, uom: 'cm' }
        //     },
        //     {
        //         item: 'mat',
        //         qty: 85,
        //         tags: ['gray'],
        //         size: { h: 27.9, w: 35.5, uom: 'cm' }
        //     },
        //     {
        //         item: 'mousepad',
        //         qty: 25,
        //         tags: ['gel', 'blue'],
        //         size: { h: 19, w: 22.85, uom: 'cm' }
        //     }
        // ];
        // const execute = inventory.insertMany(query);

        // const execute = await inventory.find({}).toArray();
        // const execute = await inventory.find({}).project({ _id:0 }).toArray();
        // console.log(execute);

        // const execute = await inventory.deleteMany({});

        // const query = [
        //     {
        //         item: 'journal',
        //         qty: 25,
        //         size: { h: 14, w: 21, uom: 'cm' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'notebook',
        //         qty: 50,
        //         size: { h: 8.5, w: 11, uom: 'in' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'paper',
        //         qty: 100,
        //         size: { h: 8.5, w: 11, uom: 'in' },
        //         status: 'D'
        //     },
        //     {
        //         item: 'planner',
        //         qty: 75,
        //         size: { h: 22.85, w: 30, uom: 'cm' },
        //         status: 'D'
        //     },
        //     {
        //         item: 'postcard',
        //         qty: 45,
        //         size: { h: 10, w: 15.25, uom: 'cm' },
        //         status: 'A'
        //     }
        // ];
        
        // const execute = inventory.insertMany(query);

        // const execute = await inventory.find({ status : 'D'}).project({ _id: 0}).toArray();
        // const execute = await inventory.find({ status : 'A', qty : 50}).project({ _id: 0}).toArray();
        // const execute = await inventory.find({ status : 'A' || 'B'}).project({ _id: 0}).toArray();
        // const execute = await inventory.find({ status : 'A', qty : { $lt : 30 }}).project({ _id: 0}).toArray();
        // const execute = await inventory.find({ status : 'A'} || {qty : { $lt : 30}}).project({ _id: 0}).toArray();

        // 중첩 필드 따옴표
        // const execute = await inventory.find({ "size.uom" : 'in'}).project({ _id: 0}).toArray(); 
        // const execute = await inventory.find({ "size.h" : { $gt : 10}}).project({ _id: 0}).toArray();

        // console.log(execute);

}

run();