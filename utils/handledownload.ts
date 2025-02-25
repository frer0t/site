export default (e: React.MouseEvent, href: string, name: string) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = `/${href}`;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
