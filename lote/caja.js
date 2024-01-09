//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: parseFloat(product.querySelector('div p span').textContent), // Convertir a número
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + infoProduct.price;
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
}

function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">S/. ${price.toFixed(2)}</h5>
                <h6>cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}

function clearHtml() {
    containerBuyCart.innerHTML = '';
}

 /*function showCart(x){
    document.getElementById("products-id").style.display="block";
 }
 function closeBtn(){
    document.getElementById("products-id").style.display="none";
 }
 function finalizarPedido(){
    alert("!Pedido finalizado! ");
 }*/

 /*function showCart(icon) {
    var cartContainer = document.getElementById('products-id');
    if (cartContainer.style.display === 'block') {
      cartContainer.style.display = 'none';
    } else {
      cartContainer.style.display = 'block';
      cartContainer.style.position = 'fixed';
      cartContainer.style.top = '0';
      cartContainer.style.right = '0';
    }
  }*/
  
  


  

const side_bar = document.querySelector(".sidebar");
const btn_menu = document.querySelector(".btn-menu");
side_bar.addEventListener("mouseenter", function () {
    side_bar.classList.add("expand");
    changebtn();
});
side_bar.addEventListener("mouseleave", function () {
    side_bar.classList.remove("expand");
    changebtn();
});
function changebtn() {
    if (side_bar.classList.contains("expand")) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

var categoryList = document.querySelectorAll('.category_item');
categoryList.forEach(function (category) {
    category.addEventListener('click', function () {
        categoryList.forEach(function (ct) {
            ct.classList.remove('ct_item-active');
        });
        category.classList.add('ct_item-active');
        var selectedCategory = category.getAttribute('data-category');
        filtrarPorCategoria(selectedCategory);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const categorias = document.querySelectorAll(".nav-links li");
    const productos = document.querySelectorAll(".carts"); // Modificado para seleccionar los elementos de productos

    categorias.forEach(function (categoria) {
        categoria.addEventListener("click", function () {
            const categoriaSeleccionada = categoria.getAttribute("data-category");
            filtrarPorCategoria(categoriaSeleccionada);
        });
    });

    function filtrarPorCategoria(categoria) {
        productos.forEach(function (producto) {
            const categoriaProducto = producto.getAttribute("data-category");
            if (categoriaProducto === categoria || categoria === "todos") {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    }
});


const darkThemeButton = document.getElementById('dark-theme-button');
darkThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
const searchForm = document.querySelector('.search-form');
const productItems = document.querySelectorAll('.item');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = searchForm.querySelector('input[name="q"]').value.toLowerCase();
    productItems.forEach(function (item) {
        const productName = item.getAttribute('data-product-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});









