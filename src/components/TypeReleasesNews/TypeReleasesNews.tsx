import CardNews from '../CardNews/CardNews';
import { NewsContext } from '../../context/NewsContext';
import { useContext, useState } from 'react';
import style from '../StyleCards/StyleList.module.css';

const TypeReleasesNews = () => {
  const { latestNews } = useContext(NewsContext);
  const [showMoreNews, setShowMoreNews] = useState(false);
  const filterRelease = latestNews.filter((news) => news.tipo === 'Release');
  const visibleNewsCount = showMoreNews ? filterRelease.length : 12;
  return (
    <>
      <div className={style.containerList}>
        {filterRelease.slice(0, visibleNewsCount).map((newsRecent) => (
          <ul className={style.itemsList} key={newsRecent.id}>
            <li className={style.list}>
              {newsRecent.tipo === 'Release' && <CardNews news={newsRecent} />}
            </li>
          </ul>
        ))}
      </div>
      <div className={style.moreNewsButtonContainer}>
        {filterRelease.length > 13 && (
          <button
            className={style.moreNewsButton}
            onClick={() => setShowMoreNews(!showMoreNews)}
          >
            {showMoreNews ? 'Menos notícias' : 'Mais notícias'}
          </button>
        )}
      </div>
    </>
  );
};

export default TypeReleasesNews;
