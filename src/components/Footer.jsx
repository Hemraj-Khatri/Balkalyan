import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Shree Balkalyan Secondary School
          </h2>

          <p className="mt-4 text-sm leading-6">
            We are committed to providing quality education by developing
            knowledge, creativity, discipline, and leadership skills among
            students for a brighter future.
          </p>

          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=100057382302319"
              target="_blank"
              className="btn btn-circle btn-primary btn-sm"
            >
              <FaFacebookF />
            </a>

            <a className="btn btn-circle btn-primary btn-sm">
              <FaYoutube />
            </a>

            <a className="btn btn-circle btn-primary btn-sm">
              <FaInstagram />
            </a>

            <a className="btn btn-circle btn-primary btn-sm">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title text-lg text-primary">Quick Links</h3>

          <ul className="space-y-3 mt-3">
            <li>
              <a className="link link-hover">Home</a>
            </li>

            <li>
              <a className="link link-hover">About Us</a>
            </li>

            <li>
              <a className="link link-hover">Academic</a>
            </li>

            <li>
              <a className="link link-hover">Notice Board</a>
            </li>

            <li>
              <a className="link link-hover">Gallery</a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="footer-title text-lg text-primary">Important Links</h3>

          <ul className="space-y-3 mt-3">
            <li>
              <a className="link link-hover">Admission</a>
            </li>

            <li>
              <a className="link link-hover">Results</a>
            </li>

            <li>
              <a className="link link-hover">Student Portal</a>
            </li>

            <li>
              <a className="link link-hover">Teacher Login</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title text-lg text-primary">Contact Us</h3>

          <div className="space-y-4 mt-4 text-sm">
            <p className="flex gap-3 items-center">
              <FaMapMarkerAlt className="text-primary" />
              Liwang, Rolpa, Nepal
            </p>

            <p className="flex gap-3 items-center">
              <FaPhoneAlt className="text-primary" />
              086-440132
            </p>

            <p className="flex gap-3 items-center">
              <FaEnvelope className="text-primary" />
              balkalyanmss@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm">
            © {new Date().getFullYear()} Shree Balkalyan Secondary School. All
            Rights Reserved.
          </p>

          <p className="text-sm">
            Designed & Developed by{" "}
            <span className="text-primary font-semibold">Hemraj Khatri</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
