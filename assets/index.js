

function init() {
    //initialize Objects
    const id_list = ["goback-btn", "hours", "minutes", "seconds"];

    //Modal Area

    console.log("Load Script");

    if (!id_list.every(load_res)) {
        // if one id does not exist, display error
        console.log("Script Error!");
    } else {
        // if all id exist, display successful
        console.log("Script Loaded Successfully!");
    };

    function load_res(item) {
        const obj = document.querySelector(`#${item}`);
        //check if the given id is valid
        return typeof obj != undefined && obj != null;
    }

    //Modal Go back button
    const modal_go_back_btn = document.querySelector(`#${id_list[0]}`);
    modal_go_back_btn.addEventListener("click", () => {
        handleCloseModal(); //close modal
    });

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(item => {
        item.addEventListener("click", () => {
            handleOpenModal(); //close modal
        });
    })

    timer();
}




/* Modal Box */
function handleCloseModal() {
    //closes the modal box in the document

    //get the modal obj using element id
    const modalObj = document.getElementById('modal-obj');

    //hide the modal
    modalObj.style.display = "none";

    //check if the modal no longer exist
    if (modalObj.style.display != "none") {
        console.log(`Object ${modalObj} cannot be accessed`);
    }
}

function handleOpenModal() {
    //get the modal obj using element id
    const modalObj = document.getElementById('modal-obj');

    //show the modal
    modalObj.style.display = "flex";

    //check if the modal no longer exist
    if (modalObj.style.display != "flex") {
        console.log(`Object ${modalObj} cannot be accessed`);
    }
}

//Deals Timer
function timer() {
    let sec = 59;
    let min = 59;
    let hours = 23;

    const timer = setInterval(function () {

        sec--;

        if (sec < 0) {
            min--;
            sec = 59;
            if (min < 0) {
                hours--;
                min = 59;
                if (hours < 0) {
                    clearInterval(timer);
                }
            }
        }

        document.querySelector("#hours").innerHTML = hours.toString().length != 2 ? `0${hours}` : hours;
        document.querySelector("#minutes").innerHTML = min.toString().length != 2 ? `0${min}` : min;
        document.querySelector("#seconds").innerHTML = sec.toString().length != 2 ? `0${sec}` : sec;
    }, 1000);


}