module.exports = function(book, page) {
  var cfg = book.config.get('pluginsConfig')['gtalk'];
  cfg.id = '/' + page.path.slice(0, page.path.length-2) + 'html';

  var DOM = '\n\n'
    + '<div id="gitalk-container"></div>'
    + '<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>'
    + '<script>'
      + 'window.onload = function() {'
        + 'gitbook.events.on("page.change", function() {'
          + 'var gitalk = new Gitalk(' + JSON.stringify(cfg) + ');'
          + 'gitalk.render("gitalk-container");'
        + '});'
      + '};'
      + 'var gitalk = new Gitalk(' + JSON.stringify(cfg) + ');'
      + 'gitalk.render("gitalk-container");'
    + '</script>';

  page.content += DOM;

  return page;
};
