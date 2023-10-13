document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
  
    const products = [
      { name: "Product 1", price: "₹1000", image: "image3.jpg" },
      { name: "Product 2", price: "₹1500", image: "image5.jpg" },
      { name: "Product 3", price: "₹2500", image: "image1.jpg" },
      { name: "Product 3", price: "₹2500", image: "image6.jpg" },
      { name: "Product 3", price: "₹2500", image: "image7.jpg" },
      { name: "Product 3", price: "₹2500", image: "image8.jpg" },
    ];
  
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
  
      const productContainer = document.createElement("div"); // Container for image and price
      productContainer.className = "product-container"; // Add a class for styling
  
      const imageElement = document.createElement("img");
      imageElement.src = product.image;
      imageElement.alt = product.name;

      imageElement.width = 350; 
      imageElement.height = 300; 
  
      const priceElement = document.createElement("p");
      priceElement.textContent = product.price;
  
      // Apply additional border styles to the productContainer
      productContainer.style.border = "2px solid #080808";
      productContainer.style.backgroundColor = "white";
      productContainer.style.borderRadius = "5px";
      productContainer.style.padding = "10px";
      productContainer.style.textAlign = "center";
  
      productContainer.appendChild(imageElement);
      productContainer.appendChild(priceElement);
      productElement.appendChild(productContainer);
  
      productsList.appendChild(productElement);
    });
  
    const scrollToProductLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
  
    scrollToProductLink.addEventListener("click", function (event) {
      event.preventDefault();
  
      featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
  });
  