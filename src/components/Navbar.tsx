import { A, useLocation } from "@solidjs/router";
import clsx from "clsx";
import { createSignal, For, type ParentComponent } from "solid-js";
import { ThemeControllerButton } from "./ThemeController";

interface NavItemProps {
  href: string;
  class?: string;
  onClick?: () => void;
}

const NavItem: ParentComponent<NavItemProps> = (props) => {
  const location = useLocation();
  const isActive = () => location.pathname === props.href;

  return (
    <A
      href={props.href}
      onClick={props.onClick}
      class={clsx("hover:text-primary transition-colors", isActive() && "text-primary font-medium", props.class)}
    >
      {props.children}
    </A>
  );
};

const navItems = [
  { href: "/downloads", label: "Downloads" },
  { href: "/docs", label: "Docs" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div class="container flex items-center justify-between h-16 px-4">
        <A href="/" class="font-bold text-xl">
          UT Dining
        </A>

        {/* Desktop Navigation */}
        <div class="hidden md:flex items-center gap-8">
          <For each={navItems}>{(item) => <NavItem href={item.href}>{item.label}</NavItem>}</For>
          <ThemeControllerButton />
        </div>

        {/* TODO: Mobile Navigation */}
      </div>
    </nav>
  );
}
