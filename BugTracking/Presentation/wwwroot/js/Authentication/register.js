
const registerVue = new Vue({
    el: "#registerVue",

    data: {
        activePageName: "register",
        error: "",
        aaa: true,
        bbb: false,
        registerViewModel: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },

    methods: {
    },

    watch: {
    },

    computed: {
        isSamePassword: function () {
            return this.registerViewModel.password === this.registerViewModel.confirmPassword;
        }
    }
});
