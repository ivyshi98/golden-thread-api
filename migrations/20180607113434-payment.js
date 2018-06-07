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
  db.createTable('payment',{
    id:{
      type:'string',
      primaryKey:true
    },
    name_on_card:{
      type:'string',
    },
    card_number:{
      type:'string',
    },
    expiry_date:{
      type:'date',
    },
    user_id:{
      type:'int',
    }
  },callback)
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
