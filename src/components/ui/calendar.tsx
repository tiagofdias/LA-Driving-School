import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-black text-white rounded-lg shadow-lg", className)} // Dark background
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-white", // White text
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 text-white opacity-50 hover:opacity-100" // White icons
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-gray-400 rounded-md w-8 font-normal text-[0.8rem]", // Light gray text for day names
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm text-white focus-within:relative focus-within:z-20",
          "[&:has([aria-selected])]:bg-purple-600 [&:has([aria-selected])]:text-white [&:has([aria-selected])]:rounded-md", // Purple for selected date
          "[&:hover]:bg-black [&:hover]:text-white" // Hover effect
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal text-gray-300 hover:bg-gray-700 hover:text-white" // Default day styling
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-purple-600 text-white hover:bg-purple-500 focus:bg-purple-500", // Purple background for selected date
        day_outside:
          "day-outside text-gray-600 opacity-50", // Days outside the month
        day_disabled: "text-gray-600 opacity-50", // Disabled days
        day_range_middle:
          "aria-selected:bg-gray-800 aria-selected:text-white", // Range styling
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

