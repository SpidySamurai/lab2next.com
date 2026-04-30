import { Navbar } from "../components/landing/organisms/navbar";
import { Footer } from "../components/landing/organisms/footer";
import { ChatButton } from "../components/landing/organisms/chat-button";
import { NAV_LINKS } from "../components/landing/domain/navbar.content";
import { FOOTER_COLUMNS, FOOTER_MINI_BADGES } from "../components/landing/domain/footer.content";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main>{children}</main>
      <Footer columns={FOOTER_COLUMNS} miniBadges={FOOTER_MINI_BADGES} />
      <ChatButton />
    </>
  );
}
