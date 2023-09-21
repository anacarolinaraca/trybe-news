import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import style from './LatestNews.module.css';
import ButtonFavoriteNews from '../ButtonFavoriteNews/ButtonFavoriteNews';
import { NewsItemProps, NewsType } from '../../types/type';
import moment from 'moment';

const LatestNews = ({ news }: NewsItemProps) => {
  const { latestNews } = useContext(NewsContext);
  const isLatestNews: NewsType = latestNews[0];
  const images = isLatestNews ? JSON.parse(isLatestNews.imagens) : {};

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
    <div className={style.containerNews}>
      <section>
        <img
          className={style.newsImage}
          src={`https://agenciadenoticias.ibge.gov.br/${images.image_intro}`}
          alt='Imagem da notícia'
        />
      </section>
      <section className={style.containerTextLatestNews}>
        <div className={style.containerNewsAndButtonFavorite}>
          <p className={style.textCurrentNews}>Notícia mais recente</p>
          <ButtonFavoriteNews id={isLatestNews.id} />
        </div>
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
                <button className={style.newsButton}>
                  Leia a notícia aqui
                </button>
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default LatestNews;
