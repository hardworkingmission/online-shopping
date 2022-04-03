const addToCart=(id)=>{
    let productCart={}
    productCart=getProductFromCart()
    const quantity=productCart[id]
    if(quantity){
        productCart[id]=quantity+1
    }else{
        productCart[id]=1
    }
    localStorage.setItem('product-cart',JSON.stringify(productCart)) 
}
const getProductFromCart=()=>{
    let productCart={}
    const storedCart=localStorage.getItem('product-cart')
    if(storedCart){
        productCart=JSON.parse(storedCart)
    }
    return productCart
}
const removeItemFromCart=(id)=>{
    const storedCart=getProductFromCart()
    if(storedCart){
        delete storedCart[id]
    }
    localStorage.setItem('product-cart',JSON.stringify(storedCart))

}
export{getProductFromCart,addToCart,removeItemFromCart}