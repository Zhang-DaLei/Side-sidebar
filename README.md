# 前言

>该插件是我在公司项目中开发使用的，本只涉及一种交互显示方式，项目开发完毕后，我又将改插件完善成多应用显示方式，本插件采用OOP编写完成的。
还有很多待完善的地方和不足，请多多指教！

## 代码使用

### 引用
``` bash
<link rel="stylesheet" type="text/css" href="./side-sidebar.css">
...
<script src="./style/jquery.min.js"></script>
<script src="./style/div_hide.js"></script>

```

### 容器

``` bash
<div id="autoHide_div">  // 外部容器      
  <span class="title">Hello wrold // 标题
    <i class="fixed-icon iconfont icon-pin" title="固定表格"></i> // 固定侧边栏按钮
  </span>
  <div>这里可以是div，ul，table等自定义内容</div> //自定义内容
</div>

``` 

### 初始化

``` bash
var auto = new AutoHide_div_cz_down_left({
  el: '#autoHide_div',
  view_line_height: 8,
  ...
});
auto.init();

```

## 文档说明

## 对象说明

``` bash
new AutoHide_div_cz_down_left //垂直方向-左下角
