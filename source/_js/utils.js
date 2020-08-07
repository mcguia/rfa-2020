const Utils = {
  markdownLinksNewPage: () => {
    const url = "https://mcguia.github.io/rfa-2020/"
    $('.markdown a').map((idx, link) => {
      if (!link.href.includes(url)) {
        return link.setAttribute('target', '_blank');
      }
    });
  }
};


module.exports = Utils;
