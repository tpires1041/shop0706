import Image from "next/image";
import styles from "../styles/header.module.css";
import { MdShoppingCart } from "react-icons/md";
import Link from 'next/link';

export default function Header() {
    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={"/fakeamazon.png"}
                        width={100}
                        height={30}
                    />
                </Link>
            </div>
            <div>
                <p className={styles.frase}>Fake Amazon: o paralelo também é produto!</p>
            </div>
            <div>
                <button className={styles.button}>Novo Produto</button>
            </div>


            <div>
                <MdShoppingCart size={45} />
            </div>
        </header>
    )
}