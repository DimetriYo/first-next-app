"use client"

export default function Error({ error }: { error: Error }) {
  return <p>{error.message || "Something went wrong!"}</p>
}
