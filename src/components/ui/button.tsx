import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					"flex items-center text-primary-foreground dark:text-primary-foreground justify-center gap-3 bg-primary font-serif shadow-[0px_0px_25px_#00000040] transition-all duration-300 ease-in-out dark:bg-primary dark:shadow-[0px_0px_25px_#ffffff40]",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "p-4",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(
				"relative overflow-hidden group cursor-default group",
				buttonVariants({ variant, size }),
				className
			)}
			{...props}>
			<span className="z-50 inline-flex items-center justify-center gap-2.5 whitespace-nowrap">
				{props.children}
			</span>
			<span className="absolute w-0 h-0 transition-all rounded-full duration-500 ease-out bg-white/30 dark:bg-black/30 group-hover:w-[420px] group-hover:h-[420px]"></span>
		</Comp>
	);
}

export { Button, buttonVariants };
