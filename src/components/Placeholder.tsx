import { MessageSquareWarning } from "lucide-react"
import { cloneElement } from "react"

type Props = {
  label: string
  icon?: React.ReactElement
  button?: React.ReactElement
}

export function Placeholder({
  label,
  button = <div />,
  icon = <MessageSquareWarning />,
}: Props) {
  return (
    <div className="w-max mx-auto flex flex-col gap-8 items-center animate-fade-in-from-top">
      {/*@ts-expect-error: unknown problem*/}
      {cloneElement(icon, { className: "size-16" })}
      <h2 className="text-3xl">{label}</h2>
      {button}
    </div>
  )
}
