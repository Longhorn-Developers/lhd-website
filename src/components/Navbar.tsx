import { A, useLocation } from "@solidjs/router";
import clsx from "clsx";
import { createSignal, For, type ParentComponent } from "solid-js";
import { NavDrawer } from "./NavDrawer";
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

        {/* Mobile Navigation */}
        {/* <button
          class="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          type="button"
        >
          <MenuIcon class="size-5" />
        </button> */}
        <NavDrawer>
          <div class="flex flex-col">
            <For each={navItems}>
              {(item) => (
                <NavItem
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  class="w-full rounded-md px-2 py-1 font-semibold text-lg hover:bg-accent hover:text-accent-foreground!"
                >
                  {item.label}
                </NavItem>
              )}
            </For>
            <div class="my-2 h-px w-full bg-accent" />
            <ThemeControllerButton />
          </div>
        </NavDrawer>
      </div>
    </nav>
  );
}
