// import Vue from 'vue';
// import Lazyload from './Lazyload.vue';
// // 创建一个Lazyload的vue子类
// export default function (option) {
//   return new Promise(function (resolve, reject) {
//     const VueLazyload = Vue.extend(Lazyload);
//     const instanceOfLazyload = new VueLazyload({
//       props:{
//         show:{
//             type:Boolean,
//             default:false,
//         }
//       },
//       data() {
//         return {
//           visible: true,
//         };
//       },
//       methods: { resolve, reject },
//     });
//     instanceOfLazyload.$mount();
//     document.querySelector('body').appendChild(instanceOfLazyload.$el);
//   });
// }