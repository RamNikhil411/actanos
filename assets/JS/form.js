if ($("#contactForm").length) {
    Vue.use(VeeValidate);
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
                    website_title: "Untitled Design",
                    website_url: "https://untitleddesign.com/",
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
                  this.loader - false;
                }
              } else {
                this.loader = false;
              }
            },
          },
    });
  }