const books = [
    { title: "The Alchemist", category: "fiction", price: 299, rating: 4.6 },
    { title: "Atomic Habits", category: "non-fiction", price: 399, rating: 4.8 },
    { title: "Clean Code", category: "tech", price: 599, rating: 4.7 },
    { title: "Deep Work", category: "non-fiction", price: 350, rating: 4.5 },
    { title: "Harry Potter", category: "fiction", price: 450, rating: 4.9 },
    { title: "JavaScript Mastery", category: "tech", price: 550, rating: 4.4 }
];

const bookList = document.getElementById("bookList");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const sortRating = document.getElementById("sortRating");

function displayBooks(data) {
    bookList.innerHTML = "";
    data.forEach(book => {
        bookList.innerHTML += `
      <div class="book-card">
        <h3>${book.title}</h3>
        <p>Category: ${book.category}</p>
        <p class="price">₹${book.price}</p>
        <p class="rating">⭐ ${book.rating}</p>
      </div>
    `;
    });
}

function filterAndSort() {
    let filtered = [...books];

    const category = categoryFilter.value;
    if (category !== "all") {
        filtered = filtered.filter(book => book.category === category);
    }

    if (sortPrice.value === "low-high") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === "high-low") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sortRating.value === "high") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    displayBooks(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortPrice.addEventListener("change", filterAndSort);
sortRating.addEventListener("change", filterAndSort);

displayBooks(books);