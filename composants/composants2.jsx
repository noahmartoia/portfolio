function navbar() {
    let e = document.body;
    e.innerHTML = "<h1 className={styles.darkred}>{name()} studio</h1><div className={styles.flex}><a href="/">Home</a><a href="/">About</a><a href="/">Contact</a></div>"
    return e
}
export default navbar
