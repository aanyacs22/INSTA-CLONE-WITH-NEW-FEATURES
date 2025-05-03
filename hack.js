// script.js

function menuToggle() {
    // Add your logic here to toggle the display of a menu
    console.log('Menu toggled!');
}

function addlike() {
    // Add your logic here to handle the liking of a post
    console.log('Post liked!');
    // You might want to update the UI (e.g., change the heart icon, increment like count)
}

function switchMode(mode) {
    console.log(`Switching to ${mode} mode`);
    const cards = document.querySelectorAll('.card');
    const interestModeButtons = document.querySelectorAll('.interest-modes button');

    // Update active button state
    interestModeButtons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === mode) {
            button.classList.add('active');
        }
    });

    // Filter cards based on the selected mode
    cards.forEach(card => {
        const cardInterest = card.dataset.interest;
        if (mode === 'all' || cardInterest === mode) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // You would typically also trigger a backend request here to fetch
    // content relevant to the selected mode and update the feed dynamically.
}

// In a real application, you would likely fetch urgent posts from a backend API
// and dynamically populate the urgent posts container.
// For this example, the HTML already contains some static urgent posts.
// You might have a function like this to fetch and render them:
async function fetchUrgentPosts() {
    try {
        // const response = await fetch('/api/urgent_posts');
        // const data = await response.json();
        const urgentPostsContainer = document.getElementById('urgent-posts-container');
        // urgentPostsContainer.innerHTML = ''; // Clear existing posts

        // data.forEach(post => {
        //     const postDiv = document.createElement('div');
        //     postDiv.classList.add('urgent-post-item');
        //     postDiv.innerHTML = `<strong>${post.category}:</strong> ${post.message}`;
        //     urgentPostsContainer.appendChild(postDiv);
        // });
        console.log('Fetching urgent posts (simulated)');
        // In this static HTML example, no actual fetching is done.
    } catch (error) {
        console.error('Error fetching urgent posts:', error);
    }
}

// Call fetchUrgentPosts when the page loads (if you implement a backend)
// document.addEventListener('DOMContentLoaded', fetchUrgentPosts);