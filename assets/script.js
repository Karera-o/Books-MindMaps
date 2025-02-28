// DOM Elements
const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryTagsContainer = document.getElementById('category-tags');
const viewToggleGrid = document.getElementById('view-grid');
const viewToggleList = document.getElementById('view-list');
const mainContent = document.getElementById('main-content');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const loader = document.querySelector('.loader');

// State
let allBooks = [];  // Store original books for reset operations
let filteredBooks = []; // Store currently filtered books
let activeCategories = [];
let currentView = localStorage.getItem('view-preference') || 'grid';
let isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Apply saved preferences
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    setViewMode(currentView);

    try {
        await initializeBooks();
    } catch (error) {
        console.error('Error initializing:', error);
        showError('Failed to load book data', error.message);
    }
});

// Functions
async function initializeBooks() {
    // Store the full book list
    if (typeof books !== 'undefined' && Array.isArray(books)) {
        console.log("Raw books data:", books);
        
        // Create a deep copy of the books array
        try {
            allBooks = JSON.parse(JSON.stringify(books));
        } catch (e) {
            console.error("Error parsing books data:", e);
            showError("Error loading books", "Failed to parse books data.");
            return;
        }

        // Process books to ensure they have all required properties
        allBooks = allBooks.map(book => ({
            ...book,
            category: book.category || 'Other',
            shortTitle: book.shortTitle || truncateTitle(book.title),
            description: book.description || `A mind map visualization for "${book.title}"`
        }));
        
        console.log("Processed books:", allBooks);

        // Hide loader
        if (loader) {
            loader.style.display = 'none';
        }

        // Create category filter UI
        createCategoryFilters();

        // Setup event listeners
        setupEventListeners();

        // Initial render of all books
        filteredBooks = [...allBooks];
        renderBooks();
    } else {
        throw new Error("Books data not loaded or invalid");
    }
}

function truncateTitle(title, maxLength = 40) {
    if (!title || title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
}

function createCategoryFilters() {
    if (!categoryTagsContainer) return;

    // Clear any existing filters
    categoryTagsContainer.innerHTML = '';

    // Get unique categories from books
    const uniqueCategories = [...new Set(allBooks.map(book => book.category))].sort();
    console.log("Available categories:", uniqueCategories);

    // Icon mapping for categories
    const categoryIcons = {
        'Managing People': 'fas fa-users',
        'Business/Entrepreneurship': 'fas fa-briefcase',
        'Business/Mindset': 'fas fa-rocket',
        'Personal Development': 'fas fa-rocket',
        'Education/Learning': 'fas fa-graduation-cap',
        'Business/Strategy': 'fas fa-chart-line',
        'Productivity': 'fas fa-tasks',
        'Design Thinking': 'fas fa-lightbulb',
        'Social Skills': 'fas fa-comments',
        'Leadership': 'fas fa-users',
        'Economics': 'fas fa-chart-line',
        'Business/Innovation': 'fas fa-lightbulb',
        'Investing/Wealth': 'fas fa-coins',
        'Technology': 'fas fa-microchip',
        'Strategy': 'fas fa-chart-line',
        'Other': 'fas fa-book'
    };

    // Add "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'category-tag-btn active';
    allBtn.setAttribute('data-category', 'all');
    allBtn.innerHTML = '<i class="fas fa-th-large"></i> All';
    allBtn.addEventListener('click', () => {
        console.log("All filter clicked");
        // Reset category filters
        resetCategoryFilters();
        // Apply any existing search query
        applyFilters();
    });
    categoryTagsContainer.appendChild(allBtn);

    // Add category buttons
    uniqueCategories.forEach(category => {
        const icon = categoryIcons[category] || 'fas fa-book';

        const btn = document.createElement('button');
        btn.className = 'category-tag-btn';
        btn.setAttribute('data-category', category);
        btn.innerHTML = `<i class="${icon}"></i> ${category}`;

        btn.addEventListener('click', () => {
            console.log(`Category filter clicked: ${category}`);
            toggleCategoryFilter(category, btn);
        });

        categoryTagsContainer.appendChild(btn);
    });
}

function setupEventListeners() {
    // Search functionality - button click
    searchButton.addEventListener('click', () => {
        applyFilters();
    });

    // Search functionality - enter key
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });

    // Smooth search experience - update as user types after a short delay
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            applyFilters();
        }, 300); // 300ms delay for smooth performance
    });

    // View toggle
    viewToggleGrid.addEventListener('click', () => setViewMode('grid'));
    viewToggleList.addEventListener('click', () => setViewMode('list'));

    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

function toggleCategoryFilter(category, button) {
    console.log(`Toggling category: ${category}`);
    console.log(`Category value: ${category}`);

    // Remove "All" selection
    const allButton = document.querySelector('.category-tag-btn[data-category="all"]');
    if (allButton) {
        allButton.classList.remove('active');
    }

    // Toggle active state
    if (button.classList.contains('active')) {
        // Deselect this category
        button.classList.remove('active');
        activeCategories = activeCategories.filter(cat => cat !== category);
    } else {
        // Select only this category, deselecting others
        document.querySelectorAll('.category-tag-btn:not([data-category="all"])').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        activeCategories = [category];
    }

    console.log("Active categories before applyFilters:", activeCategories);

    // Apply filters
    applyFilters();
}

