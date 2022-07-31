import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';
import index from '/../index.js'


export const requests = new Counter('http_reqs');

export const options = {
  vus: 100,
  duration: '15s',
};

const url = 'http://localhost:3000/products';
const urlById = url + `/${number}`;
const urlRelated = urlById + '/related';
const urlStyles = urlById + '/styles';


const productsRoute = function () {
  const res = http.get(url);
  sleep(1);
  check(res, {
    'is status 200': r => r.statis === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
};

const productsByIdRoute = function () {
  const res = http.get(urlById);
  sleep(1);
  check(res, {
    'is status 200': r => r.statis === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
};

const relatedRoute = function () {
  const res = http.get(urlRelated);
  sleep(1);
  check(res, {
    'is status 200': r => r.statis === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
};

const stylesRoute = function () {
  const res = http.get(urlStyles);
  sleep(1);
  check(res, {
    'is status 200': r => r.statis === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
}

export default {
  productsRoute,
  productsByIdRoute,
  relatedRoute,
  stylesRoute
}