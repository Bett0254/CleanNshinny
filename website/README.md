# 🧼 Clean N' Shinny: Mobile Car Detailing Service

## 📝 Overview

Clean N' Shinny is a professional, locally owned and operated mobile car washing and detailing service. This website serves as the primary digital storefront, allowing customers to view service offerings, understand the company's eco-friendly mission, see testimonials, and book appointments.

The site is built as a single-page application (SPA) focused on clear visual presentation, strong calls-to-action (CTAs), and a mobile-first responsive design.

## 🌟 Key Features

* **Semantic HTML5 Structure:** Uses modern elements (`<header>`, `<section>`, `<nav>`, `<footer>`) for accessibility and SEO.
* **Hero Section with Stats:** Immediate visual impact reinforced by company metrics (Years of Experience, Customers, Services).
* **Service & Product Grids:** Clear presentation of service packages (`category-grid`) and detailed pricing (`product-grid`).
* **Mobile-Friendly Design:** Fully responsive layout using CSS Flexbox and Grid, ensuring a great experience on phones and tablets.
* **CSS Custom Properties (Variables):** Utilizes a `:root` block for easy color and spacing adjustments.
* **Trust Building:** Dedicated sections for "Why Choose Us" and customer "Testimonials."

## 🚀 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure and content organization. |
| **CSS3** | Styling, layout (Flexbox & Grid), and responsiveness (@media queries). |

## 🛠️ Setup and Installation

This is a static HTML/CSS project, making setup extremely straightforward.

### Prerequisites

You need a modern web browser (Chrome, Firefox, Safari, Edge) to view the project.

### Local Setup

1.  **Clone the Repository (If applicable):**
    ```bash
    git clone [repository-url]
    cd clean-n-shinny
    ```

2.  **File Structure:** Ensure your project files are organized as follows (based on the paths referenced in the code):

    ```
    clean-n-shinny/
    ├── index.html          # Main structure file
    ├── style.css           # Primary CSS file (provided in the prompt)
    ├── app.css             # (Placeholder/Additional CSS file)
    └── src/
        └── assets/
            ├── Icons/
            │   └── My Logo.png
            └── Images/
                ├── hero-section.jpg
                ├── aesthetic-section.jpg
                ├── Basic wash.jpg
                ├── Specia wash.jpg
                └── ... (other images)
    ```

3.  **Run the Project:**
    * Open the `index.html` file directly in your web browser.

## 🎨 Styling Notes (for Developers)

The CSS uses a custom property system for maintaining the color scheme:

* **`--dark-color`**: Used for the primary background and headers.
* **`--accent-yellow`**: The core branding color (`#ffef11`) used for headings, links, buttons, and highlights.
* **`--light-gray`**: Used for body text and subdued information.

Responsive design is handled primarily by media queries at **992px** (Tablet) and **600px** (Mobile).

## 💡 Future Enhancements

* Integration of a **booking system** or form validation using JavaScript.
* Implementing **image lazy loading** for performance optimization.
* Creating a separate **mobile navigation menu** (e.g., a hamburger menu) instead of stacking the links on smaller screens.
* Adding **accessibility improvements** (ARIA roles, focus management).