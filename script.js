document.addEventListener('DOMContentLoaded', function() {
    const regionSelector = document.getElementById('region-selector');
    const settingsPopup = document.getElementById('settings-popup');
    const closeButton = document.getElementById('close-popup');
    const overlay = document.getElementById('overlay');
    const saveButton = document.querySelector('.save-btn');
    const regionSelect = document.getElementById('region-select');
    const currencySelect = document.getElementById('currency-select');

    // Map regions to currencies
    const regionToCurrency = {
        'Portugal': 'EUR',
        'United States': 'USD',
        'United Kingdom': 'GBP',
        'Canada': 'CAD',
        'France': 'EUR'
    };

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

    // Update currency when region changes
    regionSelect.addEventListener('change', function() {
        const selectedRegion = this.value;
        const correspondingCurrency = regionToCurrency[selectedRegion];
        currencySelect.value = correspondingCurrency;
    });

    // Close with X button
    closeButton.addEventListener('click', closePopup);

    // Close with overlay click
    overlay.addEventListener('click', closePopup);

    // Save changes and close
    saveButton.addEventListener('click', function() {
        const selectedRegion = regionSelect.value;
        regionSelector.innerHTML = `<i class="fas fa-globe-americas"></i>${selectedRegion}`;
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
