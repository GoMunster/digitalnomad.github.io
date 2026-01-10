// ============================================
// DIGITAL NOMAD DAILY - DAILY CONTENT UPDATE
// ============================================

const DAILY_CONTENT = {
    todaysFocus: "You don't have to see the whole staircase, just take the first step.",
    
    video: {
        youtubeId: "PTABougduks",
        title: "Take Your Creative Business from $0-$10k a Month"
    },
    
    podcast: {
        embedUrl: "https://embed.podcasts.apple.com/us/podcast/a-real-look-into-the-day-in-the-life-of-a-digital-nomad-ep-229/id1578141284?i=1000742328260",
        title: "Real Daily Life as a Digital Nomad"
    },
    
    book: {
        title: "Never Eat Alone",
        author: "Keith Ferrazzi",
        imageUrl: "https://m.media-amazon.com/images/I/71zhs-0cYpL._SL1500_.jpg",
        description: "The secret, master networker Keith Ferrazzi claims, is in reaching out to other people. As Ferrazzi discovered in early life, what distinguishes highly successful people from everyone else is the way they use the power of relationships—so that everyone wins",
        amazonUrl: "https://amzn.to/49exdBI"
    },
    
    tip: "When your office is just steps away, work can bleed endlessly into personal time. Create a simple 5-minute routine: close all work tabs, write tomorrow's top 3 priorities, and physically shut your laptop. Maybe change your clothes or take a short walk around the block.",
    
    skill: {
        title: "Machine Learning Engineer",
        description: "A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data. They work with large datasets, develop models, and apply techniques like neural networks to enhance predictive accuracy.",
        learningPoints: [
            "Build ML models",
            "Build & train a neural network with TensorFlow",
            "Apply best practices for ML development",
            "NumPy & scikit-learn, build & train supervised models for prediction & binary classification tasks"
        ],
        courseUrl: "https://imp.i384100.net/xLVn23"
    },
    
    gadget: {
        title: "Anker Power Bank",
        imageUrl: "https://m.media-amazon.com/images/I/71JJLJnwREL._AC_SL1500_.jpg",
        description: "Slim Size, Big Power: One of the slimmest and lightest 10,000mAh portable chargers on the market. Provides 2 charges for iPhone 15, 1.93 charges for Galaxy S23, and 1.23 charges for iPad mini 6.",
        whyEssential: "What You Get: PowerCore Slim 10000, USB-C to USB-C cable, welcome guide, 18-month warranty, and friendly customer service.",
        productUrl: "https://amzn.to/4qjxpWv"
    },
    
    toolkit: {
        toolName: "NordVPN",
        whyMatters: "Because public WiFi in beach cafes isn't exactly Fort Knox. Secure your sensitive work data while hopping between coworking spaces and cafes. Your clients' data is worth more than the $3 monthly subscription.",
        toolUrl: "https://nordvpn.com/special/?utm_term=&utm_content"
    },

    businessIdea: {
        title: "Website Flipping",
        difficulty: "Intermediate",
        startupCost: "$0-$100 a Month depending on tactics used",
        timeToFirstDollar: "2-3 months",
        potentialIncome: "$500-$5,000/month within 6-12 months",
        description: "Build high quality websites that produce money from ads and affiliates to then sell to a buyer at a high price for all the work and setup you did.",
        whyItWorks: "Once you sort of create a formula for yourself, you can reproduce it over and over and then sell for a high price to someone that doesn't want to take the time to learn how to make it profitable.",
        firstSteps: [
            "Step 1: Define Your Target Audience",
            "Step 2: Create High Quality Content Websites Around a relevent Topic",
            "Step 3: Monetize by applying for ad networks",
            "Step 4: List your website for sale on sites like flippa.com"
        ],
        resourceUrl: "https://www.businessinsider.com/website-flipping-how-to-make-money-building-buying-website-2022-9"
    },
    
    destination: {
        name: "Spain",
        monthlyCost: "$1,700-$3,000",
        internetSpeed: "200-300 Mbps in many big cities!",
        highlights: [
            "Digital Nomad Visa",
            "Residence Permit for up to 3 Years",
            "Free education and medical services available",
            "Mediterranean climate and food"
        ],
        moreInfoUrl: "https://www.immigrationspain.es/en/visa-for-digital-nomads/"
    }
};

// Function to safely update text content
function safeUpdateText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    } else {
        console.warn(`Element not found: ${selector}`);
    }
}

// Function to safely update HTML content
function safeUpdateHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = html;
    } else {
        console.warn(`Element not found: ${selector}`);
    }
}

// Function to safely update attribute
function safeUpdateAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attr, value);
    } else {
        console.warn(`Element not found: ${selector}`);
    }
}

