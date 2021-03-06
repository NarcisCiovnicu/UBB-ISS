

export default class LoginVue {

    constructor() {
        this.loginVue = null;
    }

    mount() {
        if (this.loginVue != null) {
            return;
        }
        let logger = Logger.get("LoginVue");
        this.loginVue = Vue.createApp({
            data() {
                return {
                    email: "",
                    password: ""
                }
            },

            mounted() {
                logger.debug("mounted");
            },

            unmounted() {
                logger.debug("unmountet");
            },

            methods: {
                onSubmit() {
                    logger.info("login submitted");
                    document.location.replace("/");
                }
            }
        });
        this.loginVue.mount("#loginVue");
    }

    unmount() {
        this.loginVue.unmount();
    }
};

