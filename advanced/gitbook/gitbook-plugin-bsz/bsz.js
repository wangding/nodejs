module.exports = function(book, page) {
  /**
   * 在 package.json 中配置的默认值，这里可以直接使用
   * [config: config option]
   * @type {Object}
   */
  var config = book.config.get('pluginsConfig')['bsz'];

  var wrapIfMarkdown = function(input) {
    return input;

    if (!config.markdown) {
      return input;
    } else {
      return book.renderInline('markdown', input);
    }
  };

  // Gitbook Markdown rendering is asynchronous.
  return Promise.all([wrapIfMarkdown(config.copyright)]).then(function(labels) {
    var copyright = labels[0];
    page.content += '\n\n\n'
        + '<footer class="page-footer">'
          + '<span class="page-footer-copyright">'
           +  copyright
          + '</span>'
          + '<span class="page-footer-footer-update">'
            + '<span id="busuanzi_container_site_uv">本站访客人数&nbsp;<span id="busuanzi_value_site_uv"></span>&nbsp;人次</span>'
          + '</span>'
        + '</footer>'
        + '<script>document.getElementsByClassName("bsz-this-year")[0].innerHTML = new Date().getFullYear(); </script>'
        + '<script async="" src="//cdn.jsdelivr.net/gh/sukkaw/busuanzi@2.3/bsz.pure.mini.js"></script>';

    return page;
  });
};
