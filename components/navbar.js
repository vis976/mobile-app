function navbar() {
    return `
    <div>
        <a href="/"><h3>Home</h3></a>
    </div>
    <input type="text" id="searchRec" placeholder="search receipe">
    <div id="option">
        <a href="login.html"><h3>Log In</h3></a>
        <a href="signup.html"><h3>Sign Up</h3></a>
    </div> `
}

export default navbar;