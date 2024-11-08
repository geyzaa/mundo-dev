
import styles from "./inicio.module.css";

import posts from 'json/posts.json';
import Post from "componentes/post";

export default function Inicio() {
    return (
    
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
          )      
        )}
      </ul>
            
        
    );
}