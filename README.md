# Peanech Estate Portal

A futuristic, AI-powered real estate platform designed for seamless property discovery, agent management, and administrative oversight. The portal features a modern, responsive UI, robust authentication, and a rich, interactive user experience for buyers, agents, and admins.

---

## ✨ Key Features

### 🎯 Core Structure

- **Topbar:** Displays company contact info and social media icons for quick access.
- **Header:** Includes logo, navigation links, dark mode toggle, and user avatar dropdown.
- **Hero Section:** Futuristic, animated backgrounds and gradients to captivate visitors.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.

### 🏢 Main Sections

- **Core Features:**  
  - AI-powered property search  
  - Real-time market analytics  
  - Mobile-first design
- **Technical Stack:** Visual display of technologies powering the portal (see [Tech Stack](#-technical-stack)).
- **Properties:**  
  - Featured listings  
  - Integrated property booking system
- **Agents:**  
  - Professional agent profiles  
  - Direct contact options
- **Marketing Features:**  
  - Social media sharing  
  - Newsletter signup via email
- **Payment Integration:**  
  - Three-tier subscription plans: Basic, Pro, Enterprise

### 📊 Dashboard System

- **User Dashboard:**  
  - Saved properties  
  - Viewing schedules  
  - Recent activity tracking
- **Agent Dashboard:**  
  - Manage property listings  
  - Sales metrics  
  - Client management
- **Admin Dashboard:**  
  - Platform analytics  
  - Performance metrics  
  - Asset evaluation tools

### 💫 Interactive Features

- **Booking System:** Modal-based property viewing scheduler with calendar integration.
- **Dark Mode:** Persistent theme switching with localStorage support.
- **Smooth Animations:** Floating elements, hover effects, and scroll-based animations.
- **Mobile Menu:** Adaptive, touch-friendly navigation.

### 🎨 Design Elements

- **Futuristic Styling:**  
  - Gradient backgrounds  
  - Animated borders and glow effects
- **Professional UI:**  
  - Clean card layouts  
  - Consistent spacing  
  - Modern, readable typography
- **Interactive States:**  
  - Button/element hover effects  
  - Smooth transitions and animations

### 🔐 Authentication System

#### **User Types & Roles**

- **Visitor:**  
  - Browse properties  
  - Save favorites  
  - Schedule viewings
- **Agent:**  
  - Manage property listings  
  - Handle client inquiries  
  - Track sales
- **Admin:**  
  - Full system access  
  - User management  
  - Analytics dashboard

#### **Authentication Features**

- Protected dashboard routes (login required)
- Role-based access control for certain features
- Persistent login (localStorage)
- Form validation using Zod schemas
- Responsive design including dark mode support

---

## 📱 Components Overview

- **LoginForm:**  
  Clean login UI; offers demo accounts for quick testing.
- **RegisterForm:**  
  Registration flow with role selection (Visitor, Agent, Admin).
- **Dashboard:**  
  Role-specific dashboards with relevant data and actions.
- **ProtectedRoute:**  
  Wrapper to secure routes requiring authentication.
- **AuthContext:**  
  Global context for managing authentication state.

> **Quick Start:**  
> - Visit `/login` to sign in (demo accounts available).  
> - Visit `/register` to create a new account (choose your role).  
> - Access `/dashboard` (protected) for your role-specific experience.

---

## 🛠️ Technical Stack

| Type        | Technology                     |
|-------------|-------------------------------|
| Language    | TypeScript                    |
| Frontend    | React (with Vite or CRA)      |
| Styling     | Tailwind CSS / CSS Modules    |
| Animations  | Framer Motion / GSAP          |
| Forms       | React Hook Form, Zod          |
| State Mgmt  | Context API                   |
| Routing     | React Router                  |
| Auth        | Custom JWT/localStorage       |
| API         | RESTful/Fake API (JSON Server or similar) |
| Payments    | Stripe API integration        |
| Icons       | React Icons / SVG             |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/sisovin/peanech-estate-portal.git
cd peanech-estate-portal

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

---

## 🧑‍💻 Demo Accounts

- **Visitor:**  
  - Email: visitor@demo.com  
  - Password: visitor123

- **Agent:**  
  - Email: agent@demo.com  
  - Password: agent123

- **Admin:**  
  - Email: admin@demo.com  
  - Password: admin123

---

## 🤝 Contributing

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes.
4. Push to the branch.
5. Open a pull request!

---

## 📄 License

[MIT](LICENSE)

---

## 📬 Contact

For questions or feedback, please open an [issue](https://github.com/sisovin/peanech-estate-portal/issues) or connect via the contact details in the topbar.

---

**Peanech Estate Portal** – Next-generation real estate, today.

---
