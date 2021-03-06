
import LoginVue from "./login.js"
import RegisterVue from "./register.js"

const loginVue = new LoginVue();
const registerVue = new RegisterVue();

const authLogger = Logger.get("AuthVue");

const authVue = Vue.createApp({

    data() {
        return {
            activePage: Constant.Page.Login
        }
    },

    beforeMount() {
        var url = location.href;
        var pageTag = url.substring(url.indexOf("#") + 1);
        authLogger.debug(pageTag);
        if (pageTag == Constant.Page.Login || pageTag === Constant.Page.Register) {
            this.activePage = pageTag;
        }
    },

    mounted() {
        loginVue.mount();
        registerVue.mount();
    },

    methods: {
        switchToLogin() {
            this.activePage = Constant.Page.Login;
        },

        switchToRegister() {
            this.activePage = Constant.Page.Register;
        },
    },

    computed: {
        isOnLogin() {
            authLogger.debug("compute isOnLogin");
            return this.activePage === Constant.Page.Login;
        },
        isOnRegister() {
            authLogger.debug("compute isOnRegister");
            return this.activePage === Constant.Page.Register;
        }
    }
});
authVue.mount("#authVue");
