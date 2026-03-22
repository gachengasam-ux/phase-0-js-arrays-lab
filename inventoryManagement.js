// Write your code here
products = [`laptop`, `phone`, `headphones`, `monitor`];

// product information
function logFirstProduct() {
  console.log(products[0]);
}
// add a product
function addProduct(product) {
  products.push(product);
}
// update a product Information
function updateProductName(index, newName) {
  products[index] = newName;
}
// remove a product
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
