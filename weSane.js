let titleData = {
  CN: '花花僵尸', //中文
  CHT: '花花僵屍', //繁体
  EN: 'Flowers vs Zombies', //英文
}
window.titleData = titleData;
let loadProgre; //假的游戏加载进度
let loadText; //加载load 文本
let loadImg; //loading gif 图片
let bgColor; //背景图片
var adBreak; //谷歌广告对象
initWeSane();
/** 初始化相关内容 */
function initWeSane() {
  languageTitle();
  loadText = newHtmlText('loadingText', 'width:100%;text-align:center;position:absolute;top:60%;z-index:99;font-size:25px;color:#f99f0a');
  loadImg = newHtmlImg('loadingImg', 'top:50%;align:center;width:100%;position:absolute;z-index:10;', 'res/loading.gif', 50, 50);
  bgColor = newHtmlImg('bgColorImg', 'align:center;width:100%;height:100%;position:absolute;', 'res/singleColor.png', 5000, 5000);
  loadProgre = 0;
  updateLoadText(0.02);
  initGooleAds();
  /** 隐藏 cocos自带的Logo 和 进度条 */
  var splash = document.getElementById('splash');
  var progressBar = splash.querySelector('.progress-bar span');
  splash.style.display = 'block'
  progressBar.style.display = 'block'
}/** 修改标题 */

function languageTitle() {
  if (window.navigator.language == 'zh-CN' || window.navigator.language == 'zh-cn') {
    document.title = titleData.CN;
  } else if (window.navigator.language == 'zh-TW' || window.navigator.language == 'zh-HK') {
    document.title = titleData.CHT;
  } else {
    document.title = titleData.EN;
  }
}/** 进入场景 */

function loadInScene() {
  loadImg.remove();
  bgColor.remove();
  loadText.remove();
};
/** 初始化 谷歌广告 */
function initGooleAds() {
  adBreak = adConfig = function (o) {
  }
  adBreak({
    preloadAdBreaks: 'on',
    onReady: () =>{
      console.log('onReady');
    },
  });
}/** 刷新加载进度条  假的  t:多长时间进度+1 */

function updateLoadText(t) {
  setTimeout(() =>{
    loadProgre++;
    loadText.innerHTML = 'loading......' + parseInt(loadProgre) + '%';
    if (loadProgre >= 100) {
      return;
    }
    switch (loadProgre) {
      case 20:
        updateLoadText(0.05);
        break;
      case 40:
        updateLoadText(0.1);
        break;
      case 60:
        updateLoadText(0.2);
        break;
      case 80:
        updateLoadText(0.5);
        break;
      case 96:
        updateLoadText(5);
        break;
      case 98:
        updateLoadText(10);
        break;
      case 99:
        updateLoadText(1000);
        break;
      default:
        updateLoadText(t);
        break;
    }
  }, t * 1000);
}/** 新建一个html  文本 */

function newHtmlText(id = '', style = '') {
  var loadingText = document.createElement('div');
  loadingText.style = style;
  loadingText.id = id;
  loadingText.type = 'text';
  document.body.appendChild(loadingText);
  return loadingText;
}/** 新建一个html 图像 */

function newHtmlImg(id = '', style = '', url = '', width = 100, height = 100) {
  var imgdiv = document.createElement('div');
  imgdiv.style = style;
  imgdiv.id = id;
  var img = document.createElement('img');
  img.src = url
  img.height = height;
  img.width = width;
  imgdiv.appendChild(img);
  document.body.appendChild(imgdiv);
  return imgdiv;
}
