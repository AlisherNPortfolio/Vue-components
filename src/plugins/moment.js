const moment = require('moment');
import Vue from 'vue';
import VueMoment from 'vue-moment';

Vue.prototype.$moment = function () {
    return moment
}

window.moment = moment;

Vue.use(VueMoment, {moment});
