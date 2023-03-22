let list = [
	{ name: "Kimestu no yaiba", link: "https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng_11/Ng%C3%A0y%208/Nga/Black-Adam-07112022.jpg" },
	{ name: "Kimestu no yaiba", link: "https://cdn.popsww.com/blog/sites/2/2023/02/thanh-guom-diet-quy-lang-tho-ren.jpg" },
	{ name: "Kimestu no yaiba", link: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/11/18/photo-1-1637245275307984203966.jpg" },
	{ name: "Kimestu no yaiba", link: "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-kimetsu-no-yaiba-hinh-nen-kimetsu.jpg" },
    { name: "Kimestu no yaiba", link: "https://o.rada.vn/data/image/2022/11/17/Suzume-no-Tojimari-7.jpg" },
    { name: "Kimestu no yaiba", link: "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2023/03/nhung-nhan-vat-cung-suzume-tao-nen-hanh-trinh-dong-cua-thu-vi_640f08b3ceeba.jpeg" },
];

let index = 1;

const getPrev = (index) => {
    return index - 1 >= 0 ? index - 1 : list.length - 1;
}

const getNext = (index) => {
    return index + 1 >= list.length ? 0 : index + 1;
}

const listenerForButton = () => {
    let btnNext = document.querySelector("#btn-next");
    let btnPrev = document.querySelector("#btn-prev");
    btnNext.addEventListener("click", (e) => {
        index = getNext(index);
        renderList();
        centerTheList();
    })

    btnPrev.addEventListener("click", (e) => {
        index = getPrev(index);
        renderList();
        centerTheList();
    })
};

const centerTheList = () => {
    let slider = document.querySelector("#slider");
    let leftPosition = (slider.clientWidth - screen.width) / 2;
	let container = document.querySelector("#container");
	container.style.left = `-${leftPosition}px`;
}

const renderList = () => {
    let middle = list[index];
    let left = list[getPrev(index)];
    let right = list[getNext(index)];
    let html = `
        <div id="left" class="item item-left item-float">
            <img src="${left.link}">
        </div>
        <div id="middle" class="item item-center">
            <img src="${middle.link}">
            <div id="btn-next" class="arrow-icon arrow-right">
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="btn-prev" class="arrow-icon arrow-left">
                <i class="fa-solid fa-angle-left"></i>
            </div>
        </div>
        <div id="right" class="item item-right item-float">
            <img src="${right.link}">
        </div>
    `;
    let slider = document.querySelector("#slider");
    slider.innerHTML = html;
    listenerForButton();
}

// let slider = document.querySelector("#slider");
// // slider.innerHTML = html;
// let center = slider.children[Math.floor((slider.children.length - 1) / 2)];
// slider.scrollLeft = center.offsetLeft + center.offsetWidth / 2 - slider.offsetWidth / 2;

window.addEventListener("load", function (e) {
    renderList();
    centerTheList();
});

window.addEventListener("resize", function (e) {
    centerTheList();
})
