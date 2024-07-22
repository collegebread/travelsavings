//Carousel buttons
function handleButtonClick() {
  window.open('pages/hotels.html', '_blank');
}




document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('exampleDropdownFormPassword2');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the icon
    this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        // Deactivate all links
        navLinks.forEach(function(otherLink) {
          otherLink.classList.remove('active');
        });
        // Activate the clicked link
        link.classList.add('active');
      });
    });
  });

  function changeImage(index) {
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.querySelectorAll('.background-image');
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }
  // Get radio buttons and return date input
  var radioButtons = document.getElementsByName("booking-type");
  var returnDateInput = document.getElementById("return-date");
  // Add event listener to radio buttons to show/hide return date input
  radioButtons.forEach(function(radio) {
    radio.addEventListener("change", function() {
      returnDateInput.disabled = radio.value === "one-way";
    });
  });
  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.querySelectorAll('.carousel-item');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 200000); // Change slide every 2 seconds
  }
  showSlides();
  // Get radio buttons and return date input
  var radioButtons = document.getElementsByName("booking-type");
  var returnDateInput = document.getElementById("return-date");
  // Add event listener to radio buttons to show/hide return date input
  radioButtons.forEach(function(radio) {
    radio.addEventListener("change", function() {
      returnDateInput.disabled = radio.value === "one-way";
    });
  });
  //Add your JavaScript for tab switching 
  function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });
    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', function() {
    const passengerTypeSelect = document.getElementById('passengerType');
    const passengerCountInput = document.getElementById('passengerCount');
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    decrementButton.addEventListener('click', function() {
      decrementPassengerCount();
    });
    incrementButton.addEventListener('click', function() {
      incrementPassengerCount();
    });
    passengerTypeSelect.addEventListener('change', function() {
      resetPassengerCount();
    });

    function decrementPassengerCount() {
      const currentCount = parseInt(passengerCountInput.value, 10);
      if (currentCount > 1) {
        passengerCountInput.value = currentCount - 1;
      }
    }

    function incrementPassengerCount() {
      const currentCount = parseInt(passengerCountInput.value, 10);
      passengerCountInput.value = currentCount + 1;
    }

    function resetPassengerCount() {
      passengerCountInput.value = 1;
    }
  });
  let chatboxVisible = false;
  let inactivityTimer;

  function toggleChatbox() {
    const chatbox = document.getElementById('chatsupport');
    const chatbotIcon = document.getElementById('chatbot-icon');
    chatboxVisible = !chatboxVisible;
    if (chatboxVisible) {
      chatbox.style.display = 'block';
      startInactivityTimer();
      showGreeting();
    } else {
      chatbox.style.display = 'none';
      clearTimeout(inactivityTimer);
    }
  }

  function showGreeting() {
    const chatMessages = document.getElementById('chat-messages');
    const greeting = "How can I assist you today? Please choose a topic or type your question.";
    const greetingDiv = createMessageDiv(greeting, 'ai-message');
    chatMessages.appendChild(greetingDiv);
  }

  function startInactivityTimer() {
    inactivityTimer = setTimeout(() => {
      document.getElementById('chatsupport').style.display = 'none';
      chatboxVisible = false;
    }, 180000); // 3 minutes
  }

  function sendMessage() {
    // Implement the logic to send and receive messages here
    // Reset the inactivity timer when a new message is sent or received
    clearTimeout(inactivityTimer);
    startInactivityTimer();
  }

  function createMessageDiv(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    return messageDiv;
  }

  function sendMessage() {
    // Implement the logic to send and receive messages here
    // Reset the inactivity timer when a new message is sent or received
    clearTimeout(inactivityTimer);
    startInactivityTimer();
  }
  const faqDatabase = {
    // General Greetings
    'hello': 'Hello! How can I assist you today?',
    'hi': 'Hi there! How can I help you?',
    'hey': 'Hey! Welcome. How may I assist you?',
    'good morning': 'Good morning! How can I make your day better?',
    'good afternoon': 'Good afternoon! How may I assist you?',
    'good evening': 'Good evening! How can I help you?',
    // Travel Booking FAQs
    'How do I book a flight?': 'To book a flight, go to our website, select the "Book a Flight" option, and follow the instructions.',
    'Can I cancel my reservation?': 'Yes, you can cancel your reservation by logging into your account and navigating to the "My Reservations" section.',
    'What is your customer support number?': 'You can reach our customer support at 1-800-123-4567.',
    'How do I change my travel dates?': 'To change your travel dates, log in to your account, go to "Manage Reservations," and select the option to change dates.',
    'Is there a fee for changing my reservation?': 'Fees for changing reservations vary. Please check our terms and conditions or contact customer support for details.',
    'What documents do I need for international travel?': 'For international travel, you typically need a valid passport and may require a visa. Check our travel requirements section or contact us for details.',
    // Accommodation Booking FAQs
    'How do I book a hotel room?': 'To book a hotel room, enter your destination and travel dates on our website, choose from available options, and complete the booking process.',
    'Can I modify my hotel reservation?': 'Yes, you can modify your hotel reservation by logging into your account and selecting the "Modify Reservation" option.',
    'Are taxes included in the hotel price?': 'Taxes are usually included in the displayed hotel price, but additional fees may apply. Check the details during the booking process.',
    'What amenities does the hotel offer?': 'Hotel amenities vary. You can find detailed information about amenities on the hotel description page during the booking process.',
    // General Travel FAQs
    'What is the best time to travel?': 'The best time to travel depends on your destination and preferences. Consider factors like weather, events, and local holidays.',
    'Do I need travel insurance?': 'Travel insurance is recommended for unexpected events. Consider coverage for trip cancellations, medical emergencies, and lost luggage.',
    'How do I earn loyalty points?': 'Enroll in our loyalty program during the booking process to earn points for future travel. Check our rewards program page for details.',
    'What should I do in case of travel emergencies?': 'In case of emergencies, contact our 24/7 customer support for assistance. Save our emergency contact number in your phone.',
    // Customer Service FAQs
    'How can I contact customer support?': 'You can quickly find answers and get support using our community support center.',
    // More FAQs...
  };
  // Function to get an answer from the FAQ database
  function getAnswer(userInput) {
    const cleanedInput = userInput.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    return faqDatabase[cleanedInput] || 'I\'m sorry, I don\'t have information on that. Please try a different question.';
  }
  // Example usage:
  const userQuestion = 'How do I book a hotel room?';
  const answer = getAnswer(userQuestion);
  console.log(answer);
  // Add more FAQs as needed
  function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');
    // Add user message to the chat
    chatMessages.innerHTML += ' < div class = "user-message" > ' + userInput + ' < /div>';
    // Get AI response from the offline FAQ database
    const aiResponse = getAIResponse(userInput);
    chatMessages.innerHTML += ' < div class = "ai-message" > ' + aiResponse + ' < /div>';
    // Clear user input
    document.getElementById('user-input').value = '';
    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getAIResponse(userInput) {
    // Simulate AI response based on user input from the offline FAQ database
    const lowercaseInput = userInput.toLowerCase();
    for (const question in faqDatabase) {
      if (lowercaseInput.includes(question.toLowerCase())) {
        return faqDatabase[question];
      }
    }
    // If no match found, provide a generic response
    return 'I apologize, but I am not able to assist with that question. Please visit our help center for further assistance.';
  }

  function toggleAddon(addon) {
    const icon = document.querySelector(`.icon.fa-${addon}`);
    icon.classList.toggle('selected');
  }

  function toggleAnswer(icon) {
    const faqHeader = icon.parentElement;
    const faqItem = faqHeader.parentElement;
    faqItem.classList.toggle("active");
    const answer = faqItem.querySelector(".faq-answer");
    const toggleIcon = faqHeader.querySelector(".toggle-icon");
    if (faqItem.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      toggleIcon.innerHTML = "&#8211;"; // Minus sign
    } else {
      answer.style.maxHeight = "0";
      toggleIcon.innerHTML = "&#43;"; // Plus sign
    }
    function handleCardClick(card) {
        // Add your logic here for what happens when a card is clicked
        console.log("Card Clicked:", card);
    }
  }
  var destinations = ['Chicago', 'Orlando', 'Miami', 'New York'];
        var currentIndex = {'stay-location': 0, 'from-location': 0, 'to-location': 0 };

        function cycleDestination(fieldId) {
            currentIndex[fieldId] = (currentIndex[fieldId] + 1) % destinations.length;
            var selectedDestination = destinations[currentIndex[fieldId]];
            document.getElementById(fieldId).value = selectedDestination;
            updateDropdowns();
        }

        function selectDestination(destination, fieldId) {
            document.getElementById(fieldId).value = destination;
            document.getElementById('dropdown-' + fieldId).style.display = 'none';
            updateDropdowns();
        }

        function updateDropdowns() {
            var fromLocation = document.getElementById('from-location').value;
            var toLocation = document.getElementById('to-location').value;
            var hotelDestination = document.getElementById('stay-location').value;

            var dropdownFrom = document.getElementById('dropdown-from-location');
            var dropdownTo = document.getElementById('dropdown-to-location');
            var dropdownHotel = document.getElementById('dropdown-stay-location');

            dropdownFrom.innerHTML = '';
            dropdownTo.innerHTML = '';
            dropdownHotel.innerHTML = '';

            destinations.forEach(function(destination) {
                if (destination !== toLocation && destination !== hotelDestination) {
                    var divFrom = document.createElement('div');
                    divFrom.innerText = destination;
                    divFrom.onclick = function() {
                        selectDestination(destination, 'from-location');
                    };
                    dropdownFrom.appendChild(divFrom);
                }

                if (destination !== fromLocation && destination !== hotelDestination) {
                    var divTo = document.createElement('div');
                    divTo.innerText = destination;
                    divTo.onclick = function() {
                        selectDestination(destination, 'to-location');
                    };
                    dropdownTo.appendChild(divTo);
                }

                if (destination !== fromLocation && destination !== toLocation) {
                    var divHotel = document.createElement('div');
                    divHotel.innerText = destination;
                    divHotel.onclick = function() {
                        selectDestination(destination, 'stay-location');
                    };
                    dropdownHotel.appendChild(divHotel);
                }
            });
        }

        document.addEventListener('click', function(event) {
            var dropdownFrom = document.getElementById('dropdown-from-location');
            var dropdownTo = document.getElementById('dropdown-to-location');
            var dropdownHotel = document.getElementById('dropdown-stay-location');
            var iconFrom = document.querySelector('#from-location ~ .fa-map-marker-alt');
            var iconTo = document.querySelector('#to-location ~ .fa-map-marker-alt');
            var iconHotel = document.querySelector('#stay-location ~ .fa-map-marker-alt');

            if (!dropdownFrom.contains(event.target) && !iconFrom.contains(event.target)) {
                dropdownFrom.style.display = 'none';
            }
            if (!dropdownTo.contains(event.target) && !iconTo.contains(event.target)) {
                dropdownTo.style.display = 'none';
            }
            if (!dropdownHotel.contains(event.target) && !iconHotel.contains(event.target)) {
                dropdownHotel.style.display = 'none';
            }
        });

        // Initialize dropdowns
        updateDropdowns();
