let countItems = document.getElementById("count_items");
let categories_container = document.getElementById("categories_container");
let closeCart = document.getElementById("close_cart");
let cleanCartBtn = document.getElementById("clean_cart_btn");
let buyBtn = document.getElementById("buy_btn");
let Subtotal = document.getElementById("Subtotal");
let cartBox = document.getElementById("header__cart_box");
let modal = document.getElementById("myModal");
let cartModal = document.getElementById("cart_modal");



let cart = JSON.parse(localStorage.getItem('cartItems')) ?? [];


//Funcion para actualizar el numero junto al icono del carrito que indica la cantidad de productos que hay dentro del mismo
const updateCountItems = () =>{
    let cantItems = cart.reduce((acc, itemCant) => acc + itemCant.cant, 0);
    countItems.innerText = cantItems;
}


//Funcion para mostrar los productos en la Ecomm section
const showProducts = (arr) =>{
    arr.forEach(cat => {
            categories_container.innerHTML += `
            <section id="${cat.category.toLowerCase()}">
                <h2 class="products_title">${cat.category}</h2>
                <div class="cards_container col_4_big col_3_large col_2_medium col_1_small">
                    ${cat.products.map(p => `
                        <div class="card">
                            <img src="${p.img}" class="card-img-top" alt="${p.name}">
                            <div class="card-body">
                                ${(p.bestSeller) ? `<p>BEST SELLER<p>` : `` }
                                <h5 class="card-title">${p.name}</h5>
                                <p class="card-text">$${p.price}</p>
                                <a href="#" class="btn btn-primary" id="btn${p.id}">Agregar al carrito</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    })
}

//Funcion para actualizar el localstorage y el contador de productos cuando se agregue o elimine un producto
const updateCart = () =>{
    updateCountItems();
    localStorage.setItem('cartItems', JSON.stringify(cart))
}


//funcion para agregar el evento click a los botones de los productos
const aventShopBtns = (products) =>{
    products.forEach(product => {
        document.getElementById(`btn${product.id}`).addEventListener("click", () =>{
            if(product.stock > 0){
                if(cart.some(pCart => pCart.id == product.id)){

                    let i = cart.findIndex(pCart => pCart.id == product.id)
                    if(cart[i].cant < product.stock){
                        cart[i].cant++;
                        pAddedToast();
                        updateCart();
                    }else{
                        outStockToast();
                    }  
                }
                
                else{
                    let pToCart = {
                        ...product,
                        cant: 1
                    }
                    delete pToCart.stock;
                    cart.push(pToCart);
                    pAddedToast();
                    updateCart();
                }
            }else{
                outStockToast();
            }
        })
    });
}


//Funcion para linpiar el carrito y la informacion del localStorage
const cleanCart = () =>{
    localStorage.removeItem("cartItems")
    cartModal.innerHTML = "";   
    Subtotal.innerText = `Subtotal : 0$`
    cart = [];
    countItems.innerText = cart.length;
}



//Funcion para agregarle el evento click a los botones de borrar y finalizar compra del modal
const btnsModal = () =>{
    if(cart.length > 0){
        cleanCartBtn.addEventListener("click", cleanCart)

        buyBtn.addEventListener("click", () =>{
            cart.forEach(pCart => {
                allProducts.forEach(product => {
                    if(pCart.id == product.id){
                        product.stock -= pCart.cant;
                    }
                });
                cleanCart();
                modal.style.display = "none"; 
                purchasecompleted();
            });
        });
    }
}





//Funcion con todo lo que secede una vez entra al carrito
cartBox.addEventListener("click", () =>{
    modal.style.display = "block";
    modal.classList.add('fadein_effect');

    //Se cierra el modal si preciona la "x" o si hace click por fuera
    window.addEventListener("click", (e) => {
        if (e.target == modal || e.target == closeCart) {
            modal.style.display = "none";
          }
    })

    //se muestran todos los elementos dentro del carrito y se calcula el precio de cada uno dependiendo de la cantidad
    cartModal.innerHTML = "";
    cart.forEach(product => {
        console.log("paso")
        let itemPrice = product.price*product.cant;
        cartModal.innerHTML += `
        <div class="product_cart_row" id="cart_row${product.id}">
            <div>
                <div>
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                </div>
            </div>

            <p>${product.cant}</p>

            <p>${itemPrice}$</p>
        </div>
        `
    });

    // moreLessbtns();

    let totalAmount = cart.reduce((acc, itemValue) => acc + (itemValue.price * itemValue.cant), 0);
    Subtotal.innerText = `Subtotal : ${totalAmount}$`

    btnsModal();
})



// Al entrar a la pagina se actualiza este numero con la informacion que proviene del localStorage si no hay datos muestra un 0
updateCountItems();

let allProducts;
fetch('../data/products.json')
    .then(response => response.json())
    .then(data => {
    allProducts = data.flatMap(category => category.products);
    //por defecto se muestran todas las bicicletas
    showProducts(data);
    aventShopBtns(allProducts);
    });



