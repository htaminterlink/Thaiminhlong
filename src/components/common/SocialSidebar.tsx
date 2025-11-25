import React from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const SocialLink = styled.a<{ $bgColor?: string }>`
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bgColor }) => $bgColor || "#4379F2"};
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  img,
  svg {
    width: 2.8rem;
    height: 2.8rem;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const socialLinks = [
  {
    href: "https://www.facebook.com/trinityvietnam1/",
    icon: "https://trinityvietnam.vn/wp-content/uploads/2025/02/ic-fb.svg",
    alt: "Facebook",
    bgColor: "#1877F2",
  },
  {
    href: "http://instagram.com/",
    icon: "https://trinityvietnam.vn/wp-content/uploads/2025/02/ic-ins.svg",
    alt: "Instagram",
    bgColor: "#E4405F",
  },
  {
    href: "https://www.youtube.com/",
    icon: "https://trinityvietnam.vn/wp-content/uploads/2025/02/ic-yt.svg",
    alt: "YouTube",
    bgColor: "#FF0000",
  },
  {
    href: "https://www.linkedin.com/",
    icon: "https://trinityvietnam.vn/wp-content/uploads/2025/03/linkedin-1.png",
    alt: "LinkedIn",
    bgColor: "#0A66C2",
  },
];

export const SocialSidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      {socialLinks.map((link, index) => (
        <SocialLink
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.alt}
          $bgColor={link.bgColor}
        >
          <img
            src={link.icon}
            alt={link.alt}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const filename = link.icon.split("/").pop();
              target.src = `/template/assets/images/${filename}`;
            }}
          />
        </SocialLink>
      ))}
    </SidebarWrapper>
  );
};
