export function formatProjectName(name) {
    return name
      .replace(/(frontend-|youcode-|youcode-react-|react-|vanilla-js-)/gi, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }