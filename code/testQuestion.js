/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.balance=balance;
    this.number=this.balance.length;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (account1<=this.number && account2<=this.number) {
        if (this.balance[account1-1]>=money) {
            this.balance[account1-1]-=money;
            this.balance[account2-1]+=money;
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (account<=this.number){
        this.balance[account-1]+=money;
        return true;
    }else{
        return false;
    }
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (account<=this.number){
        if (this.balance[account-1]>=money) {
            this.balance[account-1]-=money;
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */