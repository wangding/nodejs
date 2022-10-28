require(['gitbook', 'jQuery'], function (gitbook, $) {
  var colorRibbons = {
    red: {
      src: 'http://sample.wangding.co/images/fork-me-on-github-red.webp'
    },
    green: {
      src: 'http://sample.wangding.co/images/fork-me-on-github-green.webp'
    },
    darkblue: {
      src: 'http://sample.wangding.co/images/fork-me-on-github-darkblue.webp'
    },
    orange: {
      src: 'http://sample.wangding.co/images/fork-me-on-github-orange.webp'
    },
    gray: {
      src: 'http://sample.wangding.co/images/fork-me-on-github-gray.webp'
    },
  };
  
  var forkmeRibbon;
  var pluginConfig = {};
  function initializePlugin(config) {
    pluginConfig = config['forkmegithub-cn'];

    var colorRibbon = colorRibbons[pluginConfig.color];
    forkmeRibbon
      = '<a id="forkmegithub" href="' + pluginConfig.url + '">'
      + '<img src="' + colorRibbon.src + '" alt="Fork me on GitHub"'
      + '"></img>'
      + '</a>'
      ;
  }

  function getPluginConfig() {
    return pluginConfig;
  }

  gitbook.events.bind('start', function (e, config) {
    initializePlugin(config);

    gitbook.toolbar.createButton({
      icon: 'fa fa-github',
      label: 'GitHub',
      position: 'right',
      onClick: function() {
        window.open(pluginConfig.url);
      }
    });
  });

  gitbook.events.bind('page.change', function() {
    var bodyInner = $('.book .book-body .body-inner');
    bodyInner.append(forkmeRibbon);
  });
});

