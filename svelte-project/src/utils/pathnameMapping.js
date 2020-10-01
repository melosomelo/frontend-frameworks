//outsorcing the mapping of the window's pathname to the respective page title

function pathnameMapping(pathname) {
  switch (pathname) {
    case "/":
      return "All posts";
    case "/about":
      return "About";
    case "/create-post":
      return "Create a post";
    default:
      return "Edit a post";
  }
}

export default pathnameMapping;
