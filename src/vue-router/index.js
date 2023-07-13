let _Vue = null;
/*
  [
    {path: '/a', component: A},
    {path: '/b', component: B},
    { path: '/c', component: C, children: [
      {
        path: 'd',
        component: D
      }
    ]}
  ]
  /a ==> A
  /b ==> B
  /c ==> C
  /c/d => D
*/
export default class VueRouter {
  constructor(options = {}) {
    if (!options.routes) return;
    this.$options = options;
    this.currentView = _Vue.observable({ value: null });
    // 处理routes
    this.$routeMap = this.$options.routes.reduce(
      (prev, { path, component }) => {
        prev[path] = component;
        return prev;
      },
      {}
    );
    window.addEventListener('hashchange', () => {
      this.currentView.value =
        this.$routeMap[window.location.hash.replace(/^#/, '')];
    });
    this.registerComponents();
  }
  registerComponents() {
    let self = this;
    _Vue.component('router-view', {
      template: '<component :is="getCurrentView"/>',
      computed: {
        getCurrentView() {
          return self.currentView.value;
        },
      },
    });
    _Vue.component('router-link', {
      render(h) {
        return h('a', { href: `#${this.to}` }, this.$slots.default);
      },
      props: {
        to: {
          type: [String, Object],
          required: true,
        },
      },
    });
  }
  static install(Vue) {
    _Vue = Vue;
    Vue.mixin({
      beforeCreate() {
        if (!this.$parent) {
          Vue.prototype.$router = this.$options.router;
        }
      },
    });
  }
}