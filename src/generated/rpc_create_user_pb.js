// source: rpc_create_user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
goog.exportSymbol('proto.tic_tac_toe.CreateUserRequest', null, global);
goog.exportSymbol('proto.tic_tac_toe.CreateUserResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tic_tac_toe.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tic_tac_toe.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tic_tac_toe.CreateUserRequest.displayName = 'proto.tic_tac_toe.CreateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tic_tac_toe.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tic_tac_toe.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tic_tac_toe.CreateUserResponse.displayName = 'proto.tic_tac_toe.CreateUserResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tic_tac_toe.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tic_tac_toe.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tic_tac_toe.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
username: jspb.Message.getFieldWithDefault(msg, 1, ""),
password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tic_tac_toe.CreateUserRequest}
 */
proto.tic_tac_toe.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tic_tac_toe.CreateUserRequest;
  return proto.tic_tac_toe.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tic_tac_toe.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tic_tac_toe.CreateUserRequest}
 */
proto.tic_tac_toe.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tic_tac_toe.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tic_tac_toe.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tic_tac_toe.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.tic_tac_toe.CreateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.CreateUserRequest} returns this
 */
proto.tic_tac_toe.CreateUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.tic_tac_toe.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.CreateUserRequest} returns this
 */
proto.tic_tac_toe.CreateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tic_tac_toe.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tic_tac_toe.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tic_tac_toe.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tic_tac_toe.CreateUserResponse}
 */
proto.tic_tac_toe.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tic_tac_toe.CreateUserResponse;
  return proto.tic_tac_toe.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tic_tac_toe.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tic_tac_toe.CreateUserResponse}
 */
proto.tic_tac_toe.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tic_tac_toe.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tic_tac_toe.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tic_tac_toe.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.tic_tac_toe.User}
 */
proto.tic_tac_toe.CreateUserResponse.prototype.getUser = function() {
  return /** @type{?proto.tic_tac_toe.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 1));
};


/**
 * @param {?proto.tic_tac_toe.User|undefined} value
 * @return {!proto.tic_tac_toe.CreateUserResponse} returns this
*/
proto.tic_tac_toe.CreateUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tic_tac_toe.CreateUserResponse} returns this
 */
proto.tic_tac_toe.CreateUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tic_tac_toe.CreateUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.tic_tac_toe);
