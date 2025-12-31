// components/ui/Card.tsx
import { ReactNode, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined" | "filled" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "default",
      padding = "md",
      hover = false,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-white border border-neutral-200",
      elevated: "bg-white shadow-lg",
      outlined: "bg-transparent border-2 border-neutral-200",
      filled: "bg-neutral-100",
      glass: "bg-white/80 backdrop-blur-lg border border-white/20",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -5 } : undefined}
        className={cn(
          "rounded-2xl",
          variants[variant],
          paddings[padding],
          hover && "transition-all duration-300 hover:shadow-xl",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Card subcomponents
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardHeaderProps) {
  return (
    <h3
      className={cn(
        "text-xl font-heading font-semibold text-neutral-900",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: CardHeaderProps) {
  return <p className={cn("text-neutral-600 mt-1", className)}>{children}</p>;
}

export function CardContent({ children, className }: CardHeaderProps) {
  return <div className={cn(className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-neutral-100", className)}>
      {children}
    </div>
  );
}

export default Card;
