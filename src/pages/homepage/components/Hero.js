import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useObserver } from '../../../app/hooks';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import '../../../assets/styles/homepage/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { containerRef, isVisible } = useObserver();

  const handleClick = () => {
    navigate('/shop');
  };

  return (
    <section
      className={`hero enter-transition ${isVisible ? 'in-viewport' : ''}`}
      aria-label="Hero"
      ref={containerRef}
    >
      <div className="content hero__content">
        <Text
          tag="h2"
          text={[
            'The Best ',
            <span
              className="text--highlighted hero-text--highlighted"
              key="hero-heading-highlighted"
            >
              Bonsai Trees
            </span>,
            ' in the World',
          ]}
          className="hero__heading"
        />
        <Text
          tag="p"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
          className="hero__subtext"
        />
        <Button
          handleClick={handleClick}
          text={<span>Find Your Tree</span>}
          className="btn btn--primary"
        />
      </div>
    </section>
  );
};

export default Hero;
