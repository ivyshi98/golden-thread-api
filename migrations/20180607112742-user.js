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
  db.createTable('user',{
    id:{
      type:'int',
      primaryKey:true
    },
    firstname:{
      type: 'string',
      length: 40
    },
    lastname:{
      type: 'string',
      length: 40
    },
    username:{
      type: 'string',
      length: 40
    },
    password:{
      type: 'string',
      length: 40
    },
    dob:{
      type:'date'
    }
  },callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
