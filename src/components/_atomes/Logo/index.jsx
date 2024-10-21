import s from "./style.module.css";

function Logo({img, title, subtitles}){

    return(
        <>
         <div className={s.container}>
             <img className={s.img} src={img} alt={"Icon TV"}/>
             <span className={s.title}> {title}</span>
         </div>
         <span className={s.subtitle}> {subtitles}</span>
        </>
    );
}

export default Logo;