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
      label: "My Projects",
      href: "/projects/overview",
    },
    {
      label: "Blogs",
      href: "/blog/overview",
    },
  ],

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
