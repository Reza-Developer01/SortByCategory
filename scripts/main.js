const products = [
    {id: 1, name: "گردنبند ۱۸ عیار", category: "گردنبند طلا", price: 100000, discount: 20, image: "product-1.png"},
    {id: 2, name: "دستبند ۱۸ عیار", category: "دستبند طلا", price: 200000, discount: 10, image: "product-1.png"},
    {id: 3, name: "انگشتر ۱۸ عیار", category: "انگشتر طلا", price: 300000, discount: 30, image: "product-1.png"},
    {id: 4, name: "گوشواره ۱۸ عیار", category: "گوشواره طلا", price: 400000, discount: 40, image: "product-1.png"},
    {id: 5, name: "پلاک ۱۸ عیار", category: "پلاک طلا", price: 500000, discount: 50, image: "product-1.png"},
    {id: 6, name: "پابند ۱۸ عیار", category: "پابند طلا", price: 600000, discount: 60, image: "product-1.png"},
    {
        id: 7,
        name: "ست و نیم ست ۱۸ عیار",
        category: "ست و نیم ست طلا",
        price: 700000,
        discount: 70,
        image: "product-1.png"
    },
];

const categories = document.querySelectorAll(".categories li");
const productsContainer = document.querySelector(".products");

function displayProducts(filteredProducts) {
    productsContainer.innerHTML = filteredProducts.map(product => `
    <div class="w-[268px]">
        <!-- banner -->
        <div class="relative mb-5">
            <img src="./images/products/${product.image}" alt="product ${product.id}" class="w-auto h-auto">
            <span class="absolute top-3 left-2.5 flex items-center justify-center bg-primary text-white font-Peyda-Medium py-1 px-3">${product.discount}%</span>
        </div>

        <!-- title -->
        <a href="#" class="text-black font-Peyda-SemiBold">${product.name}</a>

        <!-- price -->
        <div class="flex flex-col items-end gap-y-3 mt-3">
            <span class="text-gray line-through text-sm blur-[0.9px]">500,000</span>
            <span class="flex items-center gap-x-1 font-Peyda-SemiBold text-xl text-black">
                <span class="text-gray text-sm font-Peyda-Regular">تومان</span>
                ${product.price.toLocaleString("fa-IR")}
            </span>
        </div>
    </div>
  `).join('');
}

categories.forEach(category => {
    category.addEventListener('click', () => {
        categories.forEach(cat => cat.classList.remove('categories-item'));
        category.classList.add('categories-item');

        const selectedCategory = category.dataset.category;
        const filteredProducts = selectedCategory === "همه"
            ? products
            : products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    });
});

displayProducts(products);
