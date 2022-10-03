import React from 'react';
import { useObserver } from '../../../app/hooks';
import Text from '../../../components/Text';
import infoImage from '../../../assets/images/info.webp';
import '../../../assets/styles/homepage/Info.css';

const Info = () => {
  const { isVisible, containerRef } = useObserver();
  return (
    <section
      className={`info enter-transition ${isVisible ? 'in-viewport' : ''}`}
      aria-label="Info"
      ref={containerRef}
    >
      <div className="content info__content">
        <div className="container info__container info__container--left">
          <img alt="Bonsai tree" className="info__img" src={infoImage} />
        </div>
        <div className="container info__container info__container--right">
          <Text
            tag="h3"
            text="Decorate your house with a beautiful Bonsai Tree"
            className="info__heading text--highlighted"
          />
          <Text
            tag="p"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            className="info__subtext"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
