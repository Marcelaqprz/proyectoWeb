/* connect to MongoDB*/
const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string  
const url = 'mongodb+srv://proyectoweb:proyecto123321@cluster0.exzs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "proyecto_web_pae";
const collectionName = "usuarios"
client.connect();

const db = client;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully - a huevo que jala");
});


function getAllUsers() {
    return client.db(dbName).collection(collectionName).find({}).toArray();
}

function createUser(user) {
    const User = {
        username: user.username,
        email: user.email,
        name: user.name,
        id: user.id,
        password: user.password,
        address: user.address,
        reg_date: user.reg_date,
        date_birth: user.date_birth,
        type_user: user.type_user
    };
    client.db(dbName).collection(collectionName).insertOne(User)
    //getAllUsers();
}

async function getUserByEmail(email) {

    let user = await client.db(dbName).collection(collectionName).findOne(
        { email: `${email}` }
    );
    //console.log('Resultado de busqueda')
    //console.log(user)
    return user
}

async function deleteUserByEmail(email) {
    const user = await client.db(dbName).collection(collectionName).deleteOne({ email: `${email}` })
    return user
}

async function UpdateUserByEmail(user) {
    //replaceOne
    const res = await client.db(dbName).collection(collectionName).replaceOne({ id: user.id }, user)
    return res
}

async function loginStatus(email, password){
    let user = await client.db(dbName).collection(collectionName).findOne(
        { email: `${email}`, password: `${password}` }
    );
    if(user)
        return user
    else
        return null
}



// Functions to products by seller
// Functions to products

const collectionProduct = "Products"

function createProduct(product) {
    client.db(dbName).collection(collectionProduct).insertOne(product)
}

async function deleteProductByName(name) { //Delete Product
    const product = await client.db(dbName).collection(collectionProduct).deleteOne(
        { name: `${name}` }
    );
    return product
}

function getAllProducts() {
    return client.db(dbName).collection(collectionProduct).find({}).toArray();
}

async function getProductByName(name) {

    let product = await client.db(dbName).collection(collectionProduct).findOne(
        { name: `${name}` }
    );

    console.log(product)
    return product
}

async function UpdateProductByName(product) {
    const res = await client.db(dbName).collection(collectionProduct).replaceOne({ id: product.id }, product);
    console.log(res)
}


module.exports = {
    loginStatus: loginStatus,
    getAllUsers: getAllUsers,
    createUser: createUser,
    getUserByEmail: getUserByEmail,
    deleteUserByEmail: deleteUserByEmail,
    getAllProducts: getAllProducts,
    getProductByName: getProductByName,
    deleteProductByName: deleteProductByName,
    createProduct: createProduct,
    UpdateUserByEmail: UpdateUserByEmail,
    UpdateProductByName:UpdateProductByName
}