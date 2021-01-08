function successJson(object){
  // console.log("Success response:\n", Object.assign({}, {ok: true, data}, object));
  return Object.assign(object, {ok: true});
}

module.exports = successJson;
