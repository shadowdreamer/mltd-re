import PhoneMenu from "./PhoneMenu";
import './header.css'
import DarkMode from "./darkMode";
function Header() {
  return (
    <header className="app-header bg-white dark:bg-gray-800">
      123
      <div>
        <DarkMode/>
        <PhoneMenu />
      </div>
    </header>
  );
}

export default Header;
