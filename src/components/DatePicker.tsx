import Calendar, { type RootSingleProps } from "@corvu/calendar";
import Popover from "@corvu/popover";
import type { VoidComponent } from "solid-js";
import { Index, Show } from "solid-js";
import CalendarBlank from "~icons/heroicons/calendar-16-solid";
import CaretLeft from "~icons/heroicons/chevron-left-16-solid";
import CaretRight from "~icons/heroicons/chevron-right-16-solid";

interface DatePickerProps {
  value?: RootSingleProps["value"];
  onValueChange?: RootSingleProps["onValueChange"];
  labelId: string;
}

const DatePicker: VoidComponent<DatePickerProps> = (props) => {
  // const labelId = createUniqueId();

  const labelId = () => props.labelId;

  return (
    <Calendar mode="single" labelIds={[labelId()]} onValueChange={props.onValueChange} value={props.value} required>
      {(props) => (
        <Popover
          placement="bottom-start"
          floatingOptions={{
            offset: 5,
            flip: true,
          }}
          initialFocusEl={props.focusedDayRef ?? undefined}
          labelId={labelId()}
        >
          <Popover.Trigger class="my-auto flex w-56 cursor-pointer items-center space-x-2 rounded-md border-1 border-zinc-600 bg-zinc-800 px-3 py-2 transition-all duration-100 hover:bg-zinc-700">
            <CalendarBlank class="size-5" />
            <Show when={props.value} fallback={<span>Pick a date</span>}>
              <span>{formatTrigger(props.value!)}</span>
            </Show>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content class="data-open:fade-in-50% data-open:slide-in-from-top-1 data-closed:fade-out-50% data-closed:slide-out-to-top-1 z-50 rounded-lg bg-zinc-800 shadow-md data-closed:animate-out data-open:animate-in">
              <div class="rounded-md bg-zinc-800 p-3 shadow-md">
                <div class="flex items-center justify-between gap-4">
                  <Calendar.Nav
                    action="prev-month"
                    aria-label="Go to previous month"
                    class="size-7 rounded-sm bg-zinc-700/50 p-1.25 hover:bg-zinc-600"
                  >
                    <CaretLeft class="size-4.5" />
                  </Calendar.Nav>
                  <Calendar.Label as={Popover.Label} class="text-sm">
                    {formatMonth(props.month)} {props.month.getFullYear()}
                  </Calendar.Label>
                  <Calendar.Nav
                    action="next-month"
                    aria-label="Go to next month"
                    class="size-7 rounded-sm bg-zinc-700/50 p-1.25 hover:bg-zinc-600"
                  >
                    <CaretRight class="size-4.5" />
                  </Calendar.Nav>
                </div>
                <Calendar.Table class="mt-3">
                  <thead>
                    <tr>
                      <Index each={props.weekdays}>
                        {(weekday) => (
                          <Calendar.HeadCell
                            abbr={formatWeekdayLong(weekday())}
                            class="w-8 flex-1 pb-1 font-normal text-xs opacity-65"
                          >
                            {formatWeekdayShort(weekday())}
                          </Calendar.HeadCell>
                        )}
                      </Index>
                    </tr>
                  </thead>
                  <tbody>
                    <Index each={props.weeks}>
                      {(week) => (
                        <tr>
                          <Index each={week()}>
                            {(day) => (
                              <Calendar.Cell class="p-0">
                                <Calendar.CellTrigger
                                  day={day()}
                                  class="inline-flex size-8 items-center justify-center rounded-md text-sm focus-visible:bg-zinc-700/80 disabled:pointer-events-none disabled:opacity-40 data-selected:bg-zinc-600! data-today:bg-zinc-700/50 lg:hover:bg-zinc-700/80"
                                >
                                  {day().getDate()}
                                </Calendar.CellTrigger>
                              </Calendar.Cell>
                            )}
                          </Index>
                        </tr>
                      )}
                    </Index>
                  </tbody>
                </Calendar.Table>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover>
      )}
    </Calendar>
  );
};

const { format: formatWeekdayLong } = new Intl.DateTimeFormat("en", {
  weekday: "long",
});
const { format: formatWeekdayShort } = new Intl.DateTimeFormat("en", {
  weekday: "short",
});
const { format: formatMonth } = new Intl.DateTimeFormat("en", {
  month: "long",
});
const { format: formatTrigger } = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default DatePicker;
