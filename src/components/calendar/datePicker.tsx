import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

export function DatePickerField({
  label,
  date,
  onChange,
}: {
  label: string;
  date: Date | null;
  onChange: (date: Date | null) => void;
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-xs font-medium text-[#3B2B4A]">{label}</label>

      <Popover>
        <PopoverTrigger asChild>
          <button
            className="
              flex h-10 w-full items-center justify-between rounded-xl 
              border border-[#E3C6FA] bg-[#F7ECFF] px-3 text-left text-xs 
              text-[#3B2B4A] 
            "
          >
            {date ? date.toLocaleDateString("en-GB") : "dd / mm / yyyy"}

            <CalendarIcon className="h-4 w-4 text-[#8E6AAE]" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(d) => onChange(d ?? null)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}