import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="container my-5">
      <h1>你好!</h1>
      <div className="alert alert-info">
        <Link href="/about">
          <a>About Page!</a>
        </Link>
      </div>
    </div>
  );
}
