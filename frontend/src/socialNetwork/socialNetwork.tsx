import React from "react";
import { IconType } from "react-icons";

type SocialLink = {
  icon: IconType; // Fixed typo from `icons` to `icon`
  href: string;
};

type SocialMediaLinksProps = {
  links: SocialLink[];
};

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          aria-label={link.href}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};
