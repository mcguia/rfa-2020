const Utils = {
  markdownLinksNewPage: () => {
    const url = "https://2020state.results4america.org/"
    $('.markdown a').map((idx, link) => {
      if (!link.href.includes(url)) {
        return link.setAttribute('target', '_blank');
      }
    });
  }
};


module.exports = Utils;
