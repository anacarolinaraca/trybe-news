// import ButtonFavoriteNews from '../ButtonFavoriteNews/ButtonFavoriteNews';
import style from '../StyleCards/StyleCards.module.css';
import { NewsItemProps } from '../../types/type';
import moment from 'moment';
import ButtonFavoriteNews from '../ButtonFavoriteNews/ButtonFavoriteNews';

const CardNews = ({ news }: NewsItemProps) => {
  const currentDate = Date.now();

  const datePublished = news.data_publicacao;
  const [datePart, timePart] = datePublished.split(' ');
  const [day, month, year] = datePart.split('/');
  const [hours, minutes, seconds] = timePart.split(':');
  const publishedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes),
    Number(seconds)
  ).getTime();

  const timeDiff = Math.abs(currentDate - Number(publishedDate));
  const duration = moment.duration(timeDiff);
  const durationDays = duration.days();
  const durationHours = duration.hours();
  return (
    <div>
      <section className={style.containerLatestNewsInfos}>
        <h1 className={style.titleNews}>{news.titulo}</h1>
        <p className={style.newsIntroduction}>{news.introducao}</p>
        <div className={style.containerTimeAndButton}>
          <p className={style.newsTime}>
            {durationDays === 0
              ? `${durationHours} horas atrás`
              : `${durationDays} dias atrás`}
          </p>
          <a className={style.newsLink} href={news.link}>
            <button className={style.newsButton}>Leia a notícia aqui</button>
          </a>
        </div>
        <hr />
        <div className={style.newsButtonFavorite}>
          <ButtonFavoriteNews id={news.id} />
        </div>
      </section>
    </div>
  );
};

export default CardNews;
