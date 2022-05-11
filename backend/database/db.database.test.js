const dbDatabase = require('./db.database');

describe('dbDatabase', () => {
    const expectedUser = {
        username: "TestUser",
        email: "testuser@gmail.com",
        name: "Test User",
        id: 25,
        password: "testuser123",
        address: "Calle Saturno",
        reg_date: "2022-05-11",
        date_birth: "2000-01-01",
        type_user: 0
    };

    describe('createUser', () => {
        it('create a new user', () => {
            //Arrange
            const newUser = {
                username: "TestUser",
                email: "testuser@gmail.com",
                name: "Test User",
                id: 25,
                password: "testuser123",
                address: "Calle Saturno",
                reg_date: "2022-05-11",
                date_birth: "2000-01-01",
                type_user: 0
            };
            //Act
            const user = dbDatabase.createUser(newUser)
            //Assert
            expect(user).toEqual(expectedUser);
        })
    })

    describe('getUserByEmail', () => {
        it('get user by a given email', () => {
            //Arrange
            const email = 'testuser@gmail.com';
            //Act
            const user = dbDatabase.getUserByEmail(email)
            //Assert
            expect(user).toEqual(expectedUser);
        })
    })

    describe('deleteUserByEmail', () => {
        it('delete user by a given email', () => {
            //Arrange
            const email = 'testuser@gmail.com';
            //Act
            const user = dbDatabase.deleteUserByEmail(email)
            //Assert
            expect(user).toEqual(expectedUser);
        })
    })

    describe('UpdateUser', () => {
        it('update user', () => {
            //Arrange
            const updatedUser = {
                username: "TestUserUpdated",
                email: "updated@gmail.com",
                name: "Test User Updated",
                id: 25,
                password: "testuserupdated123",
                address: "Calle Mercurio ",
                reg_date: "2022-05-11",
                date_birth: "2000-01-01",
                type_user: 0
            };
            //Act
            const user = dbDatabase.UpdateUser(updatedUser)
            //Assert
            expect(user).toEqual(updatedUser);
        })
    })

    describe('createProduct', () => {
        it('create a new product', () => {
            //Arrange
            const newProduct = {
                id:             120,
                name:           "Mochila",
                description:    "Mochila casual grande.",
                imageProduct:   "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c19qgehmoqileyeoiceo/mochila-elemental-20l-2GSXNN.png",
                price:          50,
                id_user_seller: 16,
                discount:       0,
                stock:          1,
                tag:            "HOMBRE",
            }
            //Act
            const product = dbDatabase.createProduct(newProduct)
            //Assert
            expect(product).toEqual(newProduct);
        })
    })

    describe('deleteProductByName', () => {
        it('delete a product by name', () => {
            //Arrange
            const productName = "Mochila"
            //Act
            const product = dbDatabase.deleteProductByName(productName)
            //Assert
            expect(product.name).toEqual(productName);
        })
    })

    describe('getProductByName', () => {
        it('get a product by name', () => {
            //Arrange
            const productName = "Mochila"
            //Act
            const product = dbDatabase.getProductByName(productName)
            //Assert
            expect(product.name).toEqual(productName);
        })
    })

    describe('UpdateProduct', () => {
        it('update a product', () => {
            //Arrange
            const newProduct = {
                id:             120,
                name:           "Mochila Updated",
                description:    "Mochila casual grande Updated.",
                imageProduct:   "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8ed15b3f53549a5b16caae20110e947_9366/Mochila_Power_5_(UNISEX)_Negro_FI7968_01_standard.jpg",
                price:          70,
                id_user_seller: 16,
                discount:       0,
                stock:          2,
                tag:            "HOMBRE",
            }
            //Act
            const product = dbDatabase.UpdateProduct(newProduct)
            //Assert
            expect(product).toEqual(newProduct);
        })
    })






})