function applyFilters() {
    console.log("Applying filters");
    console.log("Active categories:", activeCategories);
    console.log("Search query:", searchInput.value);

    // Start with all books
    let result = [...allBooks];
    console.log(`Starting with ${result.length} books`);

    // Apply category filter if active
    if (activeCategories.length > 0) {
        result = result.filter(book => {
            const matches = activeCategories.includes(book.category);
            console.log(`Book "${book.title}" with category "${book.category}" ${matches ? 'matches' : 'does not match'} filter`);
            return matches;
        });
        console.log(`After category filter: ${result.length} books`);
    }

    // Apply search filter if there's a query
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (searchQuery) {
        result = result.filter(book => {
            const matchesTitle = book.title.toLowerCase().includes(searchQuery);
            const matchesDescription = book.description && book.description.toLowerCase().includes(searchQuery);
            return matchesTitle || matchesDescription;
        });
        console.log(`After search filter: ${result.length} books`);
    }

    // Update the filtered books
    filteredBooks = result;

    // Render the filtered books
    renderBooks();
}

function setViewMode(mode) {
    currentView = mode;
    localStorage.setItem('view-preference', mode);

    // Update active button
    viewToggleGrid.classList.toggle('active', mode === 'grid');
    viewToggleList.classList.toggle('active', mode === 'list');

    // Apply view class to container
    mainContent.classList.toggle('list-view', mode === 'list');
    mainContent.classList.toggle('grid-view', mode === 'grid');

    // Re-render if we have books loaded
    if (filteredBooks.length > 0) {
        renderBooks();
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode);

    // Update icon
    darkModeToggle.innerHTML = isDarkMode ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
}

function renderBooks() {
    if (!booksContainer) return;

    // Clear container
    booksContainer.innerHTML = '';

    console.log(`Rendering ${filteredBooks.length} books`);

    if (filteredBooks.length === 0) {
        // Show no results message
        booksContainer.innerHTML = `
            <div class="no-results">
                <h3>No books found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button onclick="resetFilters()" class="reset-button">
                    <i class="fas fa-sync-alt"></i> Retry
                </button>
            </div>
        `;
        return;
    }

    // Create book cards
    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';

        // Determine CSS class for category
        let categoryClass = 'Other';
        switch (book.category) {
            case 'Managing People':
                categoryClass = 'ManagingPeople';
                break;
            case 'Business/Entrepreneurship':
                categoryClass = 'BusinessEntrepreneurship';
                break;
            case 'Business/Mindset':
                categoryClass = 'BusinessMindset';
                break;
            case 'Personal Development':
                categoryClass = 'PersonalDevelopment';
                break;
            case 'Education/Learning':
                categoryClass = 'EducationLearning';
                break;
            case 'Business/Strategy':
                categoryClass = 'BusinessStrategy';
                break;
            case 'Productivity':
                categoryClass = 'Productivity';
                break;
            case 'Design Thinking':
                categoryClass = 'DesignThinking';
                break;
            case 'Social Skills':
                categoryClass = 'SocialSkills';
                break;
            case 'Leadership':
                categoryClass = 'Leadership';
                break;
            case 'Economics':
                categoryClass = 'Economics';
                break;
            case 'Business/Innovation':
                categoryClass = 'BusinessInnovation';
                break;
            case 'Investing/Wealth':
                categoryClass = 'InvestingWealth';
                break;
            case 'Technology':
                categoryClass = 'Technology';
                break;
            case 'Strategy':
                categoryClass = 'Strategy';
                break;
        }

        card.innerHTML = `
            <div class="category-indicator ${categoryClass}"></div>
            <div class="card-content">
                <div class="card-header">
                    <div class="category-badge ${categoryClass}">${book.category}</div>
                    <h2 class="card-title">${book.shortTitle || book.title}</h2>
                </div>
                <div class="card-description">${book.description || ''}</div>
                <div class="card-footer">
                    <a href="${book.path}" class="view-mindmap" target="_blank">
                        <i class="fas fa-brain"></i> View Mind Map
                    </a>
                </div>
            </div>
        `;

        booksContainer.appendChild(card);
    });
}

function resetFilters() {
    // Clear search
    searchInput.value = '';

    // Reset category filters
    resetCategoryFilters();

    // Reset to all books
    filteredBooks = [...allBooks];
    renderBooks();
}

// Error handling
function showError(title, message) {
    if (booksContainer) {
        booksContainer.innerHTML = `
            <div class="no-results">
                <h3>${title}</h3>
                <p>${message}</p>
                <button onclick="location.reload()" class="reset-button">
                    <i class="fas fa-sync-alt"></i> Retry
                </button>
            </div>
        `;
    }

    if (loader) {
        loader.style.display = 'none';
    }
}

// Make functions globally available
window.resetFilters = resetFilters;