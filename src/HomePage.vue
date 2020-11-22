<template>
    <LoginComponent message="In order to see the recipes you must first Login In"/>
</template>

<template>
        <LoginComponent v-bind:showUsernameError="showUsernameError"
                        v-bind:showPasswordError="showPasswordError"
                        v-bind:inputUsernameError="inputUsernameError"
                        v-bind:inputPasswordError="inputPasswordError"
                        v-bind:message="message"
                        @clicked="onClickChild"
        />
</template>

<script>
import LogInComponent from './components/LogInComponent.vue'
export default {
    name: 'HomePage',
    components: {
        LogInComponent
    },
    data() {
        return {
            message: 'Please log in to view recipes',
            showUsernameError: false,
            showPasswordError: false,
            inputUsernameError: false,
            inputPasswordError: false
        }
    },
    methods: {
        onClickChild(username, password){
            if(username !== localStorage.getItem("username") || password !== localStorage.getItem("password")){
                       if(username !== localStorage.getItem("username")) {
                           this.message = 'Please enter correct login details';
                           this.showUsernameError = true;
                           this.inputUsernameError = true;
                       }
                       else{
                           this.showUsernameError = false;
                           this.inputUsernameError = false;
                       }    
                        if(password !== localStorage.getItem("password")){
                           this.message = 'Please enter correct login details';
                           this.showPasswordError = true;
                           this.inputPasswordError = true;
                       }
                       else{
                           this.showPasswordError = false;
                           this.inputPasswordError = false;
                       }
                    }
                    else{
                        const sessionID = '21312313213';
                        sessionStorage.setItem('sessionID', sessionID);
                        this.$router.push({name: 'recipes'});
                    }
                }
            }       
}
</script>

<style scoped>
    h3 {
        color: white;
    }
</style>