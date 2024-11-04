"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function LanguagesSwitcher({ locale }: { locale: string }) {
  const pathName = usePathname();
  const router = useRouter();
  const onLanguageChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathName.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`)
  };
  return (
    <>
      <select value={locale} onChange={onLanguageChangeHandler}>
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
      <div className="sr-only">LanguagesSwitcher</div>
    </>
  );
}
