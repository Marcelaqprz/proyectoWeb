/* connect to MongoDB*/
const {getJSON, saveJSON} = require('./fileHelpers');

function getAllUsers() {
    return data.users;
}

function createUser(user) {
    const data = getJSON();
    /*const User = {
        username: user.username,
        email: user.email,
        name: user.name,
        id: user.id,
        password: user.password,
        address: user.address,
        reg_date: user.reg_date,
        date_birth: user.date_birth,
        type_user: user.type_user
    };*/
    data.users.push(user);
    saveJSON(data);
    return user;
}

async function getUserByEmail(email) {
    const data = getJSON();
    const foundUser  = data.users.find(({username}) => username === email)
    const user = foundUser || {};
    return user;
}

async function deleteUserByEmail(email) {
    const data = getJSON();
    const index = this.getIndex(email);
    if (index >= 0) {
        const user = data.users.splice(index, 1);
        saveJSON(data);
        return user;
    }
    return {};
}

async function UpdateUser(user) {
    const data = getJSON();
    const userUpdated = this.get(user.id);

    userUpdated.userName = user.userName || userUpdated.userName;
    userUpdated.email = user.email || userUpdated.email;
    userUpdated.name = user.name || userUpdated.name;
    userUpdated.password = user.password || userUpdated.password;
    userUpdated.address = user.address || userUpdated.address;
    userUpdated.reg_date = user.reg_date || userUpdated.reg_date;
    userUpdated.date_birth = user.date_birth || userUpdated.date_birth;
    userUpdated.type_user = user.type_user || userUpdated.type_user;

    const index = this.getIndex(user.userName);
    if (index > 0) {
      data.users[index] = {...data.users[index], ...user};
      saveJSON(data);
      return data.users[index];
    }
    return user;
}

// Functions to products by seller
// Functions to products

const collectionProduct = "Products"

function createProduct(product) {
    const data = getJSON();
    /*const newProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        imageProduct: product.imageProduct,
        price: product.price,
        id_user_seller: product.id_user_seller,
        discount: product.discount,
        stock: product.stock,
        tag: product.tag,
    }*/
    data.products.push(product);
    saveJSON(data);
    return product;
}

async function deleteProductByName(name) { //Delete Product
    const data = getJSON();
    const index = this.getIndex(name);
    if (index >= 0) {
        const product = data.products.splice(index, 1);
        saveJSON(data);
        return product;
    }
    return {};
}

function getAllProducts() {
    const data = getJSON();
    return data.products;
}

async function getProductByName(name) {
    const data = getJSON();
    const foundProduct  = data.products.find(({productname}) => productname === name)
    const product = foundProduct || {};
    return product;
}

async function UpdateProduct(product) {
    const data = getJSON();
    const productUpdated = this.get(product.id);

    productUpdated.name = product.name || productUpdated.name;
    productUpdated.description = product.description || productUpdated.description;
    productUpdated.imageProduct = product.imageProduct || productUpdated.imageProduct;
    productUpdated.price = product.price || productUpdated.price;
    productUpdated.id_user_seller = product.id_user_seller || productUpdated.id_user_seller;
    productUpdated.discount = product.discount || productUpdated.discount;
    productUpdated.stock = product.stock || productUpdated.stock;
    productUpdated.tag = product.tag || productUpdated.tag;

    const index = this.getIndex(product.name);
    if (index > 0) {
      data.products[index] = {...data.products[index], ...product};
      saveJSON(data);
      return data.products[index];
    }
    return user;
}

module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
    getUserByEmail: getUserByEmail,
    deleteUserByEmail: deleteUserByEmail,
    getAllProducts: getAllProducts,
    getProductByName: getProductByName,
    deleteProductByName: deleteProductByName,
    createProduct: createProduct,
    UpdateUser: UpdateUser,
    UpdateProduct: UpdateProduct,
}