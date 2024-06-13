import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Menu() {
    return (
        <div>
            <h2 className="text-center uppercase text-2xl mt-4 leading-none">
                Fullfill
            <br />
            <span className="font-extralight">your</span> belly
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
                <nav>
                    <ul className="flex gap-4">
                    {[
                        ["🏠", "/"],
                        ["Kitchen Tips", "#"],
                        ["Cuisines", "#"],
                        ["About Us", "#"],
                    ].map((menu) => (
                        <li>
                        <Link
                            href={menu[1]}
                            className="border-2 border-black py-2 px-6 rounded-full dark:border-white"
                        >
                            {menu[0]}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                <ThemeToggle />
            </div>
        </div>
    )
}