// Function to update the page content
function updatePageContent() {
    console.log('Updating page content...');
    
    // Today's Focus
    safeUpdateText('.focus-section p', DAILY_CONTENT.todaysFocus);
    
    // Video
    safeUpdateAttr('.video-section iframe', 'src', `https://www.youtube.com/embed/${DAILY_CONTENT.video.youtubeId}`);
    safeUpdateText('.video-section > p strong', DAILY_CONTENT.video.title);
    
    // Podcast
    safeUpdateAttr('.podcast-container iframe', 'src', DAILY_CONTENT.podcast.embedUrl);
    safeUpdateText('.podcast-section > p strong', DAILY_CONTENT.podcast.title);
    
    // Book
    safeUpdateAttr('.book-image img', 'src', DAILY_CONTENT.book.imageUrl);
    safeUpdateAttr('.book-image img', 'alt', `${DAILY_CONTENT.book.title} book cover`);
    safeUpdateText('.book-details h3', DAILY_CONTENT.book.title);
    
    const bookAuthor = document.querySelector('.book-details p strong');
    if (bookAuthor && bookAuthor.parentElement) {
        bookAuthor.parentElement.innerHTML = `<strong>Author:</strong> ${DAILY_CONTENT.book.author}`;
    }
    
    const bookDesc = document.querySelector('.book-details p:nth-of-type(2)');
    if (bookDesc) {
        bookDesc.textContent = DAILY_CONTENT.book.description;
    }
    
    safeUpdateAttr('.book-details .cta-button', 'href', DAILY_CONTENT.book.amazonUrl);
    
    // Tip
    safeUpdateText('.tip p', DAILY_CONTENT.tip);
    
    // Skill
    const skillSection = document.querySelector('[data-section="skill"]');
    if (skillSection) {
        safeUpdateText('[data-section="skill"] h3', DAILY_CONTENT.skill.title);
        
        const skillDesc = skillSection.querySelector('.resource > p:first-of-type');
        if (skillDesc) {
            skillDesc.textContent = DAILY_CONTENT.skill.description;
        }
        
        const skillList = skillSection.querySelector('ul');
        if (skillList) {
            skillList.innerHTML = DAILY_CONTENT.skill.learningPoints.map(point => `<li>${point}</li>`).join('');
        }
        
        safeUpdateAttr('[data-section="skill"] .cta-button', 'href', DAILY_CONTENT.skill.courseUrl);
    }
    
    // Gadget
    const gadgetSection = document.querySelector('[data-section="gadget"]');
    if (gadgetSection) {
        safeUpdateAttr('[data-section="gadget"] .gadget-image img', 'src', DAILY_CONTENT.gadget.imageUrl);
        safeUpdateAttr('[data-section="gadget"] .gadget-image img', 'alt', DAILY_CONTENT.gadget.title);
        safeUpdateText('[data-section="gadget"] h3', DAILY_CONTENT.gadget.title);
        
        const gadgetDesc = gadgetSection.querySelector('.gadget-details p:nth-of-type(1)');
        if (gadgetDesc) {
            gadgetDesc.textContent = DAILY_CONTENT.gadget.description;
        }
        
        const gadgetWhy = gadgetSection.querySelector('.gadget-details p:nth-of-type(2)');
        if (gadgetWhy) {
            gadgetWhy.innerHTML = `<strong>Why it's essential:</strong> ${DAILY_CONTENT.gadget.whyEssential}`;
        }
        
        safeUpdateAttr('[data-section="gadget"] .cta-button', 'href', DAILY_CONTENT.gadget.productUrl);
    }
    
    // Toolkit
    const toolkitSection = document.querySelector('[data-section="toolkit"]');
    if (toolkitSection) {
        const toolNameP = toolkitSection.querySelector('.resource p:nth-of-type(1)');
        if (toolNameP) {
            toolNameP.innerHTML = `<strong>Essential Tool:</strong> ${DAILY_CONTENT.toolkit.toolName}`;
        }
        
        const toolWhyP = toolkitSection.querySelector('.resource p:nth-of-type(2)');
        if (toolWhyP) {
            toolWhyP.innerHTML = `<strong>Why it matters:</strong> ${DAILY_CONTENT.toolkit.whyMatters}`;
        }
        
        safeUpdateAttr('[data-section="toolkit"] .cta-button', 'href', DAILY_CONTENT.toolkit.toolUrl);
    }
    
    // Business Idea
    const businessSection = document.querySelector('[data-section="business"]');
    if (businessSection) {
        safeUpdateText('[data-section="business"] h3', DAILY_CONTENT.businessIdea.title);
        safeUpdateText('[data-section="business"] .difficulty', DAILY_CONTENT.businessIdea.difficulty);
        safeUpdateText('[data-section="business"] .startup-cost', DAILY_CONTENT.businessIdea.startupCost);
        safeUpdateText('[data-section="business"] .time-to-money', DAILY_CONTENT.businessIdea.timeToFirstDollar);
        safeUpdateText('[data-section="business"] .potential-income', DAILY_CONTENT.businessIdea.potentialIncome);
        safeUpdateText('[data-section="business"] .description', DAILY_CONTENT.businessIdea.description);
        safeUpdateText('[data-section="business"] .why-it-works', DAILY_CONTENT.businessIdea.whyItWorks);
        
        const businessSteps = businessSection.querySelector('.first-steps');
        if (businessSteps) {
            businessSteps.innerHTML = DAILY_CONTENT.businessIdea.firstSteps.map(step => `<li>${step}</li>`).join('');
        }
        
        safeUpdateAttr('[data-section="business"] .cta-button', 'href', DAILY_CONTENT.businessIdea.resourceUrl);
    }
    
    // Destination
    const destSection = document.querySelector('[data-section="destination"]');
    if (destSection) {
        safeUpdateText('[data-section="destination"] h3', DAILY_CONTENT.destination.name);
        
        const costP = destSection.querySelector('.resource p:nth-of-type(1)');
        if (costP) {
            costP.innerHTML = `<strong>Monthly Cost:</strong> ${DAILY_CONTENT.destination.monthlyCost}`;
        }
        
        const internetP = destSection.querySelector('.resource p:nth-of-type(2)');
        if (internetP) {
            internetP.innerHTML = `<strong>Internet:</strong> ${DAILY_CONTENT.destination.internetSpeed}`;
        }
        
        const destList = destSection.querySelector('ul');
        if (destList) {
            destList.innerHTML = DAILY_CONTENT.destination.highlights.map(highlight => `<li>${highlight}</li>`).join('');
        }
        
        safeUpdateAttr('[data-section="destination"] .cta-button', 'href', DAILY_CONTENT.destination.moreInfoUrl);
    }
    
    console.log('Page content updated successfully!');
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePageContent);
} else {
    updatePageContent();
}
