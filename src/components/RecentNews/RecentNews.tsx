import CardNews from '../CardNews/CardNews';
import { NewsContext } from '../../context/NewsContext';
import { useContext, useState } from 'react';
import style from '../StyleCards/StyleList.module.css';

const RecentNews = () => {
  const { latestNews } = useContext(NewsContext);
  const [showMoreNews, setShowMoreNews] = useState(false);
  const recentNews = latestNews.sort((a, b) => {
    const dateA = new Date(a.data_publicacao);
    const dateB = new Date(b.data_publicacao);
    return dateB.getTime() - dateA.getTime();
  });
  const visibleNewsCount = showMoreNews ? recentNews.length : 12;
  return (
    <>
      <div className={style.containerList}>
        {recentNews.slice(0, visibleNewsCount).map((newsRecent) => (
          <ul className={style.itemsList} key={newsRecent.id}>
            <li className={style.list}>
              <CardNews news={newsRecent} />
            </li>
          </ul>
        ))}
      </div>
      <div className={style.moreNewsButtonContainer}>
        {recentNews.length > 13 && (
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

export default RecentNews;
