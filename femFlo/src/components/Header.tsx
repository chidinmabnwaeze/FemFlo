import logo from "../assets/logo/image 21.png";

interface HeaderProps {
  title: string;
  //   menus: [];
}

export default function Header({ title, menus }: HeaderProps) {
  const menu = [
    { name: "Home" },
    { name: "About" },
    { name: "Articles" },
    { name: "Contact" },
  ];
  return (
    <main className="flex justify-between items-center">
      <div className="logo flex items-center ">
        <img src={logo} alt="logo" />
        <h1 className="text-2xl px-2 text-[#784AB7]">MyFemFlo</h1>
      </div>
      <nav className="nav-menu flex">
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
