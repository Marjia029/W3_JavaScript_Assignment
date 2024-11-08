//========================================Navbar================================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const closeNav = document.getElementById('close-nav');

    // Toggle mobile nav visibility
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        mobileNav.classList.add('visible');
    });

    // Close the mobile nav
    closeNav.addEventListener('click', () => {
        mobileNav.classList.remove('visible');
    });

    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('visible');
            mobileNav.style.display = 'flex';
        } else {
            mobileNav.style.display = '';
        }
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Initialize navbar visibility
    handleResize();
});


//==========================================Region-Selector================================
document.addEventListener('DOMContentLoaded', function() {
    const regionSelector = document.getElementById('region-selector');
    const settingsPopup = document.getElementById('settings-popup');
    const closeButton = document.getElementById('close-popup');
    const overlay = document.getElementById('overlay');
    const saveButton = document.querySelector('.save-btn');
    const regionSelect = document.getElementById('region-select');
    const currencySelect = document.getElementById('currency-select');

    // Full list of countries
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
        "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
        "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
        "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji",
        "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
        "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Korea North", "Korea South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives",
        "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
        "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
        "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
        "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan",
        "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria",
        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga",
        "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
        "Zambia", "Zimbabwe"
    ];

    // List of currencies
    const currencies = [
        "USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR", "CNY", "BRL", "CHF", 
        "SEK", "NOK", "DKK", "RUB", "NZD", "MXN", "SGD", "HKD", "ZAR", "KRW", 
        "TRY", "IDR", "THB", "MYR", "PHP", "PLN", "HUF", "CZK", "ILS", "CLP", 
        "PEN", "AED", "COP", "SAR", "EGP", "BDT", "PKR", "LKR", "UAH", "NGN", 
        "GHS", "KWD", "DZD", "BHD"
    ].sort();;

    // Populate the region select options
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        regionSelect.appendChild(option);
    });

    // Populate the currency select options
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        currencySelect.appendChild(option);
    });

    // Load saved settings from localStorage
    const savedRegion = localStorage.getItem('selectedRegion') || 'United States';
    const savedCurrency = localStorage.getItem('selectedCurrency') || 'USD';

    // Set initial values in selects
    regionSelect.value = savedRegion;
    currencySelect.value = savedCurrency;

    // Update region selector with the saved region
    regionSelector.innerHTML = `<i class="fas fa-globe-americas"></i> ${savedRegion}`;

    // Open popup
    regionSelector.addEventListener('click', function(e) {
        e.preventDefault();
        settingsPopup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Close popup function
    function closePopup() {
        settingsPopup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Close with X button
    closeButton.addEventListener('click', closePopup);

    // Close with overlay click
    overlay.addEventListener('click', closePopup);

    // Save settings and close popup
    saveButton.addEventListener('click', function() {
        const selectedRegion = regionSelect.value;
        const selectedCurrency = currencySelect.value;

        // Update the region display
        regionSelector.innerHTML = `<i class="fas fa-globe-americas"></i> ${selectedRegion}`;

        // Save to localStorage
        localStorage.setItem('selectedRegion', selectedRegion);
        localStorage.setItem('selectedCurrency', selectedCurrency);

        // Close popup
        closePopup();
    });

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});

//Save icon State Management

document.addEventListener('DOMContentLoaded', function() {
    const heartIcon = document.getElementById('heart-icon');
    const saveButton = document.getElementById('save-button');

    // Check localStorage on page load and set the initial state
    const isActive = localStorage.getItem('heartIconActive') === 'true';
    if (isActive) {
        heartIcon.classList.add('fa-solid', 'active', 'solid-red');
        heartIcon.classList.remove('fa-regular');
    }

    // Toggle heart icon state on button click
    saveButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents default link behavior

        // Toggle the necessary classes
        const isNowActive = !heartIcon.classList.contains('fa-solid'); // Check if it’s about to be solid

        heartIcon.classList.toggle("fa-solid", isNowActive); // Add or remove the solid style
        heartIcon.classList.toggle("fa-regular", !isNowActive); // Toggle regular style based on state
        heartIcon.classList.toggle("solid-red", isNowActive); // Toggle the solid red color
        heartIcon.classList.toggle("active", isNowActive); // Toggle the active state

        // Store the current state in localStorage
        localStorage.setItem('heartIconActive', isNowActive);

        // Optional: Add a subtle animation
        heartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            heartIcon.style.transform = 'scale(1)';
        }, 200);
    });
});

// =========================================================== Share-option-Handle =======================================================

document.addEventListener('DOMContentLoaded', function() {
    const sharePopup = document.getElementById('share-popup');
    const shareOverlay = document.getElementById('share-overlay');
    const shareButton = document.querySelector('.share-open-popup');
    const dismissButton = document.querySelector('.share-dismiss');

    // Open the popup
    shareButton.addEventListener('click', function() {
        sharePopup.style.display = 'block';
        shareOverlay.style.display = 'block';
    });

    // Close the popup
    function closePopup() {
        sharePopup.style.display = 'none';
        shareOverlay.style.display = 'none';
    }

    dismissButton.addEventListener('click', closePopup);
    shareOverlay.addEventListener('click', closePopup);

    // Copy link functionality
    document.querySelectorAll('.share-option').forEach(option => {
        option.addEventListener('click', function() {
            if (this.textContent.trim() === "Copy link") {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            }
        });
    });
});

