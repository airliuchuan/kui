import Vue from 'vue'
import Router from 'vue-router'
import navConfig from '../nav.config.json';

Vue.use(Router)

let routes = [];

Object.keys(navConfig).forEach(header => {
  routes = routes.concat(navConfig[header]);
});

let addComponent = (list) => {
  list.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = [].concat(routes, route.items);
    } else {
      route.component = () => import(`@/${route.type[0]}/${route.name+route.type[1]}`);
    }
  });
}
addComponent(routes);

export default new Router({
  routes
})
