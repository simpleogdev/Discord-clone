import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
