import Link from "next/link";

type MenuItem = {
  id: number;
  name: string;
  url: string;
  bg: "SM" | "MD" | "LG"
};

export const menues: MenuItem[] = [
  { id: 1, name: "HOME", url: "/", bg: "LG" },
  { id: 2, name: "ABOUT", url: "/about", bg: "SM" },
  { id: 3, name: "CONTACT", url: "/#contact", bg: "SM"},
  { id: 4, name: "PARTNER", url: "/partner", bg: "SM" },
  { id: 5, name: "CAREERS", url: "/careers", bg:"SM" },
];

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 flex items-center px-10">
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">LOGO</div>

      {/* Center: Menu */}
      <div className="flex-1 flex justify-center gap-6">
        {menues.map((menu) => (
          <Link
            key={menu.id}
            href={menu.url}
            className="cursor-pointer text-[14px] text-[#453D53] font-semibold hover:text-[#DD0107] transition"
          >
            {menu.name}
          </Link>
        ))}
      </div>

      {/* Right: Language */}
      <div className="flex-1 flex justify-end">Language</div>
    </div>
  );
};

export default Header;
