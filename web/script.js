function showAlert() {
    alert("ස්තුතියි! FLiX COMPUTERS වෙතින් ඉක්මනින්ම ඔබව සම්බන්ධ කරගන්නම්.");
}

// Smooth scrolling effect for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to scroll to top (optional)
window.onscroll = function() {
    // You can add more scroll animations here if needed
};
function filterItems(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Active button color change
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
let currentCategory = 'all';
let currentCondition = 'all';

function filterGlobal(cat) {
    currentCategory = cat;
    // Update button UI
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
}

function filterCondition(cond) {
    currentCondition = cond;
    // Update button UI
    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
}

function applyFilters() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const matchCat = (currentCategory === 'all' || card.classList.contains(currentCategory));
        const matchCond = (currentCondition === 'all' || card.classList.contains(currentCondition));
        
        if (matchCat && matchCond) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}