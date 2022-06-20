$(function(){
  /*
   * get all figcaption 代码块
   */ 
  let figcaptions = $("figcaption")
  let clickArr = ["vue2","vue3","es","es5","es6","es7","es8","es9","es10","es11","js","JavaScript","ts","html"]
  //let coderunurl = "https://zbglz.gitee.io/coderun/"
  let coderunurl = "http://127.0.0.1:8080/coderun/page.html"
  if(figcaptions.length > 0){
    for(let f of figcaptions){
      let fName = $(f).text().toUpperCase()
      f.previousSibling.firstChild.innerHTML = fName
      f.style.display = "none"
      //f.remove()
      let fHead = $(f.previousSibling.firstChild).prop("outerHTML");
      for(name of clickArr){
        if(fName === name.toUpperCase()){
          let toolsbar = `${fHead}<div class="toolsbar">
          <i class="fa fa-play-circle" title="运行代码"></i>
          <i class="fa fa-print copy-button" title="复制代码"></i>
          <i class="fa fa-cog" title="新空窗口"></i></div>`
          $(f.previousSibling).html(toolsbar)
        }
      }
    }
  }
  // 运行代码
  $(".toolsbar .fa-play-circle").click(function(e){
    let preCode = e.target.parentNode.parentNode.parentNode.lastChild.firstChild.firstChild.firstChild.firstChild
    let codeName = e.target.parentNode.parentNode.parentNode.firstChild.firstChild

    let selection = window.getSelection()
    let range = document.createRange()
    range.selectNodeContents(preCode)
    selection.removeAllRanges()
    selection.addRange(range)
    let con = selection.toString()
    selection.removeAllRanges()
    
    con = encodeURIComponent(con).replace(new RegExp("<","g"),"%3C").replace(new RegExp(">","g"),"%3E")
    
    let dtype = $(codeName).text()
    
    let encodeStr = coderunurl + "?con=" + con + "&dtype=" + dtype
    
    if(encodeStr.length > 8179){ //8179
      snackbarShow("代码过长, 请复制代码, 新开空窗口 <i class='fa fa-cog'></i> 粘贴运行")
    }else{
      window.open(encodeStr)
    }
  })
  // 新开窗口
  $(".toolsbar .fa-cog").click(function(e){
    window.open(coderunurl)
  })
})
/*
 * 消息框
 */ 
function snackbarShow(msg){ // snackbarShow("Hi, welcome to my blog!")
  let text = msg || "nothing"
  Snackbar.show({
    pos: 'top-center',
    showAction: true,
    actionText: '关闭',
    actionTextColor: "#74d665",
    text: text,
    onActionClick: function(element) {
      $(element).css('opacity', 0);
    }
  });
}