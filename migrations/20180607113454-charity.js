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
  db.createTable('charity',{
    id:{
      type:'int',
      primaryKey:true,
    },
    desc:{
      type:'string',
    },
    logo:{
      type:'string',
    },
    project_id:{
      type:'int',
    },
    address_id:{
      type:'int',
    },
    bankinfo_id:{
      type:'int',
    },
  },callback)
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
