import styles from "./top.module.css";

function Top({ title }) {
    return (
        <div className={styles.top}>
            <h1>{title}</h1>
        </div>
    );
}

export default Top;
