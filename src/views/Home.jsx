import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeActiveCard } from "../reducers/cardsSlice";
import { useDispatch } from "react-redux";
import Card from "../components/card/Card";
import CardStack from "../components/cardStack/CardStack";
import Top from "../components/top/Top";
import styles from "./home.module.css";

function Home() {
    const cards = useSelector((state) => state.cards.cards);
    const activeCardId = useSelector((state) => state.cards.activeCardId);
    const activeCard = cards.find((card) => card.id === activeCardId);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <Top title="E-WALLET" />
            <p className={styles.activeCardTop}>ACTIVE CARD</p>
            <div className={styles.activeCard}>
                {activeCard ? (
                    <>
                        <Card card={activeCard} />
                        <button
                            className={styles.removeButton}
                            onClick={() => dispatch(removeActiveCard())}
                        >
                            Remove card
                        </button>
                    </>
                ) : (
                    <p className={styles.noCard}>
                        NO CARDS IN YOUR WALLET, ADD A NEW ONE AND IT WILL SHOW
                        HERE.
                    </p>
                )}
            </div>

            <CardStack />
            <Link to={"/addcard"} className={styles.addButton}>
                ADD A NEW CARD
            </Link>
        </div>
    );
}

export default Home;
