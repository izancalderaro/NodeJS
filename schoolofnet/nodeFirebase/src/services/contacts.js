let contacts = (app) => {
    let firebase    = app.firebase;
       return ref   = firebase.database().ref('contacts');
}

module.exports = contacts;