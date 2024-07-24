let productsList = [
    {
        category: "Alimento",
        products:[
            {
                name: "Pro Plan Gatos Cuidado Urinario Urinary 3 Kg",
                price: 142.950,
                img: "../Resources/Gallery/pro-plan-urinary-3kg-min.jpg",
                bestSeller: true,
            },
            {
                name: "Pedigree High Protein Alimento Completo y Balanceado 4 Kg",
                price: 72.80,
                img: "../Resources/Gallery/pedigree-high-protein-4kg-min.jpg",
                bestSeller: true,
            },
            {
                name: "Max Professional Line Perros Senior Pollo y Arroz 15 Kg",
                price: 223.600,
                img: "../Resources/Gallery/max-senior-pollo-arroz-15kg-min.jpg",
            },
            {
                name: "Dog Chow Perros Senior Vida Sana 17 Kg",
                price: 193.500,
                img: "../Resources/Gallery/dow-chow-senior-vida-sana-17kg-min.jpg",
            }
        ]
    },

    {
        category: "Snacks",
        products:[
            {
                name: "BR for CAT Bombonera para gatos reduce bolas de pelo 350 gr",
                price: 22.300,
                img: "../Resources/Gallery/br-cat-bombonera-350gr-snack-min.jpg",
                bestSeller: true,
            },
            {
                name: "Churu Snack Receta de Atún con Salmón x 4 Unds 14 g  (Rosa)",
                price: 13.800,
                img: "../Resources/Gallery/churu-atun-salmon-4-14gr.jpg",
            },
            {
                name: "Bombonera Delidog Bone por 1 Kg",
                price: 33.600,
                img: "../Resources/Gallery/delidog-bombonera-1kg.jpg",
            },
            {
                name: "DentaLife Perros Razas Medianas 119 g",
                price: 19.500,
                img: "../Resources/Gallery/dentalife-119g.jpg",
            },  
        ]
    },

    {
        category: "Juguetes",
        products:[
            {
                name: "Hueso Juguete comestible paleta de cerdo",
                price: 5.500,
                img: "../Resources/Gallery/hueso-juguete-paleta-de-cerdo.jpg",
            },
            {
                name: "Pelota Lick And Snak 8 cm",
                price: 48.000,
                img: "../Resources/Gallery/link-and-snack-8cm.jpg",
            },
            {
                name: "Juguete caña de pesca para gatos",
                price: 8.000,
                img: "../Resources/Gallery/cana-pesca-gatos.jpg",
            },
        ]
    },

    {
        category: "Accesorios",
        products:[
            {
                name: "Maxicat Arena para gatos Aroma a Café 25 Kg",
                price: 78.700,
                img: "../Resources/Gallery/maxicat-arena-cafe-25kg.jpg",
            },
            {
                name: "Collar Felcan ID Talla Única Morado",
                price: 42.000,
                img: "../Resources/Gallery/collar-felcan-unica-morado.jpg",
            },
        ]
    }

];


let categories_container = document.getElementById("categories_container");

productsList.forEach(cat => {
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
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

});