const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb+srv://yoonme:dev-yoonme@cluster0.cvahgwj.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        console.log("Connecting to MongoDB...");
        await client.connect();
        console.log("Connected to MongoDB!");

        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");

        productsCollection.drop();
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        ]

        let products = [];
        for (let i = 0; i < 10; i+=1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories).name,
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        console.log("Inserting products...");
        await productsCollection.insertMany(products);
        console.log("Products inserted successfully!");
    } catch (e) {
        console.error("Error during data insertion:", e.message);
    } finally {
        await client.close();
    }
}

main();