import { isValid, format } from "date-fns";
import { format as formatTz, toDate } from "date-fns-tz";

// re-export everything
export * from "date-fns";
export * from "date-fns-tz";

export { toDate, format, formatTz };

/**
 * See https://date-fns.org/v2.23.0/docs/format
 * Extends this type as we go
 */
export type DateFormat =
  | "EEE" // Mon
  | "dd" // 29
  | "MMM" // June
  | "yyyy" // 1991
  | "MMM dd, yyyy"; // Jun 29, 1991

export const formatDate = (
  date: Date | string | number | null | undefined,
  dateFormat: DateFormat,
  timeZone?: string
) => {
  if (!date) {
    return "";
  }

  if (!isValid(new Date(date))) {
    return "";
  }

  if (timeZone) {
    return formatTz(new Date(date), dateFormat, {
      timeZone,
    });
  }

  return format(new Date(date), dateFormat);
};
