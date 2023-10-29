async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(r => r.text());
    return response.json(); // parses JSON response into native JavaScript objects

}
function rutube_Log() {
    let Repl
    let reda
    let redb
    let last
    ///NAME
    // let Repl=[
    //     [0,9,'Game'],
    //     [67,79,'Project']
    // ]
    try {
        reda=''
        redb=''
        last=0
        const name = document.getElementsByClassName("pen-page-header_video-options-header-middle pen-page-header_color-default pen-page-header_size-default")
          name[0].firstChild.remove()
        redb=name[0]['title']
        console.log(redb)

        postData("https://78e8-95-29-104-171.ngrok.io/prediction", { answer: redb}).then((data) => {
            Repl=data // JSON data parsed by `data.json()` call
        });

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
    // Repl=[
    //     [101,104,'Game'],
    //     [106,118,'Project'],
    //     [123,132,'Project'],
    //     [272,281,'Game'],
    //     [658,662,'Person'],
    //     [921,943,'Game'],
    //     [987,1004,'Project' ],
    //     [1078,1100,'Game'],
    //     [1167,1183,'Date'],
    //     [1198,1205,'Brand'],
    //     [1207,1218,'Brand'],
    //     [1223,1227,'Brand'],
    //     [1233,1250,'Date'],
    //     [1305,1313,'Brand'],
    //     [1314,1320,'Model'],
    //     [1382,1397,'Date'],
    //     [1451,1458,'Location'],
    //     [1965,1972,'Person'],
    // ]
    ///DESCRIPTION
    try {
        reda=''
        redb=''
        last=0
        const desc = document.getElementsByClassName("pen-videopage-description__description pen-videopage-description__description_short")
        while (desc[0].firstChild!=null) {
            if (desc[0].firstChild.firstChild!=null){
                while (desc[0].firstChild.firstChild!=null) {
                    if (desc[0].firstChild.firstChild.textContent!=='noindex' & desc[0].firstChild.firstChild.textContent!=='/noindex')
                        reda+=desc[0].firstChild.firstChild.textContent
                    desc[0].firstChild.firstChild.remove()
                }
            }else{
                if (desc[0].firstChild.textContent!=='noindex'& desc[0].firstChild.textContent!=='/noindex')
                    reda+=desc[0].firstChild.textContent
            }
            desc[0].firstChild.remove()
        }
        console.log(reda)
        redb=reda
        postData("https://78e8-95-29-104-171.ngrok.io/prediction", { answer: redb}).then((data) => {
            Repl=data // JSON data parsed by `data.json()` call
        });
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
