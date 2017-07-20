	/* ֪ʶ�㣺        */
	/*       this�÷� */
	/*       DOM�¼� */
	/*       ��ʱ�� */
window.onload = function () {
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var timer;
	function animate(offset) {
		//��ȡ����style.left���������߻�ȡ���룬���Ե�һ��ͼ��style.left��Ϊ��ֵ��
		//��style.left��ȡ�����ַ�������Ҫ��parseInt()ȡ��ת��Ϊ���֡�
		//var left=
		var left=document.defaultView.getComputedStyle(list,null).left;
		var newLeft = parseInt(left) + offset;
		list.style.left = newLeft + 'px';
		//���޹����ж�
		if (newLeft > 0) {
			list.style.left = -3500 + 'px';
		}
		if (newLeft < -3500) {
			list.style.left = 0 + 'px';
		}
	}


	function play() {
		//�ظ�ִ�еĶ�ʱ��
		timer = setInterval(function () {
			next.onclick();
		}, 2000)
	}

	function stop() {
		clearInterval(timer);
	}


	function buttonsShow() {
		//��֮ǰ��СԲ�����ʽ���
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == "on") {
				buttons[i].className = "";
			}
		}
		//�����0��ʼ����index��Ҫ-1
		buttons[index - 1].className = "on";
	}


	prev.onclick = function () {
		index -= 1;
		if (index < 1) {
			index = 6
		}
		buttonsShow();
		animate(700);
	};

	next.onclick = function () {
		//�����ϱ߶�ʱ�������ã�index��һֱ������ȥ������ֻ��5��СԲ�㣬������Ҫ�����ж�
		index += 1;
		if (index > 6) {
			index = 1
		}
		animate(-700);
		buttonsShow();
	};

	for (var i = 0; i < buttons.length; i++) {
		(function (i) {
			buttons[i].onclick = function () {
				/*  ����������ƶ���СԲ���λ�ã���this��index�󶨵�����buttons[i]�ϣ�ȥ�ȸ�this���÷�  */
				/*  ���������index���Զ������ԣ���Ҫ�õ�getAttribute()���DOM2��������ȥ��ȡ�Զ���index������*/
				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 700 * (index - clickIndex); //���index�ǵ�ǰͼƬͣ��ʱ��index
				animate(offset);
				index = clickIndex; //�����������λ�ã�����СԲ���������ʾ
				buttonsShow();
			}
		})(i)
	}

	container.onmouseover = stop;
	container.onmouseout = play;
	play();

}