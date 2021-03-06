


export default class RegisterVue {
    constructor() {
        this.registerVue = null;
    }

    mount() {
        if (this.registerVue != null) {
            return;
        }
        let logger = Logger.get("RegisterVue");
        this.registerVue = Vue.createApp({
            data() {
                return {
                    error: "",
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }
            },

            mounted() {
                logger.debug("mounted");
            },

            unmounted() {
                logger.debug("unmounted");
            },

            methods: {
                onSubmit() {
                    logger.info(" form submitted");
                    document.location.replace("/");
                }
            },

            computed: {
                isSamePassword: function () {
                    return this.password === this.confirmPassword;
                }
            }
        });
        this.registerVue.mount("#registerVue");
    }

    unmount() {
        this.registerVue.unmount();
    }
}

