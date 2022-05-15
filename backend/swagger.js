//Routes
/**
 * @swagger
 * /user/getallusers:
 *  get:
 *    description: Use to get all the users
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/getuseremail?email={email}:
 *  get:
 *    description: Get the user by the email
 *    parameters:
 *      - name: email
 *        in: path              
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/getallproducts:
 *  get:
 *    description: get all the products
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/getproductname?name={name}:
 *  get:
 *    description: get product by name
 *    parameters:
 *      - name: name
 *        in: path
 *    responses:
 *      '200':
 *          description: A successful response

 * /user/upuseremail:
 *  post:
 *    description: Update the user
 *    parameters:
 *      - in: user body JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/login?email={email}&password={password}:
 *  post:
 *    description: user login
 *    parameters:
 *      - name: email
 *        in: path
 *      - name: password
 *        in: path
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Error
 * /user/createuser:
 *  post:
 *    description: create a new user
 *    parameters:
 *      - in: user body JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/createproducts:
 *  post:
 *    description: create a new product
 *    parameters:
 *      - in: product body JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/upproductname:
 *  post:
 *    description: update a product
 *    parameters:
 *      - in: product body JSON
 *    responses:
 *      '200':
 *          description: A successful response
 * 
 * /user/deleteuser?email={email}:
 *  delete:
 *    description: Delete the user by the email
 *    parameters:
 *      - name: email
 *        in: path
 *    responses:
 *      '200':
 *          description: A successful response
 * /user/deleteproduct?name={name}:
 *  delete:
 *    description: delete a product by name
 *    parameters:
 *      - name: name
 *        in: path
 *    responses:
 *      '200':
 *          description: A successful response
*/