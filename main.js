// Select the container that holds all the product buttons
const produkContainer = document.querySelector('.katalog');

// Function to handle the purchase action
const handlePurchase = (event) => {
    // Check if the clicked element is a button with the class 'beli'
    if (event.target.classList.contains('beli')) {
        const productName = event.target.closest('.produk-item').querySelector('h3').innerText;
        alert(`Anda telah membeli produk: ${productName}!`);
        // Here you can add additional code to process the purchase, e.g., updating a cart, sending data to a server, etc.
    }
};

// Add event listener to the container for event delegation
produkContainer.addEventListener('click', handlePurchase);