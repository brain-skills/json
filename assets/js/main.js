let choose = document.querySelector('#choose');
let content = document.querySelector('#content');
let temp;

choose.addEventListener('change', function(){
    fetch('/assets/data/first.json')
    .then((response) => response.json())
    .then((data) => {
        if(choose.options.selectedIndex == 1){
            document.body.style.background = "#b00011";
            document.body.style.color = "#fff";
            content.innerHTML = `
                <b>Name:</b> ${data.mari.name}<br>
                <b>Outlook:</b> ${data.mari.outlook}<br>
                <b>Gender:</b> ${data.mari.gender}<br>
                <b>Favourite drink:</b> ${data.mari.favouriteDrink}<br>
                <b>Hair Сolor:</b> ${data.mari.hairСolor}<br>
                <b>Height:</b> ${data.mari.height}<br>
                <b>Weight:</b> ${data.mari.weight}<br>
                <b>Age:</b> ${data.mari.age}
            `;
        } else if(choose.options.selectedIndex == 2){
            document.body.style.background = "#007bff";
            document.body.style.color = "#fff";
            content.innerHTML = `
                <b>Name:</b> ${data.gio.name}<br>
                <b>Outlook:</b> ${data.gio.outlook}<br>
                <b>Gender:</b> ${data.gio.gender}<br>
                <b>Favourite drink:</b> ${data.gio.favouriteDrink}<br>
                <b>Hair Сolor:</b> ${data.gio.hairСolor}<br>
                <b>Height:</b> ${data.gio.height}<br>
                <b>Weight:</b> ${data.gio.weight}<br>
                <b>Age:</b> ${data.gio.age}<br>
            `;
        } else if(choose.options.selectedIndex == 3){
            document.body.style.background = "#6610f2";
            document.body.style.color = "#fff";
            content.innerHTML = `
                <b>Name:</b> ${data.ani.name}<br>
                <b>Outlook:</b> ${data.ani.outlook}<br>
                <b>Gender:</b> ${data.ani.gender}<br>
                <b>Favourite drink:</b> ${data.ani.favouriteDrink}<br>
                <b>Hair Сolor:</b> ${data.ani.hairСolor}<br>
                <b>Height:</b> ${data.ani.height}<br>
                <b>Weight:</b> ${data.ani.weight}<br>
                <b>Age:</b> ${data.ani.age}
            `;
        } else if(choose.options.selectedIndex == 4){
            document.body.style.background = "#e83e8c";
            document.body.style.color = "#fff";
            content.innerHTML = `
                <b>Name:</b> ${data.elene.name}<br>
                <b>Outlook:</b> ${data.elene.outlook}<br>
                <b>Gender:</b> ${data.elene.gender}<br>
                <b>Favourite drink:</b> ${data.elene.favouriteDrink}<br>
                <b>Hair Сolor:</b> ${data.elene.hairСolor}<br>
                <b>Height:</b> ${data.elene.height}<br>
                <b>Weight:</b> ${data.elene.weight}<br>
                <b>Age:</b> ${data.elene.age}
            `;
        } else {
            content.innerHTML = '';
        }
    })
});