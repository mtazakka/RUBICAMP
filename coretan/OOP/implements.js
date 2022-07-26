
//latihaan abstract
class abstract CRUD {
    create();
    read();
    update();
    delete();
  }
  
  class user implements CRUD { /* seluruh properti atau method di copy */
  create(){
    db.user.create()
  }
  read(){
    db.user.read()
  }
  update(){
    db.user.update()
  }
  delete(){
    db.user.delete()
  }
  }