import React from "react";

const SocialLinkIcon = ({ path, icon, classNames }) => {
  return (
    <li>
      <a href={path} target="_blank" rel="noreferrer" className={classNames}>
        {icon}
      </a>
    </li>
  );
};

export default SocialLinkIcon;
