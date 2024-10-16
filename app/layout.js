import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
