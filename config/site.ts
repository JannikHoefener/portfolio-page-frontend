export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hoefener Jannik - Homepage",
  description: "Portfolio, Projects and Blogposts",
  navItems: [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects/overview",
    },
    {
      label: "Blogs",
      href: "/blog/overview",
    },
  ],

  links: {
    github: "https://github.com/JannikHoefener",
  },
};
