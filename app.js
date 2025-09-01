// Social media platforms data
        const socialMediaPlatforms = [
            {
                name: "Facebook",
                icon: "fab fa-facebook",
                color: "#3b5998",
                url: "https://facebook.com",
                desc: "दोस्तों और परिवार से जुड़ें"
            },
            {
                name: "Instagram",
                icon: "fab fa-instagram",
                color: "#e4405f",
                url: "https://instagram.com",
                desc: "तस्वीरें और वीडियो साझा करें"
            },
            {
                name: "WhatsApp",
                icon: "fab fa-whatsapp",
                color: "#25d366",
                url: "https://web.whatsapp.com",
                desc: "तुरंत मैसेज भेजें"
            },
            {
                name: "Telegram",
                icon: "fab fa-telegram",
                color: "#0088cc",
                url: "https://web.telegram.org",
                desc: "तेज़ और सुरक्षित मैसेजिंग"
            },
            {
                name: "LinkedIn",
                icon: "fab fa-linkedin",
                color: "#0077b5",
                url: "https://linkedin.com",
                desc: "पेशेवर नेटवर्क"
            },
            {
                name: "GitHub",
                icon: "fab fa-github",
                color: "#333333",
                url: "https://github.com",
                desc: "कोड साझा करें और सहयोग करें"
            },
            {
                name: "Twitter",
                icon: "fab fa-twitter",
                color: "#1da1f2",
                url: "https://twitter.com",
                desc: "ताज़ा खबरें और ट्रेंड्स"
            },
            {
                name: "YouTube",
                icon: "fab fa-youtube",
                color: "#ff0000",
                url: "https://youtube.com",
                desc: "वीडियो देखें और साझा करें"
            },
            {
                name: "ShareChat",
                icon: "fas fa-comments",
                color: "#ff6b00",
                url: "https://sharechat.com",
                desc: "भारतीय भाषाओं में सामग्री"
            },
            {
                name: "Josh",
                icon: "fas fa-video",
                color: "#ff3d71",
                url: "https://myjosh.in",
                desc: "शॉर्ट वीडियो प्लेटफॉर्म"
            },
            {
                name: "MX Player",
                icon: "fas fa-play-circle",
                color: "#0f4cff",
                url: "https://mxplayer.in",
                desc: "वीडियो और मनोरंजन"
            },
            {
                name: "Koo",
                icon: "fas fa-dove",
                color: "#f7c600",
                url: "https://kooapp.com",
                desc: "भारतीय माइक्रो-ब्लॉगिंग"
            }
        ];

        const platformsContainer = document.getElementById('platformsContainer');
        const searchInput = document.getElementById('searchInput');
        const openSelectedButton = document.getElementById('openSelected');
        
        let selectedPlatforms = [];
        
        // Render platforms
        function renderPlatforms(platforms) {
            platformsContainer.innerHTML = '';
            
            platforms.forEach(platform => {
                const platformElement = document.createElement('div');
                platformElement.className = 'platform';
                platformElement.dataset.name = platform.name;
                platformElement.dataset.url = platform.url;
                
                platformElement.innerHTML = `
                    <i class="${platform.icon}" style="color: ${platform.color}"></i>
                    <div class="platform-name">${platform.name}</div>
                    <div class="platform-desc">${platform.desc}</div>
                `;
                
                platformElement.addEventListener('click', () => {
                    platformElement.classList.toggle('selected');
                    
                    if (platformElement.classList.contains('selected')) {
                        selectedPlatforms.push(platform.url);
                    } else {
                        selectedPlatforms = selectedPlatforms.filter(url => url !== platform.url);
                    }
                });
                
                platformsContainer.appendChild(platformElement);
            });
        }
        
        // Filter platforms based on search input
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredPlatforms = socialMediaPlatforms.filter(platform => 
                platform.name.toLowerCase().includes(searchTerm) || 
                platform.desc.toLowerCase().includes(searchTerm)
            );
            
            renderPlatforms(filteredPlatforms);
        });
        
        // Open selected platforms
        openSelectedButton.addEventListener('click', () => {
            if (selectedPlatforms.length === 0) {
                alert('कृपया कम से कम एक सोशल मीडिया प्लेटफॉर्म चुनें');
                return;
            }
            
            selectedPlatforms.forEach(url => {
                window.open(url, '_blank');
            });
            
            // Reset selection
            document.querySelectorAll('.platform').forEach(platform => {
                platform.classList.remove('selected');
            });
            selectedPlatforms = [];
        });
        
        // Initial render
        renderPlatforms(socialMediaPlatforms);
    