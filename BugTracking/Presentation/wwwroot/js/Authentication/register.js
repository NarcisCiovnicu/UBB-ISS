

const logger = Logger.get("RegisterVue");

const registerVue = Vue.createApp({
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
}).mount("#registerVue");


