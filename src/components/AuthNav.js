import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <Link
        to="/auth"
        // exact
      >
        Регистрация
      </Link>
    </div>
  );
}