$(function(){
  // snackbarShow("Hi, welcome to my blog!")
  
  
  
})

function snackbarShow(msg){
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