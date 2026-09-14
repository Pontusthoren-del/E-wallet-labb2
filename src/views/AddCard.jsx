import CardForm from "../components/cardForm/CardForm";
import Top from "../components/top/Top";
import styles from "./addcard.module.css";
import { Link } from "react-router-dom";

export default function AddCard() {
    return (
        <div>
            <Link to="/" className={styles.backLink}>
                ←
            </Link>
            <Top title="ADD A NEW BANK CARD" />
            <CardForm />
        </div>
    );
}
