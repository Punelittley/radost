import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>Такой страницы нет</h1>
      <Link to="/">Вернуться на главную</Link>
    </main>
  );
}
