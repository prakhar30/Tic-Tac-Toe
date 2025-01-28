// source: rpc_login_user.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.tic_tac_toe.LoginUserRequest', null, global);
goog.exportSymbol('proto.tic_tac_toe.LoginUserResponse', null, global);
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
proto.tic_tac_toe.LoginUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tic_tac_toe.LoginUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tic_tac_toe.LoginUserRequest.displayName = 'proto.tic_tac_toe.LoginUserRequest';
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
proto.tic_tac_toe.LoginUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tic_tac_toe.LoginUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tic_tac_toe.LoginUserResponse.displayName = 'proto.tic_tac_toe.LoginUserResponse';
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
proto.tic_tac_toe.LoginUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tic_tac_toe.LoginUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tic_tac_toe.LoginUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.LoginUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tic_tac_toe.LoginUserRequest}
 */
proto.tic_tac_toe.LoginUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tic_tac_toe.LoginUserRequest;
  return proto.tic_tac_toe.LoginUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tic_tac_toe.LoginUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tic_tac_toe.LoginUserRequest}
 */
proto.tic_tac_toe.LoginUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tic_tac_toe.LoginUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tic_tac_toe.LoginUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tic_tac_toe.LoginUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.LoginUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tic_tac_toe.LoginUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.LoginUserRequest} returns this
 */
proto.tic_tac_toe.LoginUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.tic_tac_toe.LoginUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.LoginUserRequest} returns this
 */
proto.tic_tac_toe.LoginUserRequest.prototype.setPassword = function(value) {
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
proto.tic_tac_toe.LoginUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tic_tac_toe.LoginUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tic_tac_toe.LoginUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.LoginUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
accessToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
refreshToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
accessTokenExpiresAt: (f = msg.getAccessTokenExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
refreshTokenExpiresAt: (f = msg.getRefreshTokenExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tic_tac_toe.LoginUserResponse}
 */
proto.tic_tac_toe.LoginUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tic_tac_toe.LoginUserResponse;
  return proto.tic_tac_toe.LoginUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tic_tac_toe.LoginUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tic_tac_toe.LoginUserResponse}
 */
proto.tic_tac_toe.LoginUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAccessTokenExpiresAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRefreshTokenExpiresAt(value);
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
proto.tic_tac_toe.LoginUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tic_tac_toe.LoginUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tic_tac_toe.LoginUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tic_tac_toe.LoginUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccessTokenExpiresAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRefreshTokenExpiresAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.tic_tac_toe.User}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.getUser = function() {
  return /** @type{?proto.tic_tac_toe.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 1));
};


/**
 * @param {?proto.tic_tac_toe.User|undefined} value
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
*/
proto.tic_tac_toe.LoginUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
 */
proto.tic_tac_toe.LoginUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
 */
proto.tic_tac_toe.LoginUserResponse.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string access_token = 3;
 * @return {string}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
 */
proto.tic_tac_toe.LoginUserResponse.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refresh_token = 4;
 * @return {string}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
 */
proto.tic_tac_toe.LoginUserResponse.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp access_token_expires_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.getAccessTokenExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
*/
proto.tic_tac_toe.LoginUserResponse.prototype.setAccessTokenExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
 */
proto.tic_tac_toe.LoginUserResponse.prototype.clearAccessTokenExpiresAt = function() {
  return this.setAccessTokenExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.hasAccessTokenExpiresAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp refresh_token_expires_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.getRefreshTokenExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
*/
proto.tic_tac_toe.LoginUserResponse.prototype.setRefreshTokenExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tic_tac_toe.LoginUserResponse} returns this
 */
proto.tic_tac_toe.LoginUserResponse.prototype.clearRefreshTokenExpiresAt = function() {
  return this.setRefreshTokenExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tic_tac_toe.LoginUserResponse.prototype.hasRefreshTokenExpiresAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.tic_tac_toe);
