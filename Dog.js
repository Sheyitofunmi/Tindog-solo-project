// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml(){
        const {name, avatar, age, bio} = this
        return `
            <img class="img-profile" src="${avatar}"/>
            <div id="meta">
            <h3 class="meta">${name}, ${age}</h3>
            <p class="meta">${bio}</p>
            </div>
            <div id="img-like"><img class="img-badge" src="images/badge-like.png"></div>
            <div id="img-nope"><img class="img-badge" src="images/badge-nope.png"></div>
        `
    }
}

export default Dog
