import Link from "next/link";
import ChangeLocale from "./ChangeLanguages";
import { createTranslation } from "@/i18n/server";

export default async function Header() {
  const { t } = await createTranslation("common");

  return (
    <header className="flex justify-between shadow mb-4 items-center">
      <nav className="">
        <ul className="flex">
          <Link href={"/"}>
            <li className="px-6 py-4 border-b-2 border-transparent hover:border-b-green-500">
              {t("page.home")}
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="px-6 py-4 border-b-2 border-transparent hover:border-b-green-500">
              {t("page.about")}
            </li>
          </Link>
        </ul>
      </nav>
      <div className="p-4">
        <ChangeLocale />
      </div>
    </header>
  );
}
