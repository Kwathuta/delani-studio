// Toggle effect

$(`.design-img`).click( () => {
    $(`.design-img`).toggle(800);
    $(`.p-design`).toggle(800);
});

$(`.p-design`).click( () => {
    $(`.design-img`).toggle(800);
    $(`.p-design`).toggle(800);
});

$(`.development-img`).click( () => {
    $(`.development-img`).toggle(800);
    $(`.p-development`).toggle(800);
});

$(`.p-development`).click( () => {
    $(`.development-img`).toggle(800);
    $(`.p-development`).toggle(800);
});

$(`.management-img`).click( () => {
    $(`.management-img`).toggle(800);
    $(`.p-management`).toggle(800);
});

$(`.p-management`).click( () => {
    $(`.management-img`).toggle(800);
    $(`.p-management`).toggle(800);    
});

// Hover effect

$(`.portfolio1`).hover( () => {
    $(`.overlay1`).show(800);
},
    () => {
    $(`.overlay1`).hide(800);
    }
)

$(`.portfolio2`).hover( () => {
    $(`.overlay2`).show(800);
},
    () => {
    $(`.overlay2`).hide(800);
    }
)

$(`.portfolio3`).hover( () => {
    $(`.overlay3`).show(800);
},
    () => {
    $(`.overlay3`).hide(800);
    }
)

$(`.portfolio4`).hover( () => {
    $(`.overlay4`).show(800);
},
    () => {
    $(`.overlay4`).hide(800);
    }
)

$(`.portfolio5`).hover( () => {
    $(`.overlay5`).show(800);
},
    () => {
    $(`.overlay5`).hide(800);
    }
)

$(`.portfolio6`).hover( () => {
    $(`.overlay6`).show(800);
},
    () => {
    $(`.overlay6`).hide(800);
    }
)

$(`.portfolio7`).hover( () => {
    $(`.overlay7`).show(800);
},
    () => {
    $(`.overlay7`).hide(800);
    }
)

$(`.portfolio8`).hover( () => {
    $(`.overlay8`).show(800);
},
    () => {
    $(`.overlay8`).hide(800);
    }
)

let collectInput = () => {
    if ($(`#userName`).val() == ``) {
        alert(`Please fill in your name`);
    } else if ($(`#userMail`).val() == ``) {
        alert(`Please provide your E-mail`)
    }
     else if ($(`#userMessage`).val() == ``) {
        alert(`We'd love to hear your feedback. Please fill it in`)
    }
     else {
    userName = $(`#userName`).val();
    console.log(userName);
    alert(userName + ` we have recieved your message. Thank you for reaching out to us`)
    }
}
