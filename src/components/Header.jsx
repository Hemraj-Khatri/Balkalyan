import { useState } from "react";
import logo from "../assets/logo.png";
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between text-sm">
          <div className="hidden md:flex gap-6">
            <span>☎ +977 9746499870</span>
            <span>✉balkalyanmss@gmail.com</span>
          </div>

          <p>🎓 Admission Open For 2026</p>
        </div>
      </div>

      {/* Main Navbar */}

      <nav className="bg-base-100 shadow-xl">
        <div className="max-w-7xl mx-auto px-5">
          <div className="navbar min-h-24">
            {/* Logo */}

            <div className="navbar-start">
              <div className="flex items-center gap-3">
                <img src={logo} className="w-100 h-16 " />
              </div>
            </div>

            {/* Desktop Menu */}

            <div className="navbar-center hidden xl:flex">
              <ul className="menu menu-horizontal gap-1">
                <li>
                  <a className="font-semibold hover:text-primary">Home</a>
                </li>

                {/* About Mega Menu */}

                <li className="group relative">
                  <a className="font-semibold">About ▾</a>

                  <div className="absolute hidden group-hover:block top-full left-0 bg-base-100 shadow-2xl rounded-xl w-[600px] p-5">
                    <div className="grid grid-cols-3 gap-5">
                      <div>
                        <h3 className="font-bold text-primary">Our School</h3>

                        <a className="block py-2 hover:text-primary">
                          Introduction
                        </a>

                        <a className="block py-2 hover:text-primary">
                          Principal Message
                        </a>

                        <a className="block py-2 hover:text-primary">History</a>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary">Leadership</h3>

                        <a className="block py-2 hover:text-primary">
                          Management Team
                        </a>

                        <a className="block py-2 hover:text-primary">
                          Teachers
                        </a>

                        <a className="block py-2 hover:text-primary">Alumni</a>
                      </div>

                      <div className="bg-primary text-primary-content rounded-xl p-4">
                        <h3 className="font-bold">Vision</h3>

                        <p className="text-sm mt-2">
                          Building future leaders through quality education.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Academics */}

                <li className="group relative">
                  <a className="font-semibold">Academics ▾</a>

                  <div className="absolute hidden group-hover:block top-full left-0 bg-base-100 shadow-xl rounded-xl w-64 p-4">
                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Curriculum
                    </a>

                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Departments
                    </a>

                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Examination
                    </a>

                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Academic Calendar
                    </a>
                  </div>
                </li>

                {/* Admission */}

                <li className="group relative">
                  <a className="font-semibold">Admission ▾</a>

                  <div className="absolute hidden group-hover:block top-full left-0 bg-base-100 shadow-xl rounded-xl w-64 p-4">
                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Admission Process
                    </a>

                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Fee Structure
                    </a>

                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Scholarship
                    </a>

                    <a className="block p-2 hover:bg-primary hover:text-white rounded">
                      Online Apply
                    </a>
                  </div>
                </li>

                <li>
                  <a>Facilities</a>
                </li>

                <li>
                  <a>Gallery</a>
                </li>

                <li>
                  <a>Notice</a>
                </li>

                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>

            {/* Right Buttons */}

            <div className="navbar-end gap-2 hidden lg:flex">
              <button className="btn btn-outline btn-primary">Portal</button>

              <button className="btn btn-warning">Apply Now</button>
            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="btn btn-ghost xl:hidden"
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}

      {mobileMenu && (
        <div className="xl:hidden bg-base-100 shadow-xl">
          <ul className="menu p-5">
            <li>
              <a>Home</a>
            </li>

            <li>
              <details>
                <summary>About</summary>

                <ul>
                  <li>
                    <a>Introduction</a>
                  </li>

                  <li>
                    <a>Principal Message</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Academics</summary>

                <ul>
                  <li>
                    <a>Curriculum</a>
                  </li>

                  <li>
                    <a>Departments</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>Admission</a>
            </li>

            <li>
              <a>Facilities</a>
            </li>

            <li>
              <a>Gallery</a>
            </li>

            <li>
              <a>Notice</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
