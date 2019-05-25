(function () {
    `use strict`;
    var contacts = { "address" : [
        {
            "name": "สาขาลาดกระบัง",
            "email": "https://www.google.co.th/maps/@13.7275161,100.7830659,14.86z?hl=th"
        },
        {
            "name": "สาขาหนองจอก",
            "email": "https://www.google.co.th/maps/@13.8299992,100.8543796,13.82z?hl=th"
        },
        {
            "name": "สาขามีนบุรี",
            "email": "https://www.google.co.th/maps/@13.8182468,100.8472331,12.26z?hl=th"
        },
        {
            "name": "สาขาพญาไท",
            "email": "https://www.google.co.th/maps/@13.7383421,100.5594482,13.56z?hl=th"
        },
        {
            "name": "สาขาประเวศ",
            "email": "https://www.google.co.th/maps/@13.732677,100.6500165,12.52z?hl=th"
        },
        {
            "name": "สาขาขอนแก่น",
            "email": "https://www.google.co.th/maps/@16.1025978,102.6222401,9.66z?hl=th"
        },
        {
            "name": "สาขาเชียงใหม่",
            "email": "https://www.google.co.th/maps/@19.0813014,100.5380879,8.87z?hl=th"
        },
        {
            "name": "สาขาหาดใหญ่",
            "email": "https://www.google.co.th/maps/@6.8414508,100.5372034,10.91z?hl=th"
        },
        {
            "name": "สาขาชลบุรี",
            "email": "https://www.google.co.th/maps/@12.8885731,102.3183323,7.26z?hl=th"
        } ] };

    var searchForm = document.querySelector(`#searchForm`),
        searchField = document.querySelector(`#q`),
        count = contacts.address.length,
        target = document.querySelector(`#output`),
        getAllButton = document.querySelector(`#getAll`);
    
    var addr = {
        search : function (event) {
            var searchValue = searchField.value, i;
           event.preventDefault(); 
            target.innerHTML = ``;
            if (count > 0 && searchValue !== ``) {
                for (i = 0; i < count; i = i + 1) {
                    var obj = contacts.address[i],
                        isItFound = obj.name.indexOf(searchValue);
                    if (isItFound !== -1) {
                        target.innerHTML += `<p>${obj.name}, <a href=" ${obj.email}">MAP</a><p>`;
                    }
                }
            }
        },
        getAllContacts : function () {
            var i;

            if (count > 0) {
                for (i = 0; i < count; i = i + 1) {
                    var obj = contacts.address[i];
                    target.innerHTML += `<p>${obj.name}, <a href=" ${obj.email}">MAP</a><p>`;
                }
            }
        }
    };
    searchField.addEventListener(`keyup`, addr.search, false);
    searchForm.addEventListener(`submit`, addr.search, false);
    getAllButton.addEventListener(`click`, addr.getAllContacts, false);
})();