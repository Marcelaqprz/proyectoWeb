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
    const res = await client.db(dbName).collection(collectionName).replaceOne({ id: user.id }, user)
    console.log(res)
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

// Functions to carrito

const carritoProducts = "Carrito"

function createCarrito(product) {
    client.db(dbName).collection(carritoProducts).insertOne(product)
}

async function deleteProductByIDCarrito(id) { //Delete Product
    const product = await client.db(dbName).collection(carritoProducts).deleteOne(
        { id: `${id}` }
    );
    return product
}



// Functions to FactsSales

const collectionFactsSales = "FactsSales"

function createFact(sale) {
    client.db(dbName).collection(collectionFactsSales).insertOne({sale})
}

function getallFactSales() {
    return client.db(dbName).collection(collectionFactsSales).find({}).toArray();
}


module.exports = {
    createCarrito: createCarrito,
    deleteProductByIDCarrito: deleteProductByIDCarrito,
    getAllUsers: getAllUsers,
    createUser: createUser,
    getUserByEmail: getUserByEmail,
    deleteUserByEmail: deleteUserByEmail,
    getAllProducts: getAllProducts,
    getProductByName: getProductByName,
    deleteProductByName: deleteProductByName,
    createProduct: createProduct,
    UpdateUserByEmail: UpdateUserByEmail,
    UpdateProductByName:UpdateProductByName,
    createFact: createFact,
    getallFactSales: getallFactSales,
}