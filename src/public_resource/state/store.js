import "babel-polyfill";
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
  	state:{
		islogin:false,
		userinfo:{
			username:'',
			useravata:'',
			userid:''
		},
		ishasmessage:false,
		messagelist:[],
		ishascart:false,
		cartlist:[],
		currentTabName:null,
		needReturnThisPage:null,
		needReturnThisPageParm:null,
		needReturnThisPageSearchKey:null,
		currentPages:{page:null,type:null,searchKey:null},
		schemeTempObject:null
  	},
  	mutations: {
  	setCurrentTabName(state,_tabName){
  		state.currentTabName=_tabName;
  	},
  	setSchemeTempObject(state,_schemeTempObject){
  		state.schemeTempObject=_schemeTempObject;
  	},
  	clearSchemeTempObject(state){
  		state.schemeTempObject=null;
  	},
  	setNeedCurrentPages(state,_currentPages){
  		state.currentPages.page=_currentPage.page;
  		state.currentPages.type=_currentPage.type;
  		state.currentPages.searchKey=_currentPage.searchKey;
  	},
  	setNeedReturnThisPage(state,_pagesObj){
  		state.needReturnThisPage=_pagesObj.pageName;
  		state.needReturnThisPageParm=_pagesObj.parm;
  		state.needReturnThisPageSearchKey=_pagesObj.searchKey;
  	},
    userislogin (state,usertoken) {
      	state.islogin=true;
      	state.userinfo.username=usertoken.username;
      	state.userinfo.userid=usertoken.id;
    },
    userisloginout(state) {
      	state.islogin=false;
    }
  }
});