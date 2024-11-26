"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/use-auth";
import { SearchModal } from "./search-modal";
import { LoginModal } from "./login-modal";
import { SignupModal } from "./signup-modal";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X, LogIn, UserPlus, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";


export function Navbar() {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categorias" },
    { href: "/contact", label: "Contato" },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <Logo width={41} height={41} />
            <span className="text-xl font-normal">oasis</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-yellow-500 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleSearch}
              className="flex items-center gap-2 text-gray-900 hover:text-yellow-500 transition-all"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Procurar</span>
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Perfil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="default"
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Entrar</span>
                </Button>
                <Button
                  onClick={() => setIsSignupOpen(true)}
                  className="flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Criar conta</span>
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" size="icon">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Perfil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="default"
                size="icon"
                onClick={() => setIsLoginOpen(true)}
              >
                <LogIn className="w-5 h-5" />
              </Button>
            )}
            <Button
              variant="default"
              size="icon"
              onClick={toggleSearch}
              className="hover:text-yellow-500"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={toggleMenu}
              className="hover:text-yellow-500"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-900 hover:text-yellow-500 transition-all py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {!user && (
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSignupOpen(true);
                    }}
                    className="w-full justify-center"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Criar conta
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
}