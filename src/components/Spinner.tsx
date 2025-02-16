import { LoaderCircle } from "lucide-react"

export function Spinner() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <LoaderCircle className="size-10 animate-spin" />
    </div>
  )
}
