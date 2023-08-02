const generateLinks = (router, scrollThreshold, toggleMenuIcon) => {


  const links = [
    {
      href: "/",
      linkTo: "Home",
      onClick: { toggleMenuIcon },
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      className: `
                ${
                  router?.asPath == "/"
                    ? "text-primary"
                    : scrollThreshold
                    ? " text-secondary-text hover:text-primary cursor-pointer"
                    : "text-white hover:text-primary cursor-pointer"
                } 
                 
              `,
    },
    {
      href: "#about",
      linkTo: "About Us",
      onClick: { toggleMenuIcon },
      scroll: false,
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      className: `
                  ${
                    router?.asPath == "/#about"
                      ? "text-primary"
                      : scrollThreshold
                      ? " text-secondary-text hover:text-primary cursor-pointer"
                      : "text-white hover:text-primary cursor-pointer"
                  } 
                   
                `,
    },
    {
      href: "#products",
      linkTo: "Products",
      onClick: { toggleMenuIcon },
      scroll: false,
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      className: `
                    ${
                      router?.asPath == "/#products"
                        ? "text-primary"
                        : scrollThreshold
                        ? " text-secondary-text hover:text-primary cursor-pointer"
                        : "text-white hover:text-primary cursor-pointer"
                    } 
                     
                  `,
    },
    {
      href: "#projects",
      linkTo: "Projects",
      onClick: { toggleMenuIcon },
      scroll: false,
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      className: `
                    ${
                      router?.asPath == "/#projects"
                        ? "text-primary"
                        : scrollThreshold
                        ? " text-secondary-text hover:text-primary cursor-pointer"
                        : "text-white hover:text-primary cursor-pointer"
                    } 
                     
                  `,
    },
    {
      href: "#services",
      linkTo: "Services",
      onClick: { toggleMenuIcon },
      scroll: false,
      mobileStyle: "text-secondary-text  hover:text-primary cursor-pointer",
      className: `
                    ${
                      router?.asPath == "/#services"
                        ? "text-primary"
                        : scrollThreshold
                        ? " text-secondary-text hover:text-primary cursor-pointer"
                        : "text-white hover:text-primary cursor-pointer"
                    } 
                     
                  `,
    },
    {
      href: "#contact",
      linkTo: "Get a quote",
      onClick: { toggleMenuIcon },
      scroll: false,

      className:
        " px-6 py-3 bg-primary border border-primary hover:border-primary hover:bg-transparent hover:text-primary rounded-md text-sm text-white",
      mobileStyle:
        " px-6 py-3 bg-primary border border-primary hover:border-primary hover:bg-transparent hover:text-primary rounded-md text-sm text-white",
    },
  ];

  return links;
};

export default generateLinks;
