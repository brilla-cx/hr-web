const TwitterEmbed = () => {
  return (
    <div>
      <blockquote class="twitter-tweet">
        <a href="https://twitter.com/Interior/status/463440424141459456"></a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"></script>
    </div>
  );
};

const InstagramEmbed = () => {
  return (
    <div>
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CrgC3Fat9pn"
        data-instgrm-version="14"></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
};

export { TwitterEmbed, InstagramEmbed };
