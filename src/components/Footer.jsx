import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <ul>
        <li>
          <Link to="#">Informazioni legali</Link>
        </li>
        <li>
          <Link to="#">Contatta l'uffcio vendite</Link>
        </li>
        <li>
          <Link to="#">Informazioni a caso</Link>
        </li>
        <li>
          <Link to="#">Altre informazioni casuali</Link>
        </li>
      </ul>

      <img />
    </>
  );
}
