const productData = {
    "Granite": [
        { name: "Toronto Brown Marble", img: "Images/Granite/Toronto Brown Marble.jpeg" },
        { name: "Lady Onyx", img: "Images/Granite/Lady Onyx.jpeg" },
        { name: "Magic Black Marble", img: "Images/Granite/Magic Black Marble.jpeg" },
        { name: "Panda White Marble", img: "Images/Granite/Panda White Marble.jpg" },
        { name: "Rain Forest Brown", img: "Images/Granite/Rain Forest Brown.jpeg" },
        { name: "Rain Forest Green", img: "Images/Granite/Rain Forest Green.jpg" },
        { name: "Rainforest Brown", img: "Images/Granite/Rainforest Brown.jpeg" },
        { name: "Rajasthan Black", img: "Images/Granite/Rajasthan Black.jpeg" },
        { name: "RF Gold2", img: "Images/Granite/RF Gold2.jpeg" }
    ],
    "Marble": [
        { name: "Titanium Gold", img: "Images/Marble/Cristalo White.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Fusion White.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Jesper Red.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Monalisa.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Premium Piccaso.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Piccaso Wh9ite.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Swiss Blue.jpeg" },
        { name: "Carrara White", img: "Images/Marble/Titanium Gold.jpeg" },
    ],
    "Quartz": [
        { name: "Pure White Quartz", img: "Images/Quartz/Pure White.jpeg" },
        { name: "Grey Sparkle Quartz", img: "Images/Quartz/Grey Sparkle.jpeg" }
    ]
};

function showProducts(category) {
    let modalBody = document.getElementById("modalProductList");
    modalBody.innerHTML = ""; // Clear previous products

    productData[category].forEach(product => {
        let col = document.createElement("div");
        col.className = "col-12"; // Single column layout

        let card = document.createElement("div");
        card.className = "card product-item";
        card.onclick = () => showMagnifiedProduct(product.name, product.img);

        card.innerHTML = `
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
            </div>
        `;

        col.appendChild(card);
        modalBody.appendChild(col);
    });

    new bootstrap.Modal(document.getElementById('productModal')).show();
}

// Function to Show Magnified Product
function showMagnifiedProduct(name, image) {
    document.getElementById("magnifiedProductTitle").innerText = name;
    document.getElementById("magnifiedProductImage").src = image;

    // Set WhatsApp Contact Link
    let message = `Hello, I am interested in your ${name} product. Can you provide more details?`;
    let whatsappNumber = "+919414165581"; // Your WhatsApp number
    document.getElementById("whatsappLink").href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    new bootstrap.Modal(document.getElementById('magnifiedProductModal')).show();
}

