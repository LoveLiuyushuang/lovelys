import React from 'react';
import './style.less';

const Heart = props => {
  const {
    id,
    width = 100,
    height = 100,
    preserveAspectRatio,
    x = 0,
    y = 0,
    href,
    text,
    timePage = false,
    startTime = '2012-01-01 00:00:00',
  } = props;

  const [visible, setVisible] = React.useState(false);
  const myIntervalRef = React.useRef(null);
  const [currentDiffDateObj, setCurrentDiffDateObj] = React.useState({});

  const getCurrentTimeDiff = startTimeStr => {
    const startTimeDate = new Date(startTimeStr);
    const startTimeDateStamp = startTimeDate.valueOf();
    const currentDate = new Date();
    const currentDateStamp = currentDate.valueOf();

    const diffDay = Math.floor((currentDateStamp - startTimeDateStamp) / (1000 * 3600 * 24));
    const diffHour = currentDate.getHours() - startTimeDate.getHours();
    const diffMinutes = currentDate.getMinutes() - startTimeDate.getMinutes();
    const diffSeconds = currentDate.getSeconds() - startTimeDate.getSeconds();

    const diffDateObj = { diffDay, diffHour, diffMinutes, diffSeconds };
    setCurrentDiffDateObj(diffDateObj);
  };
  const onClickHeart = () => {
    if (timePage) {
      getCurrentTimeDiff(startTime);
      const myInterval = setInterval(() => {
        getCurrentTimeDiff(startTime);
      }, 1000);

      myIntervalRef.current = myInterval;
      console.log('这里输出 id:', id);
    }
    setVisible(true);
  };

  const onClickModal = () => {
    setVisible(false);
    clearInterval(myIntervalRef.current);
  };

  return (
    <>
      <div className="heartContainer" onClick={onClickHeart} style={{ animation: `fadeIn ${id}s linear` }}>
        <svg viewBox="0 0 100 100">
          <defs>
            <pattern id={id} width="1" height="1" patternUnits="objectBoundingBox">
              <image href={href} width={width} height={height} preserveAspectRatio={preserveAspectRatio} x={x} y={y} />
            </pattern>
          </defs>
          <path
            d="M50,90 L20,60
           A15,15 0 0,1 50,30
           A15,15 0 0,1 80,60 z"
            style={{ fill: `url(#${id})` }}
          />
        </svg>
      </div>
      <>
        {visible && timePage && (
          <>
            <div style={{ backgroundImage: `url(${href})` }} className="messageModal" onClick={onClickModal} />
            <div className="messageText" onClick={onClickModal}>
              {`刘雨霜，我已经喜欢你 ${currentDiffDateObj.diffDay} 天 ${currentDiffDateObj.diffHour} 小时 ${currentDiffDateObj.diffMinutes} 分钟 ${currentDiffDateObj.diffSeconds} 秒了，我想这不会停止`}
            </div>
          </>
        )}
      </>
      <>
        {visible && !timePage && (
          <>
            <div style={{ backgroundImage: `url(${href})` }} className="messageModal" onClick={onClickModal} />
            <div className="messageText" onClick={onClickModal}>
              {text}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default Heart;
