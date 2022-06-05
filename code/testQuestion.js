/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let emialSet = new Set();
    for (let i = 0; i < emails.length; i++){
        let email = emails[i];
        let index1 = email.indexOf("@");
        let local = email.slice(0, index1).split("+")[0];
        local = local.replaceAll(".","");
        emialSet.add(local + email.slice(index1));
    }
    return emialSet.size;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));