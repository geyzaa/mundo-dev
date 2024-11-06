import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/ola3.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Mundo Dev
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas! Eu sou Geyza Oliveira, e esse é o meu espaço pessoal. Aqui compartilho conhecimentos adquiridos durante a minha trajetória como desenvolvedora front-end.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true}
                />
                
                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto} 
                    alt="foto geyza"
                />
            </div>

        </div>
    )
}