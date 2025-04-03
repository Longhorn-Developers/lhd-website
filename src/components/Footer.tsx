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
      class="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-primary"
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
      <div class="container px-4 py-8">
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          {/* About Column */}
          <div class="col-span-2 space-y-3 sm:col-span-2 md:col-span-1">
            <h3 class="font-bold text-base">UT Dining</h3>
            <p class="text-muted-foreground text-sm">Making campus dining better for every Longhorn.</p>
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
        <div class="mt-8 border-t pt-6 text-center text-muted-foreground text-sm">
          <p class="mx-auto max-w-lg">&copy; {new Date().getFullYear()} UT Dining. A Longhorn Developers Project.</p>
        </div>
      </div>
    </footer>
  );
}
