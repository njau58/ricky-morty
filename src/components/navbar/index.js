const generateLinks = (router, scrollThreshold, toggleMenuIcon) => {
  const links = [
    {
      href: "home",
      linkTo: "Home",
      onClick: { toggleMenuIcon },
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      activeClass: "text-secondary-text hover:text-primary cursor-pointer",
      className: `
      ${
      scrollThreshold
          ? " text-secondary-text hover:text-primary cursor-pointer"
          : "text-white hover:text-primary cursor-pointer"
      } 
       
    `,
    },
    {
      href: "about",
      linkTo: "About Us",
      onClick: { toggleMenuIcon },
      scroll: false,
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      activeClass: "text-primary cursor-pointer",
      className: `
      ${
      scrollThreshold
          ? " text-secondary-text hover:text-primary cursor-pointer"
          : "text-white hover:text-primary cursor-pointer"
      } 
       
    `,
      offset:-150
    },

    {
      href: "projects",
      linkTo: "Projects",
      onClick: { toggleMenuIcon },
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      activeClass: "text-primary cursor-pointer",
      className: `
      ${
      scrollThreshold
          ? " text-secondary-text hover:text-primary cursor-pointer"
          : "text-white hover:text-primary cursor-pointer"
      } 
       
    `,
      offset:-150
    },
    {
      href: "services",
      linkTo: "Services",
      onClick: { toggleMenuIcon },
      scroll: false,
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      activeClass: "text-primary cursor-pointer",
      className: `
      ${
      scrollThreshold
          ? " text-secondary-text hover:text-primary cursor-pointer"
          : "text-white hover:text-primary cursor-pointer"
      } 
       
    `,
      offset:-100
    },
    {
      href: "contact",
      linkTo: "Get a quote",
      onClick: { toggleMenuIcon },
    offset:-170,


      className:
        " px-6 py-3 bg-primary cursor-pointer border border-primary hover:border-primary hover:bg-transparent hover:text-primary rounded-md text-sm text-white",
      mobileStyle:
        " px-6 py-3 bg-primary border cursor-pointer border-primary hover:border-primary hover:bg-transparent hover:text-primary rounded-md text-sm text-white",
    },
  ];

  return links;
};

export default generateLinks;
