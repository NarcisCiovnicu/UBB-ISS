

const logger = Logger.get("AuthVue");

const authVue = Vue.createApp({

    data() {
        return {
            activePage: Constant.Page.Login
        }
    },

    beforeMount() {
        var url = location.href;
        var pageTag = url.substring(url.indexOf("#") + 1);
        logger.debug(`Url tag: ${pageTag}`);
        if (pageTag == Constant.Page.Login || pageTag === Constant.Page.Register) {
            this.activePage = pageTag;
        }
    },

    mounted() {
        logger.debug("mounted");
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
            logger.debug("compute isOnLogin");
            return this.activePage === Constant.Page.Login;
        },
        isOnRegister() {
            logger.debug("compute isOnRegister");
            return this.activePage === Constant.Page.Register;
        }
    }
});
authVue.mount("#authVue");
