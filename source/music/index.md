---
title: 音乐
top_img: ../../../blog/static/butterfly/music_img.jpg
aplayer: true
---

### QQ音乐

<style>
  div.musicList{
    display:flex;
    flex-direction: row;
    margin-left:-5px;
    margin-right:-5px;
    flex-wrap: wrap;
  }
  div.musicList .aplayer{
    margin:0 5px 10px 5px!important;
  }
  div.musicList .aplayer-info{
    position: fixed;
    bottom:0;
    left:0;
    width:100%!important;
    z-index: 99;
    margin:0!important;
    padding:0!important;
    height:auto!important;
    display:none;
  }
  .musicList .aplayer-info .aplayer-controller{
    padding-top:10px;
    background:rgba(0,0,0,0.8);
  }
  .musicList .aplayer-info .aplayer-lrc .aplayer-lrc-contents p{
    font-size:14px;
    text-shadow:-1px 0 #3f9cd5,0 1px #3f9cd5,1px 0 #3f9cd5,0 -1px #3f9cd5;
    color:#FFF;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .musicList .aplayer-info .aplayer-lrc{
    margin:0;
    padding-top:5px;
    background:rgba(0,0,0,0.8);
  }
  .musicList .aplayer-info .aplayer-lrc:before,
  .musicList .aplayer-info .aplayer-lrc:after{
    background:none;
  }
  .musicList .aplayer .aplayer-pic{
    float:none!important;
    margin:auto!important;
  }
  .musicList .aplayer-list-cur,
  .musicList .aplayer-list-index,
  .musicList .aplayer .aplayer-info .aplayer-music{
    display:none!important;
  }
  .musicList .aplayer-body{
    padding-top:6px!important;
  }
  .musicList .aplayer-list-title:after{
    content:"---";
  }
  .musicList .aplayer-list{
    display:block!important;
  }
  .musicList .aplayer-list,
  .musicList .aplayer-list ol{
    overflow-y: initial!important;
  }
  .musicList .aplayer-list ol li{
    background: none!important;
  }
</style>

<div class="musicList">
  {% meting "003ZBGUk04wNOP" "tencent" "song" "mutex:true" "preload:none"%}
  {% meting "001Y7zXa1p0ryF" "tencent" "song" "mutex:true" "preload:none"%}
</div>

***

### 网易云音乐

<div class="musicList">
  {% meting "1844441197" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "1901371647" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "34468416" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "65536" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "417859631" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "27955653" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "415792881" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "32507038" "netease" "song" "mutex:true" "preload:none"%}
  {% meting "1293886117" "netease" "song" "mutex:true" "preload:none"%}
</div>

<script>
  let preThis = undefined;
  $(function(){
    $(".aplayer").click(function(){
      if(preThis && preThis !== this){
        $(preThis).css("background","none")
        $(preThis).find(".aplayer-info").hide()
      }
      preThis = this
      if($(preThis).find(".aplayer-button").hasClass("aplayer-play")){
        $(preThis).css("backgroundColor","#e9e9e9")
      }else{
        $(preThis).find(".aplayer-info").show()
        $(preThis).css("backgroundColor","#a0d1ef")
      }
    })
  })
</script>