function AutoHide_div(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	this.div = $(el);
	this.se_span = this.div.children('span');
	this.se_fixedIcon = this.se_span.children('.fixed-icon');
	this.title_height = 24; // 标题的高度
	this.is_show = false;
	this.body_color=body_color; // 容器背景颜色
	this.head_color=head_color; // 标题背景颜色
	this.fixedIcon_bgcolor=fixedIcon_bgcolor;// fixedIcon未选中背景颜色
	this.active_fixedIcon_bgcolor=active_fixedIcon_bgcolor; // fixedIcon选中时的背景颜色
	this.view_line_height = view_line_height; // 留出空白的长度
}
AutoHide_div.prototype.get_div_length = function()
{
	return this.div.height();
}
AutoHide_div.prototype.get_div_width = function()
{
	return this.div.width();
}
AutoHide_div.prototype.div_show = function(is_animate)
{
	this.is_show = true;
	this.i_show();
	this.status(is_animate);
}
AutoHide_div.prototype.div_hide = function(is_animate)
{
	this.is_show = false;
	this.i_hide();
	this.status(is_animate);
}
AutoHide_div.prototype.i_show = function()
{
	$(this.se_fixedIcon).show();
}
AutoHide_div.prototype.i_hide = function()
{
	$(this.se_fixedIcon).hide();
}
AutoHide_div.prototype.get_show_css = function()
{
	return {};
}
AutoHide_div.prototype.get_hide_css = function()
{
	return {};
}
AutoHide_div.prototype.flash = function()
{
	this.status(false);
}
AutoHide_div.prototype.init = function()
{
	var o_ob = this;
	if(this.body_color)
	{
		this.div.css('background',this.body_color);
	}
	if(this.head_color)
	{
		this.se_span.css('background',this.head_color);
	}
	this.div.addClass('div_hide');
	this.i_hide();
	this.flash();

	this.se_span.bind('mousemove', function()
	{
		o_ob.div_show(true);
	});

	this.set_event_leave();

	this.se_fixedIcon.bind('click', function()
	{
		o_ob.set_event_click();
	});

}

AutoHide_div.prototype.status = function(is_animate)
{
	var css_status = this.is_show ? this.get_show_css() : this.get_hide_css();

	if (is_animate)
	{
		this.div.stop().animate(css_status);
	} else
	{
		this.div.css(css_status);
	}
}

AutoHide_div.prototype.set_event_click = function()
{

	if ($(this.se_fixedIcon).hasClass('autoHide_title_bg'))
	{
		$(this.se_fixedIcon).removeClass('autoHide_title_bg');

		if(this.fixedIcon_bgcolor)
		{
			this.se_fixedIcon.css('background',fixedIcon_bgcolor);
		}else{
			this.se_fixedIcon.css('background','#FFFFFF');
		}
		this.set_event_leave();
	} else
	{
		$(this.se_fixedIcon).addClass('autoHide_title_bg');
		if(this.active_fixedIcon_bgcolor)
		{
			this.se_fixedIcon.css('background',this.active_fixedIcon_bgcolor);
		}else{
			this.se_fixedIcon.css('background','#1f897f');
		}
		this.div.unbind('mouseleave');
	}

}
AutoHide_div.prototype.set_event_leave = function()
{
	var o_ob = this;
	this.div.bind('mouseleave', function()
	{
		o_ob.div_hide(true);
	});
}

