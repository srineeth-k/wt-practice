// function updateProductInfo that extracts the id and name properties from a product object and then adds new properties (discount and inStock) using the spread operator.

const product={id:1,name :'Laptop' ,price :100000, category:'Electronics'}

function updateProductInfo(products,discount,inStock){
    return {id:products.id, name:product.name,discount:discount,inStock:inStock}
}


console.log(updateProductInfo(product,2000,true));