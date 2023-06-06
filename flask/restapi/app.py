from flask import Flask, jsonify, request #importamos flask
from products import products

app = Flask(__name__) #aplicacion de servidor

# rutas
@app.route('/ping') # ruta de testeo
def ping():
    return jsonify({"message": "pong!"})

@app.route('/products') # ruta de productos
def getProducts():
    return jsonify({"products": products, "message": "Product's List"})

@app.route('/products/<string:product_name>') # ruta de productos por nombre
def getProductByName(product_name):
    productsFound = []
    for p in products:
        if p['name'] == product_name:
            productsFound.append(p)
    if len(productsFound) > 0:
        return jsonify({"product": productsFound})
    return jsonify({"message": "Product not found"})

@app.route('/products', methods=['POST'])
def addProduct():
    new_product = {
        "name": request.json['name'],
        "price": request.json['price'],
        "quantity": request.json['quantity']
    }
    products.append(new_product)
    return jsonify({"message":"Product Added Succesfully", "products":products})

@app.route('/products/<string:product_name>',methods=['PUT'])
def updateProduct(product_name):
    productsFound = []
    for p in products:
        if p['name'] == product_name:
            productsFound.append(p)
    if len(productsFound) > 0:
        productsFound[0]['name'] = request.json['name']
        productsFound[0]['price'] = request.json['price']
        productsFound[0]['quantity'] = request.json['quantity']
        return jsonify({
            "message": "Product Updated",
            "product": productsFound[0]
        })
    return jsonify({"message":"Product not found"})

@app.route('/products/<string:product_name>',methods=['DELETE'])
def deleteProduct(product_name):
    productsFound = []
    for p in products:
        if p['name'] == product_name:
            productsFound.append(p)
    if len(productsFound) > 0:
        products.remove(productsFound[0])
        return jsonify({"message":"Product deleted","products": products})
    return jsonify({"message": "Product not found"})

if __name__ == '__main__':
    app.run(debug=True, port=4000)