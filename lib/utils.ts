/**
 * Tiny classNames helper. Filters falsy values and joins with a space.
 * Kept dependency-free on purpose — be disciplined about conflicting classes.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
