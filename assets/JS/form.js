if ($("#contactForm").length) {
    Vue.use(VeeValidate);

    VeeValidate.Validator.extend("phone", {
        getMessage: (field, args, data) => {
            if (data === "alpha") {
                return "Phone number must contain only digits.";
            }
            if (data === "length") {
                return "Phone number must be at least 10 digits long.";
            }
            return "Invalid phone number.";
        },
        validate: (value) => {
            if (/[^0-9]/.test(value)) {
                return {
                    valid: false,
                    data: "alpha", // Error type for non-numeric input
                };
            }
            if (value.length < 10) {
                return {
                    valid: false,
                    data: "length", // Error type for insufficient length
                };
            }
            return {
                valid: true,
            };
        },
    });
    
    new Vue({
        el: "#contactForm",
        data() {
            return {
                submitted: false,
                showSuccess: false,
                showError: false,
                leadData: {
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                },
                ownerData: {
                    email: "ramnikhil312@gmail.com",
                    name: "Untitled Design",
                },
                formData: {
                    form_title: "on Media page",
                    website_title: "Home page",
                    website_url: "https://actanos.vercel.app",
                },
                emailSubject: "Lead from Media",
                successResponse:
                    "Thank You, We will get back to you at the earliest",
                errorResponse:
                    "Sorry! Unable to send your Message Now. Please try again",
                apiUrl: "https://z7inja5y3g.execute-api.ap-south-1.amazonaws.com/dev/notifications/email",
            };
        },

        methods: {
            async ContactForm() {
                this.showSuccess = false;
                this.showError = false;
                this.submitted = true;
                this.$validator.validateAll();
                if (!this.errors.any()) {
                    let data = {
                        leadData: this.leadData,
                        ownerData: this.ownerData,
                        formData: this.formData,
                        email_subject: this.emailSubject,
                        success_response: this.successResponse,
                    };
                    let response = await axios.post(this.apiUrl, data);
                    if (response.data.success) {
                        this.showSuccess = true;
                        this.showError = false;
                        this.loader = false;
                        setTimeout(function () {
                            $("#suceess-message").css("opacity", "0");
                        }, 3000);
                        this.loader = false;
                        this.leadData.name = "";
                        this.leadData.email = "";
                        this.leadData.phone = "";
                        this.leadData.company = "";
                        this.leadData.message = "";
                    } else {
                        this.showError = true;
                        this.loader = false;
                    }
                } else {
                    this.loader = false;
                }
            },
        },
        
       
    });
}