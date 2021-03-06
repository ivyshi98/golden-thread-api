'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  db.createTable('donation',{
    id:{
      type:'int',
      primaryKey:true
    },
    charity_id:{
      type:'int',
    },
    user_id:{
      type:'int',
    },
    payment_id:{
      type:'int',
    },
    amount:{
      type:'int'
    }
  },callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
