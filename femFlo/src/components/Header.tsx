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
    <main>
      <div className="logo">
        <img src="" alt="logo" />
        <h1>MyFemFlo</h1>
      </div>
      <nav className="nav-menu">
        {menu.map((item, index) => (
          <ul key={index}>
            <li>
              <a href="">{item.name}</a>
            </li>
          </ul>
        ))}
      </nav>
    </main>
  );
}
