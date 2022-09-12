const inputValue = (id) => {
    const input = document.getElementById(id);
    const value = input.value;
    input.value = ''
    return value;
}

const addProduct = () => {
    const product_name = inputValue("product-name");
    const product_quantity = inputValue("product-quantity");
    const number = Number(product_quantity);
    if (!isNaN(product_name) || !Number.isInteger(number)) {
        alert('Please Type Valid Input')
        return;
    }
    setProductLocalStorage(product_name, product_quantity)
    display()
}

// import data from localStorage
const getLocalStorageData = () => {
    // jai name localStorage set korta hobe sei namei get korta hobe
    const products = localStorage.getItem('All_Products');
    const parseProducts = JSON.parse(products);
    return parseProducts;
};

//send data from localStorage
const setProductLocalStorage = (name, quantity) => {
    let products = getLocalStorageData()
    // jodi empty products hoi tahole empty object add hobe
    if (!products) {
        products = {}
    }
    if (products[name]) {
        products[name] = parseInt(products[name]) + parseInt(quantity)
    }
    else {
        products[name] = quantity;
    }
    localStorage.setItem('All_Products', JSON.stringify(products))
};

const display = () => {
    const products = getLocalStorageData();
    const section = document.getElementById('all-products');
    section.textContent = ''
    for (const product in products) {
        // product hossa object [prodcut] product hossa string string [] diya access kora jai
        console.table(product, products[product])
        const name = product;
        const quantity = products[product];
        const div = document.createElement('div');
        div.innerHTML = `
           <div class="shadow-sm p-3 mb-2 bg-body rounded">
                <span class="fs-1">${name}</span>
                Quantity:<small class="fw-bold">
                    ${quantity}
                </small>
            </div>
           `
        section.appendChild(div)
    }
};

display()













