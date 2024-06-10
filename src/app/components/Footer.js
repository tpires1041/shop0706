import Image from "next/image";
import styles from "../styles/footer.module.css";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
export default function Footer() {
    return(
    <footer className={styles.footer}>
        <div className={styles.redes}>
            <li><FaInstagram size={30} /></li>
            <li><FaFacebook size={30} /></li>
            <li><FaYoutube size={30} /></li>
            <li><FaTwitter size={30} /></li>
        </div>
        <p>Servindo bem desde 1994</p>

        <Image className={styles.imagelogof}
                    src={"/fakeamazon.png"}
                    width={100}
                    height={30}
                />
    </footer>
    )
}