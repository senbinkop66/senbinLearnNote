var AllOne = function() {
   this.root=new Node();
   this.root.prev=this.root;
   this.root.next=this.root;  // 初始化链表哨兵，下面判断节点的 next 若为 root，则表示 next 为空（prev 同理）
   this.nodes=new Map();


};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
   if (this.nodes.has(key)) {
      let cur=this.nodes.get(key);
      let nxt=cur.next;
      if (nxt===this.root || nxt.count>cur.count+1) {
         this.nodes.set(key,cur.insert(new Node(key,cur.count+1)));
      }else{
         nxt.keys.add(key);
         this.nodes.set(key,nxt);
      }
      cur.keys.delete(key);
      if (cur.keys.size===0) {
         cur.remove();
      }
   }else{  // key 不在链表中
      if (this.root.next===this.root || this.root.next.count>1) {
         this.nodes.set(key,this.root.insert(new Node(key,1)));
      }else{
         this.root.next.keys.add(key);
         this.nodes.set(key,this.root.next);
      }
   }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
   let cur=this.nodes.get(key);
   if (cur.count===1) {  // key 仅出现一次，将其移出 nodes
      this.nodes.delete(key);
   }else{
      let pre=cur.prev;
      if (pre===this.root || pre.count<cur.count-1) {
         this.nodes.set(key,cur.prev.insert(new Node(key,cur.count-1)));
      }else{
         pre.keys.add(key);
         this.nodes.set(key,pre);
      }
   }
   cur.keys.delete(key);
   if (cur.keys.size===0) {
      cur.remove();
   }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
   if (!this.root.prev) {
      return "";
   }
   let maxKey="";
   for (let key of this.root.prev.keys){
      maxKey=key;
      break;
   }
   return maxKey;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
   if (!this.root.prev) {
      return "";
   }
   let minKey="";
   for (let key of this.root.next.keys){
      minKey=key;
      break;
   }
   return minKey;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

class Node {
    constructor(key, count) {
        count ? this.count = count : 0;
        this.keys = new Set();
        key ? this.keys.add(key) : this.keys.add("");
    }

    insert(node) {  // 在 this 后插入 node
        node.prev = this;
        node.next = this.next;
        node.prev.next = node;
        node.next.prev = node;
        return node;
    }

    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    }
}
