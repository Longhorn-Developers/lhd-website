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
      class={clsx("transition-colors hover:text-primary", isActive() && "font-medium text-primary", props.class)}
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
    <nav class="fixed top-0 right-0 left-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div class="container flex h-16 items-center justify-between px-4">
        <A href="/" class="font-bold text-xl">
          UT Dining
        </A>

        {/* Desktop Navigation */}
        <div class="hidden items-center gap-8 md:flex">
          <For each={navItems}>{(item) => <NavItem href={item.href}>{item.label}</NavItem>}</For>
          <ThemeControllerButton />
        </div>

        {/* TODO: Mobile Navigation */}
      </div>
    </nav>
  );
}
