import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsX,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsInstagram
} from "react-icons/bs";

export const SocialMediaProfiles = [
  { title: "GitHub", href: "https://github.com/salleonline", icon: BsGithub },
  {
    title: "Instagram",
    href: "https://www.instagram.com/salleweb/",
    icon: BsInstagram,
  },
  { title: "Twitter", href: "https://twitter.com/SalleWeb", icon: BsX },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
