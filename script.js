const productData = {
    "Granite": [
        { name: "Azul Nova Granite", img: "Images/Granite/Azul Nova Granite.jpg" },
        { name: "Bengal Black", img: "Images/Granite/Bengal Black.jpg" },
        { name: "Swiss Blue", img: "Images/Granite/Swiss Blue.jpeg" },
        { name: "Blue Dunes Granite", img: "Images/Granite/Blue Dunes Granite.jpg" },
        { name: "Desert Brown", img: "Images/Granite/Desert Brown Closeup.jpeg" },
        { name: "Indian Arora", img: "Images/Granite/Indian Arora.jpg" },
        { name: "Titanium Gold", img: "Images/Granite/Titanium Gold.jpeg" },
        { name: "Metallic Blue Granite", img: "Images/Granite/Metallic Blue Granite.jpg" },
        { name: "Monalisa", img: "Images/Granite/Monalisa.jpg" },
        { name: "Monte Cristo Granite", img: "Images/Granite/Monte Cristo Granite.jpg" },
        { name: "Rajasthan Black", img: "Images/Granite/Rajasthan Black.jpeg" },
        { name: "Red Granite", img: "Images/Granite/Red Granite1.jpeg" },
        
        { name: "Steel Grey", img: "Images/Granite/Steel Grey.jpg" },
    ],
    
    "Marble": [
        { name: "RF Gold", img: "Images/Granite/RF Gold2.jpg" },
        { name: "Toronto Brown Marble", img: "Images/Marble/Toronto Brown Marble.jpeg" },
        { name: "Magic Black Marble", img: "Images/Marble/Magic Black Marble.jpg" },
        { name: "Panda White Marble", img: "Images/Marble/Panda White Marble.jpg" },
        { name: "Spider Green", img: "Images/Marble/Spider Green1.jpeg" },
        { name: "Green Marble", img: "Images/Marble/Green Marble.jpg" },
        { name: "Cristalo White", img: "Images/Marble/Cristalo White.jpeg" },
        { name: "Fusion White", img: "Images/Marble/Fusion White.jpeg" },
        { name: "Jesper Red", img: "Images/Marble/Jesper Red.jpeg" },
        // { name: "Monalisa", img: "Images/Marble/Monalisa.jpeg" },
        // { name: "Premium Piccaso", img: "Images/Marble/Premium Piccaso.jpeg" },
        { name: "Piccaso White", img: "Images/Marble/Piccaso Wh9ite.jpeg" },
        { name: "Brown Fantasy Lighter", img: "Images/Marble/Brown Fantasy Lighter.jpg" },
        { name: "Brown Fantasy", img: "Images/Marble/Brown Fantasy.jpg" },
        { name: "Lady Onyx", img: "Images/Marble/Lady Onyx2.jpg" },
        { name: "Magic Black Marble", img: "Images/Marble/Magic Black Marble.jpg" },
        { name: "Marine Black", img: "Images/Marble/Marine Black1.jpg" },
        { name: "Rain Forest Brown", img: "Images/Marble/Rain Forest Brown.jpg" },
        { name: "Rain Forest Gold", img: "Images/Marble/Rain Forest Gold.jpg" },
        { name: "Rain Forest Green", img: "Images/Marble/Rain Forest Green.jpg" },
        { name: "River Blue", img: "Images/Marble/River Blue.jpg" },
        { name: "Teak Sandstone", img: "Images/Marble/Teaksandstone 8.jpeg" },
        { name: "White Dunes Marble", img: "Images/Marble/White Dunes Marble.jpg" },
        { name: "Yellow Marble", img: "Images/Marble/Yellow Marble4.jpeg" } 
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
        { name: "Calacatta SW", img: "Images/quartz/Calacatta SW.jpeg" },
        { name: "Calacatta SG", img: "Images/quartz/Calacatta SG.jpeg" },
        { name: "Calacatta FG", img: "Images/quartz/Calacatta FG.jpeg" },
        { name: "Calacatta Fantasy", img: "Images/quartz/Calacatta Fantasy.jpeg" },
        { name: "Calacatta CM", img: "Images/quartz/Calacatta CM.jpeg" },
        { name: "Calacatta CG", img: "Images/quartz/Calacatta CG.jpeg" },
        { name: "Calacatta AG", img: "Images/quartz/Calacatta AG.jpeg" }
    ]
};

function showProducts(category) {
    let modalTitle = document.getElementById("productModalLabel");
    let modalBody = document.getElementById("modalProductList");

    // Update the modal title with the selected category name
    modalTitle.innerText = category;
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

