function haikusLoad(infos){
  console.log(infos)

  var codeBlock = '';

  var section = document.getElementById('haikus_js');
  for (let index = 0; index < infos.length; index++) {
      const haiku = infos[index];
      var newHaiku='<!-- Notice: each .row is an haiku -->'+
            '<span class="row">'+
            haiku.haiku +
            '</span>'+
            '<!-- /END haiku -->'

          codeBlock += newHaiku
  }

  document.getElementById('haikus_js').innerHTML = codeBlock
}