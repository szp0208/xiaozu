
var judgeBnt = [];	// 不能重复点击
// 材料出现
var spLen = $('.play span').length;	// 盒子个数
// 材料种类
var total = 6;
// 计时器
var timer = null;
var timers = null;
// 传递数据
var data = [];
// 皮肤
var skin = 0;
// 点击切换皮肤
$('.msk button').on('click', function() {
	if ($(this).index() == 1) {
		// 皮肤
		skin = 0;
		$('.msk').fadeOut();
		init();
	} else {
		skin = 1;
		$('.msk').fadeOut();
		init();
	}
})
// 根据皮肤初始化
function init() {
		$('.pic-other div').eq(0).css({
			background : "url('../images/bad.png')",
			'background-size' : '100% 100%'
		})
		$('.pic-other div').eq(1).css({
			background : "url('../images/good.png')",
			'background-size' : '100% 100%'
		})
		$('.pic-other div').eq(2).css({
			background : "url('../images/none.png')",
			'background-size' : '100% 100%'
		})
	if (skin == 0) {
		$('.material-fir img').eq(0)[0].src = "../images/bread.png";
		$('.material-fir img').eq(1)[0].src = "../images/cream.png";
		$('.material-fir img').eq(2)[0].src = "../images/candle.png";
		$('.material-fir img').eq(3)[0].src = "../images/chocolate.png";
		$('.material-fir img').eq(4)[0].src = "../images/cherry.png";
		$('.material-fir img').eq(5)[0].src = "../images/milk.png";
	} else {
		$('.material-fir img').eq(0)[0].src = "../images/111.png";
		$('.material-fir img').eq(1)[0].src = "../images/222.png";
		$('.material-fir img').eq(2)[0].src = "../images/shears.png";
		$('.material-fir img').eq(3)[0].src = "../images/screw2.png";
		$('.material-fir img').eq(4)[0].src = "../images/screw.png";
		$('.material-fir img').eq(5)[0].src = "../images/hammer.png";
	}
}

