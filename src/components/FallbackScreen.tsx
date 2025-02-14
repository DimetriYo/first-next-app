import Link from "next/link"
import { PropsWithChildren } from "react"
import { buttonVariants } from "./ui/button"

type Props = PropsWithChildren & {
  goToDescription: string
  goToAddress: string
}

export function FallbackScreen({
  goToAddress,
  goToDescription,
  children,
}: Props) {
  return (
    <section className="w-max mx-auto flex flex-col gap-8 items-center animate-fade-in-from-top">
      <h2 className="text-3xl">{children}</h2>
      <Link
        href={goToAddress}
        className={buttonVariants({ variant: "default" })}
      >
        {goToDescription}
      </Link>
    </section>
  )
}
