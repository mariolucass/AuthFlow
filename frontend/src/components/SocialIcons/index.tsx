import {
  faApple,
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";

export const SocialIcons = () => {
  const listSocial = [
    {
      name: "Google",
      component: (
        <FontAwesomeIcon icon={faGoogle} className="h-[32px] w-[32px]" />
      ),
    },
    {
      name: "Apple",
      component: (
        <FontAwesomeIcon icon={faApple} className="h-[32px] w-[32px]" />
      ),
    },
    {
      name: "Facebook",
      component: (
        <FontAwesomeIcon icon={faFacebook} className="h-[32px] w-[32px]" />
      ),
    },
    {
      name: "Github",
      component: (
        <FontAwesomeIcon icon={faGithub} className="h-[32px] w-[32px]" />
      ),
    },
  ];

  return (
    <ul className="flex gap-2 justify-evenly">
      {listSocial.map((social, index) => {
        return (
          <li className="h-[64px] w-[64px]" key={index}>
            <Button className="h-[64px] w-[64px]">{social.component}</Button>
          </li>
        );
      })}
    </ul>
  );
};
