import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Header() {
  const user = null;
  return (
    <header className="bg-popover flex items-center justify-between gap-4 px-4 py-2">
      <Link href="/">Backlog</Link>
      <div className="flex gap-2">
        {user ? (
          <Button>Log Out</Button>
        ) : (
          <>
            <Button asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
