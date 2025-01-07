if ($("#contactForm").length) {
    Vue.use(VeeValidate);

    VeeValidate.Validator.extend("phone", {
        getMessage: (field,data) => {
            if (data === "alpha") {
                return "Phone number must contain only digits.";
            }
            if (data === "length") {
                return "Phone number must be at least 10 digits long.";
            }
            if (data === "morelength"){
                return "phone number should only 10 digits.";
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
            if (value.length > 10){
                return {
                    valid: false,
                    data: "morelength",
                }
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
                    email: "suraj.b@orotron.com, pavani.b@orotron.com", 
                    name: "Actanos",
                },
                formData: {
                    form_title: "on Contact Page",
                    website_title: "Actanos",
                    website_url: "https://actanos.vercel.app",
                },
                emailSubject: "New Project",
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

                    this.loader=true;
                    let response = await axios.post(this.apiUrl, data);
                    if (response.data.success) {
                        this.showSuccess = true;
                        this.showError = false;
                        this.loader = false;
                       
                        this.loader = false;
                        this.leadData.name = "";
                        this.leadData.email = "";
                        this.leadData.phone = "";
                        
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