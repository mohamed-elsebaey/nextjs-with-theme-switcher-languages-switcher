import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("homePage");
  return (
    <>
      <h1 className="py-10 text-center text-3xl font-bold text-yellow-400 dark:text-red-400">
        {t("title")}
      </h1>
      
    </>
  );
}
