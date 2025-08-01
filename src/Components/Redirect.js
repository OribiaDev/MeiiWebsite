import { useEffect } from 'react';

const Redirect = ({ link }) => {
  useEffect(() => {
    window.location.href = link;
  }, [link]);

  return (
    <div className='MemeContainer'>
      <head>
        <title>Redirect • Meii</title>
        <meta property="og:title" content="Redirect • Meii" />
        <meta name="description" content="A redirect link for Meii." />
        <meta property="og:description" content="A redirect link for Meii." />
        <meta property="og:url" content="meiibot.xyz" />
      </head>

      <div className='MemeImage'>
        <img
          rel="prefetch"
          src="./img/Memes/rickRoll.gif"
          alt="Rick Roll"
          width="380px"
          height="300px"
        />
      </div>

      <div className='RedirectingText'>Redirecting...</div>
      <div className='MemeText'>never gonna give you up-</div>
    </div>
  );
};

export default Redirect;