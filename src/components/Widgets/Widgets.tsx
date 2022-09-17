import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widgets.css';

const Widgets = () => {
  const newsArticle = (heading: string, subTitle: string) => {
    return (
      <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
          <h4>{heading}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle('React is fun', 'Top News - 1234 readers')}
      {newsArticle(
        'India Inc’s plans amid third wave',
        'Top News - 9175 readers'
      )}
      {newsArticle(
        'HR policies get creative at startups',
        'Top News - 5434 readers'
      )}
      {newsArticle('Is redux too awesome?', 'Top News - 1234 readers')}
    </div>
  );
};

export default Widgets;
