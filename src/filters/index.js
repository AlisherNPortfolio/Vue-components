import Vue from 'vue'
import LanguageService from '@/services/LanguageService';

Vue.filter('translate', function (value) {
	return LanguageService.needNotMethod(value);
});
