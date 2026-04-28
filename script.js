document.addEventListener('DOMContentLoaded', () => {
    // 1. SPLASH SCREEN LOGIC
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
    }, 2000);

    // 2. DARK MODE LOGIC
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check local storage for preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // 3. ANIMASI PARTIKEL (Kelopak Bunga jatuh)
    const heroSection = document.getElementById('hero-section');
    function createParticles() {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random properties
            const size = Math.random() * 10 + 5; // 5px to 15px
            const left = Math.random() * 100; // 0% to 100%
            const duration = Math.random() * 5 + 5; // 5s to 10s
            const delay = Math.random() * 5; // 0s to 5s
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            heroSection.appendChild(particle);
        }
    }
    createParticles();

    // 4. DATA PRODUK DENGAN HARGA & BADGE
    // Fungsi bantuan untuk harga dummy
    function randomPrice() {
        const prices = ["Rp 95.000", "Rp 125.000", "Rp 150.000", "Rp 200.000", "Rp 250.000", "Rp 350.000"];
        return prices[Math.floor(Math.random() * prices.length)];
    }
    function randomBadge() {
        const rand = Math.random();
        if (rand < 0.15) return "Best Seller";
        if (rand < 0.30) return "Diskon";
        if (rand < 0.45) return "New";
        return ""; // 55% tanpa badge
    }

    const rawProducts = [
        // Boneka (9)
        { id: 1, category: "Boneka", name: "Bouquet Boneka Eksklusif 1", img: "img/Boneka/1.png" },
        { id: 2, category: "Boneka", name: "Bouquet Boneka Eksklusif 2", img: "img/Boneka/2.png" },
        { id: 3, category: "Boneka", name: "Bouquet Boneka Eksklusif 3", img: "img/Boneka/3.jpg" },
        { id: 4, category: "Boneka", name: "Bouquet Boneka Eksklusif 4", img: "img/Boneka/4.jpg" },
        { id: 5, category: "Boneka", name: "Bouquet Boneka Eksklusif 5", img: "img/Boneka/5.jpg" },
        { id: 6, category: "Boneka", name: "Bouquet Boneka Eksklusif 6", img: "img/Boneka/6.jpg" },
        { id: 7, category: "Boneka", name: "Bouquet Boneka Eksklusif 7", img: "img/Boneka/7.jpg" },
        { id: 8, category: "Boneka", name: "Bouquet Boneka Eksklusif 8", img: "img/Boneka/8.jpg" },
        { id: 9, category: "Boneka", name: "Bouquet Boneka Eksklusif 9", img: "img/Boneka/9.png" },
        
        // Bunga Artificial (9)
        { id: 10, category: "Bunga Artificial", name: "Bunga Artificial Premium 1", img: "img/Bunga Artificial/1.png" },
        { id: 11, category: "Bunga Artificial", name: "Bunga Artificial Premium 2", img: "img/Bunga Artificial/2.jpg" },
        { id: 12, category: "Bunga Artificial", name: "Bunga Artificial Premium 3", img: "img/Bunga Artificial/3.jpg" },
        { id: 13, category: "Bunga Artificial", name: "Bunga Artificial Premium 4", img: "img/Bunga Artificial/4.jpg" },
        { id: 14, category: "Bunga Artificial", name: "Bunga Artificial Premium 5", img: "img/Bunga Artificial/5.jpg" },
        { id: 15, category: "Bunga Artificial", name: "Bunga Artificial Premium 6", img: "img/Bunga Artificial/6.jpg" },
        { id: 16, category: "Bunga Artificial", name: "Bunga Artificial Premium 7", img: "img/Bunga Artificial/7.jpg" },
        { id: 17, category: "Bunga Artificial", name: "Bunga Artificial Premium 8", img: "img/Bunga Artificial/8.jpg" },
        { id: 18, category: "Bunga Artificial", name: "Bunga Artificial Premium 9", img: "img/Bunga Artificial/9.jpg" },

        // Foto (3)
        { id: 19, category: "Foto", name: "Bouquet Foto Kenangan 1", img: "img/Foto/1.jpg" },
        { id: 20, category: "Foto", name: "Bouquet Foto Kenangan 2", img: "img/Foto/2.jpg" },
        { id: 21, category: "Foto", name: "Bouquet Foto Kenangan 3", img: "img/Foto/3.jpg" },

        // Jilbab (9)
        { id: 22, category: "Jilbab", name: "Bouquet Jilbab Cantik 1", img: "img/Jilbab/1.jpg" },
        { id: 23, category: "Jilbab", name: "Bouquet Jilbab Cantik 2", img: "img/Jilbab/2.jpg" },
        { id: 24, category: "Jilbab", name: "Bouquet Jilbab Cantik 3", img: "img/Jilbab/3.jpg" },
        { id: 25, category: "Jilbab", name: "Bouquet Jilbab Cantik 4", img: "img/Jilbab/4.jpg" },
        { id: 26, category: "Jilbab", name: "Bouquet Jilbab Cantik 5", img: "img/Jilbab/5.jpg" },
        { id: 27, category: "Jilbab", name: "Bouquet Jilbab Cantik 6", img: "img/Jilbab/6.jpg" },
        { id: 28, category: "Jilbab", name: "Bouquet Jilbab Cantik 7", img: "img/Jilbab/7.jpg" },
        { id: 29, category: "Jilbab", name: "Bouquet Jilbab Cantik 8", img: "img/Jilbab/8.jpg" },
        { id: 30, category: "Jilbab", name: "Bouquet Jilbab Cantik 9", img: "img/Jilbab/9.jpg" },

        // Kupu-Kupu (4)
        { id: 31, category: "Kupu-Kupu", name: "Bouquet Kupu-Kupu Estetik 1", img: "img/Kupu-Kupu/1.jpg" },
        { id: 32, category: "Kupu-Kupu", name: "Bouquet Kupu-Kupu Estetik 2", img: "img/Kupu-Kupu/2.jpg" },
        { id: 33, category: "Kupu-Kupu", name: "Bouquet Kupu-Kupu Estetik 3", img: "img/Kupu-Kupu/3.jpg" },
        { id: 34, category: "Kupu-Kupu", name: "Bouquet Kupu-Kupu Estetik 4", img: "img/Kupu-Kupu/4.jpg" },

        // Pita (1)
        { id: 35, category: "Pita", name: "Bouquet Pita Elegan 1", img: "img/Pita/1.jpg" },

        // Snack (9)
        { id: 36, category: "Snack", name: "Bouquet Snack Favorit 1", img: "img/Snack/1.jpg" },
        { id: 37, category: "Snack", name: "Bouquet Snack Favorit 2", img: "img/Snack/2.jpg" },
        { id: 38, category: "Snack", name: "Bouquet Snack Favorit 3", img: "img/Snack/3.jpg" },
        { id: 39, category: "Snack", name: "Bouquet Snack Favorit 4", img: "img/Snack/4.jpg" },
        { id: 40, category: "Snack", name: "Bouquet Snack Favorit 5", img: "img/Snack/5.jpg" },
        { id: 41, category: "Snack", name: "Bouquet Snack Favorit 6", img: "img/Snack/6.jpg" },
        { id: 42, category: "Snack", name: "Bouquet Snack Favorit 7", img: "img/Snack/7.jpg" },
        { id: 43, category: "Snack", name: "Bouquet Snack Favorit 8", img: "img/Snack/8.jpg" },
        { id: 44, category: "Snack", name: "Bouquet Snack Favorit 9", img: "img/Snack/9.jpg" },

        // Uang (9)
        { id: 45, category: "Uang", name: "Money Bouquet Mewah 1", img: "img/Uang/1.png" },
        { id: 46, category: "Uang", name: "Money Bouquet Mewah 2", img: "img/Uang/2.png" },
        { id: 47, category: "Uang", name: "Money Bouquet Mewah 3", img: "img/Uang/3.jpg" },
        { id: 48, category: "Uang", name: "Money Bouquet Mewah 4", img: "img/Uang/4.jpg" },
        { id: 49, category: "Uang", name: "Money Bouquet Mewah 5", img: "img/Uang/5.png" },
        { id: 50, category: "Uang", name: "Money Bouquet Mewah 6", img: "img/Uang/6.png" },
        { id: 51, category: "Uang", name: "Money Bouquet Mewah 7", img: "img/Uang/7.jpg" },
        { id: 52, category: "Uang", name: "Money Bouquet Mewah 8", img: "img/Uang/8.jpg" },
        { id: 53, category: "Uang", name: "Money Bouquet Mewah 9", img: "img/Uang/9.jpg" }
    ];

    // Enhance products with price and badges
    const products = rawProducts.map(p => ({
        ...p,
        price: randomPrice(),
        badge: randomBadge()
    }));

    // 5. WISHLIST & TOAST LOGIC
    let wishlist = JSON.parse(localStorage.getItem('aprilBouquetWishlist')) || [];
    
    function showToast(message) {
        const container = document.getElementById('toast-container');
        if(!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-heart"></i> ${message}`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function toggleWishlist(e, productId) {
        e.stopPropagation(); // Prevent opening modal
        const icon = e.currentTarget.querySelector('i');
        
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
            icon.classList.remove('fas');
            icon.classList.add('far');
            e.currentTarget.classList.remove('active');
            showToast('Dihapus dari Favorit');
        } else {
            wishlist.push(productId);
            icon.classList.remove('far');
            icon.classList.add('fas');
            e.currentTarget.classList.add('active');
            showToast('Tersimpan di Favorit');
        }
        localStorage.setItem('aprilBouquetWishlist', JSON.stringify(wishlist));
        
        // Jika sedang di tab favorit, re-render
        if (currentFilter === "Favorit") {
            renderProducts(products.filter(p => wishlist.includes(p.id)));
        }
    }

    // STATE VARIABLES
    let currentFilter = "Semua";
    let searchQuery = "";
    
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('empty-state');
    const emptyStateText = document.getElementById('empty-state-text');
    const productCountText = document.getElementById('product-count');
    const categoryTitle = document.getElementById('current-category-title');
    const searchInput = document.getElementById('search-input');
    const waNumber = "6282283534308";

    // 6. RENDER ENGINE (Updated for Search, Wishlist, Badges)
    function renderProducts(items) {
        // Filter by Search
        let finalItems = items;
        if (searchQuery.trim() !== "") {
            finalItems = items.filter(p => 
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                p.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        grid.innerHTML = '';
        
        if (finalItems.length === 0) {
            grid.style.display = 'none';
            emptyState.classList.remove('hidden');
            if(currentFilter === "Favorit") {
                emptyStateText.textContent = "Belum ada produk favorit yang disimpan.";
            } else {
                emptyStateText.textContent = "Tidak ada produk yang cocok dengan pencarian Anda.";
            }
        } else {
            grid.style.display = 'grid';
            emptyState.classList.add('hidden');
            
            finalItems.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'card fade-in visible';
                card.style.animationDelay = `${(index % 10) * 0.05}s`;
                
                const isWished = wishlist.includes(product.id);
                const badgeHTML = product.badge ? `<span class="card-badge-top badge-${product.badge.replace(/\s+/g, '')}">${product.badge}</span>` : '';
                
                card.innerHTML = `
                    <div class="card-img-wrap">
                        ${badgeHTML}
                        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}">
                            <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                        <img src="${product.img}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="card-content">
                        <p class="card-price">${product.price}</p>
                        <h3 class="card-title">${product.name}</h3>
                        <span class="card-btn">Lihat Detail</span>
                    </div>
                `;
                
                card.addEventListener('click', () => openModal(product));
                
                // Add event to wishlist btn
                const wishBtn = card.querySelector('.wishlist-btn');
                wishBtn.addEventListener('click', (e) => toggleWishlist(e, product.id));

                grid.appendChild(card);
            });
        }
        
        productCountText.textContent = `Menampilkan ${finalItems.length} produk`;
    }

    // Initial Render
    renderProducts(products);

    // 7. LIVE SEARCH LOGIC
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        let baseItems = products;
        if (currentFilter === "Favorit") {
            baseItems = products.filter(p => wishlist.includes(p.id));
        } else if (currentFilter !== "Semua") {
            baseItems = products.filter(p => p.category === currentFilter);
        }
        renderProducts(baseItems);
    });

    // FILTER LOGIC
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            currentFilter = e.currentTarget.getAttribute('data-filter');
            
            if (currentFilter === 'Semua') {
                categoryTitle.textContent = "Semua Koleksi";
                renderProducts(products);
            } else if (currentFilter === 'Favorit') {
                categoryTitle.textContent = "Koleksi Favorit Saya";
                renderProducts(products.filter(p => wishlist.includes(p.id)));
            } else {
                categoryTitle.textContent = `Koleksi ${currentFilter}`;
                renderProducts(products.filter(p => p.category === currentFilter));
            }
        });
    });

    // 8. SPA LOGIC (Slide Pages)
    const pageHome = document.getElementById('page-home');
    const pageCatalog = document.getElementById('page-catalog');
    const pageTestimonials = document.getElementById('page-testimonials');

    document.getElementById('btn-explore').addEventListener('click', () => {
        switchPage(pageHome, pageCatalog);
    });
    document.getElementById('btn-back-catalog').addEventListener('click', () => {
        switchPage(pageCatalog, pageHome, true);
    });
    
    // Testimonials Nav
    document.getElementById('btn-reviews').addEventListener('click', () => {
        switchPage(pageHome, pageTestimonials);
    });
    document.getElementById('btn-back-reviews').addEventListener('click', () => {
        switchPage(pageTestimonials, pageHome, true);
    });

    function switchPage(fromPage, toPage, reverse = false) {
        if(reverse) {
            fromPage.classList.add('slide-out-right');
            setTimeout(() => {
                fromPage.style.display = 'none';
                fromPage.classList.remove('slide-out-right');
                toPage.style.display = 'block';
                toPage.classList.add('slide-in-left');
                setTimeout(() => toPage.classList.remove('slide-in-left'), 500);
            }, 400);
        } else {
            fromPage.classList.add('slide-out');
            setTimeout(() => {
                fromPage.style.display = 'none';
                fromPage.classList.remove('slide-out');
                toPage.style.display = 'block';
                window.scrollTo(0,0);
                toPage.classList.add('slide-in');
                setTimeout(() => toPage.classList.remove('slide-in'), 500);
            }, 400);
        }
    }

    // Modal Logic with Price and Wishlist
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalWaTanya = document.getElementById('modal-wa-tanya');
    const modalWaBeli = document.getElementById('modal-wa-beli');
    const modalWishlistBtn = document.getElementById('modal-wishlist-btn');
    let currentModalProductId = null;

    function openModal(product) {
        currentModalProductId = product.id;
        modalImg.src = product.img;
        modalCategory.textContent = product.category;
        modalTitle.textContent = product.name;
        modalPrice.textContent = product.price;
        
        // Setup Modal Wishlist Btn state
        const isWished = wishlist.includes(product.id);
        modalWishlistBtn.querySelector('i').className = isWished ? 'fas fa-heart' : 'far fa-heart';
        if(isWished) modalWishlistBtn.classList.add('active');
        else modalWishlistBtn.classList.remove('active');

        // Link Tanya Detail
        const pesanTanya = `Halo April Bouquet, saya ingin bertanya tentang:\n\n*Produk:* ${product.name}\n*Kategori:* ${product.category}\n*Harga:* ${product.price}\n\nApakah bisa dikustomisasi? *(Sertakan screenshot produk di bawah)*`;
        modalWaTanya.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesanTanya)}`;

        // Link Beli Sekarang
        const pesanBeli = `Halo April Bouquet, saya ingin MEMESAN produk berikut:\n\n*Produk:* ${product.name}\n*Kategori:* ${product.category}\n*Harga:* ${product.price}\n\nBerapa total biayanya jika dikirim ke alamat saya? *(Sertakan screenshot produk di bawah)*`;
        modalWaBeli.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesanBeli)}`;
        
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }

    modalWishlistBtn.addEventListener('click', (e) => toggleWishlist(e, currentModalProductId));

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 400);
    }

    document.querySelector('.close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
});
