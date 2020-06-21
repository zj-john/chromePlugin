function importMyBlog(info, tab) {
    console.log(info, tab);
//   var reqUrl = "请求地址";
//   var pageUrl = tab.url;
//   if (pageUrl.indexOf("https://blog.csdn.net/") !== 0) {
//     alert("仅限收藏CSDN的文章");
//     return;
//   }
//   var reqData = {};
//   reqData.url = pageUrl;
//   $.ajax({
//     url: reqUrl,
//     type: "post",
//     dataType: "jsonp",
//     data: reqData,
//     jsonpCallback: "jsonpcallback",
//     success: function (data) {
//       var res = JSON.parse(JSON.stringify(data));
//       if (res.success) {
//         alert("保存成功");
//       } else {
//         alert(res.msg);
//       }
//     },
//     error: function (data) {
//       alert("error: 估计是没登录");
//     },
//   });
}
chrome.contextMenus.create({
  title: "使用学诚搜索",
  contexts: ["page"], //page表示在整个页面右键都会有自定义的菜单
  onclick: importMyBlog,
});
