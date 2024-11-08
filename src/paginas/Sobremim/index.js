import styles from './sobreMim.module.css';
import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/ola1.jpg";

export default function SobreMim() {
    return (
      
           <PostModelo 
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >

                <h3 className={styles.subtitulo}>
                    Olá, eu sou a Geyza!
                </h3>

                <img 
                    src={fotoSobreMim}
                    alt="foto da Geyza"
                    className={styles.fotoSobreMim}
                />

                <p className={styles.paragrafo}> Colocar a história aqui ...</p>

                <p className={styles.paragrafo}> Colocar a história aqui ...</p>
                
                <p className={styles.paragrafo}> Colocar a história aqui ...</p>
           </PostModelo>
        
    )
}