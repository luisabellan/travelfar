# 🌏 TravelFar - Your Personal Travel Companion

Hi there! Welcome to **TravelFar**, a passion project designed to help wanderlusters find their next dream destination. 🌍✈️

I built this website to solve a simple problem: *where should I go next?* Whether you're craving the calm of a pristine beach, the spirituality of ancient temples, or the culture of a bustling new country, TravelFar helps you explore curated recommendations with just a few clicks.

## ✨ Features

*   **Smart Recommendations:** deeply curated lists of beaches, temples, and countries (including favorites like Bora Bora, Kyoto, and Switzerland).
*   **Interactive Search:** Quickly find destinations by keyword (e.g., "beach", "Japan", "temple").
*   **Visual Experience:** Beautiful image carousels for every destination to help you visualize your trip.
*   **Responsive Design:** Works perfectly on your phone, tablet, or desktop.
*   **Contact & About:** Dedicated pages to learn more about our mission or get in touch.

## 🚀 Live Demo

You can try out the live version of the project here:
[**View Live Demo**](https://luisabellan.github.io/travel-far/)

## 🛠️ Built With

This project was built using pure, vanilla web technologies to ensure fast performance and a solid understanding of the fundamentals:

*   **HTML5** - For semantic structure.
*   **CSS3** - Custom styling using BEM methodology, Flexbox, and Grid.
*   **JavaScript (ES6+)** - For the dynamic search logic and interactive UI elements.

## 🏁 Getting Started

If you want to run this locally on your machine, follow these simple steps:

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/travel-far.git
    ```
2.  **Navigate to the folder:**
    ```bash
    cd travel-far
    ```
3.  **Open it up:**
    Simply open `index.html` in your favorite web browser. No complex build steps or servers required!

## 📂 Project Structure

Here's a quick look at how I organized the code:

```
travel-far/
├── 📄 index.html      # The main landing page with recommendations
├── 📄 about.html      # Our story and mission
├── 📄 contact.html    # A way to get in touch
├── 🎨 styles.css      # All the styling magic
├── 🧠 script.js       # The logic behind search and interactions
├── 📂 images/         # Folder for assets
└── 📝 README.md       # You are here!
```

## 💡 How to Customize

Want to add your own favorite spots? It's easy!

1.  Open `script.js`.
2.  Look for the `travelData` object.
3.  Add a new entry to the `beaches`, `temples`, or `countries` array following the existing format:

```javascript
{
    id: 99,
    name: "My Favorite Spot",
    location: "Secret Location",
    description: "Why you love it...",
    images: ["image_url_1.jpg", "image_url_2.jpg"],
    type: "beach"
}
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

*   Comments formatted using the **Big Comments** VSCode plugin by **jasperchongcode**.

---
*Thanks for checking out TravelFar! Happy travels!* 🏝️