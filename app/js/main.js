$(function () {
  'use strict';

  var ymaps = window.ymaps;

  function initLocationMap() {
    var myMap = new ymaps.Map('service-stations-map', {
          center: [55.719957, 37.720834],
          zoom: 16,
          controls: ['zoomControl']
        });
        myMap.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark([55.719744, 37.727544], {
          hintContent: 'Группа компаний Лом-Акб:<br>Москва, 1-й Грайвороновский пр., 4'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.png',
          iconImageSize: [29, 44],
          iconImageOffset: [-15, -43]
        });

    myMap.geoObjects.add(myPlacemark);
  }

  if (ymaps) {
    ymaps.ready(initLocationMap);
  }

  // Ресайз iframe под высоту контента
  if ($('iframe').length) {
    $('iframe').iFrameResize({
      bodyBackground: '#ecf5f4'
    });
  }

  $('.js-fancybox-modal').fancybox({
    type: 'ajax',
    padding: 0,
    margin: 0,
    autoSize: true,
    helpers: {
      overlay: {
        locked: false
      }
    },
    tpl: {
      closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;">&#10005;</a>'
    }
  });

});
