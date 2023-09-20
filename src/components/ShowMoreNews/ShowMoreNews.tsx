import { useState } from 'react';
import { NewsItemProps } from '../../types/type';

const ShowMoreNews = ({ news }: NewsItemProps) => {
  const [showMoreNews, setShowMoreNews] = useState(false);
  return (
    <div>
      {showMoreNews ||
        (news.id <= 9 && (
          <button onClick={() => setShowMoreNews(true)}>Mais notícias</button>
        ))}
    </div>
  );
};

export default ShowMoreNews;
