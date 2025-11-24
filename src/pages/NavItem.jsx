const NavItem = ({ icon, text, active }) => {
  return (
    <a
      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer ${
        active ? "bg-gray-800 font-semibold" : ""
      }`}
    >
      <span className="material-icons">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default NavItem;
