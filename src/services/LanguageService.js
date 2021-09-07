const LanguageService = {
	languages: [
			{
				name: 'Рус',
				value: 'ru',
				fullName: 'Русский'
			},
			{
				name: 'Uzb',
				value: 'uz',
				fullName: "O'zbek"
			},
			{
				name: 'Узб',
				value: 'cyrl',
				fullName: 'Узбек'
			},
	],
	getLanguage() {
		return localStorage.getItem('lang') || 'ru';
	},
	setLanguage(lang, i18n) {
		i18n.locale = lang;
		localStorage.setItem('lang', lang);
	},
	needNotMethod(obj) {
		let result;
		if(typeof obj === "object") {
			let lang = this.getLanguage();
			result = obj[lang];
		} else {
			result = obj;
		}
		return result || '';
	}
}
export default LanguageService;
