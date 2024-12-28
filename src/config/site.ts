export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FoundX",
  description: "A platform to help you find your lost items",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    { label: "Found Items", href: "/found-items" },

    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
