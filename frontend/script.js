
// ==========================
// Fetch and Render Medicines
// ==========================

// This function fetches all medicines from the backend
// and displays them as cards on the webpage.
async function fetchMedicines() {
    const res = await fetch('http://localhost:8000/medicines');
    const data = await res.json();

    const container = document.getElementById('medicine-list');
    container.innerHTML = '';  // Clear any existing content

    // Loop through each medicine in the list
    data.medicines.forEach(med => {
        const div = document.createElement('div');
        div.className = 'medicine-card';  // Add card styling

        // Fallbacks for missing fields (null or empty values)
        div.innerHTML = `
            <h3>${med.name || 'Unnamed Medicine'}</h3>
            <p>${med.description || 'No description available'}</p>
            <p><strong>Price:</strong> ${med.price ?? 'N/A'}</p>
        `;

        // Add the card to the container
        container.appendChild(div);
    });
}

// ==========================
// Submit New Medicine
// ==========================

// This function is called when the form is submitted.
// It validates the inputs and sends a POST request to the backend.
async function submitMedicine() {
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const priceInput = document.getElementById('price').value;

    // Basic validation for empty fields
    if (!name || !description || priceInput === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Validate price (must be a positive number)
    const price = parseFloat(priceInput);
    if (isNaN(price) || price <= 0) {
        alert("Price must be a positive number.");
        return;
    }

    // Prepare form data to send to backend
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    try {
        // Send POST request to /create endpoint
        const res = await fetch("http://localhost:8000/create", {
            method: "POST",
            body: formData
        });

        // Get response and notify user
        const result = await res.json();
        alert(result.message || "Medicine added successfully!");

        // Clear form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';

        // Refresh the displayed medicines and average price
        fetchMedicines();
        fetchAveragePrice();
    } catch (error) {
        // Catch and log any errors
        console.error("Failed to submit medicine:", error);
        alert("Something went wrong. Please try again.");
    }
}

// ==========================
// Fetch and Display Average Price
// ==========================

// This function fetches the average price of all medicines
// and displays it at the top of the page.
async function fetchAveragePrice() {
    const res = await fetch('http://localhost:8000/average-price');
    const data = await res.json();

    // Display average price with 2 decimal places
    document.getElementById('average-price').innerText = `Average Price: $${data.average_price}`;
}

// ==========================
// On Page Load
// ==========================

// When the page finishes loading, fetch and display the medicines
// and the average price right away.
document.addEventListener('DOMContentLoaded', () => {
    fetchMedicines();
    fetchAveragePrice();
});
