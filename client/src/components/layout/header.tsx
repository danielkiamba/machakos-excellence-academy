import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [location] = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-primary font-bold text-2xl font-poppins flex items-center">
                <div className="mr-2 bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                  MEA
                </div>
                Machakos Excellence Academy
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/">
              <a
                className={`${
                  isActive("/")
                    ? "text-secondary bg-amber-300"
                    : "text-neutral-900 hover:text-secondary hover:bg-gray-100"
                } font-medium px-4 py-2 rounded-md`}
              >
                Home
              </a>
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className="text-neutral-900 hover:text-amber-400 font-medium flex items-center"
                asChild
              >
                <Button variant="link" className="p-0 h-auto font-medium">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/about#mission">
                  <DropdownMenuItem className="cursor-pointer">
                    Our Mission
                  </DropdownMenuItem>
                </Link>
                <Link href="/about#history">
                  <DropdownMenuItem className="cursor-pointer">
                    History
                  </DropdownMenuItem>
                </Link>
                <Link href="/about#staff">
                  <DropdownMenuItem className="cursor-pointer">
                    Staff
                  </DropdownMenuItem>
                </Link>
                <Link href="/about#facilities">
                  <DropdownMenuItem className="cursor-pointer">
                    Facilities
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Academics Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className="text-neutral-900 hover:text-amber-400 font-medium flex items-center"
                asChild
              >
                <Button variant="link" className="p-0 h-auto font-medium">
                  Academics <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/courses">
                  <DropdownMenuItem className="cursor-pointer">
                    Courses
                  </DropdownMenuItem>
                </Link>
                <Link href="/courses#curriculum">
                  <DropdownMenuItem className="cursor-pointer">
                    Curriculum
                  </DropdownMenuItem>
                </Link>
                <Link href="/courses#timetable">
                  <DropdownMenuItem className="cursor-pointer">
                    Timetable
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/fees">
              <a
                className={`${
                  isActive("/fees")
                    ? "text-secondary"
                    : "text-neutral-900 hover:text-amber-400"
                } font-medium`}
              >
                Fees
              </a>
            </Link>

            <Link href="/gallery">
              <a
                className={`${
                  isActive("/gallery")
                    ? "text-secondary"
                    : "text-neutral-900 hover:text-amber-400"
                } font-medium`}
              >
                Gallery
              </a>
            </Link>

            <Link href="/contact">
              <a
                className={`${
                  isActive("/contact")
                    ? "text-secondary"
                    : "text-neutral-900 hover:text-amber-400"
                } font-medium`}
              >
                Contact
              </a>
            </Link>
          </nav>

          {/* Apply Button */}
          <Link href="/contact">
            <a className="hidden md:block bg-cyan-300 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-md transition duration-300">
              Apply Now
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/">
                  <a
                    className="text-neutral-900 font-medium py-2"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Home
                  </a>
                </Link>

                <div className="border-t pt-2">
                  <h3 className="font-medium mb-2">About</h3>
                  <div className="ml-4 space-y-2">
                    <Link href="/about#mission">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Our Mission
                      </a>
                    </Link>
                    <Link href="/about#history">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        History
                      </a>
                    </Link>
                    <Link href="/about#staff">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Staff
                      </a>
                    </Link>
                    <Link href="/about#facilities">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Facilities
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="border-t pt-2">
                  <h3 className="font-medium mb-2">Academics</h3>
                  <div className="ml-4 space-y-2">
                    <Link href="/courses">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Courses
                      </a>
                    </Link>
                    <Link href="/courses#curriculum">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Curriculum
                      </a>
                    </Link>
                    <Link href="/courses#timetable">
                      <a
                        className="block text-neutral-700 py-1"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Timetable
                      </a>
                    </Link>
                  </div>
                </div>

                <Link href="/fees">
                  <a
                    className="block text-neutral-900 py-2 font-medium border-t pt-4"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Fees
                  </a>
                </Link>

                <Link href="/gallery">
                  <a
                    className="block text-neutral-900 py-2 font-medium"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Gallery
                  </a>
                </Link>

                <Link href="/contact">
                  <a
                    className="block text-neutral-900 py-2 font-medium"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Contact
                  </a>
                </Link>

                <Link href="/contact">
                  <a
                    className="block bg-secondary hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-md text-center transition duration-300 mt-4"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Apply Now
                  </a>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
