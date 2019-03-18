(function() {
    //获取元素
    var lis = document.getElementById("firstSonglist_hd").getElementsByTagName("li");
    var uls = document.getElementById("firstSonglist_bd").getElementsByTagName("ul");
   
    //批量添加事件
    for (var i = 0; i < lis.length; i++) {
        //保存序号
        lis[i].index = i;
        //添加事件
        lis[i].onmouseenter = function () {
            //排他
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = "";
            }
            //对应
            this.className = "cur";
            //排他
            for (var k = 0; k < uls.length; k++) {
                uls[k].className = "";
            }
            //对应
            uls[this.index].className = "cur";
        }
    }
    var h_lis = document.getElementById("hotSingList_hd").getElementsByTagName("li");
    var divs = document.getElementById("hotSingList_bd").getElementsByTagName("section");
    //批量添加事件
    for (var i = 0; i < h_lis.length; i++) {
        //保存序号
        h_lis[i].index = i;
        //添加事件
        h_lis[i].onmouseenter = function () {
            //排他
            for (var j = 0; j < h_lis.length; j++) {
                h_lis[j].className = "";
            }
            //对应
            this.className = "cur";
            //排他
            for (var k = 0; k < divs.length; k++) {
                divs[k].className = "";
            }
            //对应
            divs[this.index].className = "cur";
        }
    }

})();