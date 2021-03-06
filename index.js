/* eslint-disable no-console */
import 'ol/ol.css';
import 'ol-layerswitcher/src/ol-layerswitcher.css';
import 'ol-popup/src/ol-popup.css';
import './styles/style.css';
import 'babel-polyfill';
import 'whatwg-fetch';
import {Map} from 'ol';
import LayerSwitcher from 'ol-layerswitcher';
import {defaults as defaultControls} from 'ol/control';
import * as kort from '/modules/kort';
import * as geolocation from '/modules/geolocation';
import {BBOXControl} from '/modules/bboxcontrol';
import Popup from 'ol-popup';

var popup= new Popup();

const map = new Map({
  target: 'map',
  layers: [kort.wmsdagidaf, kort.wmsdhmdaf, kort.wmsgeodanmarkdaf, kort.wmsmatrikeldaf, kort.wmsstednavnedaf, kort.wmsortoforaardaf, kort.wmsdtk1000daf, kort.wmsdtk500daf, kort.wmsdtk250daf, kort.wmsdtk25daf, kort.wmsskaermkortdaf, kort.WMSlag, kort.baggrundskortWMS, kort.baggrundskortWMTS],
  loadTilesWhileAnimating: true,
  view: kort.view, 
  controls: defaultControls().extend([
    new LayerSwitcher(),
    new BBOXControl({popup: popup})
  ]),
});

map.addOverlay(popup);

geolocation.show(map);