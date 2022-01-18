const router=require('express').Router();
const { endpoint, key, databaseId, containerId }=require('../config');

const CosmosClient=require('@azure/cosmos').CosmosClient;
const client=new CosmosClient({endpoint,key});
const database=client.database(databaseId);
const container=database.container(containerId);

router.get('/userDetails',async(req,res,next) => {

    const query={
        query: 'select * from c where c.email="ddvs2499@gmail.com"'
    };

    const {resources:data}=await container.items.query(query).fetchAll();

    console.log(data);

    if(data.length!==0) {
      return res.status(400).json({error: 'User with this email already exists'});
    }
    // const newItem = {
    //     email: "ddvs2499@gmail.com",
    //     name: "deenadayalan",
    //     description: "Complete Cosmos DB Node.js Quickstart ⚡",
    //     isVerified: false
    // };

    const { email, id }=data[0];
    console.log(email);

    data[0].isVerified=true;

    const {resource:datas}= await container.item(id,email).replace(data[0]);
    console.log(datas);

    res.json(datas);
});

module.exports=router;