// ================================================================ Image Gllery ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".image-gallery-thumbnail");
    const popup = document.getElementById("image-gallery-popup");
    const popupImage = document.getElementById("image-gallery-popup-image");
    const popupTitle = document.getElementById("image-gallery-title");
    const popupCounter = document.getElementById("image-gallery-counter");
    const closeButton = document.getElementById("image-gallery-close");
    const prevButton = document.getElementById("image-gallery-prev");
    const nextButton = document.getElementById("image-gallery-next");
    const fullGalleryView = document.querySelector(".image-gallery-full-view");
    const imageCountIcon = document.querySelector(".image-gallery-image-count");

    let currentIndex = 0;
    const images = Array.from(thumbnails);

    function openPopup(index) {
        currentIndex = index;
        const currentImage = images[currentIndex];
        popupImage.src = currentImage.src;
        popupTitle.textContent = currentImage.getAttribute("data-title");
        popupCounter.textContent = `${currentIndex + 1}/${images.length}`;
        popup.style.display = "flex";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openPopup(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openPopup(currentIndex);
    }

    function openFullGallery() {
        fullGalleryView.innerHTML = ""; // Clear any previous images

        images.forEach((image, index) => {
            const fullImage = document.createElement("img");
            fullImage.src = image.src;
            fullImage.alt = image.alt;
            fullImage.dataset.title = image.getAttribute("data-title");

            fullImage.addEventListener("click", () => openPopup(index));
            
            // Show title under each image
            const title = document.createElement("div");
            title.textContent = image.getAttribute("data-title");
            title.style.color = "white";
            title.style.textAlign = "center";
            title.style.fontSize = "14px";
            title.style.marginTop = "4px";
            
            const container = document.createElement("div");
            container.appendChild(fullImage);
            container.appendChild(title);

            fullGalleryView.appendChild(container);
        });

        // Add "See Less" button
        const seeLessButton = document.createElement("div");
        seeLessButton.classList.add("image-gallery-see-less");
        seeLessButton.textContent = "See Less";
        seeLessButton.addEventListener("click", closeFullGallery);

        fullGalleryView.appendChild(seeLessButton);

        document.querySelector(".image-gallery").style.display = "none";
        fullGalleryView.style.display = "grid";
    }

    function closeFullGallery() {
        fullGalleryView.style.display = "none";
        document.querySelector(".image-gallery").style.display = "grid";
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => openPopup(index));
    });

    closeButton.addEventListener("click", closePopup);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);

    imageCountIcon.addEventListener("click", openFullGallery); // Show full gallery on click

    document.addEventListener("keydown", function (event) {
        if (popup.style.display === "flex") {
            if (event.key === "Escape") closePopup();
            if (event.key === "ArrowRight") showNextImage();
            if (event.key === "ArrowLeft") showPrevImage();
        }
    });
});


//============================================================ Traveler Selector ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    const selector = document.querySelector('.traveler-selector');
    const selectorBar = selector.querySelector('.selector-bar');
    const dropdownPanel = selector.querySelector('.dropdown-panel');
    const chevron = selector.querySelector('.chevron');
    const totalTravelersSpan = selector.querySelector('.total-travelers');
    const doneButton = selector.querySelector('.done-button');
    const petCheckbox = document.getElementById('traveling-with-pets');

    let counts = {
        adults: 1,
        children: 0
    };

    const limits = {
        adults: { min: 1, max: 9 },
        children: { min: 0, max: 9 }
    };

    function updateDisplay() {
        // Update counter displays
        selector.querySelector('.adults-value').textContent = counts.adults;
        selector.querySelector('.children-value').textContent = counts.children;

        // Update total in selector bar
        const total = counts.adults + counts.children;
        totalTravelersSpan.textContent = `${total} ${total === 1 ? 'Traveler' : 'Travelers'}`;

        // Update button states
        updateButtonStates();
    }

    function updateButtonStates() {
        // Disable/enable buttons based on limits
        selector.querySelectorAll('.counter-btn').forEach(btn => {
            const type = btn.dataset.type;
            const action = btn.dataset.action;
            
            if (action === 'decrease') {
                btn.disabled = counts[type] <= limits[type].min;
            } else {
                btn.disabled = counts[type] >= limits[type].max;
            }
        });
    }

    // Toggle dropdown
    selectorBar.addEventListener('click', () => {
        dropdownPanel.classList.toggle('active');
        chevron.classList.toggle('up');
        chevron.classList.toggle('down');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            dropdownPanel.classList.remove('active');
            chevron.classList.remove('up');
            chevron.classList.add('down');
        }
    });

    // Handle counter buttons
    selector.querySelectorAll('.counter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const action = btn.dataset.action;
            
            if (action === 'increase' && counts[type] < limits[type].max) {
                counts[type]++;
            } else if (action === 'decrease' && counts[type] > limits[type].min) {
                counts[type]--;
            }
            
            updateDisplay();
        });
    });

    // Handle Done button click
    doneButton.addEventListener('click', () => {
        dropdownPanel.classList.remove('active');
        chevron.classList.remove('up');
        chevron.classList.add('down');

        const petChecked = petCheckbox.checked;
        console.log(`Traveling with pets: ${petChecked}`);
    });

    // Initial display update
    updateDisplay();
});
