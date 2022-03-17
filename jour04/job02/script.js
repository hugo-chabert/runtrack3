const myJSON = '{"name":"La Plateforme_", "address":"8 rue d hozier", "city":"Marseille", "nb_staff":"11", "creation":"2019"}';
const myObj = JSON.parse(myJSON);

jsonValueKey(myObj, "city")

function jsonValueKey(json, key){
    return json[key]
}