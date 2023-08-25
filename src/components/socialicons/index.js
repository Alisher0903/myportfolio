import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a target="_blank" href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a target="_blank" href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a target="_blank" href={socialprofils.telegram}>
              <FaTelegram />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a target="_blank" href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
