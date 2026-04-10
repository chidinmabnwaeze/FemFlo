import logo from "../assets/Uteri Flow logo.svg";

interface HeaderProps {
  title: string;
  //   menus: [];
}

export default function Header({ title, menus }: HeaderProps) {
  const menu = [
    { name: "Home" , url: "/"},
    { name: "About" , url: "/about"},
    { name: "Articles" , url: "/articles"},
    // { name: "Contact" , url: "/home" },
  ];
  return (
    <main className="flex justify-between items-center bg-transparent z-20 absolute top-0 right-0 left-0 px-8 py-6">
      <div className="logo flex items-center ">
        <img src={logo} alt="logo" className="h-10 w-10"/>
        <h1 className="text-2xl px-2 text-primary-color font-bold">{title}</h1>
      </div>
      <nav className="nav-menu flex font-medium text-lg text-primary-color hover:text-secondary-color transition cursor-pointer">
        {menu.map((item, index) => (
          <ul key={index} className="mr-4">
            <li>
              <a href="">{item.name}</a>
            </li>
          </ul>
        ))}
      </nav>
    </main>
  );
}
