//Routes
/**
 * @swagger
 * /user/getallusers:
 *  get:
 *    description: Use to get all the users
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/getuseremail:
 *  get:
 *    description: Get the user by the email
 *    parameters:
 *      - in: Email
 *        email: string
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/getallproducts:
 *  get:
 *    description: get all the products
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/getproductname:
 *  get:
 *    description: get product by name
 *    parameters:
 *      - in: product name
 *    responses:
 *      '200':
 *          description: A successful response

 * /user/upuseremail:
 *  post:
 *    description: Update the user
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/login:
 *  post:
 *    description: user login
 *    parameters:
 *      - in: email
 *      - in: password
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Error
 * /user/createuser:
 *  post:
 *    description: create a new user
 *    parameters:
 *      - in: user JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/createproducts:
 *  post:
 *    description: create a new product
 *    parameters:
 *      - in: product JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/upproductname:
 *  post:
 *    description: update a product
 *    parameters:
 *      - in: product JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/createcarrito:
 *  post:
 *    description: create carrito
 *    parameters:
 *      - in: product
 *    responses:
 *      '200':
 *          description: A successful response
 * 
 * /user/deleteuser:
 *  delete:
 *    description: Delete the user by the email
 *    parameters:
 *      - in: Email
 *        email: string
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/deleteproduct:
 *  delete:
 *    description: delete a product by name
 *    parameters:
 *      - in: product name JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/dproductid:
 *  delete:
 *    description: delete product by id in carrito
 *    parameters:
 *      - in: idproduct
 *    responses:
 *      '200':
 *          description: A successful response
*/