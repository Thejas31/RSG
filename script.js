const productData = {
    "Granite": [
        { name: "Monte Cristo Granite", img: "Images/Granite/Monte Cristo Granite.jpg" },
        { name: "Blue Dunes", img: "Images/Granite/Blue Dunes Granite.jpg" },
        { name: "Lady Onyx", img: "Images/Granite/Lady Onyx.jpeg" },
        { name: "Rain Forest Brown", img: "Images/Granite/Rain Forest Brown.jpeg" },
        { name: "Rain Forest Green", img: "Images/Granite/Rain Forest Green.jpg" },
        { name: "Rajasthan Black", img: "Images/Granite/Rajasthan Black.jpeg" },
        { name: "RF Gold2", img: "Images/Granite/RF Gold2.jpeg" },
        { name: "Spider Green", img: "Images/Granite/Spider Green1.jpeg" },
        { name: "White Dunes", img: "Images/Granite/White Dunes.jpg" }
    ],
    
    "Marble": [
        { name: "Toronto Brown Marble", img: "Images/Marble/Toronto Brown Marble.jpeg" },
        { name: "Magic Black Marble", img: "Images/Marble/Magic Black Marble.jpeg" },
        { name: "Panda White Marble", img: "Images/Marble/Panda White Marble.jpg" },
        { name: "Green Marble", img: "Images/Marble/Green Marble.jpg" },
        { name: "Cristalo White", img: "Images/Marble/Cristalo White.jpeg" },
        { name: "Fusion White", img: "Images/Marble/Fusion White.jpeg" },
        { name: "Jesper Red", img: "Images/Marble/Jesper Red.jpeg" },
        { name: "Monalisa", img: "Images/Marble/Monalisa.jpeg" },
        { name: "Premium Piccaso", img: "Images/Marble/Premium Piccaso.jpeg" },
        { name: "Piccaso White", img: "Images/Marble/Piccaso Wh9ite.jpeg" },
        { name: "Swiss Blue", img: "Images/Marble/Swiss Blue.jpeg" },
        { name: "Titanium Gold", img: "Images/Marble/Titanium Gold.jpeg" },
    ],
    "Quartz": [
        { name: "Borghini Gold", img: "Images/quartz/Borghini Gold.jpg" },
        { name: "Calacatta Borghini", img: "Images/quartz/Calacatta Borghini.jpg" },
        { name: "Calacatta Forest", img: "Images/quartz/Calacatta Forest.jpg" },
        { name: "Calacatta Lapis", img: "Images/quartz/Calacatta Lapis.jpg" },
        { name: "Calacatta Venetino", img: "Images/quartz/Calacatta Venetino.jpg" },
        { name: "Calacatta Verona", img: "Images/quartz/Calacatta Verona.jpg" },
        { name: "Carrara Blue", img: "Images/quartz/Carrara Blue (1).jpg" },
        { name: "Carrara White", img: "Images/quartz/Carrara White (1).jpg" },
        { name: "Crystal White", img: "Images/quartz/Crystal White.jpg" },
        { name: "Forest White", img: "Images/quartz/Forest White.jpg" },
        { name: "Ice White", img: "Images/quartz/Ice White.jpg" },
        { name: "Nero White", img: "Images/quartz/Nero White.jpg" },
        { name: "Pure White", img: "Images/quartz/Pure White.jpg" },
        { name: "River White", img: "Images/quartz/River White.jpg" },
        { name: "Sparkle Grey", img: "Images/quartz/Sparkle Grey.jpg" },
        { name: "Sparkle White", img: "Images/quartz/Sparkle White.jpg" },
        { name: "Venetino Grey", img: "Images/quartz/Venetino Grey.JPG" },
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

