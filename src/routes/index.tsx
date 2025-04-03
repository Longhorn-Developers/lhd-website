import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import { Motion } from "solid-motionone";
import { getDateString } from "~/util/date";
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
  const [timeRange, setTimeRange] = createSignal("1:00 pm to 3:00 pm");
  const [date, setDate] = createSignal(getDateString(new Date()));

  return (
    <>
      <section class="pt-20 md:pt-32 pb-12 md:pb-20 px-4 relative">
        <div class="container mx-auto">
          <div class="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <Motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium inline-block"
            >
              Built by Longhorn Developers
            </Motion.span>
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              The Ultimate Dining Experience for UT Students
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Discover, rate, and explore dining options across campus. Join thousands of Longhorns making informed
              dining choices.
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <A
                href="/downloads"
                class="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
              >
                <Download class="w-5 h-5" />
                Download Now
              </A>
              <a
                href="/about"
                class="w-full sm:w-auto px-6 py-3 rounded-full border hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                Learn More
                <ChevronRight class="w-5 h-5" />
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section class="py-12 md:py-20 px-4 relative">
        <div class="container mx-auto">
          <Motion.h2
            initial={{ opacity: 0 }}
            inView={{ opacity: 1, y: 0 }}
            inViewOptions={{ once: true }}
            class="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12"
          >
            Trusted by UT Students
          </Motion.h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <For
              each={[
                {
                  icon: <Users class="w-6 md:w-8 h-6 md:h-8 mx-auto text-primary" />,
                  stat: "10,000+",
                  label: "Active Users",
                },
                {
                  icon: <Star class="w-6 md:w-8 h-6 md:h-8 mx-auto text-primary" />,
                  stat: "4.8/5",
                  label: "Average Rating",
                },
                {
                  icon: <Clock class="w-6 md:w-8 h-6 md:h-8 mx-auto text-primary" />,
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
                  class="glass p-4 md:p-6 text-center space-y-2"
                >
                  {item.icon}
                  <div class="text-2xl md:text-3xl font-bold">{item.stat}</div>
                  <div class="text-sm md:text-base text-muted-foreground">{item.label}</div>
                </Motion.div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" class="py-12 md:py-20 px-4 relative">
        <div class="container mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            inView={{ opacity: 1, y: 0 }}
            inViewOptions={{ once: true }}
            class="text-center max-w-2xl mx-auto mb-8 md:mb-16"
          >
            <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Everything you need to find the perfect meal</h2>
            <p class="text-sm md:text-base text-muted-foreground">
              Comprehensive features designed to enhance your campus dining experience
            </p>
          </Motion.div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <For
              each={[
                {
                  icon: <Utensils class="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                  title: "Real-time Menu Updates",
                  description: "Stay informed with daily menu updates from all campus dining locations",
                },
                {
                  icon: <Search class="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                  title: "Nutritional Information",
                  description: "See detailed nutritional information for every meal and dining location",
                },
                {
                  icon: <Clock3 class="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                  title: "Wait Time Tracking",
                  description: "Know how busy each location is before you go with real-time wait estimates",
                },
                {
                  icon: <Filter class="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                  title: "Dietary Filters",
                  description: "Easily find meals that match your dietary preferences and restrictions",
                },
                {
                  icon: <Star class="w-5 md:w-6 h-5 md:h-6 text-primary" />,
                  title: "Student Reviews",
                  description: "Make informed choices with authentic reviews from fellow Longhorns",
                },
                {
                  icon: <Users class="w-5 md:w-6 h-5 md:h-6 text-primary" />,
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
                  class="glass p-4 md:p-6 space-y-3 md:space-y-4"
                >
                  <div class="h-10 md:h-12 w-10 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 class="text-lg md:text-xl font-semibold">{feature.title}</h3>
                  <p class="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </Motion.div>
              )}
            </For>
          </div>
        </div>
      </section>
    </>
  );
}
