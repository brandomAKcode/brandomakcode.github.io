import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = (props) => {
  return (
    <header className="max-w-screen-2xl px-4 py-6">
      <div className="flex flex-col items-end gap-y-3 sm:flex-row sm:items-center sm:justify-end">
        <nav>
          <ul className="flex gap-x-3 font-medium">
            <li className="transition ease-in-out duration-300 hover:rotate-12 hover:scale-110">
              <a
                href="https://github.com/brandomAKcode"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-green-500 shadow-md px-4 py-2 text-black hover:bg-slate-950 transition ease-in-out duration-300 hover:text-green-500"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="transition ease-in-out duration-300 hover:rotate-12 hover:scale-110">
              <a
                href="https://www.instagram.com/brandomakcode/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-green-500 shadow-md px-4 py-2 text-black hover:bg-slate-950 transition ease-in-out duration-300 hover:text-green-500"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="transition ease-in-out duration-300 hover:rotate-12 hover:scale-110">
              <a
                href="#!"
                className="rounded-md bg-green-500 shadow-md px-4 py-2 text-black hover:bg-slate-950 transition ease-in-out duration-300 hover:text-green-500"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
