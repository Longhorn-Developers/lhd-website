import { A } from "@solidjs/router";
import { For } from "solid-js";
import { Motion } from "solid-motionone";
import ChevronRight from "~icons/lucide/chevron-right";
import Clock from "~icons/lucide/clock";
import Clock3 from "~icons/lucide/clock-3";
import Download from "~icons/lucide/download";
import Filter from "~icons/lucide/filter";
import Search from "~icons/lucide/search";
import Star from "~icons/lucide/star";
import Users from "~icons/lucide/users";
import Utensils from "~icons/lucide/utensils";

export default function Home() {
  return (
    <>
      <section class="relative px-4 pt-20 pb-12 md:pt-32 md:pb-20">
        <noscript>
          <style>{`
            .no-js\\:show {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
          `}</style>
        </noscript>
        <div class="container mx-auto">
          <div class="mx-auto max-w-3xl space-y-4 text-center md:space-y-6">
            <Motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              class="no-js:show inline-block rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-sm"
            >
              Built by Longhorn Developers
            </Motion.span>
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              class="no-js:show font-bold text-3xl leading-tight md:text-4xl lg:text-5xl"
            >
              The Ultimate Dining Experience for UT Students
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              class="no-js:show mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              Discover, rate, and explore dining options across campus. Join thousands of Longhorns making informed
              dining choices.
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              class="no-js:show flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
            >
              <A
                href="/downloads"
                class="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-hover sm:w-auto"
              >
                <Download class="h-5 w-5" />
                Download Now
              </A>
              <a
                href="/about"
                class="flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3 transition-colors hover:bg-secondary sm:w-auto"
              >
                Learn More
                <ChevronRight class="h-5 w-5" />
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section class="relative px-4 py-12 md:py-20">
        <div class="container mx-auto">
          <Motion.h2
            initial={{ opacity: 0 }}
            inView={{ opacity: 1, y: 0 }}
            inViewOptions={{ once: true }}
            class="no-js:show mb-8 text-center font-semibold text-xl md:mb-12 md:text-2xl"
          >
            Trusted by UT Students
          </Motion.h2>
          <div class="no-js:show grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <For
              each={[
                {
                  icon: <Users class="mx-auto h-6 w-6 text-primary md:h-8 md:w-8" />,
                  stat: "10,000+",
                  label: "Active Users",
                },
                {
                  icon: <Star class="mx-auto h-6 w-6 text-primary md:h-8 md:w-8" />,
                  stat: "4.8/5",
                  label: "Average Rating",
                },
                {
                  icon: <Clock class="mx-auto h-6 w-6 text-primary md:h-8 md:w-8" />,
                  stat: "15min",
                  label: "Time Saved per Meal",
                },
              ]}
            >
              {(item, index) => (
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  inView={{ opacity: 1, y: 0 }}
                  inViewOptions={{ once: true }}
                  transition={{ delay: index() * 0.2 }}
                  class="no-js:show glass space-y-2 p-4 text-center md:p-6"
                >
                  {item.icon}
                  <div class="font-bold text-2xl md:text-3xl">{item.stat}</div>
                  <div class="text-muted-foreground text-sm md:text-base">{item.label}</div>
                </Motion.div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" class="relative px-4 py-12 md:py-20">
        <div class="container mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            inView={{ opacity: 1, y: 0 }}
            inViewOptions={{ once: true }}
            class="no-js:show mx-auto mb-8 max-w-2xl text-center md:mb-16"
          >
            <h2 class="mb-3 font-bold text-2xl md:mb-4 md:text-3xl">Everything you need to find the perfect meal</h2>
            <p class="text-muted-foreground text-sm md:text-base">
              Comprehensive features designed to enhance your campus dining experience
            </p>
          </Motion.div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            <For
              each={[
                {
                  icon: <Utensils class="h-5 w-5 text-primary md:h-6 md:w-6" />,
                  title: "Real-time Menu Updates",
                  description: "Stay informed with daily menu updates from all campus dining locations",
                },
                {
                  icon: <Search class="h-5 w-5 text-primary md:h-6 md:w-6" />,
                  title: "Nutritional Information",
                  description: "See detailed nutritional information for every meal and dining location",
                },
                {
                  icon: <Clock3 class="h-5 w-5 text-primary md:h-6 md:w-6" />,
                  title: "Wait Time Tracking",
                  description: "Know how busy each location is before you go with real-time wait estimates",
                },
                {
                  icon: <Filter class="h-5 w-5 text-primary md:h-6 md:w-6" />,
                  title: "Dietary Filters",
                  description: "Easily find meals that match your dietary preferences and restrictions",
                },
                {
                  icon: <Star class="h-5 w-5 text-primary md:h-6 md:w-6" />,
                  title: "Student Reviews",
                  description: "Make informed choices with authentic reviews from fellow Longhorns",
                },
                {
                  icon: <Users class="h-5 w-5 text-primary md:h-6 md:w-6" />,
                  title: "Social Features",
                  description: "Connect with friends and share your favorite dining spots on campus",
                },
              ]}
            >
              {(feature, index) => (
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  inView={{ opacity: 1, y: 0 }}
                  inViewOptions={{ once: true }}
                  transition={{ delay: index() * 0.1 }}
                  class="no-js:show glass space-y-3 p-4 md:space-y-4 md:p-6"
                >
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:h-12 md:w-12">
                    {feature.icon}
                  </div>
                  <h3 class="font-semibold text-lg md:text-xl">{feature.title}</h3>
                  <p class="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                </Motion.div>
              )}
            </For>
          </div>
        </div>
      </section>
    </>
  );
}
