import { useSelector, useDispatch } from "react-redux";
import { setActiveCard } from "../../reducers/cardsSlice";
import styles from "./cardstack.module.css";
import Card from "../card/Card";

function CardStack() {
    const cards = useSelector((state) => state.cards.cards);
    const activeCardId = useSelector((state) => state.cards.activeCardId);
    const dispatch = useDispatch();
    const filtered = cards.filter((card) => card.id !== activeCardId);

    return (
        <div className={styles.stack}>
            {filtered.map((card, index) => (
                <div key={card.id} className={styles.cardWrapper}>
                    <Card
                        card={card}
                        compact={index !== filtered.length - 1}
                        onClick={() => dispatch(setActiveCard(card.id))}
                    />
                </div>
            ))}
        </div>
    );
}

export default CardStack;
