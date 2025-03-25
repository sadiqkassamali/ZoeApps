import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { clsx } from "clsx";

export const Switch = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <SwitchPrimitives.Root
            ref={ref}
            className={clsx(
                "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
                "bg-gray-200 dark:bg-gray-700",
                "data-[state=checked]:bg-primary",
                className
            )}
            {...props}
        >
            <SwitchPrimitives.Thumb
                className={clsx(
                    "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
                    "translate-x-0.5 data-[state=checked]:translate-x-5"
                )}
            />
        </SwitchPrimitives.Root>
    );
});

Switch.displayName = "Switch";
