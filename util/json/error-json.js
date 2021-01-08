function errorJson(message){
  if (message != null){
    return {ok: false, message: message};
  }
  else {
    return {ok: false};
  }
}

module.exports = errorJson;
