# 🎬 Watch Hub App

### Your Ultimate Entertainment Hub!

Watch Hub is a modern, full-stack entertainment discovery app built with Next.js 15, featuring authentication, dark mode, and a beautiful user interface. Discover movies, manage your watchlist, and enjoy a seamless viewing experience.

👉 **Live Demo:** [http://localhost:3001](http://localhost:3001)

## ✨ Features

- 🔐 **Authentication**: Secure login and registration with Clerk
- 🌙 **Dark/Light Mode**: Beautiful theme switching with system preference detection
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎬 **Movie Discovery**: Browse and discover entertainment content
- ⭐ **Favorites**: Save your favorite movies and shows
- 🔔 **Toast Notifications**: Smooth user feedback
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

- **Next.js 15** - Latest React framework with App Router
- **React 19** - Latest React with concurrent features
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **Clerk** - Authentication and user management
- **Next Themes** - Theme switching functionality
- **React Icons** - Beautiful icon library
- **React Toastify** - Toast notifications
- **pnpm** - Fast, efficient package manager

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/[[...rest]]/page.js
│   │   └── signup/[[...rest]]/page.js
│   ├── about/page.js
│   ├── dashboard/page.js
│   ├── favorites/page.js
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.jsx
│   └── page.js
├── components/
│   ├── Navbar.jsx
│   ├── providers/
│   │   └── ClerkThemeProvider.jsx
│   └── ui/
│       └── SwitchButton.jsx
└── middleware.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd watch-hub-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Clerk keys to `.env.local`

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm clean` - Clean build cache and node_modules
- `pnpm clean:cache` - Clean only build cache

## 🎨 Features in Detail

### Authentication

- Secure user registration and login
- Protected routes with middleware
- User profile management

### Theme System

- Light, dark, and system theme options
- Smooth transitions between themes
- Clerk components theme integration

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

## 🔧 Configuration

### Clerk Setup

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your keys to `.env.local`

### Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Clerk](https://clerk.com/) for authentication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
