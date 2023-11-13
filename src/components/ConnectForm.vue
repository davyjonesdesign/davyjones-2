<script>
import emailjs from "emailjs-com";

export default {
    name: "ConnectForm",
    data() {
        return {
            contacts: [],
            fname: "",
            lname: "",
            email: "",
            message: "",
            errors: [],
            showMain: true,
            showSuc: false,
        };
    },
    methods: {
        // submit(){
        //   // form validation

        // },
        sendEmail(e) {
            // Clear previous errors
            this.errors = [];

            // Validate input fields
            if (!this.fname) {
                this.errors.push("First name required");
            }
            if (!this.lname) {
                this.errors.push("Last name required");
            }
            if (!this.email) {
                this.errors.push("Email required");
            }

            // Check if there are any errors
            if (this.errors.length > 0) {
                // Handle errors, for example, by displaying an error message to the user
            } else {
                try {
                    // Send the email
                    emailjs.sendForm(
                        "service_r16vl9a",
                        "davy-jones-contacts",
                        e.target,
                        "GdpZ57Y22GfDzj08_",
                        {
                            fname: this.fname,
                            lname: this.lname,
                            email: this.email,
                            message: this.message,
                        }
                    );
                    // Hide the form
                    this.showMain = false;
                    // Show the success message
                    this.showSuc = true;
                } catch (error) {
                    console.log({ error });
                }
            }
        },
        // Add a method to check if an error exists for a specific field
        hasError(field) {
            return this.errors.includes(field);
        },
        clearError(error) {
            const index = this.errors.indexOf(error);
            if (index !== -1) {
            this.errors.splice(index, 1);
            }
        },
    },
};
</script>

<template>
    <div class="form-wrapper">
        <div class="succcess" v-if="showSuc">
            <h1>Success!</h1>
            <p>Thanks for filling out my form. I'll be in touch.</p>
            <router-link class="link link-btn splash-btn" to="/">
                <div class="nav-link_text">Home</div>
            </router-link>
        </div>
        <!-- our signup form ===================== -->
        <form @submit.prevent="sendEmail" method="POST" class="connect-form" v-if="showMain">
            <p class="form-description">Reach out with this handy form!</p>

            <!-- first name -->
            <div class="field left-field">
                <input type="text" class="text-input" name="nameFirst"  v-model="fname"
                    :class="{ 'has-error': hasError('First name required') }"
                    @input="clearError('First name required')" @focus="clearError('First name required')" />
                    <label class="input-label" :class="{ 'filled': fname }">First Name</label>
                <p class="error-msg" v-if="hasError('First name required')">*required</p>
            </div>

            <!-- last name -->
            <div class="field">
                <input type="text" class="text-input" name="nameLast"  v-model="lname"
                    :class="{ 'has-error': hasError('Last name required') }"
                    @input="clearError('Last name required')" @focus="clearError('Last name required')" />
                    <label class="input-label" :class="{ 'filled': lname }">Last Name</label>
                <p class="error-msg" v-if="hasError('Last name required')">*required</p>
            </div>
            

            <!-- email -->
            <div class="field">
                <input type="email" class="text-input" name="email"  v-model="email"
                :class="{ 'has-error': hasError('Email required') }"
                @input="clearError('Email required')" @focus="clearError('Email required')" />
                <label class="input-label" :class="{ 'filled': email }">Email</label>
                <p class="error-msg" v-if="hasError('Email required')">*required</p>
            </div>

            <!-- Message -->
            <div class="field text-area-wrapper">
                <!-- <label class="input-label">Message</label> -->
                <textarea class="text-input text-area" name="message" v-model="message" cols="30" rows="5">
                </textarea>
                <label class="input-label" :class="{ 'filled': message }">Message</label>
            </div>
            <!-- submit button -->
            <div class="field">
                <input class="btn-primary" type="submit" value="Send" id="" />
            </div>
        </form>
    </div>
</template>