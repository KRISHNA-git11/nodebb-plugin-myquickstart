'use strict';

define('forum/quickstart', function () {
  var module = {};
  module.init = function () {
    $('#last-p').text('quickstart.js loaded!');
  };
  return module;
});

$(window).on('action:composer.topic.test', function (ev, data) {
  console.log('+++++++++++++++', data);
  $('#new-quiz-button').html('Hello world');
});
