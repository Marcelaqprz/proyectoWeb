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

function getUserByEmail(useremail) {
    const data = getJSON();
    const foundUser  = data.users.find(({email}) => email === useremail)
    const user = foundUser || {};
    saveJSON(data);
    return user;
}

function deleteUserByEmail(useremail) {
    const data = getJSON();
    const foundUser  = data.users.find(({email}) => email === useremail)
    saveJSON(data);
    const deleteUser = delete foundUser
    return deleteUser;
}

function UpdateUser(user) {
    const data = getJSON();
    const userUpdated  = data.users.find(({id}) => id === user.id)
    
    userUpdated.userName = user.userName || userUpdated.userName;
    userUpdated.email = user.email || userUpdated.email;
    userUpdated.name = user.name || userUpdated.name;
    userUpdated.password = user.password || userUpdated.password;
    userUpdated.address = user.address || userUpdated.address;
    userUpdated.reg_date = user.reg_date || userUpdated.reg_date;
    userUpdated.date_birth = user.date_birth || userUpdated.date_birth;
    userUpdated.type_user = user.type_user || userUpdated.type_user;
    
    saveJSON(data);

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

function deleteProductByName(productname) { //Delete Product
    const data = getJSON();
    const product  = data.products.find(({name}) => name === productname)
    saveJSON(data);
    const deleteProduct = delete product
    return deleteProduct;
}

function getAllProducts() {
    const data = getJSON();
    return data.products;
}

function getProductByName(nameproduct) {
    const data = getJSON();
    const foundProduct  = data.products.find(({name}) => name === nameproduct)
    return foundProduct;
}

function UpdateProduct(product) {
    const data = getJSON();
    const productUpdated  = data.products.find(({id}) => id === product.id)

    productUpdated.name = product.name || productUpdated.name;
    productUpdated.description = product.description || productUpdated.description;
    productUpdated.imageProduct = product.imageProduct || productUpdated.imageProduct;
    productUpdated.price = product.price || productUpdated.price;
    productUpdated.id_user_seller = product.id_user_seller || productUpdated.id_user_seller;
    productUpdated.discount = product.discount || productUpdated.discount;
    productUpdated.stock = product.stock || productUpdated.stock;
    productUpdated.tag = product.tag || productUpdated.tag;

    saveJSON(data);
    return product;
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