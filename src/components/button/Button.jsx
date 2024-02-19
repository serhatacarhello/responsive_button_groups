import classNames from "classnames";
import { useId } from "react";

export default function Button({
  children,
  size = "medium",
  variant = "default",
  ...props
}) {
  const id = useId();

  return (
    <button
      id={id}
      {...props}
      className={classNames(
        "font-semibold rounded border mr-2.5 lg:last:mr-0",
        {
          "h-8 px-2.5 text-xs": size === "small",
          "h-10 px-4 text-sm": size === "medium",
          "h-14 px-6 text-base": size === "large",
          "bg-zinc-50 border-zinc-300 hover:border-zinc-500 hover:bg-zinc-100 text-zinc-700":
            variant === "default",
          "bg-green-50 border-green-300 hover:border-green-500 hover:bg-green-100 text-green-700":
            variant === "success",
          "bg-yellow-50 border-yellow-300 hover:border-yellow-500 hover:bg-yellow-100 text-yellow-700":
            variant === "warning",
          "bg-red-50 border-red-300 hover:border-red-500 hover:bg-red-100 text-red-700":
            variant === "danger",
        }
      )}
    >
      {children}
    </button>
  );
}
