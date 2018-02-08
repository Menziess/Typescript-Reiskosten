// src/index.ts

import Vue from "vue";
import App from "./components/App.vue";

new Vue({
	el: '#app',
	components: { App },
	render(h) {
		return h('App');
	}
});
