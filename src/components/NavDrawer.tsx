import Drawer from "@corvu/drawer";
import { A, useIsRouting } from "@solidjs/router";
import { createEffect, type FlowComponent } from "solid-js";
import MenuIcon from "~icons/lucide/menu";

export const NavDrawer: FlowComponent = (props) => {
  const isRouting = useIsRouting();

  return (
    <Drawer side="left" breakPoints={[0.75]}>
      {(drawerProps) => {
        createEffect(() => {
          if (isRouting()) drawerProps.setOpen(false);
        });

        return (
          <>
            <Drawer.Trigger class="p-1.5 md:hidden">
              <span class="sr-only">Open navigation</span>
              <MenuIcon class="size-5" />
            </Drawer.Trigger>
            <Drawer.Portal>
              {/* credit to corvu for styling */}
              <Drawer.Overlay
                class="fixed inset-0 z-50 data-transitioning:transition-colors data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  "background-color": `rgb(0 0 0 / ${0.6 * drawerProps.openPercentage})`,
                }}
              />
              <Drawer.Content class="fixed inset-y-0 left-0 z-50 flex w-57.5 flex-col items-start bg-background after:absolute after:inset-y-0 after:right-[calc(100%-1px)] after:w-1/2 after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]">
                <a href="/" class="flex h-[65px] w-full shrink-0 items-center border-b px-3">
                  <A href="/" class="font-bold text-xl">
                    UT Dining
                  </A>
                </a>
                <div class="scrollbar-thin w-full overflow-y-auto pt-2 pr-8 pb-10 pl-3">{props.children}</div>
              </Drawer.Content>
            </Drawer.Portal>
          </>
        );
      }}
    </Drawer>
  );
};
