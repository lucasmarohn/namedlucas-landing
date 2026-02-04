import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
        namedlucas.com
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        By{" "}
        <Link
          href="https://lucasmarohn.com"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Lucas Marohn
        </Link>
      </p>
    </main>
  );
}
