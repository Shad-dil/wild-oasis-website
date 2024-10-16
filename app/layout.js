import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | Wild  Oasis",
    default: "Welcome to Wild Oasis",
  },
  description: "Luxurious cabin hotel in Darbhanga Bihar",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
