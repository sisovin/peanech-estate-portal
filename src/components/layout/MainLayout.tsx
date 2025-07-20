import React, { useState, useEffect, createContext } from "react";
import {
  Sun,
  Moon,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MainLayoutProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check for saved theme preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Agents", href: "/agents" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div
        className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {/* Topbar */}
        <div className="hidden md:block bg-primary text-primary-foreground py-2 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@peanechestate.com</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4 hover:text-gray-300 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4 hover:text-gray-300 transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4 hover:text-gray-300 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"}`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    PeanechEstate
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* User Controls */}
              <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  aria-label={
                    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>

                {/* User Avatar Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                          alt="User"
                        />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <a href="/login" className="w-full">
                        Login
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/register" className="w-full">
                        Register
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/dashboard" className="w-full">
                        Dashboard
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mobile Menu Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px]">
                    <div className="flex flex-col h-full">
                      <div className="py-4">
                        <h2 className="text-lg font-semibold">PeanechEstate</h2>
                      </div>
                      <Separator />
                      <nav className="flex flex-col space-y-4 py-6">
                        {navigationLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors py-2"
                          >
                            {link.name}
                          </a>
                        ))}
                      </nav>
                      <Separator />
                      <div className="mt-auto py-4">
                        <div className="flex items-center space-x-3 py-2">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-3 py-2">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">
                            info@peanechestate.com
                          </span>
                        </div>
                        <div className="flex space-x-4 mt-4">
                          <a href="#" aria-label="Facebook">
                            <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                          <a href="#" aria-label="Twitter">
                            <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                          <a href="#" aria-label="Instagram">
                            <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                          <a href="#" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer
          className={`${isDarkMode ? "bg-gray-800" : "bg-gray-100"} py-12`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">PeanechEstate</h3>
                <p className="text-sm mb-4">
                  Revolutionizing the real estate industry with AI-powered
                  solutions and exceptional service.
                </p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Property Listings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Property Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Market Analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Investment Consulting
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">info@peanechestate.com</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="text-center text-sm">
              <p>
                &copy; {new Date().getFullYear()} PeanechEstate. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
