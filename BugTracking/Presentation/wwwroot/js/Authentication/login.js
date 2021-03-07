

const  logger = Logger.get("LoginVue");

const loginVue = Vue.createApp({
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
}).mount("#loginVue");

