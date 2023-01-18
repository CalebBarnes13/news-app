import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-green-400 underline-offset-4 font-cold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
