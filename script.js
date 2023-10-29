// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "no-cors", // no-cors, *cors, same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: "follow", // manual, *follow, error
//         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     }).then(r => r.text());
//     return response.json(); // parses JSON response into native JavaScript objects
//
// }
function rutube_Log() {

    ///NAME
    let Repl=[
        [1,3,'person'],
        [7,10,'team']
    ]
    try {
        let reda=''
        let redb=''
        let last=0
        const name = document.getElementsByClassName("pen-page-header_video-options-header-middle pen-page-header_color-default pen-page-header_size-default")
          name[0].firstChild.remove()
        redb=name[0]['title']
        console.log(redb)

        // postData("https://78e8-95-29-104-171.ngrok.io/prediction", { answer: "Дед Морозов 2 сезон 1=4 серия Военная драма 2023 на НТВ дата выхода и сюжет Премьера 2023 Дед Морозов 2 сезон 1 4 серии обзор военной драмы. Дата выхода на НТВ. Главные роли исполнят: Аристарх Ливанов, Николай Шестак, Нино Кантария, Максим Сапрыкин, Филипп Рейнхардт, Ибад Габибзаде, и другие."}).then((data) => {
        //     console.log(data); // JSON data parsed by `data.json()` call
        // });

        Repl.forEach(function (i){
            name[0].appendChild(document.createElement("b"))
            name[0].lastChild.innerHTML=redb.substring(last,i[0])
            name[0].appendChild(document.createElement("b",{is: "expanding-list"}))
            name[0].lastChild.innerHTML="<span class="+i[2]+" title="+i[2]+">"+redb.substring(i[0],i[1])+"</span>"
            last=i[1]
        })
        name[0].appendChild(document.createElement("b"))
        name[0].lastChild.innerHTML=redb.substring(Repl[Repl.length-1][1],redb.length)
    } catch (err) {
        console.log(err)
    }
    Repl=[
        [101,104,'Game'],
        [106,119,'Project'],
        [123,132,'Project'],
        [272,281,'Game'],
        [658,662,'Person'],
        [921,943,'Game'],
        [993,1000,'Project' ],
        [1078,1100,'Game'],
        [1167,1183,'Date'],
        [1198,1205,'Brand'],
        // ['Brand' PlayStation],
        // ['Brand' Xbox],
        // ['Date' 11 июня 2019 года],
        // ['Brand' Nintendo],
        // ['Model' Switch],
        // ['Date' 15 октября 2019],
        // ['Location' Туссент],
        // ['Person' Геральт],
    ]
    ///DESCRIPTION
    try {
        let reda=''
        let redb=''
        let last=0
        const desc = document.getElementsByClassName("pen-videopage-description__description pen-videopage-description__description_short")
        while (desc[0].firstChild!=null) {
            if (desc[0].firstChild.firstChild!=null){
                while (desc[0].firstChild.firstChild!=null) {
                    if (desc[0].firstChild.firstChild.textContent!='noindex' & desc[0].firstChild.firstChild.textContent!='/noindex')
                        reda+=desc[0].firstChild.firstChild.textContent
                    desc[0].firstChild.firstChild.remove()
                }
            }else{
                if (desc[0].firstChild.textContent!='noindex'& desc[0].firstChild.textContent!='/noindex')
                    reda+=desc[0].firstChild.textContent
            }
            desc[0].firstChild.remove()
        }
        console.log(reda)
        redb=reda
        Repl.forEach(function (i){
            desc[0].appendChild(document.createElement("b"))
            desc[0].lastChild.innerHTML=redb.substring(last,i[0])
            desc[0].appendChild(document.createElement("b",{is: "expanding-list"}))
            desc[0].lastChild.innerHTML="<span class="+i[2]+"  title="+i[2]+">"+redb.substring(i[0],i[1])+"</span>"
            last=i[1]
        })
        desc[0].appendChild(document.createElement("b"))
        desc[0].lastChild.innerHTML=redb.substring(Repl[Repl.length-1][1],reda.length)
    } catch (err) {
        console.log(err)
    }
}

window.addEventListener("load", rutube_Log)
window.addEventListener("", rutube_Log)