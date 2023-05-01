function haikusLoad(infos){
  console.log(infos)

  var codeBlock = '';

  var section = document.getElementById('haikus_js');
  for (let index = 0; index < infos.length; index++) {
      const haiku = infos[index];
      var newHaiku='<!-- Notice: each .row is an haiku -->'+
            '<div class="row"><span>'+
            haiku.haiku +
            '</span></div>'+
            '<!-- /END haiku -->'

          codeBlock += newHaiku
  }

  document.getElementById('haikus_js').innerHTML = codeBlock
}