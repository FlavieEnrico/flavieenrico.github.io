function haikusLoad(infos){
  console.log(infos["haikus"])

  var codeBlock = '<h2>Haikus</h2>';

  var section = document.getElementById('haikus_js');
  for (let index = 0; index < infos["haikus"].length; index++) {
      const haiku = infos["haikus"][index];
      var newHaiku='<!-- Notice: each .row is an haiku -->'+
            '<div class="row">'+
            haiku.haiku +
            '</div>'+
            '<!-- /END haiku -->'

          codeBlock += newHaiku
  }

  document.getElementById('haikus_js').innerHTML = codeBlock
}

export { haikusLoad };