//this is router config
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

var routesconfig=[
	{
    	path: '/',
    	component: function (resolve) {
            require(['../../pages/home/home.vue'], resolve)
        }
    },
    {
    	path: '/index',
    	component: function (resolve) {
            require(['../../pages/home/home.vue'], resolve)
        }
    },
    {
    	path: '/indexPhone',
    	component: function (resolve) {
            require(['../../pages/homePhone/home.vue'], resolve)
        }
    },
    {
		path: '/scheme',
		component: function (resolve) {
			require(['../../pages/scheme/scheme.vue'], resolve)
		},
	},
	{
    	path: '/sin-goods',
    	component: function (resolve) {
            require(['../../pages/sin-goods/sin-goods.vue'], resolve)
       },
    },
    {
        path: '/details/:detail/:case',
        name:'details',
        component: function (resolve) {
            require(['../../pages/details/details.vue'], resolve)
        }
    },
    {
        path: '/goods-lease',
        component: function (resolve) {
            require(['../../pages/goods-lease/goods-lease.vue'], resolve)
        }
    },
    {
        path: '/services',
        component: function (resolve) {
            require(['../../pages/services/services.vue'], resolve)
        }
    },
     {
        path: '/order/:detail',
        name:'order',
        component: function (resolve) {
            require(['../../pages/order/order.vue'], resolve)
        }
    },
    {
        path: '/orderlist',
        component: function (resolve) {
            require(['../../pages/order/orderlist.vue'], resolve)
        }
    },
    {
        path: '/pay',
        component: function (resolve) {
            require(['../../pages/pay/pay.vue'], resolve)
        }
    },
    {
        path: '/safecommunity',
        component: function (resolve) {
            require(['../../pages/safecommunity/safecommunity.vue'], resolve)
        }
    },
    {
        path: '/safecommunity/:detail',
        name:'safecommunity_detail',
        component: function (resolve) {
            require(['../../pages/safecommunity/safecommunity_detail.vue'], resolve)
        }
    },
    {
        path: '/safecommunity_order',
        component: function (resolve) {
            require(['../../pages/safecommunity/safecommunity_order.vue'], resolve)
        }
    },
    {
        path: '/contract/:orderid',
        name:'contract',
        component: function (resolve) {
            require(['../../pages/order/contract.vue'], resolve)
        }
    },
    {
        path: '/marketingpartner',
        component: function (resolve) {
            require(['../../pages/marketingpartner/marketingpartner.vue'], resolve)
        },
        children: [
        	{
          		path: '/marketingpartner/cooperative_partner',
          		component: function (resolve) {
            		require(['../../pages/marketingpartner/components/cooperative_partner.vue'], resolve)
            	}
        	},
        	{
          		path: '/marketingpartner/cooperative_product',
          		component: function (resolve) {
            		require(['../../pages/marketingpartner/components/cooperative_product.vue'], resolve)
            	}
        	},
        	{
          		path: '/marketingpartner/cooperative_service',
          		component: function (resolve) {
            		require(['../../pages/marketingpartner/components/cooperative_service.vue'], resolve)
            	}
        	}
        ]
    },
    {
        path: '/aboutus',
        component: function (resolve) {
            require(['../../pages/aboutus/aboutus.vue'], resolve)
        }
    },
    {
        path: '/login',
        component: function (resolve) {
            require(['../../pages/login/login.vue'], resolve)
        }
    },
    {
        path: '/forgetpw',
        component: function (resolve) {
            require(['../../pages/login/forgetpw.vue'], resolve)
        }
    },
    {
        path: '/register',
        component: function (resolve) {
            require(['../../pages/register/register.vue'], resolve)
        }
    },
    {
        path: '/orderlist',
        component: function (resolve) {
            require(['../../pages/order/orderlist.vue'], resolve)
        }
    },
    {
        path: '/usercenter',
        component: function (resolve) {
            require(['../../pages/user/usercenter.vue'], resolve)
        },
        children: [
        	{
          		path: '/usercenter/change_password',
          		component: function (resolve) {
            		require(['../../pages/user/components/change_password.vue'], resolve)
            },
            	
        	},
        	{
          		path: '/usercenter/phone_validate',
          		component: function (resolve) {
            		require(['../../pages/user/components/phone_validate.vue'], resolve)
            	}
        	},
        	{
          		path: '/usercenter/agent_message',
          		component: function (resolve) {
            		require(['../../pages/user/components/agent_message.vue'], resolve)
            	}
        	},
        	{
          		path: '/usercenter/user_setting',
          		component: function (resolve) {
            		require(['../../pages/user/components/user_setting.vue'], resolve)
            	}
        	},
        	{
          		path: '/usercenter/address_setting',
          		component: function (resolve) {
            		require(['../../pages/user/components/address_setting.vue'], resolve)
            	}
        	}
        ]
        
    },
    {
        path: '/helpcenter',
        component: function (resolve) {
            require(['../../pages/help/helpcenter.vue'], resolve)
        },
        children: [
        	{
          		path: '/helpcenter/online',
          		component: function (resolve) {
            		require(['../../pages/help/components/online.vue'], resolve)
            	}
        	},
        	{
          		path: '/helpcenter/advice',
          		component: function (resolve) {
            		require(['../../pages/help/components/advice.vue'], resolve)
            	}
        	},
        	{
          		path: '/helpcenter/center',
          		component: function (resolve) {
            		require(['../../pages/help/components/center.vue'], resolve)
            	},
            	children: [
            		{
		          		path: '/helpcenter/center/1-1',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/1-1.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/1-2',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/1-2.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/2-1',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/2-1.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/3-1',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/3-1.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/3-2',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/3-2.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/3-3',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/3-3.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/3-4',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/3-4.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/4-1',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/4-1.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/4-2',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/4-2.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/4-3',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/4-3.vue'], resolve)
		            	}
		        	},
		        	{
		          		path: '/helpcenter/center/5-1',
		          		component: function (resolve) {
		            		require(['../../pages/help/components/centerChild/5-1.vue'], resolve)
		            	}
		        	},
		        	
		        	
            	]
            	
        	}
        ]
        
    },
    { 	path: '*', 
    	component: function (resolve) {
            require(['../../pages/notfound/notfound.vue'], resolve)
        }
    }
    
    
];

var router = new VueRouter({
	//mode: 'history',
	routes: routesconfig
});


export default router;