function AutoHide_div_cz(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	AutoHide_div.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_cz.prototype = new AutoHide_div();
AutoHide_div_cz.prototype.AutoHide_div_prototype = AutoHide_div_cz.prototype.constructor.prototype;
AutoHide_div_cz.prototype.constructor = AutoHide_div_cz;

AutoHide_div_cz.prototype.init = function()
{
	this.set_span_height();
	this.AutoHide_div_prototype.init.call(this);
	
}
AutoHide_div_cz.prototype.set_span_height = function()
{
	this.se_span.css('height', this.title_height);
}



function AutoHide_div_cz_up(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	AutoHide_div_cz.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_cz_up.prototype = new AutoHide_div_cz();
AutoHide_div_cz_up.prototype.AutoHide_div_cz_prototype = AutoHide_div_cz_up.prototype.constructor.prototype;
AutoHide_div_cz_up.prototype.constructor = AutoHide_div_cz_up;

AutoHide_div_cz_up.prototype.get_show_css = function()
{
	return {
		'top' : 0
	}
}

AutoHide_div_cz_up.prototype.get_line_length = function()
{
	return -this.get_div_length() + this.view_line_height;
}

function AutoHide_div_cz_up_left({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_cz_up.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_cz_up_left.prototype = new AutoHide_div_cz_up();
AutoHide_div_cz_up_left.prototype.AutoHide_div_cz_up_prototype = AutoHide_div_cz_up_left.prototype.constructor.prototype;
AutoHide_div_cz_up_left.prototype.constructor = AutoHide_div_cz_up_left;

AutoHide_div_cz_up_left.prototype.get_hide_css = function()
{
	return {
		"top" : this.get_line_length(),
		"left" : 0
	}
}


function AutoHide_div_cz_up_right({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_cz_up.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_cz_up_right.prototype = new AutoHide_div_cz_up();
AutoHide_div_cz_up_right.prototype.AutoHide_div_cz_up_prototype = AutoHide_div_cz_up_right.prototype.constructor.prototype;
AutoHide_div_cz_up_right.prototype.constructor = AutoHide_div_cz_up_right;



AutoHide_div_cz_up_right.prototype.get_hide_css = function()
{
	return {
		"top" : this.get_line_length(),
		"right" : 0
	}
}


function AutoHide_div_cz_down(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	AutoHide_div_cz.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_cz_down.prototype = new AutoHide_div_cz();
AutoHide_div_cz_down.prototype.AutoHide_div_cz_prototype = AutoHide_div_cz_down.prototype.constructor.prototype;
AutoHide_div_cz_down.prototype.constructor = AutoHide_div_cz_down;

AutoHide_div_cz_down.prototype.get_show_css = function()
{
	return {
		'bottom' : 0
	}
}

AutoHide_div_cz_down.prototype.get_line_length = function()
{
	return -this.get_div_length() + this.view_line_height;
}

function AutoHide_div_cz_down_left({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_cz_down.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}
AutoHide_div_cz_down_left.prototype = new AutoHide_div_cz_down();
AutoHide_div_cz_down_left.prototype.AutoHide_div_cz_down_prototype = AutoHide_div_cz_down_left.prototype.constructor.prototype;
AutoHide_div_cz_down_left.prototype.constructor = AutoHide_div_cz_down_left;



AutoHide_div_cz_down_left.prototype.get_hide_css = function()
{
	return {
		"bottom" : this.get_line_length(),
		 "left":0
	}
}


function AutoHide_div_cz_down_right({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}
AutoHide_div_cz_down_right.prototype = new AutoHide_div_cz_down();
AutoHide_div_cz_down_right.prototype.AutoHide_div_cz_down_prototype = AutoHide_div_cz_down_right.prototype.constructor.prototype;
AutoHide_div_cz_down_right.prototype.constructor = AutoHide_div_cz_down_right;



AutoHide_div_cz_down_right.prototype.get_hide_css = function()
{
	return {
		"bottom" : this.get_line_length(),
		"right" : 0
	}

}




function AutoHide_div_sp(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	AutoHide_div.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
	this.se_content_div = this.div.children('div');
}

AutoHide_div_sp.prototype = new AutoHide_div();
AutoHide_div_sp.prototype.AutoHide_div_prototype = AutoHide_div_sp.prototype.constructor.prototype;
AutoHide_div_sp.prototype.constructor = AutoHide_div_sp;

AutoHide_div_sp.prototype.init = function()
{
	this.AutoHide_div_prototype.init.call(this);
}

AutoHide_div_sp.prototype.get_line_length = function()
{
	return -this.get_div_width() + this.view_line_height;
}

function AutoHide_div_sp_left(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	AutoHide_div_sp.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_sp_left.prototype = new AutoHide_div_sp();
AutoHide_div_sp_left.prototype.AutoHide_div_sp_prototype = AutoHide_div_sp_left.prototype.constructor.prototype;
AutoHide_div_sp_left.prototype.constructor = AutoHide_div_sp_left;


AutoHide_div_sp_left.prototype.set_div_left = function()
{
	return {
		'left' : 0
	}
}

AutoHide_div_sp_left.prototype.set_div_class = function()
{
	this.se_content_div = this.div.children('div');
	if (!this.se_content_div.hasClass('sp_left_table'))
	{
		this.se_content_div.addClass('sp_left_table');
	}
	if (!this.se_span.hasClass('sp_left_title'))
	{
		this.se_span.addClass('sp_left_title');
	}
}

function AutoHide_div_sp_left_down({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_sp_left.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_sp_left_down.prototype = new AutoHide_div_sp_left();
AutoHide_div_sp_left_down.prototype.AutoHide_div_sp_down_prototype = AutoHide_div_sp_left_down.prototype.constructor.prototype;
AutoHide_div_sp_left_down.prototype.constructor = AutoHide_div_sp_left_down;


AutoHide_div_sp_left_down.prototype.get_hide_css = function()
{
	this.set_div_class();
	return {
		"bottom" : 0,
		"left" : this.get_line_length()
	}
}
AutoHide_div_sp_left_down.prototype.get_show_css = function()
{
	this.set_div_class();
	return this.set_div_left();
}

function AutoHide_div_sp_left_up({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_sp_left.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_sp_left_up.prototype = new AutoHide_div_sp_left();
AutoHide_div_sp_left_up.prototype.AutoHide_div_sp_down_prototype = AutoHide_div_sp_left_up.prototype.constructor.prototype;
AutoHide_div_sp_left_up.prototype.constructor = AutoHide_div_sp_left_up;


AutoHide_div_sp_left_up.prototype.get_hide_css = function()
{
	this.set_div_class();
	return {
		"top" : 0,
		"left" : this.get_line_length()
	}
}
AutoHide_div_sp_left_up.prototype.get_show_css = function()
{
	this.set_div_class();
	return this.set_div_left();
}

function AutoHide_div_sp_right(el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor)
{
	AutoHide_div_sp.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_sp_right.prototype = new AutoHide_div_sp();
AutoHide_div_sp_right.prototype.AutoHide_div_sp_prototype = AutoHide_div_sp_right.prototype.constructor.prototype;
AutoHide_div_sp_right.prototype.constructor = AutoHide_div_sp_right;


AutoHide_div_sp_right.prototype.set_div_right = function()
{
	return {
		'right' : 0
	}
}

AutoHide_div_sp_right.prototype.set_div_class = function()
{
	this.se_content_div = this.div.children('div');
	if (!this.se_content_div.hasClass('sp_right_table'))
	{
		this.se_content_div.addClass('sp_right_table');
	}
	if (!this.se_span.hasClass('sp_right_title'))
	{
		this.se_span.addClass('sp_right_title');
	}
}

function AutoHide_div_sp_right_down({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_sp_left.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_sp_right_down.prototype = new AutoHide_div_sp_right();
AutoHide_div_sp_right_down.prototype.AutoHide_div_sp_down_prototype = AutoHide_div_sp_right_down.prototype.constructor.prototype;
AutoHide_div_sp_right_down.prototype.constructor = AutoHide_div_sp_right_down;


AutoHide_div_sp_right_down.prototype.get_hide_css = function()
{
	this.set_div_class();
	return {
		"bottom" : 0,
		"right" : this.get_line_length()
	}
}
AutoHide_div_sp_right_down.prototype.get_show_css = function()
{
	this.set_div_class();
	return this.set_div_right();
}

function AutoHide_div_sp_right_up({el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor})
{
	AutoHide_div_sp_left.call(this, el,view_line_height,body_color,head_color,fixedIcon_bgcolor,active_fixedIcon_bgcolor);
}

AutoHide_div_sp_right_up.prototype = new AutoHide_div_sp_right();
AutoHide_div_sp_right_up.prototype.AutoHide_div_sp_down_prototype = AutoHide_div_sp_right_up.prototype.constructor.prototype;
AutoHide_div_sp_right_up.prototype.constructor = AutoHide_div_sp_right_up;


AutoHide_div_sp_right_up.prototype.get_hide_css = function()
{
	this.set_div_class();
	return {
		"top" : 0,
		"right" : this.get_line_length()
	}
}
AutoHide_div_sp_right_up.prototype.get_show_css = function()
{
	this.set_div_class();
	return this.set_div_right();
}