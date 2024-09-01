export default class API {
    #headers = {
        "Content-Type": "application/json"
    };
    // #endpoint = "https://etut-api.home.mbizcard.in";
    #endpoint=window.location.origin;
    constructor(endpoint="") {
        if(endpoint !=""){
            this.#endpoint=endpoint;
        }
    }
    async execute(e, t = "GET", s = null) {
        
        t = {
            method: t,
            headers: this.#headers
        };
        return s && (t.body = JSON.stringify(s)),
            (await fetch(`${this.#endpoint}${e}`, t)).json()
    }
    async get(e) {
        return this.execute(e)
    }
    async post(e, t) {
        return this.execute(e, "POST", t)
    }
    async put(e, t) {
        return this.execute(e, "PUT", t)
    }
    async patch(e, t) {
        return this.execute(e, "PATCH", t)
    }
    async delete(e, t) {
        return this.execute(e, "DELETE", t)
    }
    async copy(e, t) {
        return this.execute(e, "COPY", t)
    }
    async getHTML(e) {
        return (await fetch(e)).text()
    }
    get headers() {
        return this.#headers
    }
    set headers(e) {
        this.#headers = e
    }
    get endpoint() {
        return this.#endpoint
    }
    set endpoint(e) {
        this.#endpoint = e
    }
    set header(e) {
        Object.assign(this.#headers, e)
    }
}