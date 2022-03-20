const menuItems = ["Home", "About", "Contact", "Blog", "Careers"];

function Menu() {
  const renderMenuItems = () => {
    return menuItems.map((item) => {
      return <div className="menu-item font-400">{item}</div>;
    });
  };

  return <div className="menu">{renderMenuItems()}</div>;
}
export default Menu;
