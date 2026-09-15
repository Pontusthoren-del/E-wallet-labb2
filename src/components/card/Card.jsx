import bitcoinIcon from "../../assets/vendor-bitcoin.svg";
import blockchainIcon from "../../assets/vendor-blockchain.svg";
import evilIcon from "../../assets/vendor-evil.svg";
import ninjaIcon from "../../assets/vendor-ninja.svg";
import chipIcon from "../../assets/chip-dark.svg";
import styles from "./card.module.css";

const vendorIcons = {
    bitcoin: bitcoinIcon,
    blockchain: blockchainIcon,
    evil: evilIcon,
    ninja: ninjaIcon,
};
const vendorColors = {
    bitcoin: "rgb(229, 159, 28)",
    blockchain: "rgb(119, 57, 253)",
    evil: "rgb(250, 0, 0)",
    ninja: "rgb(57, 57, 57)",
};

function Card({ card, onClick, compact = false }) {
    return (
        <div
            className={styles.card}
            style={{ backgroundColor: vendorColors[card.vendor] }}
            onClick={onClick}
        >
            <div className={styles.topRow}>
                <img src={chipIcon} alt="chip" className={styles.chip} />
                <img
                    src={vendorIcons[card.vendor]}
                    alt={card.vendor}
                    className={styles.logo}
                />
            </div>
            <div className={styles.numberRow}>
                <p>{card.cardNumber}</p>
            </div>
            {!compact && (
                <div className={styles.bottomRow}>
                    <div>
                        <p className={styles.label}>CARDHOLDER NAME</p>
                        <p>{card.cardHolder}</p>
                    </div>
                    <div>
                        <p className={styles.label}>VALID THRU</p>
                        <p>{card.expiry}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