function show(num) {
	$('.play span').eq(num).css({bottom : '200px'});
	select(num);
	$('.play span').eq(num).css({
		'background-size' : '100% 100%'
	})
	var num = num;
	$('.play span').eq(num)[0].show = 1;
	$('.play span').eq(num).stop().animate({
		bottom : '0'
	}, 2500, function() {
		setTimeout(function() {
			if ($('.play span').eq(num)[0].show == 1) {
				hide(num);
			};
		}, 1500)
	})
}
// 材料消失后
function hide(num) {
	$('.play span').eq(num).stop().animate({
		bottom : '-80px'
	}, 1000, function() {
		$('.play span').eq(num)[0].show = 0;
	})
}
function rand() {
	var randNum = Math.floor(Math.random() * (spLen - 1) + 1);
	if ($('.play span').eq(randNum)[0].show != 1) {
		show(randNum);
	};
}
// 随机选择属性
function select(num) {
	var rands = total + 3;
	var random = Math.floor(Math.random() * rands);
	if (random == 0) {
		$('.play span').eq(num).css({background : "url('../images/bad.png')"});
		$('.play span').eq(num)[0].name = 0;
	} else if (random == 1) {
		$('.play span').eq(num).css({background : "url('../images/good.png')"});
		$('.play span').eq(num)[0].name = 1;
	} else if (random == 3) {
		if (skin == 0) {	
			$('.play span').eq(num).css({
				background : "url('../images/bread.png')"});
		} else {
			$('.play span').eq(num).css({
				background : "url('../images/111.png')"});
		};
		$('.play span').eq(num)[0].name = 2;		
	} else if (random == 4) {
		if (skin == 0) {	
			$('.play span').eq(num).css({
				background : "url('../images/cream.png')"});
		} else {
			$('.play span').eq(num).css({
				background : "url('../images/222.png')"});
		};
		$('.play span').eq(num)[0].name = 3;		
	} else if (random == 5) {
		if (skin == 0) {	
			$('.play span').eq(num).css({
				background : "url('../images/candle.png')"});
		} else {
			$('.play span').eq(num).css({
				background : "url('../images/shears.png')"});
		};
		$('.play span').eq(num)[0].name = 4;		
	} else if (random == 6) {
		if (skin == 0) {	
			$('.play span').eq(num).css({
				background : "url('../images/chocolate.png')"});
		} else {
			$('.play span').eq(num).css({
				background : "url('../images/screw2.png')"});
		};
		$('.play span').eq(num)[0].name = 5;		
	} else if (random == 7) {
		if (skin == 0) {	
			$('.play span').eq(num).css({
				background : "url('../images/cherry.png')"});
		} else {
			$('.play span').eq(num).css({
				background : "url('../images/screw.png')"});
		};
		$('.play span').eq(num)[0].name = 6;		
	} else if (random == 8) {
		if (skin == 0) {	
			$('.play span').eq(num).css({
				background : "url('../images/milk.png')"});
		} else {
			$('.play span').eq(num).css({
				background : "url('../images/hammer.png')"});
		};
		$('.play span').eq(num)[0].name = 7;		
	} else if (random == 2) {
		$('.play span').eq(num).css({
				background : "url('../images/none.png')"});
		$('.play span').eq(num)[0].name = 8;		
	}
}
// 暂停功能&游戏开始功能
var start = 0;
var judgeS = true;
$('.sta span').on('click', function(e) {
	if ($(this).index() == 2) {
		if (start != 0) {
			if (judgeS) {
				clearInterval(timer);
				clearInterval(timers);
				clickOff();
				judgeS = false;
			} else {
				timer = setInterval(rand, 60);
				gameStart();
				clickOn();
				judgeS = true
			}
		};
	};
	if ($(this).index() == 3) {
		if (start ==  0) {
			gameStart();
			timer = setInterval(rand, 60);
			clickOn();
		};
		start++;
	};
	$('.sta span').css({background : '#fff'})
	$(this).css({background : '#eee'})
})
// 开始按钮——点击实现材料获取
function clickOn() {
	var spanNum = $('.play span');
	for (var i = 0; i < $('.play span').length; i++) {
		judgeBnt[i] = 0;
		spanNum[i].onclick = function(num) {
			return function() {
				judgeBnt[num] ++;
				if (judgeBnt[num] == 1) {
					if ($('.play span').eq(num)[0].name == 0) {
						for (var i = 0; i < $('.material-fir em').length; i++) {
							var htmlNUm = Number($('.material-fir em').eq(i).html())
							if (htmlNUm > 0) {
								$('.material-fir em').eq(i)[0].innerHTML -= 1
							};
						};
					} else if ($('.play span').eq(num)[0].name == 1) {
						for (var i = 0; i < $('.material-fir em').length; i++) {
							$('.material-fir em').eq(i)[0].innerHTML = Number($('.material-fir em').eq(i).html()) + 1;
						};
					} else if ($('.play span').eq(num)[0].name == 2) {
						$('.material-fir em').eq(0)[0].innerHTML = Number($('.material-fir em').eq(0).html()) + 1;

					} else if ($('.play span').eq(num)[0].name == 3) {
						$('.material-fir em').eq(1)[0].innerHTML = Number($('.material-fir em').eq(1).html()) + 1;

					} else if ($('.play span').eq(num)[0].name == 4) {
						$('.material-fir em').eq(2)[0].innerHTML = Number($('.material-fir em').eq(2).html()) + 1;

					} else if ($('.play span').eq(num)[0].name == 5) {
						$('.material-fir em').eq(3)[0].innerHTML = Number($('.material-fir em').eq(3).html()) + 1;

					} else if ($('.play span').eq(num)[0].name == 6) {
						$('.material-fir em').eq(4)[0].innerHTML = Number($('.material-fir em').eq(4).html()) + 1;

					} else if ($('.play span').eq(num)[0].name == 7) {
						$('.material-fir em').eq(5)[0].innerHTML = Number($('.material-fir em').eq(5).html()) + 1;

					} else if ($('.play span').eq(num)[0].name == 8) {

					}
				};
				$('.play span').eq(num).stop().animate({bottom : '-80px'}, 100, function() {
					$('.play span').eq(num)[0].show = 0;
					judgeBnt[num] = 0;
				})
			}
		}(i);
	};
}

// 暂停不执行点击效果
function clickOff() {
	for (var i = 0; i < $('.play span').length; i++) {
		$('.play span').eq(i)[0].onclick = null;
	}
}

// 点击计分
document.onclick = function(e) {
	$('.state').css({
		display : 'block',
		left : e.clientX + 30 + 'px',
		top : e.clientY - 30 + 'px'
	})
}

// 倒计时
function gameStart() {
	scoreTime = $('.sta em').html();
	timers = setInterval(function() {
		scoreTime--;
		$('.sta em').html(scoreTime);
		if (scoreTime == 0) {
			clearInterval(timer);
			clearInterval(timers);
			$('.mskmin').fadeIn();
			scoreTime = 60;
		};
	}, 1000)
}

// 进入下一步制作
$('.mskmin button').on('click', function() {
	if ($(this).index() == 1) {
		$('.mskmin').fadeOut();
		$('.sta em').html('60');
		start = 0;
	} else {
		$('.wrap-fir').fadeOut();
		$('.wrap').fadeIn();
		for (var i = 0; i < 6; i++) {
			data[i] = [];
			data[i][0] = i;
			data[i][1] = $('.material-fir em').eq(i)[0].innerHTML;
		};
		wrapTwo();
	}
})
