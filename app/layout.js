import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
