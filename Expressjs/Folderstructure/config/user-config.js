class UserConfig {
    setWorldConstructor(email,password) {
        this.email = email;
        this.password = password;
    }
}

module.exports = new UserConfig("dhruvi","done");