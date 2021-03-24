// /common/http.api.js

//登录
let codeUrl = '/user_info/get_code';
let loginUrl = '/user_info/login';
let registerUrl = '/user_info/register';
let getUserInfoUrl = 'user_info/account_info';
//登录

//首页
let getHomeAdUrl = '/advertisement/get_home_ad';
let getDefaultUrl = '/notice/get_default';
//首页

//民宿列表
let roomListUrl = '/room/query_page';
let roomDetailsUrl = '/room/';
//民宿列表


// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	//登录
	let getCode = (params = {}) => vm.$u.post(codeUrl, params);
	let login = (params = {}) => vm.$u.post(loginUrl, params);
	let register = (params = {}) => vm.$u.post(registerUrl, params);
	let getUserInfo = (params = {}) => vm.$u.get(getUserInfoUrl, params);
	//登录

	//首页
	let getHomeAd = (params = {}) => vm.$u.get(getHomeAdUrl, params);
	let getDefault = (params = {}) => vm.$u.get(getDefaultUrl, params);

	//首页
	//民宿列表
	let roomDetails = (params = {}) => vm.$u.get(roomDetailsUrl + params.id);

	let roomList = (params = {}) => vm.$u.get(roomListUrl, params);
	//民宿列表

	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		getCode,
		login,
		register,
		getUserInfo,
		getHomeAd,
		getDefault,
		roomList,
		roomDetails
	};
}

export default {
	install
}
