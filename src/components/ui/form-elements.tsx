import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

// Textarea
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full bg-secondary border border-border px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground resize-none",
          "focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

// Label
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("text-xs font-body font-medium text-muted-foreground uppercase tracking-widest", className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

// Select (native)
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full bg-secondary border border-border px-3 py-2 text-sm font-body text-foreground",
          "focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = "Select"

export { Textarea, Label, Select }
