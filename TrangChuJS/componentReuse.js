class FilmComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let src = this.getAttribute("src")
        let title = this.getAttribute("title")
        let type = this.getAttribute("type")
        var content = `
        <div class="film-component-container-picture">
            <img src="${src}" alt="">
            <div class="film-component-container-age">
                <label>13+</label>   
            </div>
        </div>
        <div class="film-component-title">
            <label>
                ${title}
            </label>
        </div>
        <div class="film-component-type">
        
            <label>
                 ${type}
            </label>
        </div>
        <div class="film-component-btn" onclick="click()"><button>
        <i class="fa fa-shopping-cart"></i>
                MUA VÉ
            </button></div> `
        this.innerHTML = content;
    }
}
customElements.define('film-component', FilmComponent);

class EventPromotion extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        var content = `
       <div class="event-promotion-item">
        <div class="event-promotion-item-img">
            <img src="./Asset/ori-landcapse-resize.jpg" alt="" style="width:100%;">
        </div>
        <div class="event-promotion-item-title">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, dolorem.</h5>
        </div>
        <div class="event-promotion-item-day">
            <label>16/10/2002</label>
        </div>
        <div class="event-more">
        
        </div>
    </div>    
     `
        this.innerHTML = content;
    }
}
customElements.define('event-promotion', EventPromotion);