import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="./Screenshot.png"
                className="mr-3 h-36"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/vihang8101"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                <a
                     href="https://www.linkedin.com/in/vihang-patel-2b542620a/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
               
                 
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 &nbsp;
            <a
              href="https://vihangportfolio.netlify.app/"
              target="_blank"
              className="hover:underline"
            >
              VihangPatel
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        
          <a
              href="  https://www.facebook.com/profile.php?id=100006806297533"
              className="text-gray-500"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/vihang_patel_8101"
              className="text-gray-500"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.347 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.347-2.633 1.322-3.608.975-.975 2.242-1.26 3.608-1.322C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.015 7.053.072 5.775.129 4.583.413 3.515 1.481 2.447 2.549 2.163 3.741 2.106 5.019.05 5.457 0 5.861 0 12s.015 8.332.072 9.611c.058 1.278.342 2.47 1.41 3.538 1.068 1.068 2.26 1.352 3.538 1.41 1.279.057 1.683.072 5.928.072s8.332-.015 9.611-.072c1.278-.058 2.47-.342 3.538-1.41 1.068-1.068 1.352-2.26 1.41-3.538.057-1.279.072-1.683.072-5.928s-.015-8.332-.072-9.611c-.058-1.278-.342-2.47-1.41-3.538C21.541.342 20.349.058 19.071 0 17.792-.015 17.388-.072 12-.072S6.208-.015 4.929 0C3.651.015 2.46.342 1.392 1.41.324 2.478.041 3.67 0 4.948.015 6.227 0 6.631 0 12c.015 5.37 0 5.773.072 7.052.057 1.278.342 2.47 1.41 3.538C2.478 23.658 3.67 23.941 4.948 24 6.227 23.985 6.631 24 12 24c5.37 0 5.773.015 7.052.072 1.278.057 2.47.342 3.538 1.41 1.068 1.068 1.352 2.26 1.41 3.538.057 1.279.072 1.683.072 5.928 0-1.215.015-1.727-.072-3.002-.058-1.278-.342-2.47-1.41-3.538-1.068-1.068-2.26-1.352-3.538-1.41-1.279-.057-1.683-.072-5.928-.072s-8.332.015-9.611.072C4.605 22.647 3.437 22.935 2.477 22.835 1.351 21.874.374 20.467 0 18.692-.015 16.816-.072 16.388-.072 12c0-1.215-.015-1.727.072-3.002.058-1.278.342-2.47 1.41-3.538C2.544 3.59 3.71 3.303 4.976 3.195m7.12 5.067c2.246.342 3.85 1.789 4.504 3.89-.072 2.447-1.185 3.921-3.35 3.921-2.163 0-3.353-1.444-3.353-3.889.006-2.445 1.197-3.9 3.353-3.9m5.706 0h-1.456c-.391 0-.71.318-.71.71 0 .392.319.71.71.71h1.456c.391 0 .71-.318.71-.71 0-.392-.319-.71-.71-.71m-1.69 7.589c-2.02.627-3.41 1.99-4.72 3.324-1.39-1.263-2.629-2.59-4.717-3.33-2.03-.87-4.004-.98-6.378-.76-1.867.172-4.674.872-4.924-.41-.363-1.227-.188-.79.317-.898"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="https://x.com/PatelVihangDin2"
              className="text-gray-500"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/vihang8101"
              className="text-gray-500"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vihang-patel-2b542620a/"
              className="text-gray-500"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.207 24 24 23.225 24 22.271V1.729C24 .775 23.207 0 22.225 0zM7.129 20.452H3.56V9.038h3.569v11.414zM5.344 7.511a2.065 2.065 0 1 1 0-4.131 2.065 2.065 0 0 1 0 4.131zm15.107 12.94h-3.569v-5.517c0-1.316-.025-3.015-1.837-3.015-1.84 0-2.123 1.433-2.123 2.917v5.615H9.354V9.038h3.422v1.561h.049c.477-.902 1.636-1.837 3.368-1.837 3.6 0 4.27 2.37 4.27 5.454v6.236z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
