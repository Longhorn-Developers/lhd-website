import { A } from "@solidjs/router";
import { For, type ParentComponent } from "solid-js";
import Github from "~icons/lucide/github";

interface FooterLinkProps {
  href: string;
  external?: boolean;
}

interface FooterColumnProps {
  title: string;
}

const FooterLink: ParentComponent<FooterLinkProps> = (props) => {
  const linkProps = props.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <A
      href={props.href}
      class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
      {...linkProps}
    >
      {props.children}
    </A>
  );
};

const FooterColumn: ParentComponent<FooterColumnProps> = (props) => {
  return (
    <div class="space-y-3">
      <h3 class="font-bold text-base">{props.title}</h3>
      <ul class="space-y-2">{props.children}</ul>
    </div>
  );
};

const footerLinks = {
  product: [
    { href: "/downloads", label: "Downloads" },
    { href: "/#features", label: "Features" }, // TODO
    { href: "/reviews", label: "Reviews" }, // TODO
  ],
  resources: [
    { href: "/docs", label: "Documentation" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ],
} as const;

export function Footer() {
  return (
    <footer class="border-t">
      <div class="container py-8 px-4">
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div class="col-span-2 sm:col-span-2 md:col-span-1 space-y-3">
            <h3 class="font-bold text-base">UT Dining</h3>
            <p class="text-sm text-muted-foreground">Making campus dining better for every Longhorn.</p>
          </div>

          {/* Product Column */}
          <FooterColumn title="Product">
            <For each={footerLinks.product}>
              {(link) => (
                <li>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              )}
            </For>
          </FooterColumn>

          {/* Resources Column */}
          <FooterColumn title="Resources">
            <For each={footerLinks.resources}>
              {(link) => (
                <li>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              )}
            </For>
          </FooterColumn>

          {/* Connect Column */}
          <FooterColumn title="Connect">
            <li>
              <FooterLink href="https://github.com/Longhorn-Developers/ut-dining-website" external>
                <Github class="size-4" />
                GitHub
              </FooterLink>
            </li>
          </FooterColumn>
        </div>

        {/* Copyright Section */}
        <div class="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p class="max-w-lg mx-auto">&copy; {new Date().getFullYear()} UT Dining. A Longhorn Developers Project.</p>
        </div>
      </div>
    </footer>
  );
}
