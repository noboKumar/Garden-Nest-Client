import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer sm:footer-horizontal text-base-content p-10 items-center w-11/12 mx-auto">
        <aside>
          <Link className="btn btn-ghost text-2xl">
            <Logo></Logo>
          </Link>
          <p className="md:text-xl">"Where Gardeners Bloom Together."</p>
        </aside>
        <nav className="space-y-2">
          <h6 className="footer-title">Social</h6>
          <a
            className="link link-hover"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <FaFacebook size={20}></FaFacebook>Facebook
            </span>
          </a>
          <a className="link link-hover" href="http://x.com/" target="_blank">
            <span className="flex items-center gap-2">
              <FaTwitter size={20}></FaTwitter>Twitter
            </span>
          </a>
          <a
            className="link link-hover"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <FaInstagram size={20}></FaInstagram>Instagram
            </span>
          </a>
          <a
            className="link link-hover"
            href="https://github.com/"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <FaGithub size={20}></FaGithub>GitHub
            </span>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
