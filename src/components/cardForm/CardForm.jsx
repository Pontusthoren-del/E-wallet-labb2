import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../reducers/cardsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import styles from "./cardform.module.css";

function CardForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cardNumber: "",
        cardHolder: "",
        expiry: "",
        vendor: "",
        cvv: "",
    });

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const newCard = { ...formData, id: nanoid() };
        dispatch(addCard(newCard));
        setFormData({
            cardNumber: "",
            cardHolder: "",
            expiry: "",
            vendor: "",
            cvv: "",
        });
        navigate("/");
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.newCardTop}>NEW CARD</p>
            <Card card={formData} />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <p className={styles.fieldLabel}>Card number</p>
                    <input
                        required
                        className={styles.input}
                        type="text"
                        name="cardNumber"
                        placeholder="CARDNUMBER"
                        value={formData.cardNumber}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                cardNumber: e.target.value,
                            })
                        }
                    />
                </div>

                <div className={styles.field}>
                    <p className={styles.fieldLabel}>Cardholder name</p>
                    <input
                        required
                        className={styles.input}
                        type="text"
                        name="cardHolder"
                        placeholder="CARDHOLDER NAME"
                        value={formData.cardHolder}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                cardHolder: e.target.value,
                            })
                        }
                    />
                </div>

                <div className={styles.row}>
                    <div className={styles.field}>
                        <p className={styles.fieldLabel}>Valid thru</p>
                        <input
                            required
                            className={styles.input}
                            type="text"
                            name="expiry"
                            placeholder="xx/xx"
                            value={formData.expiry}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    expiry: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <p className={styles.fieldLabel}>CVV</p>
                        <input
                            required
                            className={styles.input}
                            type="text"
                            name="cvv"
                            placeholder="XXX"
                            value={formData.cvv}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    cvv: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className={styles.field}>
                    <p className={styles.fieldLabel}>Vendor</p>
                    <select
                        required
                        className={styles.input}
                        name="vendor"
                        value={formData.vendor}
                        onChange={(e) =>
                            setFormData({ ...formData, vendor: e.target.value })
                        }
                    >
                        <option value="">Choose vendor</option>
                        <option value="bitcoin">Bitcoin Inc</option>
                        <option value="ninja">Ninja Bank</option>
                        <option value="blockchain">Block Chain Inc</option>
                        <option value="evil">Evil Corp</option>
                    </select>
                </div>

                <button className={styles.submitButton} type="submit">
                    ADD CARD
                </button>
            </form>
        </div>
    );
}

export default CardForm;
