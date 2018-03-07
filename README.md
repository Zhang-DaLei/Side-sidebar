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
    <i class="fixed-icon" title="固定表格"></i> // 固定侧边栏按钮 （按钮样式自行添加）
  </span>
  <div>这里可以是div，ul，table等自定义内容</div> //自定义内容
</div>
注：此布局适用于（AutoHide_div_cz_down_left，AutoHide_div_cz_down_right，AutoHide_div_sp_left_down，AutoHide_div_sp_right_down）

<div id="autoHide_div">  // 外部容器      
  <div>这里可以是div，ul，table等自定义内容</div> //自定义内容
  <span class="title">Hello wrold // 标题
    <i class="fixed-icon" title="固定表格"></i> // 固定侧边栏按钮 （按钮样式自行添加）
  </span>
</div>
注：此布局适用于（AutoHide_div_cz_up_left，AutoHide_div_cz_up_right，AutoHide_div_sp_left_up，AutoHide_div_sp_right_up）

``` 

### 初始化

``` bash
var auto = new AutoHide_div_cz_down_left({
  el: '#autoHide_div', // 外部容器
  view_line_height: 8, // 显示白边的高度或长度
  body_color：'#FFF', // 容器背景颜色，默认白色
  head_color: '#FFF', // 标题背景颜色，默认白色
  fixedIcon_bgcolor： '#FFF', // 固定按钮的背景色，默认是'#FFF'
  active_fixedIcon_bgcolor: '#FFF' //选中固定按钮的背景色，默认'#1f897f'
});
auto.init();

```

## 文档说明

## 对象说明

new AutoHide_div_cz_down_left //垂直方向-左下角

![image](https://github.com/Zhang-DaLei/Side-sidebar/blob/master/side-sidebar/img/AutoHide_div_cz_down_left.gif)
