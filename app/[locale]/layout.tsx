import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "../globals.css";
import { ThemeProviderWrapper } from "../theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import LanguagesSwitcher from "@/components/languages-switcher";

const open_Sans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: any }) {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });
  const title = messages.homePage.title;
  return {
    metadataBase: new URL("https://exam.gammal.tech/"),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description:
      "We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.",
    // verification: {
    //   google: "google-site-verification",
    // },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const messages = await getMessages();
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${open_Sans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviderWrapper>
            <div>
              <LanguagesSwitcher locale={locale} />
              {children}
            </div>
          </ThemeProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
